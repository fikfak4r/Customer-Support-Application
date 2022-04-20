
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.SmsLocation")]
    [BasedOnRow(typeof(Entities.SmsLocationRow))]
    public class SmsLocationForm
    {
        public Int32 SmsId { get; set; }
        public Int32 LocationId { get; set; }
    }
}