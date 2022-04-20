
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TicketProcessDialog extends Serenity.EntityDialog<TicketProcessRow, any> {
        protected getFormKey() { return TicketProcessForm.formKey; }
        protected getIdProperty() { return TicketProcessRow.idProperty; }
        protected getLocalTextPrefix() { return TicketProcessRow.localTextPrefix; }
        protected getNameProperty() { return TicketProcessRow.nameProperty; }
        protected getService() {  return TicketProcessService.baseUrl; }

        protected form = new TicketProcessForm(this.idPrefix);

    }

}