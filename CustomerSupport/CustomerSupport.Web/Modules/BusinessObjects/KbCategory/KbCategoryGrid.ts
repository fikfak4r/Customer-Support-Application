
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class KbCategoryGrid extends Serenity.EntityGrid<KbCategoryRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.KbCategory'; }
        protected getDialogType() { return KbCategoryDialog; }
        protected getIdProperty() { return KbCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return KbCategoryRow.localTextPrefix; }
        protected getService() { return KbCategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}