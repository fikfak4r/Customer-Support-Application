
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TransactionEditorDialog extends Common.GridEditorDialog<TransactionRow> {
        protected getFormKey() { return TransactionForm.formKey; }
                protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getNameProperty() { return TransactionRow.nameProperty; }
        protected form = new TransactionForm(this.idPrefix);
    }
}