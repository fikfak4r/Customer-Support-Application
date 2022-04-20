

/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />

namespace CustomerSupport.BusinessObjects {

    export class TransactionHandler {

        //private transactionMessenger: TransactionMessenger;
        private refMessenger: any;
        private responseObj: any;


private CustomerIdInplaceBtnVar: kendo.ui.Button; 
private LocationIdInplaceBtnVar: kendo.ui.Button; 



        constructor() {

            this.CustomerIdInplaceBtnVar = $('#CustomerIdInplaceBtn').kendoButton({
                icon: 'add',
                click: () => {

                    if (this.CustomerIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {

                    } else {


                    }


                },
            }).data('kendoButton');


            this.LocationIdInplaceBtnVar = $('#LocationIdInplaceBtn').kendoButton({
                icon: 'add',
                click: () => {

                    if (this.LocationIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {

                    } else {


                    }


                },
            }).data('kendoButton');


        }

       public BeforeSave(className: string, myClassRef: Object): boolean {
            alert(JSON.stringify(myClassRef.GetObject()))
        
            return true;
        }


       public AfterSave(className: string, entityId: number, myClassRef: Object) {
            alert(JSON.stringify(myClassRef.GetObject()))
    
        }



private transactionMessenger: TransactionMessenger;
public SetTeamPlayers(transactionMessenger: TransactionMessenger) {
    this.transactionMessenger = transactionMessenger;
}


    public OnFieldValueChanged(id: string, classRef: any, responseObj: Object)
    {

    if (id == 'CustomerIdFld') {

                FEUtilities.ToggleInplaceButtonIcon(this.CustomerIdInplaceBtnVar, responseObj);     

                if (responseObj != undefined)
                {
                }
                else
                { }

            }
            else if (id == 'LocationIdFld') {

                FEUtilities.ToggleInplaceButtonIcon(this.LocationIdInplaceBtnVar, responseObj);     

                if (responseObj != undefined)
                {
                }
                else
                { }

            }
            

        this.responseObj = responseObj
        this.refMessenger = classRef;

    }


}
}
