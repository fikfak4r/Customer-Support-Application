/// <reference path="../Ticket/TicketDialog.ts" />

namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class CustomerTicketsDialog extends TicketDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();
            //Serenity.EditorUtils.setReadOnly(this.form.SupplierId, true);
        }
    }
}