
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TicketActionLogDialog extends Serenity.EntityDialog<TicketRow, any> {
        
        protected getFormKey() { return TicketActionLogForm.formKey; }
        protected getIdProperty() { return TicketRow.idProperty; }
        protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getNameProperty() { return TicketRow.nameProperty; }
        protected getService() { return TicketService.baseUrl;  }

        protected form = new TicketForm(this.idPrefix);
        private loadedState: string;
          constructor() {
            super();
            
        }

        protected updateTitle()
        {
            super.updateTitle();
            this.dialogTitle = "Call logs"
        }

   protected getToolbarButtons(): Serenity.ToolButton[] {
             let buttons = super.getToolbarButtons();

             buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
             buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
             buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
             return buttons;
         }




    }
}