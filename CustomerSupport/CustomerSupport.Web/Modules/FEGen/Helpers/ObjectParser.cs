using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;
using CustomerSupport.BusinessObjects.Entities;
using Serenity.ComponentModel;
using System.ComponentModel;
using Serenity.Data.Mapping;
using CustomerSupport.Modules.FEGen.Helpers.Attributes;

namespace CustomerSupport.Modules.FEGen.Helpers
{
    public class ObjectParser
    {
        Type[] assemblyTypes;
        public ObjectParser()
        {
            Assembly assembly = Assembly.GetExecutingAssembly();
            assemblyTypes = assembly.GetTypes();

        }


        /// <summary>
        /// Returns a PropertyInfo array sorted in alphabetical order
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        public PropertyInfo[] GetProperties(Type type)
        {

            PropertyInfo[] properties = type.GetProperties(BindingFlags.Instance | BindingFlags.Public);
            Array.Sort(properties, delegate (PropertyInfo prop1, PropertyInfo prop2) { return prop1.Name.CompareTo(prop2.Name); });

            return properties;

        }

        public PropertyInfo[] GetProperties(string classType, string className)
        {

            for (int x = 0; x < assemblyTypes.Length; x++)
            {
                if (assemblyTypes[x].Name.ToLower() == (className.ToLower() + classType).ToLower())
                {
                    return GetProperties(assemblyTypes[x]);
          
                }
            }//Ends the outer for loop.

            return null;

        }



        public IEnumerable<Attribute> GetAttributes(PropertyInfo propertyInfo)
        {
            return propertyInfo.GetCustomAttributes();
        }

        public HashSet<Attribute> GetAttributes(string propertyClassType, string propertyClass, string propertyName)
        {
            PropertyInfo formProperty = GetProperty(propertyClassType, propertyClass, propertyName);
            PropertyInfo rowProperty = GetProperty("Row", propertyClass, propertyName);

            HashSet<Attribute> attrs = new HashSet<Attribute>();

            IEnumerable<Attribute> formAttr = GetAttributes(formProperty);
            IEnumerable<Attribute> rowAttr = GetAttributes(rowProperty);

            foreach (Attribute attr in formAttr)
            {
                attrs.Add(attr);
            }

            foreach (Attribute attr in rowAttr)
            {
                attrs.Add(attr);
            }

            return attrs;
        }

        public PropertyInfo GetProperty(string propertyClassType, string propertyClass, string propertyName)
        {

            PropertyInfo propertyInfo = null;
            PropertyInfo[] propertyInfoList = null;

            for (int x = 0; x < assemblyTypes.Length; x++)
            {
                if (assemblyTypes[x].Name.ToLower() == (propertyClass.ToLower() + propertyClassType).ToLower())
                {
                    propertyInfoList = GetProperties(assemblyTypes[x]);
                    for (int y = 0; y < propertyInfoList.Length; y++)
                    {
                        if (propertyInfoList[y].Name.ToLower() == propertyName.ToLower())
                        {
                            propertyInfo = propertyInfoList[y];
                            break;
                        }

                    }
                    break;
                }
            }//Ends the outer for loop.

            return propertyInfo;

        }


        public bool IsLookUp(string propertyClassType, string propertyClass, string propertyName) {

            HashSet<Attribute> attrs = GetAttributes(propertyClassType, propertyClass, propertyName);

            foreach (Attribute attr in attrs)
                if (attr is LookupEditorAttribute)
                    return true;

            return false;

        }

        public bool IsDate(string propertyClassType, string propertyClass, PropertyInfo propertyInfo)
        {
            return (propertyInfo.PropertyType == typeof(DateTime) || propertyInfo.PropertyType == typeof(DateTime?)) ? true : false;
        }


        public bool IsFilterField(string propertyClassType, string propertyClass, string propertyName)
        {

            HashSet<Attribute> attrs = GetAttributes(propertyClassType, propertyClass, propertyName);

            foreach (Attribute attr in attrs)
                if (attr is QuickFilterAttribute)
                    return true;

            return false;

        }


        public string GetPrimaryKey(string classType, string className)
        {
            string primaryKey = "";

            PropertyInfo[] rowProperty = GetProperties(classType, className);


            foreach (PropertyInfo prop in rowProperty)
            {

                IEnumerable<Attribute> attrs = GetAttributes(classType, className, prop.Name);

                foreach (Attribute attr in attrs)
                {
                    if (attr is IdentityAttribute)
                    {
                        primaryKey = prop.Name;
                        break;
                    }
                }

                if (!String.IsNullOrEmpty(primaryKey))
                    break;

            }//Ends the foreach loop

            return primaryKey;
        }


        public bool HasAmbientValueAttr(string propertyClassType, string propertyClass, string propertyName)
        {

            HashSet<Attribute> attrs = GetAttributes(propertyClassType, propertyClass, propertyName);

            foreach (Attribute attr in attrs)
                if (attr is AmbientValueAttribute)
                    return true;

            return false;

        }


        public static string FormatOutput(string str)
        {
            return str.Replace("[", "{").Replace("]", "}").Replace(@"\{", "[").Replace(@"\}", "]");
        }

    }
}