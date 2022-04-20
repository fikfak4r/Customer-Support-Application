
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.SmsLocation")]
    [BasedOnRow(typeof(Entities.SmsLocationRow))]
    public class SmsLocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SmsLocationId { get; set; }
        public Int32 SmsId { get; set; }
        public Int32 LocationId { get; set; }
    }
}