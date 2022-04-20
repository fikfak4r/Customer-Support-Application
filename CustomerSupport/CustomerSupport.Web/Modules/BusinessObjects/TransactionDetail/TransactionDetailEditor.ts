
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TransactionDetailEditor extends Common.GridEditorBase<TransactionDetailRow> {
        protected getColumnsKey() { return 'BusinessObjects.TransactionDetail'; }
        protected getDialogType() { return TransactionDetailEditorDialog; }
                protected getLocalTextPrefix() { return TransactionDetailRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}