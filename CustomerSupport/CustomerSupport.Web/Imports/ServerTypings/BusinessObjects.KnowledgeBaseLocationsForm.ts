namespace CustomerSupport.BusinessObjects {
    export class KnowledgeBaseLocationsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.KnowledgeBaseLocations';

    }

    export interface KnowledgeBaseLocationsForm {
        KbCategoryId: Serenity.IntegerEditor;
        LocationId: Serenity.IntegerEditor;
    }

    [['KbCategoryId', () => Serenity.IntegerEditor], ['LocationId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(KnowledgeBaseLocationsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

