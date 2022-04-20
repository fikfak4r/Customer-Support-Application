using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CustomerSupport.BusinessObjects
{
    public partial class TicketEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CustomerSupport.BusinessObjects.TicketEditor";

        public TicketEditorAttribute()
            : base(Key)
        {
        }
    }
}

