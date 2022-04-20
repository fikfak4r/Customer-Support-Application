

namespace CustomerSupport.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TicketRow;
    using CustomerSupport.Processes;

    public class TicketRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        public GetNextNumberResponse GetNextNumber(IDbConnection connection, BusinessObjects.GetNextNumberRequest request)
        {
            return Utilities.GetNextNumberHelper.GetNextNumber(connection, request, fld.TicketIdString);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {

            UserDefinition userDef = (UserDefinition)Authorization.UserDefinition;



            protected override void BeforeSave()
            {

                base.BeforeSave();
                
                if (IsCreate || (IsUpdate && Row.TicketIdString != Old.TicketIdString))
                    if (TicketBizPrcs.IsTicketIdUnique(Connection, userDef.AccountId, Row.TicketIdString))
                    {
                        if (Row.TicketProcess != null)
                        {

                            for (int x = 0; x < Row.TicketProcess.Count; x++)
                            {
                                if (Row.TicketProcess[x].UserId == null)
                                    Row.TicketProcess[x].UserId = userDef.UserId;
                            }

                        }
                    }
                    else
                    {
                        throw new Exception("Ticket-ID already exist");
                    }

            }


            protected override void AfterSave()
            {
                base.AfterSave();

                if (IsCreate)
                {
                    //TicketProcessBizPrcs.CreateTicketProcess(Connection, Row.TicketId, Row.UserId, Row.Date, Row.Description);
                    ActionLogsBizPrcs.NewActionUpdate(Connection, userDef.UserId, Row.TicketId.Value, "Created ticket");
                    
                    if (Row.TransactionId != null)
                        TransactionBizPrcs.UpdateTicketId(Connection, Row.TicketId.Value, Row.TransactionId.Value);
                        
                }

            }


        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }

        private class MyListHandler : ListRequestHandler<MyRow>
        {

            protected override void ApplyFilters(SqlQuery query)
            {


                //if (!Request.Locations.IsEmptyOrNull())
                //{
                //    query.Where(new Criteria(fld.LocationId).In(Request.Locations));

                //}
                base.ApplyFilters(query);
                var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");
                var ticket = Entities.TicketRow.Fields;
                var user = (UserDefinition)Authorization.UserDefinition;




                query
                    .Where(new Criteria(ticket.LocationId).In(
                            query
                            .SubQuery()
                            .From(userLocFlds)
                            .Select(userLocFlds.LocationId)
                            .Where(userLocFlds.UserId == user.UserId)
                    ));
            }

        }

    }

}