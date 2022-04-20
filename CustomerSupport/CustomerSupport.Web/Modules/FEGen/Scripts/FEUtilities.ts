/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />

namespace CustomerSupport.BusinessObjects {

    export class FEUtilities {


        constructor() {}


        public static ToggleInplaceButtonIcon(inplaceBtnRef: any, lookupValue: any) {

            if (lookupValue != undefined) {
                inplaceBtnRef.element.find('span').removeClass('k-i-add')
                inplaceBtnRef.element.find('span').addClass('k-i-edit')
            }
            else {
                inplaceBtnRef.element.find('span').removeClass('k-i-edit')
                inplaceBtnRef.element.find('span').addClass('k-i-add')
            }


        }

        public static OnInplaceButtonClicked(inplaceBtnRef: kendo.ui.Button, kendoDialogjQuery: JQuery, masterMessengerObj: any, lookUpMessengerObj: any, editorFieldId: string)
        {

            if (inplaceBtnRef.element.find('span').hasClass('k-i-add'))
            {
                lookUpMessengerObj.GetObservable().setObject(null);
                kendoDialogjQuery.data("kendoDialog").open();
            }
            else
            {
                lookUpMessengerObj.GetObservable().setObject(masterMessengerObj.GetObservable().get(editorFieldId));
                kendoDialogjQuery.data("kendoDialog").open();

            }

        }


    }
}