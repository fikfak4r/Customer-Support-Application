using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;
using System.ComponentModel;

namespace CustomerSupport.BusinessObjects
{
    [EnumKey("BusinessObjects.Status")]
    public enum Status
    {
        [Description("Open")]
        Open = 1,
        [Description("Pending")]
        Pending = 2,
        [Description("Resolved")]
        Resolved = 3,
        [Description("Closed")]
        Closed = 4,
        [Description("Waiting on customer")]
        WaitingOnCustomer = 5,
        [Description("Waiting on third party")]
        WaitingOnThirdParty = 6
    }
}