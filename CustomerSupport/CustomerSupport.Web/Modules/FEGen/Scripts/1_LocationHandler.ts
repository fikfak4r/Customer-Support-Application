

/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />

namespace CustomerSupport.BusinessObjects {

    export class LocationHandler {

        private locationMessenger: LocationMessenger;
private AccountIdInplaceBtnVar: kendo.ui.Button; 



        constructor() {
this.AccountIdInplaceBtnVar = $('#AccountIdInplaceBtn').kendoButton({
                icon: 'add',
                click: () => { alert(JSON.stringify(this.locationMessenger.GetObservable().get('AccountIdFld'))) },}).data('kendoButton'); 

        
    }

       public BeforeSave(className: string, myClassRef: Object): boolean {
           alert(JSON.stringify(myClassRef.GetObject()))
           
            return true;
        }


       public AfterSave(className: string, entityId: number, myClassRef: Object) {
           alert(JSON.stringify(myClassRef.GetObject()))
  
        }



    public OnFieldValueChanged(id: string, classRef: any, responseObj: Object)
    {

    if (id == 'AccountIdFld') {

                if (responseObj != undefined)
                {
                    this.AccountIdInplaceBtnVar.element.find('span').removeClass('k-i-add')
                    this.AccountIdInplaceBtnVar.element.find('span').addClass('k-i-edit')
                }
                else
                {
                    this.AccountIdInplaceBtnVar.element.find('span').removeClass('k-i-edit')
                    this.AccountIdInplaceBtnVar.element.find('span').addClass('k-i-add')
                }

            }
            

        //this.customerMessenger = classRef;

    }

    public BeforeUpdate() { }

    public AfterUpdate(id:string, resonseObj: Object) { }
}
}
