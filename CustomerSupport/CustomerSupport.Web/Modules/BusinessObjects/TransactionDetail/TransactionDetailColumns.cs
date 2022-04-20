
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.TransactionDetail")]
    [BasedOnRow(typeof(Entities.TransactionDetailRow))]
    public class TransactionDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TransactionDetailId { get; set; }
        public Int32 TransactionId { get; set; }


        public DateTime Date { get; set; }
        [Hidden]
        public Int32 ProductId { get; set; }
        [Width(125)]
        
        public String ProductName { get; set; }

        [DisplayName("Quantity"), Width(80)]
        public Int32 Quantity { get; set; }

        public String UnitName { get; set; }

        
        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
        [Width(108)]
        public Decimal Amount { get; set; }




        public Int32 LocationId { get; set; }
        public Boolean IsReceived { get; set; }

    }
}