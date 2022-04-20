
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TicketProcessGrid extends Serenity.EntityGrid<TicketProcessRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.TicketProcess'; }
        protected getDialogType() { return TicketProcessDialog; }
        protected getIdProperty() { return TicketProcessRow.idProperty; }
        protected getLocalTextPrefix() { return TicketProcessRow.localTextPrefix; }
        protected getService() { return TicketProcessService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            
        }

  



    }
}