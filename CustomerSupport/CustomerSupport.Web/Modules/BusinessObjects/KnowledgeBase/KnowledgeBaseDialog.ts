
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class KnowledgeBaseDialog extends Serenity.EntityDialog<KnowledgeBaseRow, any> {
        protected getFormKey() { return KnowledgeBaseForm.formKey; }
        protected getIdProperty() { return KnowledgeBaseRow.idProperty; }
        protected getLocalTextPrefix() { return KnowledgeBaseRow.localTextPrefix; }
        protected getNameProperty() { return KnowledgeBaseRow.nameProperty; }
        protected getService() { return KnowledgeBaseService.baseUrl; }

        protected form = new KnowledgeBaseForm(this.idPrefix);

    }
}