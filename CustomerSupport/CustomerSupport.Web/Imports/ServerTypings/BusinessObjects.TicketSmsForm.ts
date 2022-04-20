namespace CustomerSupport.BusinessObjects {
    export class TicketSmsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.TicketSms';

    }

    export interface TicketSmsForm {
        TicketId: Serenity.LookupEditor;
        SmsId: Serenity.IntegerEditor;
        TicketSmsMessage: Serenity.TextAreaEditor;
        Sent: Serenity.BooleanEditor;
        Delivered: Serenity.BooleanEditor;
        UnDelivered: Serenity.BooleanEditor;
    }

    [['TicketId', () => Serenity.LookupEditor], ['SmsId', () => Serenity.IntegerEditor], ['TicketSmsMessage', () => Serenity.TextAreaEditor], ['Sent', () => Serenity.BooleanEditor], ['Delivered', () => Serenity.BooleanEditor], ['UnDelivered', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(TicketSmsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

