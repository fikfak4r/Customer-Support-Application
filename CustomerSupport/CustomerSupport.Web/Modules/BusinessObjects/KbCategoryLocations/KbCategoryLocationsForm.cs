
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.KbCategoryLocations")]
    [BasedOnRow(typeof(Entities.KbCategoryLocationsRow))]
    public class KbCategoryLocationsForm
    {
        public Int32 KbCategoryId { get; set; }
        public Int32 LocationId { get; set; }
    }
}