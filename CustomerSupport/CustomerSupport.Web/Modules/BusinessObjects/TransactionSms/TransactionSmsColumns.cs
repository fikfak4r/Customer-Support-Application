
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.TransactionSms")]
    [BasedOnRow(typeof(Entities.TransactionSmsRow))]
    public class TransactionSmsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TransactionSmsId { get; set; }
        public Int32 TransactionId { get; set; }
        public Int32 SmsId { get; set; }
       [Width(250)]
        public DateTime? TransactionSmsDate { get; set; }
        [Width(150), EditLink]
        public String TicketSmsMessage { get; set; }
        [Width(150)]
        public Boolean Sent { get; set; }
        [Width(150)]
        public Boolean Delivered { get; set; }
        [Width(150)]
        public Boolean UnDelivered { get; set; }
    }
}