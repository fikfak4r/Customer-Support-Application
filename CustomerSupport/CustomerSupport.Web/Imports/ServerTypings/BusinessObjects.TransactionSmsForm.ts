namespace CustomerSupport.BusinessObjects {
    export class TransactionSmsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.TransactionSms';

    }

    export interface TransactionSmsForm {
        TransactionId: Serenity.LookupEditor;
        SmsId: Serenity.IntegerEditor;
        Sent: Serenity.BooleanEditor;
        Delivered: Serenity.BooleanEditor;
        UnDelivered: Serenity.BooleanEditor;
    }

    [['TransactionId', () => Serenity.LookupEditor], ['SmsId', () => Serenity.IntegerEditor], ['Sent', () => Serenity.BooleanEditor], ['Delivered', () => Serenity.BooleanEditor], ['UnDelivered', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(TransactionSmsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

