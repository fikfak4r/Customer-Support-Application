
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TicketEditor extends Common.GridEditorBase<TicketRow> {
        protected getColumnsKey() { return 'BusinessObjects.Ticket'; }
        protected getDialogType() { return TicketEditorDialog; }
                protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}