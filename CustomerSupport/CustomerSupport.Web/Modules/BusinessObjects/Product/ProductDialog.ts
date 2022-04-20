
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey() { return ProductForm.formKey; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getNameProperty() { return ProductRow.nameProperty; }
        protected getService() { return ProductService.baseUrl; }

        protected form = new ProductForm(this.idPrefix);




        protected updateInterface(): void {

                if (!Q.Authorization.hasPermission("Customer Support:Product:Update"))
                {
                        Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                        
                }
    }



  protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            if (!Q.Authorization.hasPermission("Customer Support:Product:Update"))
            {
    
                    buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
                    buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            }

            if (!Q.Authorization.hasPermission("Customer Support:Product:Delete"))
            {
              buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            }

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "undo-delete-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "localization-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "clone-button"), 1);

            return buttons;
        }




    }
}