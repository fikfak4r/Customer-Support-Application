
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PaymentDetailEditorDialog extends Common.GridEditorDialog<PaymentDetailRow> {
        protected getFormKey() { return PaymentDetailForm.formKey; }
                protected getLocalTextPrefix() { return PaymentDetailRow.localTextPrefix; }
        protected form = new PaymentDetailForm(this.idPrefix);
    }
}