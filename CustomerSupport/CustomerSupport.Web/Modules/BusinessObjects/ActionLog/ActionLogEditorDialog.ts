
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ActionLogEditorDialog extends Common.GridEditorDialog<ActionLogRow> {
        protected getFormKey() { return ActionLogForm.formKey; }
                protected getLocalTextPrefix() { return ActionLogRow.localTextPrefix; }
        protected getNameProperty() { return ActionLogRow.nameProperty; }
        protected form = new ActionLogForm(this.idPrefix);
    }
}