
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class KnowledgeBaseEditorDialog extends Common.GridEditorDialog<KnowledgeBaseRow> {
        protected getFormKey() { return KnowledgeBaseForm.formKey; }
                protected getLocalTextPrefix() { return KnowledgeBaseRow.localTextPrefix; }
        protected getNameProperty() { return KnowledgeBaseRow.nameProperty;  }
        protected form = new KnowledgeBaseForm(this.idPrefix);

        protected  getPropertyItems():Serenity.PropertyItem[]
        {
             var items = super.getPropertyItems()

             items = items.filter(x => { return x.name != KnowledgeBaseRow.Fields.KbCategoryId})

             return items;
        }

    }
}