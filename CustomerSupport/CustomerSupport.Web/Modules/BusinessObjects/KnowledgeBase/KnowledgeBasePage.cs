


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/KnowledgeBase"), Route("{action=index}")]
    public class KnowledgeBaseController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/KnowledgeBase/KnowledgeBaseIndex.cshtml");
        }
    }
}