
namespace CustomerSupport.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow))]
    public class CustomerForm
    {

        public Int32 CustomerId { get; set; }

        [DefaultValue("now")]
        public DateTime Date { get; set; }
        //public String FirstName { get; set; }
        //public String LastName { get; set; }
        public String FullName { get; set; }

        //[AmbientValue("GlobalScripts.GetGender()")]
        public Gender? Sex { get; set; }
        public DateTime DateOfBirth { get; set; }
        public String PhoneNumber { get; set; }
        public String Email { get; set; }
        [TextAreaEditor(Rows = 6)]
        public String Address { get; set; }
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), FilterField = "LocationId", FilterValue = "LocationName")]
        public Int32 LocationId { get; set; }
       

    }
}