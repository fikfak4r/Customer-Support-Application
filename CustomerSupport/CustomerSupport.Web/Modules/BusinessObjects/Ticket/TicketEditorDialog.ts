
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TicketEditorDialog extends Common.GridEditorDialog<TicketRow> {
        protected getFormKey() { return TicketForm.formKey; }
                protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getNameProperty() { return TicketRow.nameProperty; }
        protected form = new TicketForm(this.idPrefix);
    }
}