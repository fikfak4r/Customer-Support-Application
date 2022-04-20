
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TicketThreadDialog extends Serenity.EntityDialog<TicketRow, any> {
        protected getFormKey() { return TicketThreadForm.formKey; }
        protected getIdProperty() { return TicketRow.idProperty; }
        protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getNameProperty() { return TicketRow.nameProperty; }
        protected getService() { return TicketService.baseUrl;  }

        protected form = new TicketThreadForm(this.idPrefix);

       protected updateInterface()
       {
           super.updateInterface();
           Serenity.EditorUtils.setReadonly(this.form.CustomerId.element, true);
       }


    }
}