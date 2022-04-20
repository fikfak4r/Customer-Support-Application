


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/Transaction"), Route("{action=index}")]
    public class TransactionController : Controller
    {
        [PageAuthorize(BusinessObjects.PermissionKeys.Transaction.Read)]
        public ActionResult Index()
        {
            //return RedirectToAction("index", "TransactionDetailController");
            //return View("~/Modules/BusinessObjects/Transaction/TransactionIndex.cshtml");
            //return View("~/Modules/BusinessObjects/TransactionDetail/TransactionDetailIndex.cshtml");
            //return View("~/Views/TransactionDetail/TransactionDetail.cshtml");
            return View("Transaction");
        }


        public ActionResult NewTransaction()
        {
            return View();
        }


    }
}