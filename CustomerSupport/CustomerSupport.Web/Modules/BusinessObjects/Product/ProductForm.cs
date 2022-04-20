
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Product")]
    [BasedOnRow(typeof(Entities.ProductRow))]
    public class ProductForm
    {
        public Int32? ProductId { get; set; }
        
            [Required]
        public String Name { get; set; }

        public Decimal Price { get; set; }

        public List<Int32> LocationList { get; set; }

    }
}