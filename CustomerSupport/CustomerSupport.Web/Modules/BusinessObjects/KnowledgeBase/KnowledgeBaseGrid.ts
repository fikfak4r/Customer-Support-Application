
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class KnowledgeBaseGrid extends Serenity.EntityGrid<KnowledgeBaseRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.KnowledgeBase'; }
        protected getDialogType() { return KnowledgeBaseDialog; }
        protected getIdProperty() { return KnowledgeBaseRow.idProperty; }
        protected getLocalTextPrefix() { return KnowledgeBaseRow.localTextPrefix; }
        protected getService() { return KnowledgeBaseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}