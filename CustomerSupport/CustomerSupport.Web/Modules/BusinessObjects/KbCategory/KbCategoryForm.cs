
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.KbCategory")]
    [BasedOnRow(typeof(Entities.KbCategoryRow))]
    public class KbCategoryForm
    {
        public String CategoryName { get; set; }
        public List<Int32> LocationList { get; set; }
        [KnowledgeBaseEditor]
        public List<Entities.KnowledgeBaseRow> KnowledgeBase { get; set; }
    }
}