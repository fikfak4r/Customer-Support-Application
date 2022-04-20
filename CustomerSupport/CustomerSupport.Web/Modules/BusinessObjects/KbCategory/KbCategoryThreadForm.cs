
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.KbCategoryThread")]
    [BasedOnRow(typeof(Entities.KbCategoryRow))]
    public class KbCategoryThreadForm
    {
        public String CategoryName { get; set; }
        public List<Int32> LocationList { get; set; }
    
    }
}