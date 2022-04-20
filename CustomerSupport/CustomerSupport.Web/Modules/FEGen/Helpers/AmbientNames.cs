using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CustomerSupport.Modules.FEGen.Helpers
{
    public class AmbientNames
    {

        public static string DataSource = "DataSource";
        public static string ForeignKey = "ForeignKey";
        public static string ForeignField = "ForeignField";

        public static string GetAmbientName(string ambientStringObj)
        {
            if (!ambientStringObj.Contains(":"))
                return ambientStringObj;

            return ambientStringObj.Split(new string[] { ":" }, StringSplitOptions.RemoveEmptyEntries)[0];

        }

        public static string GetAmbientValue(string ambientStringObj)
        {
            if (!ambientStringObj.Contains(":"))
                return ambientStringObj;

            return ambientStringObj.Split(new string[] { ":" }, StringSplitOptions.RemoveEmptyEntries)[1];

        }

    }
}