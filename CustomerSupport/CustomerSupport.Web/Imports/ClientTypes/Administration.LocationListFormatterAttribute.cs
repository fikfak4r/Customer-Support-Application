using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CustomerSupport.Administration
{
    public partial class LocationListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CustomerSupport.Administration.LocationListFormatter";

        public LocationListFormatterAttribute()
            : base(Key)
        {
        }
    }
}

