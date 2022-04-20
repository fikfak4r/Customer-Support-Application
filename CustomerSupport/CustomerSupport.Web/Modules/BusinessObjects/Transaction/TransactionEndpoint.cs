
namespace CustomerSupport.BusinessObjects.Endpoints
{

    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.TransactionRepository;
    using MyRow = Entities.TransactionRow;
    using Serenity.Web;
    using Serenity.Reporting;
    using System;
    using Entities;
    using Repositories;


    [RoutePrefix("Services/BusinessObjects/Transaction"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize(BusinessObjects.PermissionKeys.Transaction.Read)]
    public class TransactionController : ServiceEndpoint
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

        public GetNextNumberResponse GetNextNumber(IDbConnection connection, BusinessObjects.GetNextNumberRequest request)
        {
            return new MyRepository().GetNextNumber(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.TransactionColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "TransactionList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }



        public ServiceResponse NewTransaction(IUnitOfWork uow, TransactionRequest request)
        {

            SaveResponse customer = new CustomerRepository().Create(uow, new SaveRequest<CustomerRow>() { Entity = request.Customer.Entity });

            request.Transaction.Entity.CustomerId = Convert.ToInt32(customer.EntityId);
            request.Transaction.Entity.HasTransactionsDetails = true;
            request.Transaction.Entity.Status = "Open";

            SaveResponse transaction = new TransactionRepository().Create(uow, new SaveRequest<TransactionRow>() { Entity = request.Transaction.Entity });

            TransactionDetailRepository tdr = new TransactionDetailRepository();

            for (int x = 0; x < request.TransactionDetails.Count; x++)
            {
                request.TransactionDetails[x].Entity.TransactionId = Convert.ToInt32(transaction.EntityId);
                tdr.Create(uow, new SaveRequest<TransactionDetailRow>() { Entity = request.TransactionDetails[x].Entity });
           
            }//Ends the for loop


            return new TransactionResponse() { };

        }

        public ServiceResponse DetailTransaction(IUnitOfWork uow, RetrieveRequest request)
        {

            RetrieveResponse<TransactionRow> transaction = new TransactionRepository().Retrieve(uow.Connection, request);
            RetrieveResponse<CustomerRow> customer = new CustomerRepository().Retrieve(uow.Connection, new RetrieveRequest() { EntityId = transaction.Entity.CustomerId });

            System.Collections.Generic.Dictionary<string, object> equality = new System.Collections.Generic.Dictionary<string, object>();
            equality.Add("TransactionId", request.EntityId);

            ListResponse<TransactionDetailRow> trxnDtls = new TransactionDetailRepository().List(uow.Connection, new ListRequest()
            {
                EqualityFilter = equality,
            });

            return new TransactionResponse() { Transaction = transaction, Customer = customer, TransactionDetails = trxnDtls };

        }




    }
}
