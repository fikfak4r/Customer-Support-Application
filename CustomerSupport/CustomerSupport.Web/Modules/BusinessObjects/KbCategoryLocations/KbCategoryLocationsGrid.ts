
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class KbCategoryLocationsGrid extends Serenity.EntityGrid<KbCategoryLocationsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.KbCategoryLocations'; }
        protected getDialogType() { return KbCategoryLocationsDialog; }
        protected getIdProperty() { return KbCategoryLocationsRow.idProperty; }
        protected getLocalTextPrefix() { return KbCategoryLocationsRow.localTextPrefix; }
        protected getService() { return KbCategoryLocationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}