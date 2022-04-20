using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using Serenity.ComponentModel;


namespace CustomerSupport.BusinessObjects.Forms
{
    [FormScript("Dashboard.DashboardForm")]
    public class DashboardForm 
    {
        [Category("")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), Multiple = true)]
        public string Locations
        {
            get;
            set;
        }
    }

}