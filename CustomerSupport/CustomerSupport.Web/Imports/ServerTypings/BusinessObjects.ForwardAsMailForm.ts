namespace CustomerSupport.BusinessObjects {
    export class ForwardAsMailForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ForwardAsMail';

    }

    export interface ForwardAsMailForm {
        Email: Serenity.StringEditor;
    }

    [['Email', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ForwardAsMailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

