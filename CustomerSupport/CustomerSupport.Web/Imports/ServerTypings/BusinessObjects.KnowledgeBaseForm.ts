namespace CustomerSupport.BusinessObjects {
    export class KnowledgeBaseForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.KnowledgeBase';

    }

    export interface KnowledgeBaseForm {
        KbCategoryId: Serenity.LookupEditor;
        Title: Serenity.StringEditor;
        KbContent: Serenity.TextAreaEditor;
        LocationList: Serenity.LookupEditor;
    }

    [['KbCategoryId', () => Serenity.LookupEditor], ['Title', () => Serenity.StringEditor], ['KbContent', () => Serenity.TextAreaEditor], ['LocationList', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(KnowledgeBaseForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

