
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.PaymentDetail")]
    [BasedOnRow(typeof(Entities.PaymentDetailRow))]
    public class PaymentDetailForm
    {
        public Int32 TransactionId { get; set; }
        [Required]
        public DateTime Date { get; set; }
        public Decimal TotalAmount { get; set; }
        [Required]
        public Decimal AmountPaid { get; set; }
        public Decimal AmountLeft { get; set; }
        public Boolean IsTotalAmountRow { get; set; }
        public Int32 LocationId { get; set; }
    }
}