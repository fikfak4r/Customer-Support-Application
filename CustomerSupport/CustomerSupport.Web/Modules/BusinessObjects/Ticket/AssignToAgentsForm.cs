using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using Serenity.ComponentModel;

namespace CustomerSupport.BusinessObjects.Forms
{
    [FormScript("BusinessObjects.AssignToAgents")]
    [BasedOnRow(typeof(Entities.TicketRow))]
    public class AssignToAgentsForm
    {
        [Category("Assign")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup))]
        public Int32 LocationId { get; set; }
        public Int32 GroupId { get; set; }
        public Int32 UserId { get; set; }
    }
}