
namespace CustomerSupport.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class TicketGrid extends Serenity.EntityGrid<TicketRow, any> {

        protected getColumnsKey() { return 'BusinessObjects.Ticket'; }
        protected getDialogType() { return TicketTransactionDialog; }
        protected getIdProperty() { return TicketRow.idProperty; }
        protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getService() { return TicketService.baseUrl; }

    private rowSelection: Serenity.GridRowSelectionMixin;


        constructor(container: JQuery) {
            super(container);
                
                  
        }


        // protected addButtonClick(){
        //     // Q.alert('Show')
        //     // var dlg = new TicketDialog();
        //     // this.initDialog(dlg);
        //     // dlg.dialogOpen();
        // }



        // protected getSlickOptions(): Slick.GridOptions {
        //     let opt = super.getSlickOptions();
        //     opt.rowHeight = 150;
        
        //     return opt;
        // }




        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }
        
        protected getColumns() {
             var columns = super.getColumns();
           columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));

       columns.splice(1, 0, {
                field: 'Date',
                name: '',
                format: ctx => '<a class="inline-action view-details" title="view logs">&nbsp;</a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24 
            });

            return columns;
        }//Ends getColumns

        protected onClick(e: JQueryEventObject, row: number, cell: number) {

            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();


      if (target.hasClass('inline-action')) {
                e.preventDefault();

            if (target.hasClass('view-details')) {
                    //this.editItem(item.TicketId);
                    var dlg = new TicketActionLogDialog();
                    dlg.loadByIdAndOpenDialog(item.TicketId)
                }
             
            }



    }//Ends onClick

		
        // protected onClick(e: JQueryEventObject, row: number, cell: number){
        //     e.preventDefault();
        //     var item = this.itemAt(row);
        //     var target = $(e.target)

        //     if(target.hasClass("s-BusinessObjects-TicketLink"))
        //     {
        //         var dlg = new TicketThreadDialog()
        //         this.initDialog(dlg);
        //         dlg.loadByIdAndOpenDialog(item.TicketId)
        //     }
        // }

		

        protected getButtons() : Serenity.ToolButton[]
        {
            var btns = super.getButtons();
            btns.splice(Q.indexOf(btns, x => x.cssClass == 'column-picker-button'), 1)
            
            //var refreshbtn = btns.filter(x => x.cssClass == 'refresh-button')

            //btns.splice(Q.indexOf(btns, x => x.cssClass == 'refresh-button'), 1)

            btns.push(this.getAssignToAgentsBtn(),
                    this.getActionsSettingsBtn())

            if(Authorization.hasPermission(GlobalScripts.Sms_Read) && Authorization.hasPermission(GlobalScripts.Sms_Insert))
                btns.push(this.getSms())



					/*
			    btns.push(this.getAssignToAgentsBtn(),
                    this.getActionsSettingsBtn(),
                    this.getSendAsMailBtn(),
                    this.getForwardAsMailBtn())
					*/
            //btns.push({cssClass : "refresh-button"})

            if (!Q.Authorization.hasPermission("Customer Support:Ticket:Insert"))
                btns.splice(Q.indexOf(btns, x => x.cssClass == "add-button"), 1);

                    btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'BusinessObjects/Ticket/ListExcel',
                separator: true
            }));

                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return btns;
        }//Ends getButtons

        

        protected getAssignToAgentsBtn()
        {
         return   {
                title: 'Assign to agent',
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
                            var assignToAgentdlg = new AssignToAgentsDialog()
                        
                            
                            $("#s-Page > div.s-BusinessObjects-AssignToAgentsDialog > div.ui-dialog-buttonpane > div > button:nth-child(1)")
                            .click(function(evt) {

                            
                            
                            var requestObj = { LocationId : assignToAgentdlg.locationID,
                                               GroupId : assignToAgentdlg.groupID,
                                               AgentId : assignToAgentdlg.agentID,
                                               TicketIds : selectedIDs}
                            var url = "BusinessObjects/Ticket/AssignToAgents";
                            
                            Q.serviceRequest(url, requestObj, response => {
                                
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                $(".refresh-button").click();
                                Q.notifySuccess("Update successful");

                            })
                            
                            })

                            assignToAgentdlg.dialogOpen()
                           

                        }
                }
            }
        }

        protected getActionsSettingsBtn()
        {
          return  {
                title: 'Set Type, Priority, Status and Group',
                cssClass: 'send-button',
                onClick: () => {

                    if (!this.onViewSubmit()) {
                        return;
                    }

                    var selectedIDs = selectedIDs = this.rowSelection.getSelectedKeys();

                    if(selectedIDs.length == 0)
                        Q.notifyWarning("Please select some records to process")
                    else
                        {

                            var actionsSetting = new ActionsSettingsDialog();
                              $("#s-Page > div.s-BusinessObjects-ActionsSettingsDialog > div.ui-dialog-buttonpane > div > button:nth-child(1)")
                            .click(function(evt) {

                        var requestObj = {     
                                                Priority : actionsSetting.priorityID,
                                                Status : actionsSetting.statusID,
                                                Type : actionsSetting.typeID,
                                                LocationId : actionsSetting.locationID,
                                                GroupId : actionsSetting.groupID,
                                                AgentId : actionsSetting.agentID,
                                                TicketIds : selectedIDs}
                            var url = "BusinessObjects/Ticket/ActionsSettings";
                            
                            Q.serviceRequest(url, requestObj, response => {
                                
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                $(".refresh-button").click();
                                Q.notifySuccess("Update successful");

                            })


                            })

                            actionsSetting.dialogOpen();
                           

                        }//Ends the else block
                }
            }

        }//Ends getActionSettingsBtn()


    protected getSms(){

   return  {
                title: 'Send SMS',
                cssClass: 'send-button',
                onClick: () => {
                    
                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var selectedIDs = selectedIDs = this.rowSelection.getSelectedKeys();

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
                                               
                                                TicketIds : selectedIDs}
                            var url = "BusinessObjects/Sms/TicketsSms";
                            Q.notifyInfo("Sending SMS ...")
                            Q.serviceRequest(url, requestObj, SmsResponse => {
                                
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                $(".refresh-button").click();
                                Q.notifySuccess("SMS sent");

                            })

                            })

                           sendSms.dialogOpen();

                        }//Ends the else block
                }
            }
        }//Ends getSms()


        protected getSendAsMailBtn(){

   return  {
                title: 'Send as mail',
                cssClass: 'send-button',
                onClick: () => {
                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var selectedIDs = selectedIDs = this.rowSelection.getSelectedKeys();

                    if(selectedIDs.length == 0)
                        Q.notifyWarning("Please select some records to process")
                    else
                        {

                           Q.notifyInfo("Send mail yet to be implemented")

                        }//Ends the else block
                }

            }
        }//Ends getSendAsMailBtn()


        protected getForwardAsMailBtn(){

               return  {
                title: 'Forward as mail',
                cssClass: 'send-button',
                onClick: () => {
                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var selectedIDs = selectedIDs = this.rowSelection.getSelectedKeys();

                    if(selectedIDs.length == 0)
                        Q.notifyWarning("Please select some records to process")
                    else
                        {

                           var fwdAsMail = new ForwardAsMailDialog()
                           fwdAsMail.dialogOpen();

                        }//Ends the else block
                }
            }


        }//Ends getForwardAsMailBtn()


        // protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[]
        // {
                 
        //     let items = super.getQuickFilters();

        //     var ticketListFilter = Q.first(items, x => x.field == TicketRow.Fields.LocationList);
        //       //alert(ticketListFilter)
        //     ticketListFilter = h => 
        //         {
        //               var request = (h.request as TicketListRequest);
        //     var values = (h.widget as Serenity.LookupEditor).values;
        //     request.Locations = values.map(x => parseInt(x, 10));
        //     h.handled = true;
        //    // Q.alert(values.toString())
        //         };
            
            
        //     return items;
        // }


    }
}