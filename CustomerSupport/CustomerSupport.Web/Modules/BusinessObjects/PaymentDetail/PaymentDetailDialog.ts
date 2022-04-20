
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PaymentDetailDialog extends Serenity.EntityDialog<PaymentDetailRow, any> {
        protected getFormKey() { return PaymentDetailForm.formKey; }
        protected getIdProperty() { return PaymentDetailRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentDetailRow.localTextPrefix; }
        protected getService() { return PaymentDetailService.baseUrl; }

        protected form = new PaymentDetailForm(this.idPrefix);

    }
}