


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/PaymentDetail"), Route("{action=index}")]
    public class PaymentDetailController : Controller
    {
        [PageAuthorize(BusinessObjects.PermissionKeys.PaymentDetail.Read)]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/PaymentDetail/PaymentDetailIndex.cshtml");
        }
    }
}