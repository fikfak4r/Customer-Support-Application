
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class KnowledgeBaseLocationsDialog extends Serenity.EntityDialog<KnowledgeBaseLocationsRow, any> {
        protected getFormKey() { return KnowledgeBaseLocationsForm.formKey; }
        protected getIdProperty() { return KnowledgeBaseLocationsRow.idProperty; }
        protected getLocalTextPrefix() { return KnowledgeBaseLocationsRow.localTextPrefix; }
        protected getService() { return KnowledgeBaseLocationsService.baseUrl; }

        protected form = new KnowledgeBaseLocationsForm(this.idPrefix);

    }
}