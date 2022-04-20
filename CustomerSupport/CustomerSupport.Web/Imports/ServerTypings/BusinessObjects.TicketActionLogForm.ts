namespace CustomerSupport.BusinessObjects {
    export class TicketActionLogForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.TicketActionLog';

    }

    export interface TicketActionLogForm {
        Actions: Serenity.StringEditor;
    }

    [['Actions', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TicketActionLogForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

