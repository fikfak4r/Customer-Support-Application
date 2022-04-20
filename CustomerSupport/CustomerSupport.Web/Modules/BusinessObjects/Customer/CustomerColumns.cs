
namespace CustomerSupport.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow))]
    public class CustomerColumns
    {
        

        [Hidden]
        [EditLink, DisplayName("Customer"), AlignRight]
        [QuickFilter, QuickFilterOption("multiple", true)]
        [LookupEditor(typeof(Scripts.CustomerLocationLookup))]
        public Int32 CustomerId { get; set; }
        public DateTime Date { get; set; }
        
        //public String FirstName { get; set; }
        //public String LastName { get; set; }
        [EditLink]
        public String FullName { get; set; }
        public Gender? Sex { get; set; }
        [Width(160)]
        public DateTime DateOfBirth { get; set; }
        public String PhoneNumber { get; set; }
        
        public String Email { get; set; }
        public String Address { get; set; }

        [LookupEditor(typeof(Administration.Scripts.LocationLookup), Multiple = true)]
        [Administration.LocationListFormatter]
        [Width(160)]
        public Int32 LocationId { get; set; }

        [AmbientValue("ForeignField")]
        public String LocationLocationName { get; set; }
        

        }
}