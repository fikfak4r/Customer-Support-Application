
namespace CustomerSupport.BusinessObjects.Forms
{

    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.ActionLog")]
    [BasedOnRow(typeof(Entities.ActionLogRow))]
    public class ActionLogForm
    {

        //public Int32 TicketId { get; set; }
        public String Action { get; set; }
        public DateTime Date { get; set; }
        //public Int32 UserId { get; set; }


    }

}