
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Transaction")]
    [BasedOnRow(typeof(Entities.TransactionRow))]
    public class TransactionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TransactionId { get; set; }
        public Int32? TicketId { get; set; }

        [EditLink]
        public String OrderId { get; set; }
        [Width(100)]
        public DateTime Date { get; set; }
        [Hidden]
        [QuickFilter, QuickFilterOption("multiple", true)]
        [LookupEditor(typeof(Scripts.CustomerLocationLookup))]
        public Int32 CustomerId { get; set; }
        [Width(200)]
        
        public string CustomerName { get; set; }

        [Width(220)]
        public String Subject { get; set; } 
        [Width(135)]
        public Decimal TotalAmount { get; set; }
        [Width(135)]
        public Decimal TotalAmountPaid { get; set; }
        [Width(135)]
        public Decimal TotalAmountLeft { get; set; }
        public Boolean HasTransactionsDetails { get; set; }
        [Hidden]
        public Int32 LocationId { get; set; }
        public Boolean IsIntegerTrailingOrderIdWithPrefixPo { get; set; }
        [Hidden]
        public String Status { get; set; }

        public Boolean IsOpen { get; set; }

        public Boolean IsInProgress { get; set; }

        public Boolean IsFullyReceived { get; set; }

        public Boolean IsFullyPaid { get; set; }

        public Boolean IsAdvanced { get; set; }
    }
}