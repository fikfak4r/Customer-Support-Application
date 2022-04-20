
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.Customer'; }
        protected getDialogType() { return CustomerDialog; }
        protected getIdProperty() { return CustomerRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getService() { return CustomerService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
            
        }

        //     protected getSlickOptions(): Slick.GridOptions {
        //     let opt = super.getSlickOptions();
        //     opt.rowHeight = 150;
        
        //     return opt;
        // }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getButtons() : Serenity.ToolButton[]
        {
            
            var btns = super.getButtons();
            btns.splice(Q.indexOf(btns, x => x.cssClass == 'column-picker-button'), 1)

            if (!Q.Authorization.hasPermission("Customer Support:Customer:Insert"))
                btns.splice(Q.indexOf(btns, x => x.cssClass == "add-button"), 1);

                    btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'BusinessObjects/Customer/ListExcel',
                separator: true
            }));

                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }),this.getSms());

            return btns;
        }


        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));


            return columns;
        }//Ends getColumns


        protected getSms(){

   return  {
                title: 'Send SMS',
                cssClass: 'send-button',
                onClick: () => {
                    
                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var selectedIDs = this.rowSelection.getSelectedKeys();

                    if(selectedIDs.length == 0)
                        Q.notifyWarning("Please select some records to process")
                    else
                        {

                           var sendSms = new SendSmsDialog();
                          
                            $("#s-Page > div.s-BusinessObjects-SendSmsDialog > div.ui-dialog-buttonpane > div > button:nth-child(1)")
                            .click(function(evt){
                         
                           var requestObj = {     
                                                PhoneNumbers : sendSms.phoneNumbers,
                                                Message : sendSms.message,
                                           
                                                LocationId : sendSms.locationID,
                                               
                                                CustomerIds : selectedIDs}
                            var url = "BusinessObjects/Sms/CustomersSms";
                            Q.notifyInfo("Sending SMS ...")
                            Q.serviceRequest(url, requestObj, response  => {
                                Q.alert(response.Message)
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                $(".refresh-button").click();
                                //Q.notifySuccess("SMS sent");

                            })

                            })

                           sendSms.dialogOpen();

                        }//Ends the else block
                }
            }
        }//Ends getSms()

    }
}