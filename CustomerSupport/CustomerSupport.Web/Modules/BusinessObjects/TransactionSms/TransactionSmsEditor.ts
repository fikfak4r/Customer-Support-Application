
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TransactionSmsEditor extends Common.GridEditorBase<TransactionSmsRow> {
        protected getColumnsKey() { return 'BusinessObjects.TransactionSms'; }
        protected getDialogType() { return TransactionSmsEditorDialog; }
                protected getLocalTextPrefix() { return TransactionSmsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}