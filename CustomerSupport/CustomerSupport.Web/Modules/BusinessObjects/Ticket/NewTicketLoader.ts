/// <reference path="../../../Scripts/Kendo/typescript/kendo.all.d.ts" />


namespace CustomerSupport.BusinessObjects {

    export class NewTicketLoader {
        protected newTicketForm: kendo.data.ObservableObject;
        constructor() {
            
            this.newTicketForm = kendo.observable({
                CustomerId:Q.getLookup("Administration.CustomerLocationLookup").items,
                CustomerIdVal:null,
                getObject: function () {
                    alert('Yup')
                }
            })//Ends this.newTicketForm
            kendo.bind($("#new-ticket-form"), this.newTicketForm)

        }

    }
}