
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.KnowledgeBase")]
    [BasedOnRow(typeof(Entities.KnowledgeBaseRow))]
    public class KnowledgeBaseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 KbId { get; set; }
        [Hidden]
        public Int32 KbCategoryId { get; set; }
        public String KbCategoryCategoryName { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String KbContent { get; set; }
        [Administration.LocationListFormatter]
        public List<Int32> LocationList { get; set; }
    }
}