
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.CallProcess")]
    [BasedOnRow(typeof(Entities.CallProcessRow))]
    public class CallProcessForm
    {
        public Int32 CallId { get; set; }
        public Int32 UserId { get; set; }
        public DateTime Date { get; set; }
        public String Description { get; set; }
        public Int16 ReplyComment { get; set; }
        public Int32 CreatorId { get; set; }
        public Int16 CallDirection { get; set; }
    }
}