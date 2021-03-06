namespace CustomerSupport.Administration {
    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';

    }

    export interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
        LocationList: Serenity.LookupEditor;
    }

    [['Username', () => Serenity.StringEditor], ['DisplayName', () => Serenity.StringEditor], ['Email', () => Serenity.EmailEditor], ['UserImage', () => Serenity.ImageUploadEditor], ['Password', () => Serenity.PasswordEditor], ['PasswordConfirm', () => Serenity.PasswordEditor], ['Source', () => Serenity.StringEditor], ['CustomerId', () => Serenity.IntegerEditor], ['LocationList', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(UserForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

