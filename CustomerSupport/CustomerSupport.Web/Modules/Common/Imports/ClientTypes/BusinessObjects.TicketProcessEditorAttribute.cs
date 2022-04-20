using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CustomerSupport.BusinessObjects
{
    public partial class TicketProcessEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CustomerSupport.BusinessObjects.TicketProcessEditor";

        public TicketProcessEditorAttribute()
            : base(Key)
        {
        }
    }
}

