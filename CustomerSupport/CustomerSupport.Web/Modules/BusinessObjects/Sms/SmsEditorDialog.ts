
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SmsEditorDialog extends Common.GridEditorDialog<SmsRow> {
        protected getFormKey() { return SmsForm.formKey; }
                protected getLocalTextPrefix() { return SmsRow.localTextPrefix; }
        protected getNameProperty() { return SmsRow.nameProperty; }
        protected form = new SmsForm(this.idPrefix);
    }
}