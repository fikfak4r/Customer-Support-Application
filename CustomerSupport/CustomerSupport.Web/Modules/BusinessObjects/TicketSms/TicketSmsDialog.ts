
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TicketSmsDialog extends Serenity.EntityDialog<TicketSmsRow, any> {
        protected getFormKey() { return TicketSmsForm.formKey; }
        protected getIdProperty() { return TicketSmsRow.idProperty; }
        protected getLocalTextPrefix() { return TicketSmsRow.localTextPrefix; }
        protected getService() { return TicketSmsService.baseUrl; }

        protected form = new TicketSmsForm(this.idPrefix);

        protected updateInterface(): void {

      
            Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
            
      
}


  protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

           
    
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
           
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "undo-delete-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "localization-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "clone-button"), 1);

            return buttons;

        }



    }
}