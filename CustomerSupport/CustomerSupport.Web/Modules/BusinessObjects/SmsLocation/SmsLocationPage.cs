


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/SmsLocation"), Route("{action=index}")]
    public class SmsLocationController : Controller
    {
        [PageAuthorize(BusinessObjects.PermissionKeys.SmsLocation.Read)]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/SmsLocation/SmsLocationIndex.cshtml");
        }
    }
}