using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;

namespace CustomerSupport.BusinessObjects.Forms
{

    [FormScript("BusinessObjects.ForwardAsMail")]
    public class ForwardAsMailForm
    {
        public string Email { get; set; }
    }

}