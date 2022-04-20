using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
using System.Reflection;


namespace CustomerSupport.Modules.FEGen.Helpers
{
    public class HtmlComponent
    {

        public static void CreateHTMLComponent(ObjectParser objPrsr, XmlDocument xmlDoc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {
            XmlNode xmlNode = xmlDoc.FirstChild.AppendChild(HtmlComponent.FormGroup(xmlDoc, classType, className, property, attrs));
            xmlNode.AppendChild(HtmlComponent.Label(xmlDoc, classType, className, property, attrs));

            if (objPrsr.IsLookUp(classType, className, property.Name) || objPrsr.HasAmbientValueAttr(classType, className, property.Name))
            {


                XmlNode ulXml = xmlNode.AppendChild(HtmlComponent.ULforComboBox(xmlDoc, classType, className, property, attrs));
                XmlNode liXml_1 = ulXml.AppendChild(HtmlComponent.LIForComboBox(xmlDoc, classType, className, property, attrs, true));
                XmlNode liXml_2 = ulXml.AppendChild(HtmlComponent.LIForComboBox(xmlDoc, classType, className, property, attrs, false));
                liXml_1.AppendChild(HtmlComponent.ComboBox(xmlDoc, classType, className, property, attrs));
                liXml_2.AppendChild(HtmlComponent.InplaceAddButton(xmlDoc, classType, className, property, attrs));
                

            }
            else if (objPrsr.IsDate(classType, className, property)){
                xmlNode.AppendChild(HtmlComponent.InputDate(xmlDoc, classType, className, property, attrs));
            }
            else
                xmlNode.AppendChild(HtmlComponent.InputTextBox(xmlDoc, classType, className, property, attrs));

        }


        public static void CreateHTMLComponentForFilter(ObjectParser objPrsr, XmlDocument xmlDoc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {
            XmlNode xmlNode = xmlDoc.FirstChild.AppendChild(HtmlComponent.FormGroup(xmlDoc, classType, className, property, attrs));
            xmlNode.AppendChild(HtmlComponent.Label(xmlDoc, classType, className, property, attrs));


            if (objPrsr.IsDate(classType, className, property))
            {
                xmlNode.AppendChild(HtmlComponent.InputDate(xmlDoc, classType, className, property, attrs));
            }
            else
            {
                xmlNode.AppendChild(HtmlComponent.DropDownList(xmlDoc, classType, className, property, attrs));
            }
                

        }



        private static XmlAttribute CreateAttribute(XmlDocument xmlDoc, string name, string value)
        {
            XmlAttribute attribute = xmlDoc.CreateAttribute(name);
            attribute.Value = value;

            return attribute;
        }


        public static XmlNode Label(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {
            XmlNode rootNode = doc.CreateElement("label");

            rootNode.InnerText = Utilities.FieldNameFormatting(property.Name, attrs);


            return rootNode;

        }

        public static XmlNode FormGroup(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {
            XmlNode rootNode = doc.CreateElement("div");


      

            rootNode.Attributes.Append(CreateAttribute(doc, "class", String.Format("{0}{1}", "form-group", 
                (AttributeParser.HasHidden(attrs) ? " hidden" : "" ))));


            return rootNode;

        }

        public static XmlNode InputGroup(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {
            XmlNode rootNode = doc.CreateElement("div");

            rootNode.Attributes.Append(CreateAttribute(doc, "class", "input-group"));
            //rootNode.Attributes.Append(CreateAttribute(doc, "style", "width:100%"));


            return rootNode;

        }

        public static XmlNode InputGroupAddOn(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {

            XmlNode rootNode = doc.CreateElement("span");

            rootNode.Attributes.Append(CreateAttribute(doc, "class", "input-group-addon"));
            rootNode.Attributes.Append(CreateAttribute(doc, "id", "iconTextButton"));
            rootNode.Attributes.Append(CreateAttribute(doc, "style", "width:.815cm;display:inline-block"));


            return rootNode;

        }


        public static XmlNode ButonForInputGroupButton(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {

            XmlNode rootNode = doc.CreateElement("button");

            rootNode.Attributes.Append(CreateAttribute(doc, "type", "button"));
            rootNode.Attributes.Append(CreateAttribute(doc, "class", "btn btn-default"));
            rootNode.Attributes.Append(CreateAttribute(doc, "id", "iconTextButton"));
            rootNode.Attributes.Append(CreateAttribute(doc, "style", "display:inline-block;padding:1px 24px 1px 7px;border-left:none"));


            return rootNode;

        }


        public static XmlNode InputTextBox(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {

                     XmlNode rootNode = doc.CreateElement("input");

            XmlAttribute attribute = doc.CreateAttribute("type");
            attribute.Value = "text";
            rootNode.Attributes.Append(attribute);

            rootNode.Attributes.Append(CreateAttribute(doc, "class", "form-control k-textbox"));
            rootNode.Attributes.Append(CreateAttribute(doc, "style", "width:100%"));


            rootNode.Attributes.Append(CreateAttribute(doc, "data-bind", String.Format("value:{0}", VariableNamings.GetFieldId(className, property.Name))));


            return rootNode;

        }

        public static XmlNode InputDate(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {
            XmlNode rootNode = doc.CreateElement("input");

            rootNode.Attributes.Append(CreateAttribute(doc, "class", "form-control"));
            rootNode.Attributes.Append(CreateAttribute(doc, "data-role", "datepicker"));

            rootNode.Attributes.Append(CreateAttribute(doc, "style", "width:100%"));


            rootNode.Attributes.Append(CreateAttribute(doc, "data-bind", String.Format("value:{0}", VariableNamings.GetFieldId(className, property.Name))));


            return rootNode;

        }

        public static XmlNode DropDownList(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {

            XmlNode rootNode = doc.CreateElement("input");

            XmlAttribute attribute = doc.CreateAttribute("type");
            attribute.Value = "text";
            rootNode.Attributes.Append(attribute);

            attribute = doc.CreateAttribute("data-role");
            attribute.Value = "dropdownlist";
            rootNode.Attributes.Append(attribute);

            rootNode.Attributes.Append(CreateAttribute(doc, "class", "form-control"));

            //rootNode.Attributes.Append(CreateAttribute(doc, "style", "width:88.705%"));

            //*********** This is commented out because we want to remove events attribute for Filter
            /*
            rootNode.Attributes.Append(CreateAttribute(doc, "data-bind",
              Utilities.FormatOutput(String.Format("value:{0},source:{1},events:[change:{2}]",
                    VariableNamings.GetFieldId(className, property.Name),
                    VariableNamings.GetDataSourceName(className, property.Name),
                    VariableNamings.GetFieldValueChangedName(className, property.Name)
                    ))));
                    */

            rootNode.Attributes.Append(CreateAttribute(doc, "data-bind",
        Utilities.FormatOutput(String.Format("value:{0},source:{1}",
              VariableNamings.GetFieldId(className, property.Name),
              VariableNamings.GetDataSourceName(className, property.Name)
              ))));


            rootNode.Attributes.Append(CreateAttribute(doc, "data-text-field", AttributeParser.GetLookupFieldName(attrs)));

            rootNode.Attributes.Append(CreateAttribute(doc, "data-value-field", AttributeParser.GetLookupValueName(attrs)));

            rootNode.Attributes.Append(CreateAttribute(doc, "data-option-label", ". . ."));


            return rootNode;

        }



        public static XmlNode  ComboBox(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {

            XmlNode rootNode = doc.CreateElement("input");

            XmlAttribute attribute = doc.CreateAttribute("type");
            attribute.Value = "text";
            rootNode.Attributes.Append(attribute);

            attribute = doc.CreateAttribute("data-role");
            attribute.Value = "combobox";
            rootNode.Attributes.Append(attribute);

            rootNode.Attributes.Append(CreateAttribute(doc, "class", "form-control"));

            //rootNode.Attributes.Append(CreateAttribute(doc, "style", "width:88.705%"));

            rootNode.Attributes.Append(CreateAttribute(doc, "data-bind", 
              Utilities.FormatOutput(String.Format("value:{0},source:{1},events:[change:{2}]", 
                    VariableNamings.GetFieldId(className, property.Name),
                    VariableNamings.GetDataSourceName(className, property.Name),
                    VariableNamings.GetFieldValueChangedName(className, property.Name)
                    ))));


            rootNode.Attributes.Append(CreateAttribute(doc, "data-text-field", AttributeParser.GetLookupFieldName(attrs)));

            rootNode.Attributes.Append(CreateAttribute(doc, "data-value-field", AttributeParser.GetLookupValueName(attrs)));


            return rootNode;

        }


        public static XmlNode ULforComboBox(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {
            XmlNode rootNode = doc.CreateElement("ul");



            rootNode.Attributes.Append(CreateAttribute(doc, "class", "ul-dropdown"));


            return rootNode;

        }

        public static XmlNode LIForComboBox(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs, bool classAttr)
        {
            XmlNode rootNode = doc.CreateElement("li");

            if(classAttr)
            rootNode.Attributes.Append(CreateAttribute(doc, "class", "list-dropdown"));


            return rootNode;

        }


        public static XmlNode InplaceAddButton(XmlDocument doc, string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {

            XmlNode rootNode = doc.CreateElement("span");

            rootNode.Attributes.Append(CreateAttribute(doc, "style", "border-left:none"));
            rootNode.Attributes.Append(CreateAttribute(doc, "id", VariableNamings.InPlaceAddButtonId(className, property.Name)));


            return rootNode;


        }


    }
}