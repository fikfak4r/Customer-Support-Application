
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TicketProcessEditorDialog extends Common.GridEditorDialog<TicketProcessRow> {
        protected getFormKey() { return TicketProcessForm.formKey; }
                protected getLocalTextPrefix() { return TicketProcessRow.localTextPrefix; }
        protected getNameProperty() { return TicketProcessRow.nameProperty; }
        protected form = new TicketProcessForm(this.idPrefix);

    }
}