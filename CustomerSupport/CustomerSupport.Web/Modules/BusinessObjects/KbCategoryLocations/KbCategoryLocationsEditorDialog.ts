
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class KbCategoryLocationsEditorDialog extends Common.GridEditorDialog<KbCategoryLocationsRow> {
        protected getFormKey() { return KbCategoryLocationsForm.formKey; }
                protected getLocalTextPrefix() { return KbCategoryLocationsRow.localTextPrefix; }
        protected form = new KbCategoryLocationsForm(this.idPrefix);
    }
}