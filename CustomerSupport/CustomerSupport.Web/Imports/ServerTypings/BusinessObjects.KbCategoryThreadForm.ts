namespace CustomerSupport.BusinessObjects {
    export class KbCategoryThreadForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.KbCategoryThread';

    }

    export interface KbCategoryThreadForm {
        CategoryName: Serenity.StringEditor;
        LocationList: Serenity.LookupEditor;
    }

    [['CategoryName', () => Serenity.StringEditor], ['LocationList', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(KbCategoryThreadForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

