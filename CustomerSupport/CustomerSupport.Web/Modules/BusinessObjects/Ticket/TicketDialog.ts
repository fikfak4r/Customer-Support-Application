
namespace CustomerSupport.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TicketDialog extends Serenity.EntityDialog<TicketRow, any> {
        
        protected getFormKey() { return TicketForm.formKey; }
        protected getIdProperty() { return TicketRow.idProperty; }
        protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getNameProperty() { return TicketRow.nameProperty; }
        protected getService() { return TicketService.baseUrl;  }

        protected form = new TicketForm(this.idPrefix);
        private loadedState: string;
      
      

          constructor() {
            super();
            //this.byId('NoteROList').closest('.field').hide().end().appendTo(this.byId('TabNotes'))
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'))
            // if(Authorization.hasPermission(GlobalScripts.Ticket_Update))        
            // {
                
            //     this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'))
            //     this.byId('CustomerSupport_BusinessObjects_NotesEditor61_Toolbar').hide();
            // }
            // else
            // {
            //     alert('About to render')
            //     this.byId('NoteListRO').closest('.field').hide().end().appendTo(this.byId('TabNotes'))
            // }
         //this.byId('CallDirection').closest('.field').hide().end().appendTo(this.byId('TabNotes')).disableSelection();


          DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

           
             

            this.tabs.bind('tabsactivate', () => this.arrange());


                     this.form.CustomerId.element.on("change", function(){
                              
                                var customerId = Q.toId(this.form.CustomerId.value);

                                if (customerId != null) {

                                    var customers = CustomerRow.getLookup();
                                    //alert(customers)
                                    if(customers.itemById[customerId] != undefined)
                                    {
                                        if(customers.itemById[customerId].PhoneNumber != undefined)
                                            this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
                                        else
                                               this.form.PhoneNumber.value = ''
                                    }
                                    else
                                    {
                                            Q.reloadLookup("BusinessObjects.Customer");
                                            customers = BusinessObjects.CustomerRow.getLookup();
                                           if(customers.itemById[customerId].PhoneNumber != undefined)
                                                this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
                                           else
                                               this.form.PhoneNumber.value = ''
                                    }

                                }
                                else
                                    this.form.PhoneNumber.value = ''

                     }
                     )



    this.form.TicketIdString.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });


            //          this.form.CustomerId.changeSelect2(e => {
            //     var customerId = Q.toId(this.form.CustomerId.value);

            //     if (customerId != null) {

                    

            //         var customers = CustomerRow.getLookup();
            //         alert(customers)
            //         if(customers.itemById[customerId] != undefined)
            //             this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
            //         else
            //         {
            //               alert('Reload');
            //                 Q.reloadLookup("BusinessObjects.Customer");
            //                 customers = BusinessObjects.CustomerRow.getLookup();
            //             this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
            //         }

            //     }

            // })

        }//Ends the constructor



protected updateInterface(): void {

      if (!Q.Authorization.hasPermission(GlobalScripts.Ticket_Update))
      {
            Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
      }

     if (this.isNew())
             {}
            else
               Serenity.EditorUtils.setReadonly(this.form.TicketIdString.element, true);

       


}

  protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            if (!Q.Authorization.hasPermission("Customer Support:Ticket:Update"))
            {
    
                    buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
                    buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            }

            if (!Q.Authorization.hasPermission("Customer Support:Ticket:Delete"))
            {
              buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            }

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "undo-delete-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "localization-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "clone-button"), 1);

            return buttons;

        }


             getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

    

        


        private _transactionId: number;

         set transactionID(value: number){
                 this.form.TransactionId.value = value.toString()
        }

        get transactionID(){
            return parseInt(this.form.TransactionId.value);
        }


     protected afterLoadEntity() {
            super.afterLoadEntity();
             
      // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
            // else
            //    Serenity.EditorUtils.setReadonly(this.form.TicketIdString.element, true);

            if (this.isNewOrDeleted()) {

                Serenity.TabsExtensions.setDisabled(this.tabs, "Notes", true)

            }
            else {
                
                Serenity.TabsExtensions.setDisabled(this.tabs, "Notes", false)

            }//Ends the else block

        }


        private getNextNumber() {
            
            var val = Q.trimToNull(this.form.TicketIdString.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'ID_').toUpperCase();

                
                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                BusinessObjects.TicketService.GetNextNumber({
                    Prefix: prefix,
                    Length: 8 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.TicketIdString.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.TicketIdString.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }



    }
}