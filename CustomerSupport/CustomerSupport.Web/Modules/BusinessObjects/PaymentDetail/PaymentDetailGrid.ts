
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PaymentDetailGrid extends Serenity.EntityGrid<PaymentDetailRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.PaymentDetail'; }
        protected getDialogType() { return PaymentDetailDialog; }
        protected getIdProperty() { return PaymentDetailRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentDetailRow.localTextPrefix; }
        protected getService() { return PaymentDetailService.baseUrl; }

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
                 this.setEquality(PaymentDetailRow.Fields.TransactionId, value);
                 this.refresh();
             }
        }

        get transactionID(){
            return this._transactionId;
        }


        	protected getButtons() : Serenity.ToolButton[]
        {
            var btns = super.getButtons();
            btns.splice(Q.indexOf(btns, x => x.cssClass == 'column-picker-button'), 1)



                
                    btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'BusinessObjects/PaymentDetail/ListExcel',
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