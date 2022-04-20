
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ProductLocationEditor extends Common.GridEditorBase<ProductLocationRow> {
        protected getColumnsKey() { return 'BusinessObjects.ProductLocation'; }
        protected getDialogType() { return ProductLocationEditorDialog; }
                protected getLocalTextPrefix() { return ProductLocationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}