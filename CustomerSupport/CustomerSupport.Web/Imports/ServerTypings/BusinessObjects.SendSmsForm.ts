namespace CustomerSupport.BusinessObjects {
    export class SendSmsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.SendSms';

    }

    export interface SendSmsForm {
        LocationId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        Message: Serenity.TextAreaEditor;
    }

    [['LocationId', () => Serenity.LookupEditor], ['PhoneNumber', () => Serenity.StringEditor], ['Message', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(SendSmsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

