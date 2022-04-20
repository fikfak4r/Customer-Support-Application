
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.TicketActionLog")]
    [BasedOnRow(typeof(Entities.TicketRow))]
    public class TicketActionLogForm
    {

        [DisplayName("")]
        [Category("")]
        public List<Entities.ActionLogRow> Actions { get; set; }

    }
}