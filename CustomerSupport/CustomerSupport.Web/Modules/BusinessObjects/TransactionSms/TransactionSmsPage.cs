

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "BusinessObjects/TransactionSms", typeof(CustomerSupport.BusinessObjects.Pages.TransactionSmsController))]

namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/TransactionSms"), Route("{action=index}")]
    public class TransactionSmsController : Controller
    {

        [PageAuthorize(BusinessObjects.PermissionKeys.TransactionSms.Read)]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/TransactionSms/TransactionSmsIndex.cshtml");
        }

    }
}