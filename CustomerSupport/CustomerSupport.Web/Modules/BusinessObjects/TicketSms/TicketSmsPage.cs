


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/TicketSms"), Route("{action=index}")]
    public class TicketSmsController : Controller
    {
        [PageAuthorize(BusinessObjects.PermissionKeys.TicketSms.Read)]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/TicketSms/TicketSmsIndex.cshtml");
        }
    }
}