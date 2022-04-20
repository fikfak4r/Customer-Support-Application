
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.CallProcess")]
    [BasedOnRow(typeof(Entities.CallProcessRow))]
    public class CallProcessColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CallProcessId { get; set; }
        public Int32 CallId { get; set; }
        public Int32 UserId { get; set; }
        public DateTime Date { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Int16 ReplyComment { get; set; }
        public Int32 CreatorId { get; set; }
        public Int16 CallDirection { get; set; }
    }
}