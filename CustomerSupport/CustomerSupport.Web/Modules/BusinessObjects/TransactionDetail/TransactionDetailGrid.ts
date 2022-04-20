
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TransactionDetailGrid extends Serenity.EntityGrid<TransactionDetailRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.TransactionDetail'; }
        protected getDialogType() { return TransactionDetailDialog; }
        protected getIdProperty() { return TransactionDetailRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionDetailRow.localTextPrefix; }
        protected getService() { return TransactionDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


		protected getButtons() : Serenity.ToolButton[]
        {
            var btns = super.getButtons();
            btns.splice(Q.indexOf(btns, x => x.cssClass == 'column-picker-button'), 1)



                
                    btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'BusinessObjects/TransactionDetail/ListExcel',
                separator: true
            }));

                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));



            return btns;
        }//Ends getButtons

  
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


    }
}