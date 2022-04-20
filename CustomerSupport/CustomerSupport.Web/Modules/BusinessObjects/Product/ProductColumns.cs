
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Product")]
    [BasedOnRow(typeof(Entities.ProductRow))]
    public class ProductColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Hidden]
        public Int32 ProductId { get; set; }
        [EditLink]
        public String Name { get; set; }

        public Decimal Price { get; set; }

        [Administration.LocationListFormatter]
        public List<Int32> LocationList { get; set; }

    }
}