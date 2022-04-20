namespace CustomerSupport.BusinessObjects {
    export class SmsLocationForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.SmsLocation';

    }

    export interface SmsLocationForm {
        SmsId: Serenity.LookupEditor;
        LocationId: Serenity.IntegerEditor;
    }

    [['SmsId', () => Serenity.LookupEditor], ['LocationId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(SmsLocationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

