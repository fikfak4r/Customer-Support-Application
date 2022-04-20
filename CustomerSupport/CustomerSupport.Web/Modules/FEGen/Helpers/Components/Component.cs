using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;
using System.Xml;

namespace CustomerSupport.Modules.FEGen.Helpers.Components
{
    public class Component
    {

        public static string Required(XmlNode inputNode, PropertyInfo propertyInfo)
        {

            string inputClick = String.Format(@"
             if($('#{0}').val() == undefined || $('#{0}').val() == '')[[alert('Me required')]]
                ",  GetId(propertyInfo));

            return FormatOutput(inputClick);

        }

        public static string ButtonClick(XmlNode buttonNode)
        {
            string buttonClick =
                String.Format(@"
$('#{0}').click(function {0}()[[]]);
", buttonNode.Attributes["id"].Value);

            return FormatOutput(buttonClick);
        }

        public static string GetId(PropertyInfo propertyInfo)
        {
            return propertyInfo.Name.ToLower();
        }


        public static string FormatOutput(string content)
        {
            return content.Replace("[[", "{").Replace("]]", "}");
        }

    }
}