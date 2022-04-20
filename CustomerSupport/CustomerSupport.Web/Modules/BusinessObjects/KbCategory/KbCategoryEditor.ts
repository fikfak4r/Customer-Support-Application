
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class KbCategoryEditor extends Common.GridEditorBase<KbCategoryRow> {
        protected getColumnsKey() { return 'BusinessObjects.KbCategory'; }
        protected getDialogType() { return KbCategoryEditorDialog; }
                protected getLocalTextPrefix() { return KbCategoryRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}