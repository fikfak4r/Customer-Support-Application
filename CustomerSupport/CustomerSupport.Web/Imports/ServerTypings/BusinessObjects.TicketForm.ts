namespace CustomerSupport.BusinessObjects {
    export class TicketForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Ticket';

    }

    export interface TicketForm {
        Date: Serenity.DateTimeEditor;
        TicketIdString: Serenity.StringEditor;
        TransactionId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        ProductId: Serenity.LookupEditor;
        Subject: Serenity.StringEditor;
        Type: Serenity.EnumEditor;
        Priority: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        LocationId: Serenity.LookupEditor;
        GroupId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
        CreatorId: Serenity.IntegerEditor;
        Me: Serenity.BooleanEditor;
        NextFollowUpDate: Serenity.DateTimeEditor;
        FollowUpAction: Serenity.TextAreaEditor;
        NoteList: NotesEditor;
        UserUsername: Serenity.StringEditor;
    }

    [['Date', () => Serenity.DateTimeEditor], ['TicketIdString', () => Serenity.StringEditor], ['TransactionId', () => Serenity.LookupEditor], ['CustomerId', () => Serenity.LookupEditor], ['PhoneNumber', () => Serenity.StringEditor], ['ProductId', () => Serenity.LookupEditor], ['Subject', () => Serenity.StringEditor], ['Type', () => Serenity.EnumEditor], ['Priority', () => Serenity.EnumEditor], ['Status', () => Serenity.EnumEditor], ['LocationId', () => Serenity.LookupEditor], ['GroupId', () => Serenity.LookupEditor], ['UserId', () => Serenity.LookupEditor], ['CreatorId', () => Serenity.IntegerEditor], ['Me', () => Serenity.BooleanEditor], ['NextFollowUpDate', () => Serenity.DateTimeEditor], ['FollowUpAction', () => Serenity.TextAreaEditor], ['NoteList', () => NotesEditor], ['UserUsername', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TicketForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

