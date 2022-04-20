using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;
using System.Text.RegularExpressions;


namespace CustomerSupport.Modules.FEGen.Helpers
{
    public class Utilities
    {

        public static String FieldNameFormatting(string fieldName, HashSet<Attribute> attrs)
        {
            var arr = Regex.Matches(fieldName, @"[A-Z]+(?=[A-Z][a-z]+)|\d|[A-Z][a-z]+").Cast<Match>().Select(m => m.Value).ToArray();

            return String.Join(" ", arr);
        }

        public static string GetKendoDataSource(ObjectParser objPrsr, string messengerContext, string classType, string className, Type type_row_form_column)
        {

            string kendoDataSourceFields = "", includeColumns = "";

            string afterSaveIdentityName = String.Equals(classType, "Row") ? "Filter-" : "";

            string messengerName = String.Equals(messengerContext, "FilterContext") ? VariableNamings.GetFilterMessengerName(classType, className) : VariableNamings.GetFirstLevelMessengerName(classType, className);

            String format = "\n{1}: [ type: '{2}' ]";
            String format1 = "{0},\n{1}: [ type: '{2}' ]";

            foreach (PropertyInfo propInfo in objPrsr.GetProperties(type_row_form_column))
            {

                //Here form a Row class type, we only get those fields with a FilterAttribute on them.
                if (String.Equals(classType, "Row") && !objPrsr.IsFilterField(classType, className, propInfo.Name))
                {
                    continue;
                }


                //Gets the attributes for the property in question
                HashSet<Attribute> attrs = objPrsr.GetAttributes(classType, className, propInfo.Name);

                kendoDataSourceFields = String.Format((kendoDataSourceFields == "") ? format : format1,
                                        kendoDataSourceFields,
                                        propInfo.Name,
                                        "string");

                if (objPrsr.HasAmbientValueAttr(classType, className, propInfo.Name) && (AmbientNames.GetAmbientName(AttributeParser.GetAmbientValue(attrs)) == AmbientNames.ForeignField))
                {
                    includeColumns = String.Format((includeColumns == "") ? "'{1}'" : "{0}, '{1}'",
                                     includeColumns,
                                     propInfo.Name);
                }

            }//Ends the foreach loop.


            includeColumns = (includeColumns == "") ? "null" : String.Format(@"\[{0}\]", includeColumns);


            return String.Format(@"
private KendoDataSource(): void [
            this.kendoDataSrc = new kendo.data.DataSource([
                schema: [
                    //data: function (response) [ alert(JSON.stringify(response)); return response.Entities; ],
                    data: 'Entities',
                    total: 'TotalCount',
                    model: [
                        id: '{5}',
                        fields: [
                            {0}
                        ],
                    ]
                ],
                batch: false,
                pageSize: 5,
                transport: [
                    read: function(options)[


                        if (options.data.Criteria != undefined) [
                            {3}Service.List([Criteria: options.data.Criteria, IncludeColumns: {1}],
                                res => [
                                    options.success(res);
                                    {4}.MessengerClass.bondClass.AfterRead('{2}{3}-Kendo-Data-Source', res)
                                ])
                        ]
                        else if (options.data.EqualityFilter != undefined) [

                            {3}Service.List([EqualityFilter: options.data.EqualityFilter, IncludeColumns: {1}],
                                res => [

                                    options.success(res);
                                    {4}.MessengerClass.bondClass.AfterRead('{2}{3}-Kendo-Data-Source', res)

                                ])
                        ]
                        else [
                            {3}Service.List([IncludeColumns: {1}],
                                res => [
                                    options.success(res);
                                    {4}.MessengerClass.bondClass.AfterRead('{2}{3}-Kendo-Data-Source', res)

                                ])
                        ]

                    ]
                ],
            ])//Ends
]


", kendoDataSourceFields, includeColumns, afterSaveIdentityName, className, messengerName, objPrsr.GetPrimaryKey(classType, className));





        }


        public static string GetFieldValueChangedHandlerSnippet(string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {

            return  String.Format("{0}:{1}",
               VariableNamings.GetFieldValueChangedName(className, property.Name),
               String.Format("function ()[ {0}Messenger.MessengerClass.bondClass.OnFieldValueChanged('{1}', {0}Messenger.MessengerClass, this.get('{1}'))]", 
               className,
               VariableNamings.GetFieldId(className, property.Name)
               ));

        }



        public static string FormatOutput(string str)
        {
            return str.Replace("[", "{").Replace("]", "}").Replace(@"\{", "[").Replace(@"\}", "]");
        }


    }
}