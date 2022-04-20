namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.TicketThread")]
    [BasedOnRow(typeof(Entities.TicketRow))]
    public class TicketThreadForm
    {

        [Category("Info")]
        public DateTime Date { get; set; }

        public CallDirection CallDirection { get; set; }

        public String PhoneNumber { get; set; }

        //[ReadOnly(true)]
        //[LookupEditor(typeof(BusinessObjects.Entities.CustomerRow))]
        public Int32 CustomerId { get; set; }
        [ReadOnly(true)]
        public String Subject { get; set; }

        //public String Description { get; set; }

        [Category("Ticket process")]
        [TicketProcessEditor]
        public List<Entities.TicketProcessRow> TicketProcess { get; set; }

        [Category("Actions")]
        public RequestType? Type { get; set; }
        public Priority? Priority { get; set; }
        public Status? Status { get; set; }

        [Category("Assign")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup))]
        public Int32 LocationId { get; set; }
        public Int32 GroupId { get; set; }
        public Int32 UserId { get; set; }
        [Hidden]
        public Int32 CreatorId { get; set; }
        [Hidden]
        public Boolean Me { get; set; }

        [Category("Follow up")]
        public DateTime? NextFollowUpDate { get; set; }

        public String FollowUpAction { get; set; }
    }
}