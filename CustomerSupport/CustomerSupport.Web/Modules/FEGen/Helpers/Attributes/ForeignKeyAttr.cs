using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;
using System.Data;


namespace CustomerSupport.Modules.FEGen.Helpers.Attributes
{
    public class ForeignKeyAttr
    {

        public static string GetName()
        {
            return "ForeignKey";
        }


        public static string GetTable(ForeignKeyAttribute fka)
        {
            return fka.Table;
        }

        public static string GetField(ForeignKeyAttribute fka)
        {
            return fka.Field;
        }


    }
}