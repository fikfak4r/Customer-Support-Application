using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using Serenity.ComponentModel;
using Serenity.Data.Mapping;

namespace CustomerSupport.BusinessObjects.Forms
{
    [FormScript("BusinessObjects.SendSms")]
    [BasedOnRow(typeof(Entities.SmsRow))]
    public class SendSmsForm
    {
        [NotMapped]
        [Category("Send SMS"), Required]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup))]
        public Int32 LocationId { get; set; }

        [NotMapped]
        [DisplayName("Phone number(s)")]
        [Placeholder("Enter numbers seperated by commas")]
        public String PhoneNumber { get; set; }

        [TextAreaEditor(Rows = 8)]
        public String Message { get; set; }
   
    }
}