using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CustomerSupport.BusinessObjects
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CustomerSupport.BusinessObjects.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}

