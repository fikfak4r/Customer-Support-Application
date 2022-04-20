namespace CustomerSupport.BusinessObjects {
    export class TicketThreadForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.TicketThread';

    }

    export interface TicketThreadForm {
        Date: Serenity.DateTimeEditor;
        CallDirection: Serenity.EnumEditor;
        PhoneNumber: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
        Subject: Serenity.StringEditor;
        TicketProcess: TicketProcessEditor;
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
    }

    [['Date', () => Serenity.DateTimeEditor], ['CallDirection', () => Serenity.EnumEditor], ['PhoneNumber', () => Serenity.StringEditor], ['CustomerId', () => Serenity.IntegerEditor], ['Subject', () => Serenity.StringEditor], ['TicketProcess', () => TicketProcessEditor], ['Type', () => Serenity.EnumEditor], ['Priority', () => Serenity.EnumEditor], ['Status', () => Serenity.EnumEditor], ['LocationId', () => Serenity.LookupEditor], ['GroupId', () => Serenity.LookupEditor], ['UserId', () => Serenity.LookupEditor], ['CreatorId', () => Serenity.IntegerEditor], ['Me', () => Serenity.BooleanEditor], ['NextFollowUpDate', () => Serenity.DateTimeEditor], ['FollowUpAction', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(TicketThreadForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

