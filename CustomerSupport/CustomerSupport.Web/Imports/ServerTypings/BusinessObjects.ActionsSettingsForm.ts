namespace CustomerSupport.BusinessObjects {
    export class ActionsSettingsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ActionsSettings';

    }

    export interface ActionsSettingsForm {
        Type: Serenity.EnumEditor;
        Priority: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        LocationId: Serenity.LookupEditor;
        GroupId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
    }

    [['Type', () => Serenity.EnumEditor], ['Priority', () => Serenity.EnumEditor], ['Status', () => Serenity.EnumEditor], ['LocationId', () => Serenity.LookupEditor], ['GroupId', () => Serenity.LookupEditor], ['UserId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ActionsSettingsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

