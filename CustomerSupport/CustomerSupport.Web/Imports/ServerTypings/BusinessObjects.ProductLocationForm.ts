namespace CustomerSupport.BusinessObjects {
    export class ProductLocationForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ProductLocation';

    }

    export interface ProductLocationForm {
        ProductId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
    }

    [['ProductId', () => Serenity.LookupEditor], ['LocationId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ProductLocationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

