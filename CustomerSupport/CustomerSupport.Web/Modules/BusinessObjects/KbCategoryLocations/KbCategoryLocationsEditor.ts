
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class KbCategoryLocationsEditor extends Common.GridEditorBase<KbCategoryLocationsRow> {
        protected getColumnsKey() { return 'BusinessObjects.KbCategoryLocations'; }
        protected getDialogType() { return KbCategoryLocationsEditorDialog; }
                protected getLocalTextPrefix() { return KbCategoryLocationsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}