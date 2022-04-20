
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TransactionSmsGrid extends Serenity.EntityGrid<TransactionSmsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.TransactionSms'; }
        protected getDialogType() { return TransactionSmsDialog; }
        protected getIdProperty() { return TransactionSmsRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionSmsRow.localTextPrefix; }
        protected getService() { return TransactionSmsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            //return this._transactionID != null;
                return super.getGridCanLoad() && !!this.transactionID;
        }

        private _transactionID: number;

        get transactionID() {
            return this._transactionID;
        }

        set transactionID(value: number) {
            if (this._transactionID != value) {
                this._transactionID = value;
                this.setEquality("TransactionId", value);
                this.refresh();
            }
        }


        protected getButtons() : Serenity.ToolButton[]
        {
            var btns = super.getButtons();
            btns.splice(Q.indexOf(btns, x => x.cssClass == 'column-picker-button'), 1)
            
            btns.splice(Q.indexOf(btns, x => x.cssClass == 'add-button'), 1)
            
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
                                               
                                                TransactionId : GlobalScripts.TransactionId}
                            var url = "BusinessObjects/Sms/TransactionsSms";
                            
                            Q.serviceRequest(url, requestObj, SmsResponse => {
                                
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TransactionID:" +  response.TransactionIds.join(','))
                                $(".refresh-button").click();
                                Q.notifySuccess("Update successful");

                            })

                            })

                           sendSms.dialogOpen();
                }
            }
        }//Ends getSms()



    }
}