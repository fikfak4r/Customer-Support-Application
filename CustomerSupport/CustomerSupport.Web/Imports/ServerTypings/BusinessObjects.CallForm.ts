namespace CustomerSupport.BusinessObjects {
    export class CallForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Call';

    }

    export interface CallForm {
        CustomerId: Serenity.LookupEditor;
        GroupId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        Subject: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        CallDirection: Serenity.IntegerEditor;
        Priority: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        NextFollowUpDate: Serenity.DateEditor;
        CreatorId: Serenity.IntegerEditor;
        Me: Serenity.BooleanEditor;
        LocationId: Serenity.LookupEditor;
        FollowUpAction: Serenity.StringEditor;
    }

    [['CustomerId', () => Serenity.LookupEditor], ['GroupId', () => Serenity.LookupEditor], ['UserId', () => Serenity.LookupEditor], ['Date', () => Serenity.DateEditor], ['Subject', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['CallDirection', () => Serenity.IntegerEditor], ['Priority', () => Serenity.IntegerEditor], ['Status', () => Serenity.IntegerEditor], ['NextFollowUpDate', () => Serenity.DateEditor], ['CreatorId', () => Serenity.IntegerEditor], ['Me', () => Serenity.BooleanEditor], ['LocationId', () => Serenity.LookupEditor], ['FollowUpAction', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CallForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

