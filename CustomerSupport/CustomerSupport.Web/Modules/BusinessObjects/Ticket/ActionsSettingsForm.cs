using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;

namespace CustomerSupport.BusinessObjects.Forms
{
    [BasedOnRow(typeof(Entities.TicketRow))]
    [FormScript("BusinessObjects.ActionsSettings")]
    public class ActionsSettingsForm
    {

        public RequestType? Type { get; set; }
        public Priority? Priority { get; set; }
        public Status? Status { get; set; }
        
        [LookupEditor(typeof(Administration.Scripts.LocationLookup))]
        public Int32 LocationId { get; set; }

        public Int32 GroupId { get; set; }

        public Int32 UserId { get; set; }

    }
}