
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ProductLocation")]
    [BasedOnRow(typeof(Entities.ProductLocationRow))]
    public class ProductLocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductLocationId { get; set; }
        public Int32 ProductId { get; set; }
        public Int32 LocationId { get; set; }
    }
}