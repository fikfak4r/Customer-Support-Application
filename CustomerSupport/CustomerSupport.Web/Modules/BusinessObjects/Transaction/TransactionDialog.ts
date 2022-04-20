
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TransactionDialog extends Serenity.EntityDialog<TransactionRow, any> {
        protected getFormKey() { return TransactionForm.formKey; }
        protected getIdProperty() { return TransactionRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getNameProperty() { return TransactionRow.nameProperty; }
        protected getService() { return TransactionService.baseUrl; }

        protected form = new TransactionForm(this.idPrefix);

        private transDtlGrid: CustomerSupport.BusinessObjects.TransactionDetailGrid;
        private pymntDtlGrid: CustomerSupport.BusinessObjects.PaymentDetailGrid;



        constructor() {
            super();

             this.form.OrderId.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });


            //this.transDtlGrid = new TransactionDetailGrid(this.byId("TransactionsDetailsGrid"));
            this.pymntDtlGrid = new PaymentDetailGrid(this.byId("PaymentsDetailsGrid"));
      

            this.tabs.bind("tabsactivate", () => this.arrange());

        }//Ends the constructor



        // loadEntity(entity: TransactionRow) {

        //     super.loadEntity(entity);

        protected afterLoadEntity() {
            super.afterLoadEntity();

       if (this.isNew())
                this.getNextNumber();

            if (this.isNewOrDeleted()) {

                Serenity.TabsExtensions.setDisabled(this.tabs, "TransactionsDetails", true)
                Serenity.TabsExtensions.setDisabled(this.tabs, "PaymentsDetails", true)

                this.toolbar.findButton("send-button").hide();

            }
            else {

                if (this.transDtlGrid == undefined)
                    this.initChildren();

                //    this.transDtlGrid.transactionID = this.entityId;
                //    this.pymntDtlGrid.transactionID = this.entityId;
                //    this.trxnTicketGrid.transactionID = this.entityId;
                //    GlobalScripts.TicketId = entity.TicketId;
                //    GlobalScripts.TransactionId = this.entityId;

                this.transDtlGrid.transactionID = this.entityId;
                
                Serenity.TabsExtensions.setDisabled(this.tabs, "TransactionsDetails", false)
                Serenity.TabsExtensions.setDisabled(this.tabs, "PaymentsDetails", false)

                //this.toolbar.findButton("send-button").show();
            }//Ends the else block


            this.pymntDtlGrid.transactionID = this.entityId;

       

        }


        protected getToolbarButtons(): Serenity.ToolButton[] {
           

                 let buttons = super.getToolbarButtons();

            if (!Q.Authorization.hasPermission(GlobalScripts.Transaction_Update)) {

                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            }

            if (!Q.Authorization.hasPermission(GlobalScripts.Transaction_Delete)) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            }

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "undo-delete-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "localization-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "clone-button"), 1);

            return buttons;

          
        }


        private initChildren() {
            if (!this.isNewOrDeleted()) {
                this.transDtlGrid = new TransactionDetailGrid(this.byId("TransactionsDetailsGrid"));
            
            }
        }



        protected getTicket() {

            return {
                title: 'Call logs',
                cssClass: 'send-button',
                onClick: () => {

                    let ticketDlg = new TicketDialog();
                    //this.initDialog(ticketDlg);
                    let trxnId = GlobalScripts.TransactionId;

                    Q.reloadLookup("BusinessObjects.Ticket")
                    let ticketRef = BusinessObjects.TicketRow.getLookup().items
                        .filter(x => x.TransactionId == trxnId);

                    //alert(this.form.TransactionId.value)

                    if (ticketRef != undefined && ticketRef.length >= 1) {
                        alert('Existing: ' + trxnId)

                        ticketDlg.loadByIdAndOpenDialog(ticketRef[0].TicketId)
                    }
                    else {

                        alert('new ' + trxnId)
                        // alert(this.form.TransactionId.value)
                        ticketDlg.transactionID = trxnId;
                        ticketDlg.dialogOpen();
                        alert('TranId: ' + ticketDlg.transactionID)

                        //         ticketDlg.loadEntityAndOpenDialog(<BusinessObjects.TicketRow>{
                        //     TransactionId: trxnId

                        // });


                    }
                }
            }
        }//Ends getTicket()

       private getNextNumber() {
            
            var val = Q.trimToNull(this.form.OrderId.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'OD_').toUpperCase();

                
                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                BusinessObjects.TransactionService.GetNextNumber({
                    Prefix: prefix,
                    Length: 8 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.OrderId.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.OrderId.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


    }
}