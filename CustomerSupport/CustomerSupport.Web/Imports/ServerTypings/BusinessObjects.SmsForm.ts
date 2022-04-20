namespace CustomerSupport.BusinessObjects {
    export class SmsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Sms';

    }

    export interface SmsForm {
        Date: Serenity.DateEditor;
        Message: Serenity.StringEditor;
    }

    [['Date', () => Serenity.DateEditor], ['Message', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SmsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

