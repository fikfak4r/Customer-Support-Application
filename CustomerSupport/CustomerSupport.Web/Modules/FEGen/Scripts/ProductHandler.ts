

/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />

namespace CustomerSupport.BusinessObjects {

    export class ProductHandler {

        //private productMessenger: ProductMessenger;
        private refMessenger: any;
        private responseObj: any;


private LocationListInplaceBtnVar: kendo.ui.Button; 



        constructor() {
this.LocationListInplaceBtnVar = $('#LocationListInplaceBtn').kendoButton({
                icon: 'add',
                click: () => { 

                    FEUtilities.OnInplaceButtonClicked(this.LocationListInplaceBtnVar,
                        $("#location-dialog"), this.productMessenger, this.locationMessenger, "LocationListFld")

         if (this.LocationListInplaceBtnVar.element.find('span').hasClass('k-i-add')) {
                
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



       private productMessenger: ProductMessenger;
       private locationMessenger: LocationMessenger;
       public SetTeamPlayers(productMessenger: ProductMessenger, locationMessenger: LocationMessenger) {
           this.productMessenger = productMessenger;
           this.locationMessenger = locationMessenger;
}


    public OnFieldValueChanged(id: string, classRef: any, responseObj: Object)
    {

        if (id == 'LocationListFld') {

                FEUtilities.ToggleInplaceButtonIcon(this.LocationListInplaceBtnVar, responseObj);     

                if (responseObj != undefined) {
                }
                else {

                }
            }
            

        this.responseObj = responseObj
        this.refMessenger = classRef;
    }


}
}
