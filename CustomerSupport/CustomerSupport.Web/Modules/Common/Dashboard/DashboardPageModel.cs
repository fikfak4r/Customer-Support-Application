
namespace CustomerSupport.Common
{

    public class DashboardPageModel
    {
        public int OpenedTickets { get; set; }
        public int ClosedOrderPercent { get; set; }
        public int PendingTickets { get; set; }
        public int ClosedTicket { get; set; }
        public int TicketsWaitingOnCustomers { get; set; }
        public int TicketsWaitingOnThirdParty { get; set; }
        public int CustomerCount { get; set; }
    }


}