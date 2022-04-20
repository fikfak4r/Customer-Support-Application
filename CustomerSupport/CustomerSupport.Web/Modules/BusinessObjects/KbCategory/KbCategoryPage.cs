


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/KbCategory"), Route("{action=index}")]
    public class KbCategoryController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/KbCategory/KbCategoryIndex.cshtml");
        }
    }
}