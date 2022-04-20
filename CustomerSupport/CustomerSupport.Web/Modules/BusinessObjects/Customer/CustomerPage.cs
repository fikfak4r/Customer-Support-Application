


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/Customer"), Route("{action=index}")]
    public class CustomerController : Controller
    {
        [PageAuthorize(PermissionKeys.Customer.Read)]
        public ActionResult Index()
        {
            //return View("~/Modules/BusinessObjects/Customer/CustomerIndex.cshtml");
            return View("Customer");
        }


        [Route("Profile")]
        //[PageAuthorize(Administration.PermissionKeys.ClientOfClient)]
        [PageAuthorize(Administration.PermissionKeys.Location)]
        public ActionResult ProfilePage()
        {

            var user = (UserDefinition)Authorization.UserDefinition;
            return View("~/Modules/BusinessObjects/Customer/Profile.cshtml", 14);

        }

        public ActionResult NewCustomer()
        {
            return View();
        }

        //[PageAuthorize("Administration")]
        public ActionResult CustomerDetail(int? customerId)
        {
            return View("NewCustomer", customerId);
        }

    }

}
