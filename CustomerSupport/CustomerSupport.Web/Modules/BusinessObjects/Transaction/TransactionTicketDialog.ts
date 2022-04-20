
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TransactionTicketDialog extends TransactionDialog {

        protected getFormKey() { return TransactionForm.formKey; }
        protected getIdProperty() { return TransactionRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getNameProperty() { return TransactionRow.nameProperty; }
        protected getService() { return TransactionService.baseUrl; }

        //protected form = new TransactionForm(this.idPrefix);

        private trxnTicketGrid: CustomerSupport.BusinessObjects.TransactionTicketGrid;
        private trxnSms: CustomerSupport.BusinessObjects.TransactionSmsGrid;



        constructor() {
            super();

            this.trxnTicketGrid = new TransactionTicketGrid(this.byId("TransactionTicketGrid"))

            this.trxnSms = new TransactionSmsGrid(this.byId("TransactionSms"));

            this.tabs.bind("tabsactivate", () => this.arrange());

        }//Ends the constructor



        // loadEntity(entity: TransactionRow) {

        //     super.loadEntity(entity);

        protected afterLoadEntity() {
            super.afterLoadEntity();


            if (this.isNewOrDeleted()) {


                Serenity.TabsExtensions.setDisabled(this.tabs, "TransactionTicketGrid", true)


            }
            else {

                Serenity.TabsExtensions.setDisabled(this.tabs, "TransactionTicketGrid", false)
                //this.toolbar.findButton("send-button").show();
            }//Ends the else block


            if (this.isNewOrDeleted()) {
                Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", true)
            }
            else {
                Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", false)
                //this.toolbar.findButton("send-button").show();
            }//Ends the else block



            this.trxnSms.transactionID = this.entityId;
            GlobalScripts.TransactionId = this.entityId
            this.trxnTicketGrid.transactionID = this.entityId;
        }



    }




}
