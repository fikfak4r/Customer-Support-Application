using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;

namespace CustomerSupport.Modules.FEGen.Helpers
{
    public class HandlerClass
    {


        private string classType;
        private string className;
        private ObjectParser objPrsr;
        private string inplaceAddBtnVar = "";
        private string inplaceAddBtnInitializations = "";
        private String onFieldValueChangeHandlers = "";
        public HandlerClass(ObjectParser objPrsr, string classType, string className)
        {
            this.classType = classType;
            this.className = className;
            this.objPrsr = objPrsr;
        }

        public void SetProperty(string propertyClassType, string className, PropertyInfo property)
        {

            if (objPrsr.IsLookUp(propertyClassType, className, property.Name))
            {
                HashSet<Attribute> attrs = objPrsr.GetAttributes(propertyClassType, className, property.Name);

                SetInplaceAddButtonVariable(propertyClassType, className, property, attrs);
                InitializeInplaceAddButton(classType, className, property, attrs);
                SetOnFieldValueChangeHandler(className, property);

            }

        }

        private void SetInplaceAddButtonVariable(string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {
            inplaceAddBtnVar += String.Format("private {0}: kendo.ui.Button; \n", VariableNamings.InPlaceAddButtonVariable(className, property.Name));

        }

    private void InitializeInplaceAddButton(string classType, string className, PropertyInfo property, HashSet<Attribute> attrs)
        {

            inplaceAddBtnInitializations +=
                 String.Format(@"this.{0} = $('#{1}').kendoButton([
                icon: 'add',
                click: () => [ 

         if (this.{0}.element.find('span').hasClass('k-i-add')) [

                    ] else [

                 
                    ]
    

],"

             + "]).data('kendoButton'); \r\n",
            VariableNamings.InPlaceAddButtonVariable(className, property.Name),
            VariableNamings.InPlaceAddButtonId(className, property.Name),
            className.ToLower(),
            VariableNamings.GetFieldId(className, property.Name)
            );

        }

        string format = "if {0}", format1 = "else if {0}", handlers = "";
        private void SetOnFieldValueChangeHandler(string className, PropertyInfo property)
        {

            handlers = String.Format(
            @"(id == '{0}') [

                FEUtilities.ToggleInplaceButtonIcon(this.{1}, responseObj);     

                if (responseObj != undefined)
                [
                ]
                else
                [ ]

            ]
            ", VariableNamings.GetFieldId(className, property.Name), VariableNamings.InPlaceAddButtonVariable(className, property.Name));

            onFieldValueChangeHandlers += String.Format(onFieldValueChangeHandlers == "" ? format : format1, handlers);

        }




        public string GetClassDefinition()
        {

            string clss = String.Format(
                @"

/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />

namespace CustomerSupport.BusinessObjects [

    export class {0}Handler [

        //private {1}Messenger: {0}Messenger;
        private refMessenger: any;
        private responseObj: any;


{4}


        constructor() [
{2}
        
    ]

       public BeforeSave(className: string, myClassRef: Object): boolean [
            alert(JSON.stringify(myClassRef.GetObject()))
        
            return true;
        ]


       public AfterSave(className: string, entityId: number, myClassRef: Object) [
            alert(JSON.stringify(myClassRef.GetObject()))
    
        ]



private {1}Messenger: {0}Messenger;
public SetTeamPlayers({1}Messenger: {0}Messenger) [
    this.{1}Messenger = {1}Messenger;
]


    public OnFieldValueChanged(id: string, classRef: any, responseObj: Object)
    [

    {3}

        this.responseObj = responseObj
        this.refMessenger = classRef;
    ]


]
]
",
                 className,
                  className.ToLower(),
                   inplaceAddBtnInitializations,
                   onFieldValueChangeHandlers,
                   inplaceAddBtnVar
                   

                );


            return ObjectParser.FormatOutput(clss);
        }

    }
}