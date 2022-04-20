

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "BusinessObjects/ProductLocation", typeof(CustomerSupport.BusinessObjects.Pages.ProductLocationController))]

namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ProductLocation"), Route("{action=index}")]
    public class ProductLocationController : Controller
    {
        [PageAuthorize("Administration:General")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ProductLocation/ProductLocationIndex.cshtml");
        }
    }
}