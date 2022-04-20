
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CallEditorDialog extends Common.GridEditorDialog<CallRow> {
        protected getFormKey() { return CallForm.formKey; }
                protected getLocalTextPrefix() { return CallRow.localTextPrefix; }
        protected getNameProperty() { return CallRow.nameProperty; }
        protected form = new CallForm(this.idPrefix);
    }
}