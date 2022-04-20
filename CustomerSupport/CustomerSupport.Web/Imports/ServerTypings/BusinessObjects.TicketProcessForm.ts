namespace CustomerSupport.BusinessObjects {
    export class TicketProcessForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.TicketProcess';

    }

    export interface TicketProcessForm {
        TicketId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        ReplyComment: Serenity.EnumEditor;
        UserId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        CreatorId: Serenity.IntegerEditor;
    }

    [['TicketId', () => Serenity.LookupEditor], ['Date', () => Serenity.DateEditor], ['ReplyComment', () => Serenity.EnumEditor], ['UserId', () => Serenity.LookupEditor], ['Description', () => Serenity.TextAreaEditor], ['CreatorId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(TicketProcessForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

