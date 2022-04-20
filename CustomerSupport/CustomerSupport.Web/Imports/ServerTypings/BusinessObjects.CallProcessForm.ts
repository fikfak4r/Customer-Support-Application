namespace CustomerSupport.BusinessObjects {
    export class CallProcessForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.CallProcess';

    }

    export interface CallProcessForm {
        CallId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        ReplyComment: Serenity.IntegerEditor;
        CreatorId: Serenity.IntegerEditor;
        CallDirection: Serenity.IntegerEditor;
    }

    [['CallId', () => Serenity.LookupEditor], ['UserId', () => Serenity.LookupEditor], ['Date', () => Serenity.DateEditor], ['Description', () => Serenity.StringEditor], ['ReplyComment', () => Serenity.IntegerEditor], ['CreatorId', () => Serenity.IntegerEditor], ['CallDirection', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(CallProcessForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

