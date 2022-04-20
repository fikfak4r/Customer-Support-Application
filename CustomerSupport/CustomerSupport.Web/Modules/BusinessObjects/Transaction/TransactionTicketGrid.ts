
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TransactionTicketGrid extends TicketGrid{

        // protected getColumnsKey() { return 'BusinessObjects.TransactionTicket'; }
           protected  getDialogType() { return TicketDialog; }
        // protected getIdProperty() { return TicketRow.idProperty; }
        // protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        // protected getService() { return TicketService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

              protected addButtonClick() {
            this.editItem({ TransactionId: this.transactionID });
        }


        protected getInitialTitle() : string
        {
            return null;
        }

       protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected getGridCanLoad(): boolean
        {
             return super.getGridCanLoad() && !!this.transactionID
             
        }


        private _transactionId: number;

         set transactionID(value: number){
             if(this._transactionId != value)
             {
                 this._transactionId = value;
                 this.setEquality(TransactionDetailRow.Fields.TransactionId, value);
                 this.refresh();
             }
        }

        get transactionID(){
            return this._transactionId;
        }

                
                
        protected getButtons() : Serenity.ToolButton[]
        {
            var btns = super.getButtons();
            //Removes the 'Send SMS' button
            btns.splice(Q.indexOf(btns, x => x.title == 'Send SMS'), 1)

            return btns;
        }

    }
}