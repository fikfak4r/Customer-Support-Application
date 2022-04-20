using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;
using System.Xml;

namespace CustomerSupport.Modules.FEGen.Helpers
{

    public class FilterObservable
    {

        string observ = "";
        string getObservableObj = "";
        string getRequestCriteriaObj = "";
        string setObservableObj = "";
        string getClassRowObj = "";


        ObjectParser objPrsr;
        XmlDocument xmlDoc;
        public FilterObservable(ObjectParser objPrsr, XmlDocument xmlDoc)
        {
            this.objPrsr = objPrsr;
            this.xmlDoc = xmlDoc;
        }


        public void SetProperty(string propertyClassType, string className, PropertyInfo property)
        {

            if (objPrsr.IsFilterField(propertyClassType, className, property.Name))
            {
                String format = "\n{1}:{2}";
                String format1 = "{0},\n{1}:{2}";

                //Gets the attributes for the property in question
                HashSet<Attribute> attrs = objPrsr.GetAttributes(propertyClassType, className, property.Name);


                //Creates the value field
                InitializeField(propertyClassType, className, property, format, format1, attrs);

                SetObservableObj(className, property, format, format1);

                GetObservableObj(className, property, format, format1, attrs);

                GetRequestCriteriaObj(className, property, attrs);

                GetClassRowObj(className, property, format, format1);

                CreateHTMLComponent(propertyClassType, className, property, attrs);


            }
        }


        public void CreateHTMLComponent(string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {

            HtmlComponent.CreateHTMLComponentForFilter(objPrsr, xmlDoc, classType, className, property, attrs);

        }


        private void InitializeField(string classType, string className, PropertyInfo property, string format, string format1, HashSet<Attribute> attrs)
        {

            if (objPrsr.IsLookUp(classType, className, property.Name))
            {

                //Creates the dataSource
                observ = String.Format((observ == "") ? format : format1,
                    observ,
                    VariableNamings.GetDataSourceName(className, property.Name),
                    String.Format("Q.getLookup('{0}').items", AttributeParser.GetLookupKey(attrs)));

            }
            else if (objPrsr.HasAmbientValueAttr(classType, className, property.Name) && (AmbientNames.GetAmbientName(AttributeParser.GetAmbientValue(attrs)) == AmbientNames.DataSource))
            {

                //Creates the dataSource
                observ = String.Format((observ == "") ? format : format1,
                    observ,
                    VariableNamings.GetDataSourceName(className, property.Name),
                    String.Format("{0}", AmbientNames.GetAmbientValue(AttributeParser.GetAmbientValue(attrs))));

            }


            observ = String.Format((observ == "") ? format : format1,
           observ,
           VariableNamings.GetFilterFieldName(className, property.Name),
           AttributeParser.GetDefaultValue(property, attrs));


        }

        private void GetObservableObj(string className, PropertyInfo property, string format, string format1, HashSet<Attribute> attrs)
        {

            string filterValueName = AttributeParser.GetLookupValueName(attrs);
            getObservableObj = String.Format((getObservableObj == "") ? format : format1,
            getObservableObj,
            //VariableNamings.GetFilterFieldName(className, property.Name),
             property.Name,
            String.Format("this.get('{0}') != null ? this.get('{0}'){1} : null", 
            VariableNamings.GetFilterFieldName(className, property.Name),
            filterValueName != null ? "." + filterValueName : ""
            )
            );
        }

        private void GetRequestCriteriaObj(string className, PropertyInfo property, HashSet<Attribute> attrs)
        {
            getRequestCriteriaObj += GetCriterion(className, property, attrs);
        }

        private string GetCriterion(string className, PropertyInfo property, HashSet<Attribute> attrs)
        {

            string filterValueName = AttributeParser.GetLookupValueName(attrs);

           return  String.Format(@"
                    if (this.get('{0}') != null && this.get('{0}') != undefined)
                    [
                      requestQry =  this.assemble(requestQry, \\[Serenity.Criteria('{1}'), '=', this.get('{0}'){2}\\])
                    ]

                    ", VariableNamings.GetFilterFieldName(className, property.Name), property.Name,
                        (filterValueName) != null ? "." + filterValueName : ""
                    );

        }


        private void SetObservableObj(string className, PropertyInfo property, string format, string format1)
        {
            setObservableObj = String.Format((setObservableObj == "") ? "\n{1}" : "{0}\n{1}",
            setObservableObj,
            //VariableNamings.GetFilterFieldName(className, property.Name),
            String.Format("this.set('{0}', obj.Entity.{1}) ", VariableNamings.GetFilterFieldName(className, property.Name), property.Name)
            );
        }

        private void GetClassRowObj(string className, PropertyInfo property, string format, string format1)
        {
            getClassRowObj = String.Format((getClassRowObj == "") ? format : format1,
            getClassRowObj,
            //VariableNamings.GetFilterFieldName(className, property.Name),
             property.Name,
            String.Format("obj.{0}",property.Name)
            );
        }

        public string GetClassRowObj() { return getClassRowObj; }

        public string GetObservable(string classType, string className)
        {
            return ObjectParser.FormatOutput(String.Format(@"this.filterObserv = kendo.observable
                            (
                                [
                                        {1},
    
getObject: function () [
                    return[
{2}
]],

                getRequestCriteriaObject: function () [

                    var requestQry = \\[\\]
                    {5}

return requestQry;

],
assemble: function (arrRef, obj) [
                    
            if (arrRef.length == 0)
            [
                arrRef.push(obj)
                return arrRef;
            ]
            else if (arrRef.length == 1) [
                arrRef.push('and')
                arrRef.push(obj)
                return arrRef;
            ]
            else [

                var newArr1 = \\[\\]
newArr1.push(\\[arrRef\\[0\\], arrRef\\[1\\], arrRef\\[2\\]\\])
                newArr1.push('and')
                newArr1.push(obj)

                return newArr1;
            ]
                ],

setObject: function (obj) [
                     {3}
],


                                ]
                            );


", 
                            className, 
                            observ, 
                            getObservableObj, 
                            setObservableObj,
                            className.ToLower(),
                            getRequestCriteriaObj
                            )
                      
                            );
        }


        

    }
}