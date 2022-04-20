
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.PaymentDetail")]
    [BasedOnRow(typeof(Entities.PaymentDetailRow))]
    public class PaymentDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PaymentDetailId { get; set; }
        public Int32 TransactionId { get; set; }
        [Width(107)]
        public DateTime Date { get; set; }
        public Decimal TotalAmount { get; set; }
        [EditLink, Width(117)]
        public Decimal AmountPaid { get; set; }
        public Decimal AmountLeft { get; set; }
        public Boolean IsTotalAmountRow { get; set; }
        public Int32 LocationId { get; set; }
    }
}