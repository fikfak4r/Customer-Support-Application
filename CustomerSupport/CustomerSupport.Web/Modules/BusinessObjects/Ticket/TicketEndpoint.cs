
namespace CustomerSupport.BusinessObjects.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.TicketRepository;
    using MyRow = Entities.TicketRow;
    using CustomerSupport.Processes;
    using System;
    using Serenity.Reporting;
    using Entities;
    using Repositories;


    [RoutePrefix("Services/BusinessObjects/Ticket"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize]
    public class TicketController : ServiceEndpoint
    {

        [HttpPost]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            return new MyRepository().Create(uow, request);
        }


        public GetNextNumberResponse GetNextNumber(IDbConnection connection, BusinessObjects.GetNextNumberRequest request)
        {
            return new MyRepository().GetNextNumber(connection, request);
        }


        public ServiceResponse AssignToAgents(IUnitOfWork uow, AssignToAgentsRequest request)
        {
            request.CheckNotNull();

            UserDefinition userDef = (UserDefinition)Authorization.UserDefinition;

            using (IDbConnection conn = SqlConnections.NewByKey("Default"))
            {
                conn.Open();

                if (request.LocationId != 0)
                {
                    TicketBizPrcs.UpdateLocation(conn, request.TicketIds, request.LocationId);
                    ActionLogsBizPrcs.NewActionListUpdate(conn, userDef.UserId, request.TicketIds, "Changed location");
                }
                if (request.GroupId != 0)
                {
                    TicketBizPrcs.UpdateGroup(conn, request.TicketIds, request.GroupId);
                    ActionLogsBizPrcs.NewActionListUpdate(conn, userDef.UserId, request.TicketIds, "Changed group");
                }
                //else
                //    TicketBizPrcs.UpdateGroup(conn, request.TicketIds, null);

                if (request.AgentId != 0)
                {
                    TicketBizPrcs.AssignTickets(conn, request.TicketIds, request.AgentId);
                    ActionLogsBizPrcs.NewActionListUpdate(conn, userDef.UserId, request.TicketIds, "Assigned to new agent");

                }
                else if ((request.LocationId != 0 && request.GroupId != 0 && request.AgentId == 0))
                {
                    TicketBizPrcs.AssignTickets(conn, request.TicketIds, null);
                    ActionLogsBizPrcs.NewActionListUpdate(conn, userDef.UserId, request.TicketIds, "Assigned to new agent");
                }

            }

            return new AssignToAgentsResponse()
            {
                Reply = "Glory to God!",
                LocationId = request.LocationId,

                TicketIds = request.TicketIds
            };

        }


        public ServiceResponse ActionsSettings(IUnitOfWork uow, ActionsSettingsRequest request)
        {
            request.CheckNotNull();

            UserDefinition userDef = (UserDefinition)Authorization.UserDefinition;

            using (IDbConnection conn = SqlConnections.NewByKey("Default"))
            {
                conn.Open();


                if (request.Priority != 0)
                {
                    TicketBizPrcs.UpdatePriority(conn, request.TicketIds, request.Priority);
                    ActionLogsBizPrcs.NewActionListUpdate(conn, userDef.UserId, request.TicketIds, string.Format("Set Priority to {0}", Enum.GetName(typeof(Priority), request.Priority)));
                }

                if (request.Status != 0)
                {
                    TicketBizPrcs.UpdateStatus(conn, request.TicketIds, request.Status);
                    ActionLogsBizPrcs.NewActionListUpdate(conn, userDef.UserId, request.TicketIds, string.Format("Set Status to {0}", Enum.GetName(typeof(Status), request.Status)));

                }

                if (request.Type != 0)
                {
                    TicketBizPrcs.UpdateType(conn, request.TicketIds, request.Type);
                    ActionLogsBizPrcs.NewActionListUpdate(conn, userDef.UserId, request.TicketIds, string.Format("Set Type to {0}", Enum.GetName(typeof(RequestType), request.Type)));
                }



                if (request.LocationId != 0)
                {
                    TicketBizPrcs.UpdateLocation(conn, request.TicketIds, request.LocationId);
                    ActionLogsBizPrcs.NewActionListUpdate(conn, userDef.UserId, request.TicketIds, "Changed location");
                }

                if (request.GroupId != 0)
                {
                    TicketBizPrcs.UpdateGroup(conn, request.TicketIds, request.GroupId);
                    ActionLogsBizPrcs.NewActionListUpdate(conn, userDef.UserId, request.TicketIds, "Changed group");
                }

                //else
                //    TicketBizPrcs.UpdateGroup(conn, request.TicketIds, null);

                if (request.AgentId != 0)
                {
                    TicketBizPrcs.AssignTickets(conn, request.TicketIds, request.AgentId);
                    ActionLogsBizPrcs.NewActionListUpdate(conn, userDef.UserId, request.TicketIds, "Assigned to new agent");

                }
                else if ((request.LocationId != 0 && request.GroupId != 0 && request.AgentId == 0))
                {
                    TicketBizPrcs.AssignTickets(conn, request.TicketIds, null);
                    ActionLogsBizPrcs.NewActionListUpdate(conn, userDef.UserId, request.TicketIds, "Assigned to new agent");

                }

            }

            return new AssignToAgentsResponse()
            {
                Reply = "Glory to God!",
                LocationId = request.LocationId,

                TicketIds = request.TicketIds
            };

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
            //return null;
            //return new MyRepository().List(connection, new ListRequest() { });
            return new MyRepository().List(connection, request);
        }


        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.TicketColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "TicketList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }


        public ServiceResponse NewTicket(IUnitOfWork uow, TicketRequest request)
        {

            SaveResponse customer = new CustomerRepository().Create(uow, new SaveRequest<CustomerRow>() { Entity = request.Customer.Entity });

            request.Ticket.Entity.CustomerId = Convert.ToInt32(customer.EntityId);

            SaveResponse ticket = new TicketRepository().Create(uow, new SaveRequest<TicketRow>() { Entity = request.Ticket.Entity });

            request.Note.Entity.EntityId = Convert.ToInt32(ticket.EntityId);

            SaveResponse note = new NoteRepository().Create(uow, new SaveRequest<NoteRow>() { Entity = request.Note.Entity });
            return DetailTicket( uow, new RetrieveRequest() { EntityId = ticket.EntityId});

        }

        public ServiceResponse DetailTicket(IUnitOfWork uow, RetrieveRequest request)
        {

            RetrieveResponse<TicketRow> ticket = new TicketRepository().Retrieve(uow.Connection, request);
            RetrieveResponse<CustomerRow> customer = new CustomerRepository().Retrieve(uow.Connection, new RetrieveRequest() { EntityId = ticket.Entity.CustomerId });

            System.Collections.Generic.Dictionary<string, object> equality = new System.Collections.Generic.Dictionary<string, object>();
            equality.Add("EntityId", request.EntityId);

            System.Collections.Generic.HashSet<string> includeCols = new System.Collections.Generic.HashSet<string>();
            includeCols.Add("InsertUserUserName");

            ListResponse<NoteRow> notes = new NoteRepository().List(uow.Connection, new ListRequest() {
                EqualityFilter = equality,
                Sort = new SortBy[] { new SortBy("InsertDate", true) },
                IncludeColumns = includeCols
            });

            return new TicketResponse() { Ticket = ticket, Customer = customer, Note = notes };

        }

        public ServiceResponse UpdateTicketMessage(IUnitOfWork uow, TicketRequest request)
        {
            CustomerRepository customerResp = new CustomerRepository();

            RetrieveResponse<CustomerRow> customer = customerResp.Retrieve(uow.Connection, new RetrieveRequest() { EntityId = request.Customer.Entity.CustomerId });
            customer.Entity.FullName = request.Customer.Entity.FullName;
            customer.Entity.PhoneNumber = request.Customer.Entity.PhoneNumber;

            customerResp.Update(uow, new SaveRequest<CustomerRow>() { Entity = customer.Entity });


            SaveResponse ticket = new TicketRepository().Update(uow, new SaveRequest<TicketRow>() { EntityId = request.Ticket.EntityId, Entity = request.Ticket.Entity });

            request.Note.Entity.EntityId = Convert.ToInt32(ticket.EntityId);

            SaveResponse note = new NoteRepository().Create(uow, new SaveRequest<NoteRow>() { Entity = request.Note.Entity });
            return DetailTicket(uow, new RetrieveRequest() { EntityId = ticket.EntityId });

        }

        public ServiceResponse UpdateTicket(IUnitOfWork uow, TicketRequest request)
        {

            CustomerRepository customerResp = new CustomerRepository();

            RetrieveResponse<CustomerRow> customer = customerResp.Retrieve(uow.Connection, new RetrieveRequest() { EntityId = request.Customer.EntityId });
            customer.Entity.FullName = request.Customer.Entity.FullName;
            customer.Entity.PhoneNumber = request.Customer.Entity.PhoneNumber;

            customerResp.Update(uow, new SaveRequest<CustomerRow>() { Entity = customer.Entity });

            SaveResponse ticket = new TicketRepository().Update(uow, new SaveRequest<TicketRow>() { EntityId = request.Ticket.EntityId, Entity = request.Ticket.Entity });


            return DetailTicket(uow, new RetrieveRequest() { EntityId = ticket.EntityId });

        }



        public ServiceResponse NewMessage(IUnitOfWork uow, SaveRequest<NoteRow> note)
        {
            return    new NoteRepository().Create(uow, note);
        }



    }
    }
