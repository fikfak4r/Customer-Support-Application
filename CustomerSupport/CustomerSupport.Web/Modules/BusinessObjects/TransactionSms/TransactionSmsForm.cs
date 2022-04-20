
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.TransactionSms")]
    [BasedOnRow(typeof(Entities.TransactionSmsRow))]
    public class TransactionSmsForm
    {
        public Int32 TransactionId { get; set; }
        public Int32 SmsId { get; set; }
        public Boolean Sent { get; set; }
        public Boolean Delivered { get; set; }
        public Boolean UnDelivered { get; set; }
    }
}