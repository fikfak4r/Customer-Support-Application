


namespace CustomerSupport.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;
    using SMSLive247Api;
    using System.Reflection;
    using System;
    using CustomerSupport.Modules.FEGen.Helpers;
    using System.IO;
    using System.Collections.Generic;
    using System.Xml;
    

    [RoutePrefix("BusinessObjects/Sms"), Route("{action=index}")]
    public class SmsController : Controller
    {
        [PageAuthorize(BusinessObjects.PermissionKeys.Sms.Read)]
        public ActionResult Index()
        {

            //XmlParser parser = new XmlParser();
            //parser.Start(parser.parentNode);
            //parser.SpitScript();

            //Assembly assembly = Assembly.GetExecutingAssembly();
            //Type[] assemblyTypes = assembly.GetTypes();

            //PropertyInfo[] properties = typeof(Entities.TransactionRow).GetProperties(BindingFlags.Instance | BindingFlags.Public);
            //Array.Sort(properties, delegate (PropertyInfo prop1, PropertyInfo prop2) { return prop1.Name.CompareTo(prop2.Name); });

            #region
            Type filterType = typeof(Entities.TransactionRow);
            #endregion


            string output = "";
            Type type = typeof(Forms.TransactionForm);
            string className = type.Name.Replace("Form", "");
            string classType = "Form";
            ObjectParser op = new ObjectParser();
            PropertyInfo[] propertyList = op.GetProperties(type);

            XmlDocument xmlDoc = new XmlDocument();
            XmlNode rootNode = xmlDoc.CreateElement("div");
            xmlDoc.AppendChild(rootNode);

            Observable observ = new Observable(op, xmlDoc);

            foreach(PropertyInfo propInfo in propertyList)
            {
                observ.SetProperty(classType, className, propInfo);
            }


            FormClass fc = new FormClass(op, classType, className);

            string kendoDataSource = Utilities.GetKendoDataSource(op, "FirstLevelContext", "Columns", className, typeof(Columns.TransactionColumns));

            output = fc.GetClassDefinition(op.GetPrimaryKey(classType, className), observ, kendoDataSource);


            PropertyInfo[] filterPropertyList = op.GetProperties(filterType);

            XmlDocument filterXmlDoc = new XmlDocument();
            XmlNode filterRootNode = filterXmlDoc.CreateElement("div");
            filterXmlDoc.AppendChild(filterRootNode);

            FilterObservable filterObserv = new FilterObservable(op, filterXmlDoc);

            foreach (PropertyInfo propInfo in filterPropertyList)
            {
                filterObserv.SetProperty("Row", className, propInfo);
            }

         
            FilterClass fltrClss = new FilterClass(op, "Row", className);

            kendoDataSource = Utilities.GetKendoDataSource(op, "FilterContext", "Row", className, typeof(Entities.TransactionRow));

            string filterOutput = fltrClss.GetClassDefinition(filterObserv, kendoDataSource);


            HandlerClass hndlrClss = new HandlerClass(op, classType, className);

            foreach (PropertyInfo propInfo in propertyList)
            {
                hndlrClss.SetProperty(classType, className, propInfo);
            }


            string file = String.Format(@"C:\Users\Public\Documents\CustomerSupport_v1_0\CustomerSupport\CustomerSupport.Web\Modules\FEGen\Scripts\{0}.ts", className);

            using (StreamWriter sw = new StreamWriter(System.IO.File.Open(file, FileMode.Create)))
            {
                sw.Write(output);
            }


            string filterFile = String.Format(@"C:\Users\Public\Documents\CustomerSupport_v1_0\CustomerSupport\CustomerSupport.Web\Modules\FEGen\Scripts\{0}Filter.ts", className);
            using (StreamWriter sw = new StreamWriter(System.IO.File.Open(filterFile, FileMode.Create)))
            {
                sw.Write(filterOutput);
            }


            string hndlrFile = String.Format(@"C:\Users\Public\Documents\CustomerSupport_v1_0\CustomerSupport\CustomerSupport.Web\Modules\FEGen\Scripts\{0}Handler.ts", className);
            using (StreamWriter sw = new StreamWriter(System.IO.File.Open(hndlrFile, FileMode.Create)))
            {
                sw.Write(hndlrClss.GetClassDefinition());
            }



            xmlDoc.Save(String.Format(@"C:\Users\Public\Documents\CustomerSupport_v1_0\CustomerSupport\CustomerSupport.Web\Modules\FEGen\UI\{0}HTML.xml", className));

            filterXmlDoc.Save(String.Format(@"C:\Users\Public\Documents\CustomerSupport_v1_0\CustomerSupport\CustomerSupport.Web\Modules\FEGen\UI\Filter{0}HTML.xml", className));


            return View("~/Modules/BusinessObjects/Sms/SmsIndex.cshtml");

        }


        [Route("SmsAccount")]
        //[PageAuthorize(Administration.PermissionKeys.ClientOfClient)]
        [PageAuthorize(Administration.PermissionKeys.Account)]
        public ActionResult SmsAccount()
        {
            string site_token = "02a66b0f-85ed-40e6-806e-cc669e821017";
            SMSSiteAdminClient SMS = new SMSLive247Api.SMSSiteAdminClient();
            SMSSiteInfo smsSiteInfo = new SMSLive247Api.SMSSiteInfo();


          
            ViewBag.CreditBalance = SMS.GetAccountInfo(site_token).CBalance;

            //var user = (UserDefinition)Authorization.UserDefinition;
            return View("~/Modules/BusinessObjects/Sms/SmsAccountOverview.cshtml");

        }


    }
}