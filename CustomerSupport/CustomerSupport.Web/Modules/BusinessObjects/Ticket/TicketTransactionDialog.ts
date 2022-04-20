
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TicketTransactionDialog extends TicketDialog {

        protected getFormKey() { return TicketForm.formKey; }
        protected getIdProperty() { return TicketRow.idProperty; }
        protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getNameProperty() { return TicketRow.nameProperty; }
        protected getService() { return TicketService.baseUrl; }


        private ticketTrxnGrid: CustomerSupport.BusinessObjects.TicketTransactionGrid;
        private ticketSms: TicketSmsGrid;

        constructor() {
            super();


            if (Authorization.hasPermission(GlobalScripts.Transaction_Read)) {
                this.ticketTrxnGrid = new TicketTransactionGrid(this.byId("TicketTransactionGrid"));
            }
            else
                Serenity.TabsExtensions.setDisabled(this.tabs, "TicketTransaction", true)
                
            if (Authorization.hasPermission(GlobalScripts.Sms_Read)) {
                this.ticketSms = new TicketSmsGrid(this.byId("TicketSms"));
            }
            else
                Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", true)


            this.tabs.bind('tabsactivate', () => this.arrange());




            //          this.form.CustomerId.changeSelect2(e => {
            //     var customerId = Q.toId(this.form.CustomerId.value);

            //     if (customerId != null) {



            //         var customers = CustomerRow.getLookup();
            //         alert(customers)
            //         if(customers.itemById[customerId] != undefined)
            //             this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
            //         else
            //         {
            //               alert('Reload');
            //                 Q.reloadLookup("BusinessObjects.Customer");
            //                 customers = BusinessObjects.CustomerRow.getLookup();
            //             this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
            //         }

            //     }

            // })

        }//Ends the constructor


        protected afterLoadEntity() {
            super.afterLoadEntity()



            if (this.isNewOrDeleted()) {

                if (this.ticketTrxnGrid != null)
                    Serenity.TabsExtensions.setDisabled(this.tabs, "TicketTransaction", true)

                if (Authorization.hasPermission(GlobalScripts.Sms_Read))
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", true)
            }
            else {

                if (this.ticketTrxnGrid != null)
                    Serenity.TabsExtensions.setDisabled(this.tabs, "TicketTransaction", false)

                if (Authorization.hasPermission(GlobalScripts.Sms_Read))
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", false)
            }//Ends the else block

        }




        public loadEntity(entity: TicketRow) {

            super.loadEntity(entity)

            if (Authorization.hasPermission(GlobalScripts.Sms_Read))
                this.ticketSms.ticketID = entity.TicketId;

            if (this.ticketTrxnGrid != null)
                this.ticketTrxnGrid.ticketID = entity.TicketId;

            GlobalScripts.TicketId = entity.TicketId;
        }










    }
}