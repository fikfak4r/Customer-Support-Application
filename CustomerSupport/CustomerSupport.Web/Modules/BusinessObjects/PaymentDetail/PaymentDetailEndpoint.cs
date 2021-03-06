
namespace CustomerSupport.BusinessObjects.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.PaymentDetailRepository;
    using MyRow = Entities.PaymentDetailRow;
    using Serenity.Web;
    using Serenity.Reporting;
    using System;



    [RoutePrefix("Services/BusinessObjects/PaymentDetail"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize(BusinessObjects.PermissionKeys.PaymentDetail.Read)]
    public class PaymentDetailController : ServiceEndpoint
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

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.PaymentDetailColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "PaymentList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
