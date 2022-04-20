
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CallGrid extends Serenity.EntityGrid<CallRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.Call'; }
        protected getDialogType() { return CallDialog; }
        protected getIdProperty() { return CallRow.idProperty; }
        protected getLocalTextPrefix() { return CallRow.localTextPrefix; }
        protected getService() { return CallService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}