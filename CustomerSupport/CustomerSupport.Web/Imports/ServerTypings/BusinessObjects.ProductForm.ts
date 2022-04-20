namespace CustomerSupport.BusinessObjects {
    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Product';

    }

    export interface ProductForm {
        Name: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
        LocationList: Serenity.LookupEditor;
    }

    [['Name', () => Serenity.StringEditor], ['Price', () => Serenity.DecimalEditor], ['LocationList', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ProductForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

