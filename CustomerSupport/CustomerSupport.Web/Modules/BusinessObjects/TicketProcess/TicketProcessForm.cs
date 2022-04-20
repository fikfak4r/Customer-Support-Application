
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.TicketProcess")]
    [BasedOnRow(typeof(Entities.TicketProcessRow))]
    public class TicketProcessForm
    {
        public Int32 TicketId { get; set; }

        [DefaultValue("now")]
        public DateTime Date { get; set; }
        
        public ReplyComment? ReplyComment { get; set; }
        [Hidden]
        public Int32 UserId { get; set; }
        [TextAreaEditor(Rows = 6)]
        public String Description { get; set; }
    
        
        public Int32 CreatorId { get; set; }
    }
}