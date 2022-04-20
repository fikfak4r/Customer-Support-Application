

namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/TicketProcess"), Route("{action=index}")]
    public class TicketProcessController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/TicketProcess/TicketProcessIndex.cshtml");
        }
    }
}