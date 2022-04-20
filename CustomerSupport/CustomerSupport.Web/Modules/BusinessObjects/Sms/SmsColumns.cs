
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Sms")]
    [BasedOnRow(typeof(Entities.SmsRow))]
    public class SmsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SmsId { get; set; }
        public DateTime Date { get; set; }
        [EditLink]
        public String Message { get; set; }
    }
}