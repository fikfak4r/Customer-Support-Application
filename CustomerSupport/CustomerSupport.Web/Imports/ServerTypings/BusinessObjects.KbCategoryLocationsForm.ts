namespace CustomerSupport.BusinessObjects {
    export class KbCategoryLocationsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.KbCategoryLocations';

    }

    export interface KbCategoryLocationsForm {
        KbCategoryId: Serenity.IntegerEditor;
        LocationId: Serenity.IntegerEditor;
    }

    [['KbCategoryId', () => Serenity.IntegerEditor], ['LocationId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(KbCategoryLocationsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

