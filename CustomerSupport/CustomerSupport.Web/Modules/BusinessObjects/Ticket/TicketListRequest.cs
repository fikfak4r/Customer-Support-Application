using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;

namespace CustomerSupport.BusinessObjects
{

    public class TicketListRequest : ListRequest
    {
        public List<Int32> Locations { get; set; }
    }

}