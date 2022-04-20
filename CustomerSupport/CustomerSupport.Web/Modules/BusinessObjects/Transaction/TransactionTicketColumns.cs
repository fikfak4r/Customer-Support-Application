
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.TransactionTicket")]
    [BasedOnRow(typeof(Entities.TicketRow))]
    public class TransactionTicketColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TicketId { get; set; }

        public Int32? TransactionId { get; set; }

        [Width(150)]
        public DateTime Date { get; set; }

        //[Width(150)]
        //public CallDirection CallDirection{ get; set;}

        [Hidden]
        public Int32 CustomerId { get; set; }
        [EditLink, Width(195)]
        public String Subject { get; set; }
        [Width(150)]
        public String PhoneNumber { get; set; }
        [Width(150)]
        public String CustomerName { get; set; }
        [Width(150)]
        public String ProductName { get; set; }
        [Width(108)]
        public RequestType? Type { get; set; }
        [Width(108)]
        public Priority? Priority { get; set; }
        [Width(108)]
        public Status? Status { get; set; }
        //public Int32 GroupId { get; set; }
        [Width(150)]
        public String GroupRoleName { get; set; }

        //public Int32 UserId { get; set; }
        [Width(150)]
        public String UserUsername { get; set; }

        //public String UserDisplayName { get; set; }
        [Width(150)]
        public DateTime? NextFollowUpDate { get; set; }

        [Width(150)]
        public String FollowUpAction { get; set; }

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