
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PaymentDetailEditor extends Common.GridEditorBase<PaymentDetailRow> {
        protected getColumnsKey() { return 'BusinessObjects.PaymentDetail'; }
        protected getDialogType() { return PaymentDetailEditorDialog; }
                protected getLocalTextPrefix() { return PaymentDetailRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}