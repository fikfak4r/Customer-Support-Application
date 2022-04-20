
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Transaction")]
    [BasedOnRow(typeof(Entities.TransactionRow))]
    public class TransactionForm
    {

        public Int32? TransactionId { get; set; }
        public String OrderId { get; set; }
        public DateTime Date { get; set; }
        [LookupEditor(typeof(Scripts.CustomerLocationLookup), InplaceAdd = true, DialogType = "BusinessObjects.Customer")]
        public Int32? CustomerId { get; set; }
        public String Subject { get; set; }
        public Int32? TicketId { get; set; }
        [Hidden]
        public Decimal TotalAmount { get; set; }
        [Hidden]
        public Decimal TotalAmountPaid { get; set; }
        [Hidden]
        public Decimal TotalAmountLeft { get; set; }
        public Boolean HasTransactionsDetails { get; set; }
        [Required]
        public Int32 LocationId { get; set; }
        public Boolean IsIntegerTrailingOrderIdWithPrefixPo { get; set; }
        [Hidden]
        public String Status { get; set; }
        public Boolean IsOpen { get; set; }
        public Boolean IsInProgress { get; set; }
        public Boolean IsFullyReceived { get; set; }
        public Boolean IsFullyPaid { get; set; }
        public Boolean IsAdvanced { get; set; }

        public Decimal Tax { get; set; }
        public Decimal Discount { get; set; }



    }
}