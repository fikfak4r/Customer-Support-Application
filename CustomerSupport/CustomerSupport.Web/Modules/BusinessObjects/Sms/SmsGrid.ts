
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SmsGrid extends Serenity.EntityGrid<SmsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.Sms'; }
        protected getDialogType() { return SmsDialog; }
        protected getIdProperty() { return SmsRow.idProperty; }
        protected getLocalTextPrefix() { return SmsRow.localTextPrefix; }
        protected getService() { return SmsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}