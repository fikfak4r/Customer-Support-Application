using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;
using System.ComponentModel;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using CustomerSupport.Modules.FEGen.Helpers.Attributes;


namespace CustomerSupport.Modules.FEGen.Helpers
{

 
    public class AttributeParser
    {

        private Attribute attr;

        public AttributeParser(Attribute attr)
        {
            this.attr = attr;
        }

        
        public static String GetName(HashSet<Attribute> attrs)
        {

            foreach (Attribute attr in attrs)
            {

                if (attr is RequiredAttribute)
                {
                    return RequiredAttr.GetName();
                }
                else if (attr is ForeignKeyAttribute)
                {
                    return ForeignKeyAttr.GetName();
                }
                else if (attr is LookupEditorAttribute)
                {
                    return LookUpEditorAttr.GetName();
                }
                else if (attr is DisplayNameAttribute)
                {
                    return DisplayNameAttr.GetName();
                }

            }

            return null;

        }

        public static String GetLookupKey(HashSet<Attribute> attrs)
        {

            foreach (Attribute attr in attrs)
            {
                if (attr is LookupEditorAttribute)
                    return LookUpEditorAttr.GetLookupKey((LookupEditorAttribute)attr);
            }

            return null;
        }

        public static String GetAmbientValue(HashSet<Attribute> attrs)
        {

            foreach (Attribute attr in attrs)
            {
                if (attr is AmbientValueAttribute)
                    return AmbientValueAttr.GetValue((AmbientValueAttribute)attr).ToString();
            }

            return null;
        }


        public static string GetDefaultValue(PropertyInfo property, HashSet<Attribute> attrs)
        {
            if (property.PropertyType == typeof(DateTime?) || property.PropertyType == typeof(DateTime))
                return "new Date()";
      

            return "null";
        }


        public static String GetLookupFieldName(HashSet<Attribute> attrs)
        {

            foreach (Attribute attr in attrs)
            {
                if (attr is LookupEditorAttribute)
                    return LookUpEditorAttr.GetFilterField((LookupEditorAttribute)attr);
            }

            return null;
        }


        public static String GetLookupValueName(HashSet<Attribute> attrs)
        {

            foreach (Attribute attr in attrs)
            {
                if (attr is LookupEditorAttribute)
                    return LookUpEditorAttr.GetFilterValue((LookupEditorAttribute)attr);
            }

            return null;
        }

        public static bool HasHidden(HashSet<Attribute> attrs)
        {

            foreach (Attribute attr in attrs)
            {
                if (attr is HiddenAttribute)
                    return true;
            }

            return false;
        }


    }
}