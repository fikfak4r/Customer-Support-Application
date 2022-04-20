
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class KbCategoryEditorDialog extends Common.GridEditorDialog<KbCategoryRow> {
        protected getFormKey() { return KbCategoryForm.formKey; }
                protected getLocalTextPrefix() { return KbCategoryRow.localTextPrefix; }
        protected getNameProperty() { return KbCategoryRow.nameProperty; }
        protected form = new KbCategoryForm(this.idPrefix);
    }
}