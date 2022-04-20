/// <reference path="../Ticket/TicketGrid.ts" />

namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class CustomerTicketsGrid extends TicketGrid {

      //protected getDialogType(){ return CustomerTicketsDialog; }
      protected getColumnsKey() { return 'BusinessObjects.CustomerTicket'; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            //return this._customerID != null;
                return super.getGridCanLoad() && !!this.customerID;
        }

        private _customerID: number;

        get customerID() {
            return this._customerID;
        }

        set customerID(value: number) {
            if (this._customerID != value) {
                this._customerID = value;
                this.setEquality(TicketRow.Fields.CustomerId, value);
                this.refresh();
            }
        }
    }
}