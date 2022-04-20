
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.CustomerSms")]
    [BasedOnRow(typeof(Entities.CustomerSmsRow))]
    public class CustomerSmsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CustomerSmsId { get; set; }
        public Int32 CustomerId { get; set; }
        public Int32 SmsId { get; set; }
        [Width(250)]
        public DateTime? SmsDate { get; set; }
        [Width(150), EditLink]
        public String SmsMessage { get; set; }
        [Width(150)]
        public Boolean Sent { get; set; }
        [Width(150)]
        public Boolean Delivered { get; set; }
        [Width(150)]
        public Boolean UnDelivered { get; set; }
    }
}