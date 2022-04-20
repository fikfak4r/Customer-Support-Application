
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CallEditor extends Common.GridEditorBase<CallRow> {
        protected getColumnsKey() { return 'BusinessObjects.Call'; }
        protected getDialogType() { return CallEditorDialog; }
                protected getLocalTextPrefix() { return CallRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}