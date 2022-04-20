
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Ticket")]
    [BasedOnRow(typeof(Entities.TicketRow))]
    public class TicketForm
    {

        [Category("Info"), DefaultValue("now")]
        public DateTime Date { get; set; }

        public String TicketIdString { get; set; }

        //public CallDirection CallDirection { get; set; }

        public Int32? TransactionId { get; set; }
               

        [LookupEditor(typeof(Scripts.CustomerLocationLookup), DialogType = "BusinessObjects.Customer", InplaceAdd = true)]
        public Int32 CustomerId { get; set; }
        [AmbientValue("CustomerId.PhoneNumber")]
        public String PhoneNumber { get; set; }
      
        public Int32? ProductId { get; set; }

        public String Subject { get; set; }
       // public String Description { get; set; }

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

        public List<object> NoteList { get; set; }

        public String UserUsername
        {
            get; set;
        }


        //public List<object> NoteROList { get; set; }
        }
}