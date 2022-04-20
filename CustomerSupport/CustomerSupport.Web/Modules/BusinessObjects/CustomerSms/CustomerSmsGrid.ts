
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CustomerSmsGrid extends Serenity.EntityGrid<CustomerSmsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.CustomerSms'; }
        protected getDialogType() { return CustomerSmsDialog; }
        protected getIdProperty() { return CustomerSmsRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerSmsRow.localTextPrefix; }
        protected getService() { return CustomerSmsService.baseUrl; }

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
                this.setEquality("CustomerId", value);
                this.refresh();
            }
        }


 private _phoneNumber: string;

        get phoneNumber() {
            return this._phoneNumber;
        }

        set phoneNumber(value: string) {
                this._phoneNumber = value;
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
                                               
                                                CustomerId : GlobalScripts.CustomerId
                                            }
                            var url = "BusinessObjects/Sms/CustomersSms";
                            
                            Q.serviceRequest(url, requestObj, response => {
                                
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n CustomerID:" +  response.CustomerIds.join(','))
                                $(".refresh-button").click();
                                //Q.notifySuccess("Update successful");
                                Q.alert(response.Message);

                            })

                            })

                           sendSms.dialogOpen();
                }
            }
        }//Ends getSms()



    }
}