namespace CustomerSupport.BusinessObjects {
    export class CustomerSmsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.CustomerSms';

    }

    export interface CustomerSmsForm {
        CustomerId: Serenity.LookupEditor;
        SmsId: Serenity.LookupEditor;
        SmsMessage: Serenity.TextAreaEditor;
        Sent: Serenity.BooleanEditor;
        Delivered: Serenity.BooleanEditor;
        UnDelivered: Serenity.BooleanEditor;
    }

    [['CustomerId', () => Serenity.LookupEditor], ['SmsId', () => Serenity.LookupEditor], ['SmsMessage', () => Serenity.TextAreaEditor], ['Sent', () => Serenity.BooleanEditor], ['Delivered', () => Serenity.BooleanEditor], ['UnDelivered', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(CustomerSmsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

