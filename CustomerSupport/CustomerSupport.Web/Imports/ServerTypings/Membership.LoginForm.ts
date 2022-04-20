namespace CustomerSupport.Membership {
    export class LoginForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.Login';

    }

    export interface LoginForm {
        LoginAs: Serenity.StringEditor;
        Username: Serenity.StringEditor;
        Password: Serenity.StringEditor;
        RememberMe: Serenity.BooleanEditor;
    }

    [['LoginAs', () => Serenity.StringEditor], ['Username', () => Serenity.StringEditor], ['Password', () => Serenity.StringEditor], ['RememberMe', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(LoginForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

