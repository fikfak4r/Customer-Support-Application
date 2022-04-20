
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ActionLog")]
    [BasedOnRow(typeof(Entities.ActionLogRow))]
    public class ActionLogColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ActionLogId { get; set; }
        //public Int32 TicketId { get; set; }
  
        [Width(175)]
        [SortOrder(1, true)]
        public DateTime Date { get; set; }
        public String Action { get; set; }
        //public Int32 UserId { get; set; }
        public String UserDisplayName { get; set; }


    }
}