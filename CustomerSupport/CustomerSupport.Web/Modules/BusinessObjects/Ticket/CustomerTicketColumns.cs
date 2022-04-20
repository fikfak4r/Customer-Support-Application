
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.CustomerTicket")]
    [BasedOnRow(typeof(Entities.TicketRow))]
    public class CustomerTicketColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TicketId { get; set; }

        [QuickFilter]
        [Width(100)]
        public String TicketIdString { get; set; }

        public Int32? TransactionId { get; set; }

        [Width(150)]
        public DateTime Date { get; set; }

        [Width(150)]
        public String CustomerName { get; set; }
        //[Width(150)]
        //public CallDirection CallDirection{ get; set;}

        [Hidden]
        public Int32 CustomerId { get; set; }
        [EditLink, Width(195)]
        public String Subject { get; set; }

        [Width(108)]
        public RequestType? Type { get; set; }
        [Width(108)]
        public Priority? Priority { get; set; }
        [Width(108)]
        public Status? Status { get; set; }
        [Width(150)]
        [QuickFilter]
        public String GroupRoleName { get; set; }

        [Width(150)]
        [QuickFilter]
        public String UserUsername { get; set; }

        [Width(150)]
        //[EditLink(ItemType = "BusinessObjects.Product"), QuickFilter, QuickFilterOption("multiple", true)]
        [QuickFilter, QuickFilterOption("multiple", true)]
        public String ProductName { get; set; }

        //[Width(150)]
        //public CallDirection? CallDirection { get; set; }
        [Width(150)]
        public String PhoneNumber { get; set; }
 
     

        //public Int32 GroupId { get; set; }

       
        //public Int32 UserId { get; set; }


        //public String UserDisplayName { get; set; }
        [Width(150)]
        [QuickFilter]
        public DateTime? NextFollowUpDate { get; set; }

        [Width(150)]
       
        public String FollowUpAction { get; set; }


        [QuickFilter]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), Multiple = true)]
         [Administration.LocationListFormatter]
         [Width(160)]
         public Int32 LocationId { get; set; }

        
        //public String Description { get; set; }
        [Hidden]
        public Int32 CreatorId { get; set; }
        [Hidden]
        public Boolean Me { get; set; }
    }
}