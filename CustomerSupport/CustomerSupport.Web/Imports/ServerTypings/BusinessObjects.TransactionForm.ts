namespace CustomerSupport.BusinessObjects {
    export class TransactionForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Transaction';

    }

    export interface TransactionForm {
        TransactionId: Serenity.IntegerEditor;
        OrderId: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        Subject: Serenity.StringEditor;
        TicketId: Serenity.IntegerEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalAmountPaid: Serenity.DecimalEditor;
        TotalAmountLeft: Serenity.DecimalEditor;
        HasTransactionsDetails: Serenity.BooleanEditor;
        LocationId: Serenity.LookupEditor;
        IsIntegerTrailingOrderIdWithPrefixPo: Serenity.BooleanEditor;
        Status: Serenity.StringEditor;
        IsOpen: Serenity.BooleanEditor;
        IsInProgress: Serenity.BooleanEditor;
        IsFullyReceived: Serenity.BooleanEditor;
        IsFullyPaid: Serenity.BooleanEditor;
        IsAdvanced: Serenity.BooleanEditor;
        Tax: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
    }

    [['TransactionId', () => Serenity.IntegerEditor], ['OrderId', () => Serenity.StringEditor], ['Date', () => Serenity.DateEditor], ['CustomerId', () => Serenity.LookupEditor], ['Subject', () => Serenity.StringEditor], ['TicketId', () => Serenity.IntegerEditor], ['TotalAmount', () => Serenity.DecimalEditor], ['TotalAmountPaid', () => Serenity.DecimalEditor], ['TotalAmountLeft', () => Serenity.DecimalEditor], ['HasTransactionsDetails', () => Serenity.BooleanEditor], ['LocationId', () => Serenity.LookupEditor], ['IsIntegerTrailingOrderIdWithPrefixPo', () => Serenity.BooleanEditor], ['Status', () => Serenity.StringEditor], ['IsOpen', () => Serenity.BooleanEditor], ['IsInProgress', () => Serenity.BooleanEditor], ['IsFullyReceived', () => Serenity.BooleanEditor], ['IsFullyPaid', () => Serenity.BooleanEditor], ['IsAdvanced', () => Serenity.BooleanEditor], ['Tax', () => Serenity.DecimalEditor], ['Discount', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(TransactionForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

