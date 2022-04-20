


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/CallProcess"), Route("{action=index}")]
    public class CallProcessController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/CallProcess/CallProcessIndex.cshtml");
        }
    }
}