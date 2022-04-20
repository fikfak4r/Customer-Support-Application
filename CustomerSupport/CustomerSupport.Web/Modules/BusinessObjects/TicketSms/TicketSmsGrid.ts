
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TicketSmsGrid extends Serenity.EntityGrid<TicketSmsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.TicketSms'; }
        protected getDialogType() { return TicketSmsDialog; }
        protected getIdProperty() { return TicketSmsRow.idProperty; }
        protected getLocalTextPrefix() { return TicketSmsRow.localTextPrefix; }
        protected getService() { return TicketSmsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            //return this._ticketID != null;
                return super.getGridCanLoad() && !!this.ticketID;
        }

        private _ticketID: number;

        get ticketID() {
            return this._ticketID;
        }

        set ticketID(value: number) {
            if (this._ticketID != value) {
                this._ticketID = value;
                this.setEquality("TicketId", value);
                this.refresh();
            }
        }


        protected getButtons() : Serenity.ToolButton[]
        {
            var btns = super.getButtons();
            btns.splice(Q.indexOf(btns, x => x.cssClass == 'column-picker-button'), 1)
            
            btns.splice(Q.indexOf(btns, x => x.cssClass == 'add-button'), 1)

           if(Authorization.hasPermission(GlobalScripts.Sms_Insert))
            btns.push(this.getSms())

            return btns;
        }//Ends getButtons



    protected getSms(){



   return  {
                title: 'Send SMS',
                cssClass: 'send-button',
                onClick: () => {
                             var sendSms = new SendSmsDialog();
                          
                            $("#s-Page > div.s-BusinessObjects-SendSmsDialog > div.ui-dialog-buttonpane > div > button:nth-child(1)")
                            .click(function(evt){
                                
                           var requestObj = {     
                                                PhoneNumbers : sendSms.phoneNumbers,
                                                Message : sendSms.message,
                                           
                                                LocationId : sendSms.locationID,
                                               
                                                TicketId : GlobalScripts.TicketId}
                            var url = "BusinessObjects/Sms/TicketsSms";
                            
                            Q.serviceRequest(url, requestObj, response => {
                                
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                $(".refresh-button").click();
                                Q.notifySuccess(response.Message);

                            })

                            })

                           sendSms.dialogOpen();
                }
            }
        }//Ends getSms()

    }
}