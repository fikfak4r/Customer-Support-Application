
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.CustomerSms")]
    [BasedOnRow(typeof(Entities.CustomerSmsRow))]
    public class CustomerSmsForm
    {
        public Int32 CustomerId { get; set; }
        public Int32 SmsId { get; set; }
        [TextAreaEditor(Cols = 3, Rows = 4)]
        public String SmsMessage { get; set; }
        public Boolean Sent { get; set; }
        public Boolean Delivered { get; set; }
        public Boolean UnDelivered { get; set; }
    }
}