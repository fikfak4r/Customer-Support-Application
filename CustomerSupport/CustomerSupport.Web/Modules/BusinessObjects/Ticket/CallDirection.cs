using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;
using System.ComponentModel;

namespace CustomerSupport.BusinessObjects
{
    [EnumKey("BusinessObjects.CallDirection")]
    public enum CallDirection
    {
        
        [Description("Complain")]
        Complain = 1,
        [Description("Request")]
        Request = 2,
        [Description("Enquiry")]
        Enquiry = 3,
        [Description("Transaction")]
        Transaction = 4,
   
    }
}