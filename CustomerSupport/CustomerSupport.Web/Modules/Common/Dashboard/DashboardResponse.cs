using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CustomerSupport.Common
{
    public class DashboardResponse
    {
        public int TotalCustomers { get; set; }
        public int OpenedTickets { get; set; }
        public int PendingTickets { get; set; }
        public int ResolvedTickets {get; set;}
        public int ClosedTickets { get; set; }
        public int TicketsWaitingOnCustomers { get; set; }
        public int TicketsWaitionOnThirdParty { get; set; }
    }
}