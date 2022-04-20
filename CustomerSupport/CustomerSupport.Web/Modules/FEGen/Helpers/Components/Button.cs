using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;

namespace CustomerSupport.Modules.FEGen.Helpers.Components
{
    public class Button : Component
    {

        new public static string  ButtonClick(XmlNode buttonNode)
        {
            return Component.ButtonClick(buttonNode);
        }

    }
}