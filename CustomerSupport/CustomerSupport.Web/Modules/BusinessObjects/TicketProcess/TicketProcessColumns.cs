
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.TicketProcess")]
    [BasedOnRow(typeof(Entities.TicketProcessRow))]
    public class TicketProcessColumns
    {

        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TicketProcessId { get; set; }
        public Int32 TicketId { get; set; }
        public DateTime Date { get; set; }
        [EditLink]
        public String Description { get; set; }
        [Width(150)]
        public ReplyComment? ReplyComment { get; set; }
        //public Int32 UserId { get; set; }

        public String UserUsername { get; set; }
        
        public Int32 CreatorId { get; set; }

    }
}