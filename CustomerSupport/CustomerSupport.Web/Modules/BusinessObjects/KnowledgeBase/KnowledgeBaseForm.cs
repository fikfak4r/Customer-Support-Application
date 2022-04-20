
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.KnowledgeBase")]
    [BasedOnRow(typeof(Entities.KnowledgeBaseRow))]
    public class KnowledgeBaseForm
    {
        public Int32 KbCategoryId { get; set; }
        public String Title { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String KbContent { get; set; }
        public List<Int32> LocationList { get; set; }
    }
}