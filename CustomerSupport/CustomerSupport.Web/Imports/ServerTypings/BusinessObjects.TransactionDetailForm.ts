namespace CustomerSupport.BusinessObjects {
    export class TransactionDetailForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.TransactionDetail';

    }

    export interface TransactionDetailForm {
        TransactionId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        UnitName: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
        IsReceived: Serenity.BooleanEditor;
    }

    [['TransactionId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['ProductId', () => Serenity.LookupEditor], ['Quantity', () => Serenity.IntegerEditor], ['UnitName', () => Serenity.StringEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Discount', () => Serenity.DecimalEditor], ['Amount', () => Serenity.DecimalEditor], ['LocationId', () => Serenity.IntegerEditor], ['IsReceived', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(TransactionDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

