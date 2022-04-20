
namespace CustomerSupport.BusinessObjects.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Reflection;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.SmsRepository;
    using MyRow = Entities.SmsRow;
    using CustomerSupport.Processes;
    using System;
    using System.Collections.Generic;
    using SMSLive247Api;
    using CustomerSupport.BusinessObjects.Entities;


    [RoutePrefix("Services/BusinessObjects/Sms"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize(BusinessObjects.PermissionKeys.Sms.Read)]
    public class SmsController : ServiceEndpoint
    {

        [HttpPost]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        List<Entities.TransactionRow> trxnList;
        public ServiceResponse TicketsSms(IUnitOfWork uow, SmsRequest request)
        {
            string message = "";
            //request.CheckNotNull();
            using (IDbConnection conn = SqlConnections.NewByKey("Default"))
            {

                conn.Open();

                List<int> ticketIdList = new List<int>();

                if (request.TicketIds != null)
                {
                    ticketIdList.AddRange<int>(request.TicketIds);
                }
                else
                    ticketIdList.Add(request.TicketId);


                List<TicketRow> ticketRowList = GetTicketsRows(conn, ticketIdList);

                HashSet<string> phoneNumberList = TicketBizPrcs.PhoneNumberList(ticketRowList);

                

                if (phoneNumberList != null && phoneNumberList.Count >= 1)
                {
                    if (!String.IsNullOrEmpty(request.PhoneNumbers))
                        phoneNumberList.AddRange(request.PhoneNumbers.Split(new string[]{","}, StringSplitOptions.RemoveEmptyEntries));

                    ResponseInfo response = SendSMS(request.Message, phoneNumberList.ToArray());

                    //ResponseInfo response = null;

                    if (response != null)
                        if (response.ErrorCode == 0)
                        {

                            message = "SMS sent successfully";


                            int smsId = SmsBizPrcs.SaveSms(conn, request.LocationId, request.Message);


                            if (request.TicketIds != null)
                            {
                                SmsBizPrcs.SaveTicketSmsList(conn, request.LocationId, smsId, request.TicketIds, ticketRowList, request.Message);
                                List<CustomerRow> customerList = CustomerBizPrcs.GetCustomerListFromTicketIdList(conn, request.TicketIds);
                                SmsBizPrcs.SaveCustomerSmsList(conn, request.LocationId, smsId, customerList);
                            }
                            else
                            {
                                SmsBizPrcs.SaveTicketSms(conn, request.LocationId, smsId, request.TicketId, ticketRowList, request.Message);
                                List<CustomerRow> customerList = CustomerBizPrcs.GetCustomerListFromTicketIdList(conn, new Int32[]{request.TicketId}.ToList());
                                SmsBizPrcs.SaveCustomerSmsList(conn, request.LocationId, smsId, customerList);
                            }



                            /*
                            if (request.TicketIds != null)
                                trxnList = TicketBizPrcs.GetTransactionListInTicket(conn, request.TicketIds);
                            else
                            {
                                List<int> listTemp = new List<int>();
                                listTemp.Add(request.TicketId);
                                trxnList = TicketBizPrcs.GetTransactionListInTicket(conn, listTemp);
                            }





                            if (trxnList != null && trxnList.Count >= 1)
                            {
                                SmsBizPrcs.SaveTransactionSmsList(conn, request.LocationId, smsId, TransactionBizPrcs.GetTransactionIds(trxnList), request.Message);
                            }
                            */

                        }
                }
            }
            return new SmsResponse()
            {

                LocationId = request.LocationId,
                Message = message,
                TicketIds = request.TicketIds

            };

        }



        private System.Collections.Generic.List<TicketRow> GetTicketsRows(IDbConnection conn, List<int> ticketIdList)
        {

            List<TicketRow> ticketList = conn.List<TicketRow>(new Criteria("TicketId").In(ticketIdList));

            //conn.List<TicketRow>(x => { x.Where(new Criteria(ticket.TicketId).In(ticketIdList)); });

            SqlQuery query = new SqlQuery();
            var ticketFlds = TicketRow.Fields.As("ticketRow");
            var ticket = TicketRow.Fields;

            query
                .From(ticket)
                .Select(ticket.CustomerId)
                .Select(ticket.PhoneNumber)
                .Select(ticket.TicketId)
                .Where(new Criteria("TicketId").In(ticketIdList))
                .GroupBy(ticket.PhoneNumber, ticket.CustomerId, ticket.TicketId);
          
            
            //List<TicketRow> ticketRowList = new List<TicketRow>();
              
            return conn.Query<TicketRow>(query).ToList();
        }



        public ServiceResponse CustomersSms(IUnitOfWork uow, SmsRequest request)
        {


            string message = "";

            using (IDbConnection conn = SqlConnections.NewByKey("Default"))
            {

                conn.Open();


                List<int> customerIdList = new List<int>();

                if (request.CustomerIds != null)
                {
                    customerIdList.AddRange<int>(request.CustomerIds);
                }
                else
                    customerIdList.Add(request.CustomerId);

                List<CustomerRow> customers = CustomerBizPrcs.GetCustomerList(conn, customerIdList);

                //string phoneNumbers = CustomerBizPrcs.StringifyPhoneNumberSeperatedByCommas(customers);

                HashSet<string> phoneNumberList = CustomerBizPrcs.PhoneNumberList(customers);


                if (phoneNumberList != null && phoneNumberList.Count >= 1)
                {
                    if (!String.IsNullOrEmpty(request.PhoneNumbers))
                        phoneNumberList.AddRange(request.PhoneNumbers.Split(new string[] { "," }, StringSplitOptions.RemoveEmptyEntries));

                    //Sends the SMS
                    ResponseInfo response = SendSMS(request.Message, phoneNumberList.ToArray());

                    if (response.ErrorCode == 0)
                    {

                        message = "SMS sent successfully";

                        int smsId = SmsBizPrcs.SaveSms(conn, request.LocationId, request.Message);

                        if (request.CustomerIds != null)
                        {
                            SmsBizPrcs.SaveCustomerSmsList(conn, request.LocationId, smsId, customers);
                        }
                        else
                        {
                            SmsBizPrcs.SaveCustomerSms(conn, request.LocationId, smsId, request.CustomerId, customers, request.Message);
                        }
                    }
                    else
                        message = response.ErrorMessage;
                }
                else
                    message = "No customer(s) has a phone-number";


            }

            return new SmsResponse()
            {

                LocationId = request.LocationId,
                Message = message,
                TicketIds = request.TicketIds
            };

        }


        public ResponseInfo SendSMS(string message, string[] phoneNumbers)
        {
            string site_token = "02a66b0f-85ed-40e6-806e-cc669e821017";
            SMSSiteAdminClient SMS = new SMSLive247Api.SMSSiteAdminClient();
            MessageInfo NewSMS = new SMSLive247Api.MessageInfo();





            NewSMS.CallBack = "BreemEx";
            NewSMS.Destination = new SMSLive247Api.ArrayOfString();
            NewSMS.Destination.AddRange(phoneNumbers);
            
            //NewSMS.Destination.Add("08057045634");
            NewSMS.DeliveryEmail = "11/24/2010 11:35:00 AM";
            NewSMS.Message = message;
            NewSMS.MessageType = SMSLive247Api.SMSTypeEnum.TEXT;

            SMSLive247Api.ResponseInfo response = new SMSLive247Api.ResponseInfo();

            response = SMS.SendSMS(site_token, NewSMS);

            return response;

        }



    }
}
