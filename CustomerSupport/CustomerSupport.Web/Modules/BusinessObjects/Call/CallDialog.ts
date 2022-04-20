
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CallDialog extends Serenity.EntityDialog<CallRow, any> {
        protected getFormKey() { return CallForm.formKey; }
        protected getIdProperty() { return CallRow.idProperty; }
        protected getLocalTextPrefix() { return CallRow.localTextPrefix; }
        protected getNameProperty() { return CallRow.nameProperty; }
        protected getService() { return CallService.baseUrl; }

        protected form = new CallForm(this.idPrefix);

    }
}