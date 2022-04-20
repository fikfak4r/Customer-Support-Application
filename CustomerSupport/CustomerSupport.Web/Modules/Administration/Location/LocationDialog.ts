
namespace CustomerSupport.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LocationDialog extends Serenity.EntityDialog<LocationRow, any> {
        protected getFormKey() { return LocationForm.formKey; }
        protected getIdProperty() { return LocationRow.idProperty; }
        protected getLocalTextPrefix() { return LocationRow.localTextPrefix; }
        protected getNameProperty() { return LocationRow.nameProperty; }
        protected getService() { return LocationService.baseUrl; }

        protected form = new LocationForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();




            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);


            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "undo-delete-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "localization-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "clone-button"), 1);

            return buttons;
        }

    }
}