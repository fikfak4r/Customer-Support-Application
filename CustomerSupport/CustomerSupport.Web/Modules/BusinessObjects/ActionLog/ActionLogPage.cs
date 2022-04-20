

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "BusinessObjects/ActionLog", typeof(CustomerSupport.BusinessObjects.Pages.ActionLogController))]

namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ActionLog"), Route("{action=index}")]
    public class ActionLogController : Controller
    {
        [PageAuthorize("Administration:General")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ActionLog/ActionLogIndex.cshtml");
        }
    }
}