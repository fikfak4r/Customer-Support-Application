
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.TicketSms")]
    [BasedOnRow(typeof(Entities.TicketSmsRow))]
    public class TicketSmsForm
    {
        public Int32 TicketId { get; set; }
        public Int32 SmsId { get; set; }
        [TextAreaEditor(Cols = 3, Rows = 4)]
        public String TicketSmsMessage { get; set; }
        public Boolean Sent { get; set; }
        public Boolean Delivered { get; set; }
        public Boolean UnDelivered { get; set; }
    }
}