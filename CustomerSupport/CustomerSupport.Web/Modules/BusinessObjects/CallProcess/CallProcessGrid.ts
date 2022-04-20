
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CallProcessGrid extends Serenity.EntityGrid<CallProcessRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.CallProcess'; }
        protected getDialogType() { return CallProcessDialog; }
        protected getIdProperty() { return CallProcessRow.idProperty; }
        protected getLocalTextPrefix() { return CallProcessRow.localTextPrefix; }
        protected getService() { return CallProcessService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}