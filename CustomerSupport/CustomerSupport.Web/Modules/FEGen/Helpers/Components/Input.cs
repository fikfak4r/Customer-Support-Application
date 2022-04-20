using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;
using System.Xml;
using System.ComponentModel;
using Serenity.ComponentModel;

namespace CustomerSupport.Modules.FEGen.Helpers.Components
{
    public class Input : Component
    {
        public static string ParseInput(XmlNode inputNode, PropertyInfo inputProperty, HashSet<Attribute> inputAttrs)
        {
            string snippet = "";
            foreach(Attribute attr in inputAttrs)
            {
                
                if(attr is RequiredAttribute)
                {
                   snippet =  Required(inputNode, inputProperty);
                }
            }//Ends the for loop


            return snippet;

        }
    }
}