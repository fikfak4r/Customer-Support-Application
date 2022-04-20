

namespace CustomerSupport.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TransactionRow;
    using Processes;

    public class TransactionRepository
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
            return Utilities.GetNextNumberHelper.GetNextNumber(connection, request, fld.OrderId);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {

            

            protected override void BeforeSave()
            {
                base.BeforeSave();

                if (IsUpdate)
                {
                    Entities.TransactionRow transaction = Connection.ById<Entities.TransactionRow>(Row.TransactionId.Value);
                    Row.TotalAmount = transaction.TotalAmount;
                    Row.TotalAmountPaid = transaction.TotalAmountPaid;
                    Row.TotalAmountLeft = transaction.TotalAmountLeft;
                    Row.HasTransactionsDetails = transaction.HasTransactionsDetails;
                    Row.Status = transaction.Status;
                   
                }

            }

            protected override void AfterSave()
            {
                base.AfterSave();

                if (IsCreate)
                {

                    if (Row.TicketId != null)
                        TicketBizPrcs.UpdateTransactionId(Connection, Row.TicketId.Value, Row.TransactionId.Value);

                }

            }
        
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> {

            protected override void ApplyFilters(SqlQuery query)
            {


               
                base.ApplyFilters(query);
                var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");
                var transaction = Entities.TransactionRow.Fields;
                var user = (UserDefinition)Authorization.UserDefinition;




                //query
                //    .Where(new Criteria(transaction.LocationId).In(
                //            query
                //            .SubQuery()
                //            .From(userLocFlds)
                //            .Select(userLocFlds.LocationId)
                //            .Where(userLocFlds.UserId == user.UserId)
                //    ));
            }

        
        }
    }
}