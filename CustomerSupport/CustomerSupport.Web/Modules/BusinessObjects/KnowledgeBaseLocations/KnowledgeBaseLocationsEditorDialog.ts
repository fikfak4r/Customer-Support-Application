
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class KnowledgeBaseLocationsEditorDialog extends Common.GridEditorDialog<KnowledgeBaseLocationsRow> {
        protected getFormKey() { return KnowledgeBaseLocationsForm.formKey; }
                protected getLocalTextPrefix() { return KnowledgeBaseLocationsRow.localTextPrefix; }
        protected form = new KnowledgeBaseLocationsForm(this.idPrefix);
    }
}