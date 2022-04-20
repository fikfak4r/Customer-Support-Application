

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "BusinessObjects/KnowledgeBaseLocations", typeof(CustomerSupport.BusinessObjects.Pages.KnowledgeBaseLocationsController))]

namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/KnowledgeBaseLocations"), Route("{action=index}")]
    public class KnowledgeBaseLocationsController : Controller
    {
        [PageAuthorize("Administration:General")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/KnowledgeBaseLocations/KnowledgeBaseLocationsIndex.cshtml");
        }
    }
}