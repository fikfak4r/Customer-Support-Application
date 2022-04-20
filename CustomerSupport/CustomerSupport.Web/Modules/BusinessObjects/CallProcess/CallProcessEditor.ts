
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CallProcessEditor extends Common.GridEditorBase<CallProcessRow> {
        protected getColumnsKey() { return 'BusinessObjects.CallProcess'; }
        protected getDialogType() { return CallProcessEditorDialog; }
                protected getLocalTextPrefix() { return CallProcessRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}