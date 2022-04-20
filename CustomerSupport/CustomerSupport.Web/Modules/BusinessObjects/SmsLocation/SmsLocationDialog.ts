
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SmsLocationDialog extends Serenity.EntityDialog<SmsLocationRow, any> {
        protected getFormKey() { return SmsLocationForm.formKey; }
        protected getIdProperty() { return SmsLocationRow.idProperty; }
        protected getLocalTextPrefix() { return SmsLocationRow.localTextPrefix; }
        protected getService() { return SmsLocationService.baseUrl; }

        protected form = new SmsLocationForm(this.idPrefix);

    }
}