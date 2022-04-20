
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TransactionEditor extends Common.GridEditorBase<TransactionRow> {
        protected getColumnsKey() { return 'BusinessObjects.Transaction'; }
        protected getDialogType() { return TransactionEditorDialog; }
                protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}