
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.KnowledgeBaseLocations")]
    [BasedOnRow(typeof(Entities.KnowledgeBaseLocationsRow))]
    public class KnowledgeBaseLocationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 KbLocationId { get; set; }
        public Int32 KbCategoryId { get; set; }
        public Int32 LocationId { get; set; }
    }
}