

namespace CustomerSupport.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TransactionDetailRow;
    using Processes;

    public class TransactionDetailRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, TransactionDetailSaveRequest<MyRow> request)
        {
            SaveResponse mySH = null;
            for (int x = 0; x < request.Entities.Count; x++)
            {
                mySH = new MySaveHandler().Process(uow, request.Entities[x], SaveRequestType.Update);
            }

            

            return mySH;
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




        private class MySaveHandler : SaveRequestHandler<MyRow> {


            protected override void AfterSave()
            {

                base.AfterSave();

                if (IsCreate)
                {

                    //Entities.TransactionRow purchases = Connection.ById<Entities.TransactionRow>(Row.TransactionId.Value);
                    //purchases.HasTransactionsDetails = true;
                    //Connection.UpdateById<Entities.TransactionRow>(purchases);

                    //TransactionBizPrcs.SyncAmountsAfterATransactionOrderIsMade(Connection, Row.TransactionId.Value, Row.Amount.Value);

                    //TransactionBizPrcs.SetStatus(Connection, Row.TransactionId.Value, "InProgress");

                }
                else if (IsUpdate)
                {

                    //Entities.TransactionDetailsRow pdr = TransactionDetailsBizPrcs.GetTransactionDetails(Connection, Row.TransactionDetailsId.Value);
                    if (Old.Amount.Value != Row.Amount.Value)
                    {
                        TransactionBizPrcs.SyncAmountsAfterATransactionOrderIsUpdated(Connection, Row.TransactionId.Value, Old.Amount.Value, Row.Amount.Value);
                        TransactionBizPrcs.SetStatus(Connection, Row.TransactionId.Value, "InProgress");
                    }

                }

            }
        
        
        
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}