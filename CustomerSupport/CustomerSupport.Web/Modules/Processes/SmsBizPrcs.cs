using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Data;
using System.Data;
using CustomerSupport.BusinessObjects.Entities;

namespace CustomerSupport.Processes
{
    public class SmsBizPrcs
    {
        public static int SaveSms(IDbConnection conn, int locationId, string message)
        {

                int? smsId = (int)conn.InsertAndGetID<SmsRow>(

                new SmsRow()
                {
                    Date = DateTime.Now,
                    Message = message
                }

                );


            conn.InsertAndGetID<SmsLocationRow>(

                    new SmsLocationRow()
                    {
                        SmsId = smsId,
                        LocationId = locationId
                    }

                );

            return smsId.Value;

        }


        public static void SaveCustomerSms(IDbConnection conn, int locationId, int smsId, int customerId, List<CustomerRow> customers, string message)
        {

            var flds = CustomerSmsRow.Fields;

            new SqlInsert(flds.TableName)
            .Set(flds.CustomerId, customerId)
            .Set(flds.SmsId, smsId)
            .Set(flds.Sent, customers.Find(x => !String.IsNullOrEmpty(x.PhoneNumber)) != null ? true : false)
            .Execute(conn);

        }

    
        public static void SaveCustomerSmsList(IDbConnection conn, int locationId, int smsId, List<CustomerRow> customers)
        {

            var flds = CustomerSmsRow.Fields;


            foreach (CustomerRow customer in customers)
            {
                new SqlInsert(flds.TableName)
                .Set(flds.CustomerId, customer.CustomerId)
                .Set(flds.SmsId, smsId)
                .Set(flds.Sent, customers.Find(x => (!String.IsNullOrEmpty(customer.PhoneNumber) && x.CustomerId == customer.CustomerId)) != null ? true : false)
                .Execute(conn);
            }


        }


        public static void SaveTicketSms(IDbConnection conn, int locationId, int smsId, int ticketId, List<TicketRow> ticketRows, string message)
        {


            var flds = TicketSmsRow.Fields;
            if (ticketRows != null)
            {
                TicketRow ticket = ticketRows[0];

                    new SqlInsert(flds.TableName)
                    .Set(flds.TicketId, ticketId)
                    .Set(flds.SmsId, smsId)
                        .Set(flds.Sent, ticketRows.Find(x => (!String.IsNullOrEmpty(ticket.PhoneNumber) && x.TicketId == ticket.TicketId)) != null ? true : false)
                    .Execute(conn);
            }

        }

        public static void SaveTicketSmsList(IDbConnection conn, int locationId, int smsId, List<int> ticketIds, List<TicketRow> ticketRows, string message)
        {

            var flds = TicketSmsRow.Fields;

            if(ticketRows != null)
            foreach (TicketRow ticket in ticketRows)
            {
                //CustomerRow customer
                new SqlInsert(flds.TableName)
                .Set(flds.TicketId, ticket.TicketId)
                .Set(flds.SmsId, smsId)
                .Set(flds.Sent, ticketRows.Find(x => (!String.IsNullOrEmpty(ticket.PhoneNumber) && x.TicketId == ticket.TicketId)) != null ? true : false)
                .Execute(conn);
            }


        }


        public static void SaveTransactionSms(IDbConnection conn, int locationId, int smsId, int ticketId, string message)
        {
            
            var flds = TransactionSmsRow.Fields;

            new SqlInsert(flds.TableName)
            .Set(flds.TransactionId, ticketId)
            .Set(flds.SmsId, smsId)
            .Execute(conn);

        }


  


        public static void SaveTransactionSmsList(IDbConnection conn, int locationId, int smsId, List<int> ticketIds, string message)
        {

            var flds = TransactionSmsRow.Fields;

            foreach (int ticketId in ticketIds)
            {
                new SqlInsert(flds.TableName)
                .Set(flds.TransactionId, ticketId)
                .Set(flds.SmsId, smsId)
                .Execute(conn);
            }


        }




    }
}