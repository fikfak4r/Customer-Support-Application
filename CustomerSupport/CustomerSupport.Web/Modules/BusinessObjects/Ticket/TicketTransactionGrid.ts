
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TicketTransactionGrid  extends Serenity.EntityGrid<TransactionRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.Transaction'; }
        protected getDialogType() { return TransactionDialog; }
        protected getIdProperty() { return TransactionRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getService() { return TransactionService.baseUrl; }



        constructor(container: JQuery) {
            super(container);
        }

          protected addButtonClick() {
            this.editItem({ TicketId: this.ticketID });
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
             return super.getGridCanLoad() && !!this.ticketID
        }


        private _ticketId: number;

         set ticketID(value: number){
             if(this._ticketId != value)
             {
                 this._ticketId = value;
                 this.setEquality("TicketId", value);
                 this.refresh();
             }
        }

        get ticketID(){
            return this._ticketId;
        }



        	protected getButtons() : Serenity.ToolButton[]
        {
            var btns = super.getButtons();
            btns.splice(Q.indexOf(btns, x => x.cssClass == 'column-picker-button'), 1)



                
                    btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'BusinessObjects/Transaction/ListExcel',
                separator: true
            }));

                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));



            return btns;
        }//Ends getButtons

    }
}