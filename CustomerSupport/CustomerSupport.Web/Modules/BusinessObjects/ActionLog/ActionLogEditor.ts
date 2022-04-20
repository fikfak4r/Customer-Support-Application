
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ActionLogEditor extends Common.GridEditorBase<ActionLogRow> {
        protected getColumnsKey() { return 'BusinessObjects.ActionLog'; }
        protected getDialogType() { return ActionLogEditorDialog; }
                protected getLocalTextPrefix() { return ActionLogRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons():Serenity.ToolButton[]{
            return null;
        }
        
    }
}