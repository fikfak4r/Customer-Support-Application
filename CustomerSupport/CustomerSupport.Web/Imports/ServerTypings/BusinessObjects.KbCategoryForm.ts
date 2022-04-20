namespace CustomerSupport.BusinessObjects {
    export class KbCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.KbCategory';

    }

    export interface KbCategoryForm {
        CategoryName: Serenity.StringEditor;
        LocationList: Serenity.LookupEditor;
        KnowledgeBase: KnowledgeBaseEditor;
    }

    [['CategoryName', () => Serenity.StringEditor], ['LocationList', () => Serenity.LookupEditor], ['KnowledgeBase', () => KnowledgeBaseEditor]].forEach(x => Object.defineProperty(KbCategoryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

