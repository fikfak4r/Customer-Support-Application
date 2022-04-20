
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SmsLocationGrid extends Serenity.EntityGrid<SmsLocationRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.SmsLocation'; }
        protected getDialogType() { return SmsLocationDialog; }
        protected getIdProperty() { return SmsLocationRow.idProperty; }
        protected getLocalTextPrefix() { return SmsLocationRow.localTextPrefix; }
        protected getService() { return SmsLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}