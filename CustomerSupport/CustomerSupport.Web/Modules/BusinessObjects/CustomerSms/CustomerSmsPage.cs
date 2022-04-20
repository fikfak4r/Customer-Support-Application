


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/CustomerSms"), Route("{action=index}")]
    public class CustomerSmsController : Controller
    {
        [PageAuthorize(BusinessObjects.PermissionKeys.CustomerSms.Read)]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/CustomerSms/CustomerSmsIndex.cshtml");
        }
    }
}