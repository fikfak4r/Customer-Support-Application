
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TransactionDetailEditorDialog extends Common.GridEditorDialog<TransactionDetailRow> {
        protected getFormKey() { return TransactionDetailForm.formKey; }
                protected getLocalTextPrefix() { return TransactionDetailRow.localTextPrefix; }
        protected form = new TransactionDetailForm(this.idPrefix);
    }
}