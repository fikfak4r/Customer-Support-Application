namespace CustomerSupport.BusinessObjects {
    export class AssignToAgentsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.AssignToAgents';

    }

    export interface AssignToAgentsForm {
        LocationId: Serenity.LookupEditor;
        GroupId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
    }

    [['LocationId', () => Serenity.LookupEditor], ['GroupId', () => Serenity.LookupEditor], ['UserId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(AssignToAgentsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

