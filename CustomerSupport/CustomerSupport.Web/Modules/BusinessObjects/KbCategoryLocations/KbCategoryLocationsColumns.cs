
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.KbCategoryLocations")]
    [BasedOnRow(typeof(Entities.KbCategoryLocationsRow))]
    public class KbCategoryLocationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 KbCategoryLocationId { get; set; }
        public Int32 KbCategoryId { get; set; }
        public Int32 LocationId { get; set; }
    }
}