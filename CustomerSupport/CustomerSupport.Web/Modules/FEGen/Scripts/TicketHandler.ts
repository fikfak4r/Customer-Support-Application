

/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />

namespace CustomerSupport.BusinessObjects {

    export class TicketHandler {

        //private ticketMessenger: TicketMessenger;
        private refMessenger: any;
        private responseObj: any;


private CustomerIdInplaceBtnVar: kendo.ui.Button; 
private GroupIdInplaceBtnVar: kendo.ui.Button; 
private LocationIdInplaceBtnVar: kendo.ui.Button; 
private ProductIdInplaceBtnVar: kendo.ui.Button; 
private TransactionIdInplaceBtnVar: kendo.ui.Button; 
private UserIdInplaceBtnVar: kendo.ui.Button; 



        constructor() {
this.CustomerIdInplaceBtnVar = $('#CustomerIdInplaceBtn').kendoButton({
                icon: 'add',
                click: () => { 

         if (this.CustomerIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {

                    } else {

                 
                    }
    

},}).data('kendoButton'); 
this.GroupIdInplaceBtnVar = $('#GroupIdInplaceBtn').kendoButton({
                icon: 'add',
                click: () => { 

         if (this.GroupIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {

                    } else {

                 
                    }
    

},}).data('kendoButton'); 
this.LocationIdInplaceBtnVar = $('#LocationIdInplaceBtn').kendoButton({
                icon: 'add',
                click: () => { 

         if (this.LocationIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {

                    } else {

                 
                    }
    

},}).data('kendoButton'); 
this.ProductIdInplaceBtnVar = $('#ProductIdInplaceBtn').kendoButton({
                icon: 'add',
                click: () => { 

         if (this.ProductIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {

                    } else {

                 
                    }
    

},}).data('kendoButton'); 
this.TransactionIdInplaceBtnVar = $('#TransactionIdInplaceBtn').kendoButton({
                icon: 'add',
                click: () => { 

         if (this.TransactionIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {

                    } else {

                 
                    }
    

},}).data('kendoButton'); 
this.UserIdInplaceBtnVar = $('#UserIdInplaceBtn').kendoButton({
                icon: 'add',
                click: () => { 

         if (this.UserIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {

                    } else {

                 
                    }
    

},}).data('kendoButton'); 

        
    }

       public BeforeSave(className: string, myClassRef: Object): boolean {
            alert(JSON.stringify(myClassRef.GetObject()))
        
            return true;
        }


       public AfterSave(className: string, entityId: number, myClassRef: Object) {
            alert(JSON.stringify(myClassRef.GetObject()))
    
        }



private ticketMessenger: TicketMessenger;
public SetTeamPlayers(ticketMessenger: TicketMessenger) {
    this.ticketMessenger = ticketMessenger;
}


    public OnFieldValueChanged(id: string, classRef: any, responseObj: Object)
    {

    if (id == 'CustomerIdFld') {

                if (responseObj != undefined)
                {
                      FEUtilities.ToggleInplaceButtonIcon(this.CustomerIdInplaceBtnVar, responseObj);     
                }
            

            }
            else if (id == 'GroupIdFld') {

                if (responseObj != undefined)
                {
                      FEUtilities.ToggleInplaceButtonIcon(this.GroupIdInplaceBtnVar, responseObj);     
                }
            

            }
            else if (id == 'LocationIdFld') {

                if (responseObj != undefined)
                {
                      FEUtilities.ToggleInplaceButtonIcon(this.LocationIdInplaceBtnVar, responseObj);     
                }
            

            }
            else if (id == 'ProductIdFld') {

                if (responseObj != undefined)
                {
                      FEUtilities.ToggleInplaceButtonIcon(this.ProductIdInplaceBtnVar, responseObj);     
                }
            

            }
            else if (id == 'TransactionIdFld') {

                if (responseObj != undefined)
                {
                      FEUtilities.ToggleInplaceButtonIcon(this.TransactionIdInplaceBtnVar, responseObj);     
                }
            

            }
            else if (id == 'UserIdFld') {

                if (responseObj != undefined)
                {
                      FEUtilities.ToggleInplaceButtonIcon(this.UserIdInplaceBtnVar, responseObj);     
                }
            

            }
            

        this.responseObj = responseObj
        this.refMessenger = classRef;
    }


}
}
