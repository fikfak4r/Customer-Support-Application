using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;
using Serenity.ComponentModel;
using System.ComponentModel;


namespace CustomerSupport.Modules.FEGen.Helpers.Attributes
{
    public class DisplayNameAttr
    {


        public static string GetName()
        {
            return "DisplayName";
        }

        public static string GetDisplayName(DisplayNameAttribute dna)
        {
            return dna.DisplayName;
        }

    }
}