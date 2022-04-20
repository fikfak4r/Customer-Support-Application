
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ActionLogDialog extends Serenity.EntityDialog<ActionLogRow, any> {
        protected getFormKey() { return ActionLogForm.formKey; }
        protected getIdProperty() { return ActionLogRow.idProperty; }
        protected getLocalTextPrefix() { return ActionLogRow.localTextPrefix; }
        protected getNameProperty() { return ActionLogRow.nameProperty; }
        protected getService() { return ActionLogService.baseUrl; }

        protected form = new ActionLogForm(this.idPrefix);

        protected getToolbarButtons():Serenity.ToolButton[]
{
  let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            // We could also remove delete button here, but for demonstration 
            // purposes we'll hide it in another method (updateInterface)
            // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);

            return buttons;
}

    }
}