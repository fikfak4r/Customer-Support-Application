
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TransactionSmsDialog extends Serenity.EntityDialog<TransactionSmsRow, any> {
        protected getFormKey() { return TransactionSmsForm.formKey; }
        protected getIdProperty() { return TransactionSmsRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionSmsRow.localTextPrefix; }
        protected getService() { return TransactionSmsService.baseUrl; }

        protected form = new TransactionSmsForm(this.idPrefix);

    }
}