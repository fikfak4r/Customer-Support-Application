namespace CustomerSupport.BusinessObjects {
    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Customer';

    }

    export interface CustomerForm {
        CustomerId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        FullName: Serenity.StringEditor;
        Sex: Serenity.EnumEditor;
        DateOfBirth: Serenity.DateEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        LocationId: Serenity.LookupEditor;
    }

    [['CustomerId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['FullName', () => Serenity.StringEditor], ['Sex', () => Serenity.EnumEditor], ['DateOfBirth', () => Serenity.DateEditor], ['PhoneNumber', () => Serenity.StringEditor], ['Email', () => Serenity.StringEditor], ['Address', () => Serenity.TextAreaEditor], ['LocationId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(CustomerForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

