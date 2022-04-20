

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "BusinessObjects/KbCategoryLocations", typeof(CustomerSupport.BusinessObjects.Pages.KbCategoryLocationsController))]

namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/KbCategoryLocations"), Route("{action=index}")]
    public class KbCategoryLocationsController : Controller
    {
        [PageAuthorize("Administration:General")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/KbCategoryLocations/KbCategoryLocationsIndex.cshtml");
        }
    }
}