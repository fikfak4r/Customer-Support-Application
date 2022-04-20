
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CallProcessDialog extends Serenity.EntityDialog<CallProcessRow, any> {
        protected getFormKey() { return CallProcessForm.formKey; }
        protected getIdProperty() { return CallProcessRow.idProperty; }
        protected getLocalTextPrefix() { return CallProcessRow.localTextPrefix; }
        protected getNameProperty() { return CallProcessRow.nameProperty; }
        protected getService() { return CallProcessService.baseUrl; }

        protected form = new CallProcessForm(this.idPrefix);

    }
}