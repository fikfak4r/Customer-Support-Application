using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using Serenity.ComponentModel;

namespace CustomerSupport.BusinessObjects
{
    [EnumKey("BusinessObjects.Priority")]
    public enum Priority
    {

        [Description("Low")]
        Low = 1,
        [Description("Normal")]
        Normal = 2,
        [Description("High")]
        High = 3,
        [Description("Urgent")]
        Urgent = 4

    }
}