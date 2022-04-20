namespace CustomerSupport.BusinessObjects {
    export class PaymentDetailForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.PaymentDetail';

    }

    export interface PaymentDetailForm {
        TransactionId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        TotalAmount: Serenity.DecimalEditor;
        AmountPaid: Serenity.DecimalEditor;
        AmountLeft: Serenity.DecimalEditor;
        IsTotalAmountRow: Serenity.BooleanEditor;
        LocationId: Serenity.IntegerEditor;
    }

    [['TransactionId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['TotalAmount', () => Serenity.DecimalEditor], ['AmountPaid', () => Serenity.DecimalEditor], ['AmountLeft', () => Serenity.DecimalEditor], ['IsTotalAmountRow', () => Serenity.BooleanEditor], ['LocationId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(PaymentDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

