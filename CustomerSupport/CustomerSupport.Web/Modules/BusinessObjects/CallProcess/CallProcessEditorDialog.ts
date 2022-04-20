
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CallProcessEditorDialog extends Common.GridEditorDialog<CallProcessRow> {
        protected getFormKey() { return CallProcessForm.formKey; }
                protected getLocalTextPrefix() { return CallProcessRow.localTextPrefix; }
        protected getNameProperty() { return CallProcessRow.nameProperty; }
        protected form = new CallProcessForm(this.idPrefix);
    }
}