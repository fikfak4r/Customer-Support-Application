
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.KnowledgeBaseLocations")]
    [BasedOnRow(typeof(Entities.KnowledgeBaseLocationsRow))]
    public class KnowledgeBaseLocationsForm
    {
        public Int32 KbCategoryId { get; set; }
        public Int32 LocationId { get; set; }
    }
}