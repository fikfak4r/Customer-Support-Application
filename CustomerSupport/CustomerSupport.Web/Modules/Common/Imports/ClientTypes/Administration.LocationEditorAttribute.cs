using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CustomerSupport.Administration
{
    public partial class LocationEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CustomerSupport.Administration.LocationEditor";

        public LocationEditorAttribute()
            : base(Key)
        {
        }
    }
}

