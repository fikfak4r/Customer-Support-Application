
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.TransactionDetail")]
    [BasedOnRow(typeof(Entities.TransactionDetailRow))]
    public class TransactionDetailForm
    {
        public Int32 TransactionId { get; set; }

        public DateTime Date { get; set; }
        [Required]
        public Int32 ProductId { get; set; }
        
        public Int32 Quantity { get; set; }
        public String UnitName { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }

        public Decimal Amount { get; set; }

        public Int32 LocationId { get; set; }
        public Boolean IsReceived { get; set; }


    }
}