


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;
    using Serenity.Data;
    using MyRepository = Repositories.TicketRepository;
    using System.Collections.Generic;

    [RoutePrefix("BusinessObjects/Ticket"), Route("{action=index}")]
    public class TicketController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {

            //List<Entities.TicketRow> ticketList;

            //using (var conn = SqlConnections.NewFor<Entities.TicketRow>())
            //{
            //    ticketList = conn.List<Entities.TicketRow>(qry => { qry.SelectTableFields( Entities.TicketRow.Fields.NoteList ); });
            //    //Serenity.Services.ListResponse<Entities.TicketRow> response = new MyRepository().List(conn, new Serenity.Services.ListRequest() { });
            //}

            //return View("~/Modules/BusinessObjects/Ticket/TicketIndex.cshtml", ticketList);

            return View("~/Modules/BusinessObjects/Ticket/TicketIndex.cshtml");

            //return View("Ticket");


        }


        [PageAuthorize("Administration")]
        public ActionResult NewTicket()
        {
            return View();
        }


        public ActionResult TicketDetail(int? ticketId)
        {
            return View("NewTicket", ticketId);
        }
    }
}