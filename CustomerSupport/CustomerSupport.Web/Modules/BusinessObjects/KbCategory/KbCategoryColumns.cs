
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.KbCategory")]
    [BasedOnRow(typeof(Entities.KbCategoryRow))]
    public class KbCategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 KbCategoryId { get; set; }
        [EditLink]
        public String CategoryName { get; set; }
        //public Int32 LocationId { get; set; }
        [Administration.LocationListFormatter]
        public List<Int32> LocationList { get; set; }
    }
}