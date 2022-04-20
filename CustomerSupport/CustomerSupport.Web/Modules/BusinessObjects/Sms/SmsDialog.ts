
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SmsDialog extends Serenity.EntityDialog<SmsRow, any> {
        protected getFormKey() { return SmsForm.formKey; }
        protected getIdProperty() { return SmsRow.idProperty; }
        protected getLocalTextPrefix() { return SmsRow.localTextPrefix; }
        protected getNameProperty() { return SmsRow.nameProperty; }
        protected getService() { return SmsService.baseUrl; }

        protected form = new SmsForm(this.idPrefix);

    }
}