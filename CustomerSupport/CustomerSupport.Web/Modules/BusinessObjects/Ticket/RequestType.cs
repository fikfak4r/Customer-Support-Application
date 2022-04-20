using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;
using System.ComponentModel;
using Serenity;
using Serenity.Web;


namespace CustomerSupport.BusinessObjects
{
    [EnumKey("BusinessObjects.RequestType")]
    public enum RequestType
    {
        [Description("Enquiry")]
        Question = 1,
        [Description("Incident")]
        Incident = 2,
        [Description("Problem")]
        Problem = 3,
        [Description("Task")]
        Task = 4,
        [Description("Complain")]
        Complain = 5,
        [Description("Request")]
        Request = 6,
        [Description("Transaction")]
        Transaction = 7,
    }
}