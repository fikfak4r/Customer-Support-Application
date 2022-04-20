
namespace CustomerSupport.BusinessObjects {

    export class ProductBond {

        private customerMessenger: ProductMessenger;
        private locationMessenger: LocationMessenger;
        private productHandler: ProductHandler;
        private locationHandler: LocationHandler;


        constructor() {

        }

        public SetTeamPlayers(customerMessenger: ProductMessenger, locationMessenger: LocationMessenger, productHandler: ProductHandler, locationHandler: LocationHandler) {

            this.customerMessenger = customerMessenger;
            this.locationMessenger = locationMessenger;
            this.productHandler = productHandler;
            this.locationHandler = locationHandler;
         

        }

        public BeforeRead(className: string, requestObject: Object): boolean { return true; }

        public AfterRead(className: string, responseObj: Object) { /*alert('After Read is called'); */ alert(JSON.stringify(responseObj)) }

        public BeforeSave(className: string, myClassRef: Object): boolean {

            if (className == "LocationMessenger") {
                alert(true);
                return true;
            }
            else if (className == "ProductMessenger")
                return true;

            alert('No handler was implemented for [' + className + ']')
            return false;

        }


        public AfterSave(className: string, entityId: number, myClassRef: Object) {

            if (className == "LocationMessenger") {
                alert(JSON.stringify(myClassRef.GetObject()))
                //this.locationMessenger.AfterSave(className, entityId, myClassRef);
                this.customerMessenger.GetObservable().get("LocationIddtSrc").push(myClassRef.GetObject())
                this.customerMessenger.GetObservable().set("LocationIdFld", myClassRef.GetObject())
                this.OnFieldValueChanged('LocationIdFld', ProductMessenger.MessengerClass, myClassRef.GetObject())

            }
            else { alert(JSON.stringify(myClassRef.GetObject())) }
        }


        public BeforeDetailLoad(className: string, entityId: number): boolean { alert('Before detail load call'); return true; }

        public AfterDetailLoad(className: string, responseObj: Object) { alert('After detail load call'); alert(JSON.stringify(responseObj)) }

        public OnError(className: string, requestType: string, errorMessage: Object) { alert('Error detail load call'); }



        public BeforeUpdate(className: string, classObj: Object) { return true; }


        public AfterUpdate(className: string, responseObj: Object) {

            this.productHandler.AfterUpdate(className, responseObj)

        }



        public OnFieldValueChanged(id: string, classRef: any, responseObj: Object) {
        
        if (id == "LocationListFld") {
                
                this.productHandler.OnFieldValueChanged(id, classRef, responseObj);
            }
            else
                alert('No handler was implemented for [' + id + '](BondClass)')
        }


    }
}