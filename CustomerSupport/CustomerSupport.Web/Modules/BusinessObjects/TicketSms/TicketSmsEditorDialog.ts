
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TicketSmsEditorDialog extends Common.GridEditorDialog<TicketSmsRow> {
        protected getFormKey() { return TicketSmsForm.formKey; }
                protected getLocalTextPrefix() { return TicketSmsRow.localTextPrefix; }
        protected form = new TicketSmsForm(this.idPrefix);
    }
}