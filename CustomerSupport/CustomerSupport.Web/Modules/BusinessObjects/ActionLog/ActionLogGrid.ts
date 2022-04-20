
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ActionLogGrid extends Serenity.EntityGrid<ActionLogRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ActionLog'; }
        protected getDialogType() { return ActionLogDialog; }
        protected getIdProperty() { return ActionLogRow.idProperty; }
        protected getLocalTextPrefix() { return ActionLogRow.localTextPrefix; }
        protected getService() { return ActionLogService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


    }

}