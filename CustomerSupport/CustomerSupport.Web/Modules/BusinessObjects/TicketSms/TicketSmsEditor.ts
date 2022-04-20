
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TicketSmsEditor extends Common.GridEditorBase<TicketSmsRow> {
        protected getColumnsKey() { return 'BusinessObjects.TicketSms'; }
        protected getDialogType() { return TicketSmsEditorDialog; }
                protected getLocalTextPrefix() { return TicketSmsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}