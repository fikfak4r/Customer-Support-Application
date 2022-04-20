namespace CustomerSupport.Administration {
    export class LocationForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Location';

    }

    export interface LocationForm {
        LocationId: Serenity.IntegerEditor;
        AccountId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        LocationName: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        UserId: Serenity.IntegerEditor;
        IsVisible: Serenity.BooleanEditor;
    }

    [['LocationId', () => Serenity.IntegerEditor], ['AccountId', () => Serenity.LookupEditor], ['Date', () => Serenity.DateEditor], ['LocationName', () => Serenity.StringEditor], ['PhoneNumber', () => Serenity.StringEditor], ['Email', () => Serenity.StringEditor], ['Website', () => Serenity.StringEditor], ['Address', () => Serenity.TextAreaEditor], ['UserId', () => Serenity.IntegerEditor], ['IsVisible', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(LocationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

