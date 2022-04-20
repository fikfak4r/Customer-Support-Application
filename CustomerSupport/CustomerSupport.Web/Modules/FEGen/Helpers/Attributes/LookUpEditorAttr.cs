using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;
using Serenity.ComponentModel;


namespace CustomerSupport.Modules.FEGen.Helpers.Attributes
{
    public class LookUpEditorAttr
    {

        public static string GetName()
        {
            return "LookUpEditor";
        }

        public static string GetLookupKey(LookupEditorAttribute lea)
        {
            return lea.LookupKey;
        }

        public static string GetFilterField(LookupEditorAttribute lea)
        {
            return (lea.FilterValue != null) ? lea.FilterValue.ToString() : null;
        }


        public static string GetFilterValue(LookupEditorAttribute lea)
        {
            return (lea.FilterField) != null ? lea.FilterField.ToString() : null;
        }

    }
}