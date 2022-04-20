using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CustomerSupport.BusinessObjects
{
    public partial class KnowledgeBaseLocationsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CustomerSupport.BusinessObjects.KnowledgeBaseLocationsEditor";

        public KnowledgeBaseLocationsEditorAttribute()
            : base(Key)
        {
        }
    }
}

