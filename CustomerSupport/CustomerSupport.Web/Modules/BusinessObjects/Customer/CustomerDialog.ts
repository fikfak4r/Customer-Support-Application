/// <reference path="../../Administration/User/Authentication/Authorization.ts" />

namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()

    export class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey() { return CustomerForm.formKey; }
        protected getIdProperty() { return CustomerRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getNameProperty() { return CustomerRow.nameProperty; }
        protected getService() { return CustomerService.baseUrl; }

        protected form = new CustomerForm(this.idPrefix);

        private custometTicketsGrid: CustomerTicketsGrid;
        private customerSms: CustomerSmsGrid;
        private customerTrxnGrid: CustomerTransactionGrid;

        constructor() {
            super()


            if (Authorization.hasPermission(GlobalScripts.Ticket_Read)) {
                this.custometTicketsGrid = new CustomerTicketsGrid(this.byId("TicketGrid"));
            }

            if (Authorization.hasPermission(GlobalScripts.Sms_Read)) {
                this.customerSms = new CustomerSmsGrid(this.byId("CustomerSms"));
            }

            if (Authorization.hasPermission(GlobalScripts.Transaction_Read)) {
                this.customerTrxnGrid = new CustomerTransactionGrid(this.byId("CustomerTransactionGrid"));
            }


            this.tabs.bind("tabsactivate", () => this.arrange());

        }

        public loadEntity(entity: CustomerRow) {
            super.loadEntity(entity);
 

            if (Authorization.hasPermission(GlobalScripts.Ticket_Read)) {
                this.custometTicketsGrid.customerID = entity.CustomerId;
                Serenity.TabsExtensions.setDisabled(this.tabs, "Tickets", this.isNewOrDeleted());
            }
            else {
                Serenity.TabsExtensions.setDisabled(this.tabs, "Tickets", true);
            }

            if (Authorization.hasPermission(GlobalScripts.Sms_Read)) {
                this.customerSms.customerID = entity.CustomerId;
                //this.customerSms.phoneNumber =  CustomerRow.getLookup().items.filter(x => x.CustomerId === entity.CustomerId)[0].PhoneNumber
                Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", this.isNewOrDeleted());
            }
            else {
                Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", true);
            }

            
            if (Authorization.hasPermission(GlobalScripts.Transaction_Read)) 
            {
                this.customerTrxnGrid.customerID = entity.CustomerId;
                Serenity.TabsExtensions.setDisabled(this.tabs, "CustomerTransaction", this.isNewOrDeleted());
            }
            else {
                Serenity.TabsExtensions.setDisabled(this.tabs, "CustomerTransaction", true);
            }

            GlobalScripts.CustomerId = entity.CustomerId;


        }


        protected onSaveSuccess() {

            if (!this.isNew()) {//To make an update available for all Customer lookup in the application
                //alert('About to reload')
                Q.reloadLookup("BusinessObjects.Customer");
            }
        }



        protected updateInterface(): void {

            if (!Q.Authorization.hasPermission(GlobalScripts.Customer_Update)) {
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
            }
        }



        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            if (!Q.Authorization.hasPermission(GlobalScripts.Customer_Update)) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            }

            if (!Q.Authorization.hasPermission(GlobalScripts.Customer_Delete)) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            }

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "undo-delete-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "localization-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "clone-button"), 1);

            return buttons;
        }




    }

}