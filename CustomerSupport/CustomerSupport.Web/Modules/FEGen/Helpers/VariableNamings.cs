using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CustomerSupport.Modules.FEGen.Helpers
{
    public class VariableNamings
    {

        public static string GetLookupListName(string className, string propertyName)
        {
            return propertyName + "List";
        }

        public static string GetDataSourceName(string className, string propertyName)
        {
            return propertyName + "dtSrc";
        }

        public static string GetFieldId(string className, string propertyName)
        {
            return propertyName + "Fld";
        }


        public static string GetFieldValueChangedName(string className, string propertyName)
        {
            return GetFieldId(className, propertyName) + "Changed";
        }

        public static string GetFilterFieldName(string className, string propertyName)
        {
            return propertyName + "Fld";
        }

        public static string GetFirstLevelMessengerName(string classType, string className) {

            return className + "Messenger";

        }

        public static string GetFilterMessengerName(string classType, string className)
        {

            return className + "FilterMessenger";

        }

        public static string InPlaceAddButtonId(string className, string propertyName)
        {
            return propertyName + "InplaceBtn";
        }


        public static string InPlaceAddButtonVariable(string className, string propertyName)
        {
            return propertyName + "InplaceBtnVar";
        }


    }
}