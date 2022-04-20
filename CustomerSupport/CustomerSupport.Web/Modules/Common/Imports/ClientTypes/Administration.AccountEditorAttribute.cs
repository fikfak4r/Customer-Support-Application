using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CustomerSupport.Administration
{
    public partial class AccountEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CustomerSupport.Administration.AccountEditor";

        public AccountEditorAttribute()
            : base(Key)
        {
        }
    }
}

