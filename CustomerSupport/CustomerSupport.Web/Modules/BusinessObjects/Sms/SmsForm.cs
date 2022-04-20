
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Sms")]
    [BasedOnRow(typeof(Entities.SmsRow))]
    public class SmsForm
    {
        public DateTime Date { get; set; }
        public String Message { get; set; }
    }
}