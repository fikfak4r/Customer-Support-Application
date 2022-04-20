
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class KnowledgeBaseLocationsGrid extends Serenity.EntityGrid<KnowledgeBaseLocationsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.KnowledgeBaseLocations'; }
        protected getDialogType() { return KnowledgeBaseLocationsDialog; }
        protected getIdProperty() { return KnowledgeBaseLocationsRow.idProperty; }
        protected getLocalTextPrefix() { return KnowledgeBaseLocationsRow.localTextPrefix; }
        protected getService() { return KnowledgeBaseLocationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}