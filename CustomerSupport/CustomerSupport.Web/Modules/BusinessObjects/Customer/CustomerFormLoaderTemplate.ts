/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
namespace CustomerSupport.BusinessObjects {

    export class CustomerFormLoaderTemplate {

        constructor() {
        }


        public GetCustomerLookUp(): {}[]{
            return Q.getLookup("Administration.CustomerLocationLookup").items;
        }


        public GetCustomer(customerId: number):CustomerRow {
            
            CustomerService.Retrieve({ EntityId: customerId },
                res => {
                    return res;
                })
        }



    }
}