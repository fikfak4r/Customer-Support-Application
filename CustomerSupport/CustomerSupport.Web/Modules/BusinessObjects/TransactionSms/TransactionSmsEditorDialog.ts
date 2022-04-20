
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TransactionSmsEditorDialog extends Common.GridEditorDialog<TransactionSmsRow> {
        protected getFormKey() { return TransactionSmsForm.formKey; }
                protected getLocalTextPrefix() { return TransactionSmsRow.localTextPrefix; }
        protected form = new TransactionSmsForm(this.idPrefix);
    }
}