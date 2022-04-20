using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
using CustomerSupport.Modules.FEGen.Helpers.Components;
using System.IO;



namespace CustomerSupport.Modules.FEGen.Helpers
{
    public class XmlParser
    {

        string output;
        XmlDocument xmlDoc;
        ObjectParser objParser;
        public XmlNode parentNode;

        public XmlParser()
        {
            xmlDoc = GetXmlDocument();
            objParser = new ObjectParser();
            parentNode = xmlDoc.FirstChild;
        }

        private int itemCount;
        private int index;
        LinkedList<XmlNode> linkedNodes;
        Queue<XmlNode> nodeQueue;





        public void Start(XmlNode xNode)
        {

            XmlNode currentNode = null;

            if (xNode.Name == "input")
            {
                //output += Input.ParseInput(xNode,
                //             objParser.GetProperty("Row", "SMS", "message")
                //             //objParser.GetAttributes("SMS", "message")
                //             );
            }
            else if (xNode.Name == "select")
            {

            }
            else if (xNode.Name == "textarea")
            {

            }
            else if (xNode.Name == "button")
            {
                output += Button.ButtonClick(xNode);
            }

            if (xNode.HasChildNodes)
            {
                currentNode = xNode.FirstChild;
                while (currentNode != null)
                {
                    Start(currentNode);
                    currentNode = currentNode.NextSibling;
                }
            }


        }




        private XmlDocument GetXmlDocument()
        {

            XmlDocument doc = new XmlDocument();
            doc.Load(@"C:\Users\Public\Documents\CustomerSupport_v1_0\CustomerSupport\CustomerSupport.Web\Modules\FEGen\Input.xml");


            return doc;

        }

        public void SpitScript()
        {
            
            string file = @"C:\Users\Public\Documents\CustomerSupport_v1_0\CustomerSupport\CustomerSupport.Web\Modules\FEGen\Script.js";

            using (StreamWriter sw = new StreamWriter(File.Open(file, FileMode.Create)))
            {
                sw.Write(output);
            }


        }

    }
}