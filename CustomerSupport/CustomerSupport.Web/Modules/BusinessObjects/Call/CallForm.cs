
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Call")]
    [BasedOnRow(typeof(Entities.CallRow))]
    public class CallForm
    {
        
        public Int32 CustomerId { get; set; }
        public Int32 GroupId { get; set; }
        public Int32 UserId { get; set; }
        public DateTime Date { get; set; }
        public String Subject { get; set; }
        public String Description { get; set; }
        public Int16 CallDirection { get; set; }
        public Int16 Priority { get; set; }
        public Int16 Status { get; set; }
        public DateTime NextFollowUpDate { get; set; }
        public Int32 CreatorId { get; set; }
        public Boolean Me { get; set; }
        public Int32 LocationId { get; set; }
        public String FollowUpAction { get; set; }
    }
}