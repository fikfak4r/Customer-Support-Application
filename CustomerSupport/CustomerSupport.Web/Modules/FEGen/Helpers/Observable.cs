using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;
using System.Xml;

namespace CustomerSupport.Modules.FEGen.Helpers
{

    public class Observable
    {

        string observ = "";
        string getObservableObj = "";
        string setObservableObj = "";
        string getClassRowObj = "";


        ObjectParser objPrsr;
        XmlDocument xmlDoc;
        public Observable(ObjectParser objPrsr, XmlDocument xmlDoc)
        {
            this.objPrsr = objPrsr;
            this.xmlDoc = xmlDoc;
        }


        public void SetProperty(string propertyClassType, string className, PropertyInfo property)
        {
            String format = "\n{1}:{2}";
            String format1 = "{0},\n{1}:{2}";

            //Gets the attributes for the property in question
            HashSet<Attribute> attrs = objPrsr.GetAttributes(propertyClassType, className, property.Name);



            //Creates the value field
            InitializeField(propertyClassType, className, property, format, format1, attrs);

            SetObservableObj(className, property, format, format1);

            GetObservableObj(propertyClassType, className, property, format, format1, attrs);

            GetClassRowObj(className, property, format, format1);

            CreateHTMLComponent(propertyClassType, className, property, attrs);



        }


        public void CreateHTMLComponent(string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {
            HtmlComponent.CreateHTMLComponent(objPrsr, xmlDoc, classType, className, property, attrs);
        }


        private void InitializeField(string classType, string className, PropertyInfo property, string format, string format1, HashSet<Attribute> attrs)
        {



            observ = String.Format((observ == "") ? format : format1,
            observ,
            VariableNamings.GetFieldId(className, property.Name),
            AttributeParser.GetDefaultValue(property, attrs));

            if (objPrsr.IsLookUp(classType, className, property.Name))
            {

                //Creates the dataSource
                observ = String.Format((observ == "") ? format : format1,
                         observ,
                         VariableNamings.GetDataSourceName(className, property.Name),
                         String.Format("Q.getLookup('{0}').items", AttributeParser.GetLookupKey(attrs)));

                //Creates the Handler helper on a combobox value changed
               observ = String.Format((observ == "") ? "{0}" : "{0},\r\n{1}", observ, Utilities.GetFieldValueChangedHandlerSnippet(classType, className, property, attrs));


            }
            else if (objPrsr.HasAmbientValueAttr(classType, className, property.Name) && (AmbientNames.GetAmbientName(AttributeParser.GetAmbientValue(attrs)) == AmbientNames.DataSource))
            {
                //Creates the dataSource
                observ = String.Format((observ == "") ? format : format1,
                    observ,
                    VariableNamings.GetDataSourceName(className, property.Name),
                    String.Format("{0}", AmbientNames.GetAmbientValue(AttributeParser.GetAmbientValue(attrs))));

                //Creates the Handler helper on a combobox value changed
                observ = String.Format((observ == "") ? "{0}" : "{0},\r\n{1}", observ, Utilities.GetFieldValueChangedHandlerSnippet(classType, className, property, attrs));
            }


        }

        private void GetObservableObj(string classType, string className, PropertyInfo property, string format, string format1, HashSet<Attribute> attrs)
        {

            string filterValueName = AttributeParser.GetLookupValueName(attrs);

            getObservableObj = String.Format((getObservableObj == "") ? format : format1,
            getObservableObj,
            property.Name,
            //(property.Name == objPrsr.GetPrimaryKey(classType, className)) ? " null" : 
            String.Format("this.get('{0}') != null ? this.get('{0}'){1} : null", 
            VariableNamings.GetFieldId(className, property.Name),
            (filterValueName) != null ? "." + filterValueName : ""
            
            ));
        }

        private void SetObservableObj(string className, PropertyInfo property, string format, string format1)
        {
            setObservableObj = String.Format((setObservableObj == "") ? "\n{1}" : "{0}\n{1}",
            setObservableObj,
            //VariableNamings.GetFieldName(className, property.Name),
            String.Format("this.set('{0}', (obj != null && obj.hasOwnProperty('{1}')) ? obj.{1} : null) ", VariableNamings.GetFieldId(className, property.Name), property.Name)
            );
        }

        private void GetClassRowObj(string className, PropertyInfo property, string format, string format1)
        {
            getClassRowObj = String.Format((getClassRowObj == "") ? format : format1,
            getClassRowObj,
            //VariableNamings.GetFieldName(className, property.Name),
             property.Name,
            String.Format("obj.{0}",property.Name)
            );
        }

        public string GetClassRowObj() { return getClassRowObj; }

        public string GetObservable(string classType, string className)
        {
            return ObjectParser.FormatOutput(String.Format(@"this.observ = kendo.observable
                            (
                                [
                                        {1},
    
getObject: function () [
                    return[ {2}
]],
setObject: function (obj) [
                     {3}
],
 submit: function () [
{0}Service.Create([Entity:[{2}]], res => [ this.set('{4}', res.EntityId); {5}.MessengerClass.bondClass.AfterSave('{5}', res.EntityId, {5}.MessengerClass);])
    ]
       ]
                            );


", 
                            className, 
                            observ, 
                            getObservableObj, 
                            setObservableObj, 
                            VariableNamings.GetFieldId(className, objPrsr.GetPrimaryKey(classType, className)), 
                            VariableNamings.GetFirstLevelMessengerName(classType, className) 

                            
                            ));
        }


        

    }
}