using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CustomerSupport.BusinessObjects
{
    public partial class CallProcessEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CustomerSupport.BusinessObjects.CallProcessEditor";

        public CallProcessEditorAttribute()
            : base(Key)
        {
        }
    }
}

