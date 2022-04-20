using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;
using System.ComponentModel;


namespace CustomerSupport.Modules.FEGen.Helpers.Attributes
{
    public class AmbientValueAttr
    {

        public static object GetValue(AmbientValueAttribute ava)
        {
            return ava.Value;
        }

    }
}