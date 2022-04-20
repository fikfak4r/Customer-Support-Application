
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SmsLocationEditorDialog extends Common.GridEditorDialog<SmsLocationRow> {
        protected getFormKey() { return SmsLocationForm.formKey; }
                protected getLocalTextPrefix() { return SmsLocationRow.localTextPrefix; }
        protected form = new SmsLocationForm(this.idPrefix);
    }
}