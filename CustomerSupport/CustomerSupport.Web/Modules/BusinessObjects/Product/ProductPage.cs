


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/Product"), Route("{action=index}")]
    public class ProductController : Controller
    {
        [PageAuthorize((BusinessObjects.PermissionKeys.Product.Read))]
        public ActionResult Index()
        {
            //return View("~/Modules/BusinessObjects/Product/ProductIndex.cshtml");
            return View("Product");
        }


        public ActionResult NewProduct()
        {
            return View();
        }

    }
}