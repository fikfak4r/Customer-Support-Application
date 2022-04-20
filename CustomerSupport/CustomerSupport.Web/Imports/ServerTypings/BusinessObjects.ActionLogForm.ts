namespace CustomerSupport.BusinessObjects {
    export class ActionLogForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ActionLog';

    }

    export interface ActionLogForm {
        Action: Serenity.StringEditor;
        Date: Serenity.DateEditor;
    }

    [['Action', () => Serenity.StringEditor], ['Date', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ActionLogForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

