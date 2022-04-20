/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />

namespace CustomerSupport.BusinessObjects {

    export class TicketListLoader {


        protected ticketList: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected ticketListDtSrc: kendo.data.DataSource;
        public static TicketListLoaderRef: TicketListLoader;

        protected menuObservable: kendo.data.ObservableObject;

        constructor() {



            //this.FilterPaneObervable()

            this.GridListDataSource();

            //this.MenuObservable();
            //this.MyNewObserv()

            TicketListLoader.TicketListLoaderRef = this;

        }



        private GridListDataSource() {
            this.ticketListDtSrc = new kendo.data.DataSource({
                schema: {
                    //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                    data: "Entities",
                    total: "TotalCount",
                    model: {
                        id: "TicketId",
                        fields: {
                            Date: { type: "date" }
                        },
                    }
                },
                batch: false,
                pageSize: 5,
                transport: {
                    read: function (options) {


                        if (options.data.Criteria != undefined) {
                            TicketService.List({ Criteria: options.data.Criteria, IncludeColumns: ["CustomerName"] },
                                res => {
                                    options.success(res);
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            TicketService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: ["CustomerName"] },
                                res => {

                                    options.success(res);
                                })
                        }
                        else {
                            TicketService.List({ IncludeColumns: ["CustomerName"] },
                                res => {
                                    options.success(res);
                                })
                        }

                        //options.success({ Entities: [{ TicketId: 1, Subject: "Subj 1" }, { TicketId: 2, Subject: "Subj 2" }], TotalCount: 2 })
                    },
                    create: function (options) {
                        // ClassNameService.Create({ Entity: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"TicketId":0,', '')) },
                        //      res => {
                        //           options.success(res);
                        //   })
                    }
                },
            })//Ends
        }


        private FilterPaneObervable() {


            this.fitlerPane = kendo.observable({
                requestTypeSource: GlobalScripts.GetRequestType(),
                prioritySource: GlobalScripts.GetPriority(),
                statusSource: GlobalScripts.GetStatus(),
                locationIdSource: Q.getLookup("Administration.LocationLookup").items,
                groupSource: Q.getLookup("Administration.RoleLocationLookup").items,
                userSource: Q.getLookup("Administration.UserRoleLookup").items,
                requestType: null,
                priority: null,
                status: null,
                locationId: null,
                group: null,
                user: null,

                getObject: function () {

                    var requestQry = []

                    if (this.get("requestType") != null && this.get("requestType") != undefined) {
                        this.assemble(requestQry, [Serenity.Criteria("Type"), '=', this.get("requestType").value])
                    }

                    if (this.get("priority") != null && this.get("priority") != undefined) {
                        requestQry = this.assemble(requestQry, [Serenity.Criteria("Priority"), '=', this.get("priority").value])
                    }

                    if (this.get("status") != null && this.get("status") != undefined) {
                        requestQry = this.assemble(requestQry, [Serenity.Criteria("Status"), '=', this.get("status").value])
                    }

                    if (this.get("locationId") != null && this.get("locationId") != undefined) {
                        requestQry = this.assemble(requestQry, [Serenity.Criteria("LocationId"), '=', this.get("locationId").LocationId])
                    }

                    if (this.get("group") != null && this.get("group") != undefined) {
                        requestQry = this.assemble(requestQry, [Serenity.Criteria("GroupId"), '=', this.get("group").RoleId])
                    }

                    if (this.get("user") != null && this.get("user") != undefined) {
                        requestQry = this.assemble(requestQry, [Serenity.Criteria("UserId"), '=', this.get("user").UserId])
                    }



                    if (requestQry.length >= 1) {
                        requestQry = (requestQry.length == 1) ? requestQry[0] : requestQry

                        TicketListLoader.TicketListLoaderRef.ticketListDtSrc.read({ Criteria: requestQry })
                    }
                    else {
                        TicketListLoader.TicketListLoaderRef.ticketListDtSrc.read()
                    }

                },
                assemble: function (arrRef, obj) {

                    if (arrRef.length == 0) {
                        arrRef.push(obj)
                        return arrRef;
                    }
                    else if (arrRef.length == 1) {
                        arrRef.push("and")
                        arrRef.push(obj)
                        return arrRef;
                    }
                    else {

                        var newArr1 = []
                        newArr1.push([arrRef[0], arrRef[1], arrRef[2]])
                        newArr1.push("and")
                        newArr1.push(obj)

                        return newArr1;
                    }
                }

            })//Ends this.fitlerPane
            kendo.bind($("#filter-pane"), this.fitlerPane)
        }

        private MyNewObserv() {
            alert('Yeah me called 1 2')
            this.menuObservable = kendo.observable({

                isVisible: false,
            })

            kendo.bind($("#menu-section-one"), this.menuObservable);

        }

        private MenuObservable() {
            this.menuObservable = kendo.observable({
                requestTypeSource: GlobalScripts.GetRequestType(),
                prioritySource: GlobalScripts.GetPriority(),
                statusSource: GlobalScripts.GetStatus(),
                locationIdSource: Q.getLookup("Administration.LocationLookup").items,
                groupSource: Q.getLookup("Administration.RoleLocationLookup").items,
                userSource: Q.getLookup("Administration.UserRoleLookup").items,
                requestType: null,
                priority: null,
                status: null,
                locationId: null,
                group: null,
                user: null,
                isVisible: false,
                message: null,
                phoneNumber: null,
                onNewClicked: function () {
                    $('.new-ticket-form').removeClass('hide');
                },
                myValue: "Fikoli",
                onSelect: function (e) {
                    var text = $(e.item).children(".k-link").text()
                    this.clearObj()
                    if (text == 'Set Type, Priority, Status and Group') {

                        $("#set-status").data("kendoDialog").open()
                    }
                    else if (text == 'Assign to Agent') {
                        $("#assign-to-agent").data("kendoDialog").open()
                    }
                    else if (text == 'Send SMS') {
                        $("#send-sms").data("kendoDialog").open()
                    }
                },
                clearObj: function () {
                    this.set("requestType", null)
                    this.set("priority", null)
                    this.set("status", null)
                    this.set("locationId", null)
                    this.set("group", null)
                    this.set("user", null)
                    this.set("message", null)
                    this.set("phoneNumber", null)
                },
                assignToAgent: function () {

                    var selectedKeys = $("#ticket-list").data("kendoGrid").selectedKeyNames()//.join(",")

                    if (selectedKeys != '') {

                        var selectedKeysInt = []
                        $.map(selectedKeys, function (item) {
                            selectedKeysInt.push(parseInt(item))
                        })
                        var requestObj = {
                            LocationId: this.get("locationId") != null ? this.get("locationId").LocationId : null,
                            GroupId: this.get("group") != null ? this.get("group").RoleId : null,
                            AgentId: this.get("user") != null ? this.get("user").UserId : null,
                            TicketIds: selectedKeysInt
                        }
                        var url = "BusinessObjects/Ticket/AssignToAgents";

                        Q.serviceRequest(url, requestObj, response => {

                            //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                            TicketListLoader.TicketListLoaderRef.fitlerPane.getObject()
                            Q.notifySuccess("Update successful");

                        })
                    }
                    else
                        Q.notifyWarning("Please select some records to process")
                },
                setStatus: function () {
                    var selectedKeys = $("#ticket-list").data("kendoGrid").selectedKeyNames()//.join(",")

                    if (selectedKeys != '') {

                        var selectedKeysInt = []
                        $.map(selectedKeys, function (item) {
                            selectedKeysInt.push(parseInt(item))
                        })

                        var requestObj = {
                            Priority: this.get("priority") != null ? this.get("priority").value : null,
                            Status: this.get("status") != null ? this.get("status").value : null,
                            Type: this.get("requestType") != null ? this.get("requestType").value : null,
                            LocationId: this.get("locationId") != null ? this.get("locationId").LocationId : null,
                            GroupId: this.get("group") != null ? this.get("group").RoleId : null,
                            AgentId: this.get("user") != null ? this.get("user").UserId : null,
                            TicketIds: selectedKeysInt
                        }


                        var url = "BusinessObjects/Ticket/ActionsSettings";

                        Q.serviceRequest(url, requestObj, response => {

                            //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                            TicketListLoader.TicketListLoaderRef.fitlerPane.getObject()
                            Q.notifySuccess("Update successful");

                        })
                    }
                    else
                        Q.notifyWarning("Please select some records to process")
                },
                sendSMS: function () {

                    var selectedKeys = $("#ticket-list").data("kendoGrid").selectedKeyNames()//.join(",")

                    if (selectedKeys != '') {

                        var selectedKeysInt = []
                        $.map(selectedKeys, function (item) {
                            selectedKeysInt.push(parseInt(item))
                        })

                        var requestObj = {
                            PhoneNumbers: this.get("phoneNumber"),
                            Message: this.get("message"),
                            LocationId: this.get("locationId") != null ? this.get("locationId").LocationId : null,
                            TicketIds: [selectedKeys]
                        }

                        var url = "BusinessObjects/Sms/TicketsSms";
                        Q.notifyInfo("Sending SMS ...")
                        Q.serviceRequest(url, requestObj, SmsResponse => {

                            //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                            //$(".refresh-button").click();
                            Q.notifySuccess("SMS sent");

                        })

                    }
                    else
                        Q.notifyWarning("Please select some records to process")

                }

            })

            kendo.bind($("#menu-section"), this.menuObservable)
        }


        public Load(): void {
            //alert($("#ticket-template").html())
            // $("#ticket-list").kendoListView({
            //   dataSource: this.ticketListDtSrc,
            //    template:kendo.template($("#ticket-template").html())
            //  })
            this.LoadGrid();


            this.LoadMenu()


        }

        public LoadInCustomer(customerId: number): void {

            TicketListLoader.TicketListLoaderRef.LoadGrid()
            var dtSrc = TicketListLoader.TicketListLoaderRef.ticketListDtSrc
            dtSrc.read({ EqualityFilter: { CustomerId: customerId } })


        }

        private LoadMenu() {
            //$("#menu").kendoMenu({
            //    select: function (e) {
            //        alert($(e.item).children(".k-link").text())
            //    }
            //})

            $("#menu-images").kendoMenu({
                select: function (e) {
                    if ($(e.item).children(".k-link").find("i").hasClass("fa-plus")) {
                        $('.nomail').addClass('hide');
                        $('.mailcontent').addClass('hide')
                        $('.new-ticket-form').removeClass('hide');
                    }
                    else if ($(e.item).children(".k-link").find("i").hasClass("fa-exclamation-triangle")) {
                        alert('Warning alert clicked')

                    }
                }
            })
        }

        private LoadGrid() {

            $("#ticket-list").kendoGrid({
                dataSource: this.ticketListDtSrc,
                persistSelection: true,
                columns: [{ selectable: true, width: "40px", },
                    { title: "Ticket", template: kendo.template($("#col-template").html()) },
                    //{ field: "TicketIdString", title: "Ticket-ID", width: "100px" },
                    //{ field: "Date", format: "{0:MM/dd/yyyy}", width:"100px" },
                    //{ field: "CustomerName" },
                    //{ field: "Subject" },

                    //{ template: kendo.template($("#status-template").html()), title: "Status" },
                    //{ title: "&nbsp;", template: '<a href="/BusinessObjects/Ticket/TicketDetail?ticketId=#:TicketId#" type="button" class="btn"><i class="glyphicon glyphicon-edit"></i></a>', width: "80px" }

                ],
                selectable: true,
                scrollable: true,
                height: "980px",
                change: function (e) {
                    // alert(this.dataItem(this.select()[0]).TicketId)
                    $('.nomail').addClass('hide');
                    $('.new-ticket-form').addClass('hide')
                    $('.mailcontent').removeClass('hide');
                    // $("#assign-to-agent").data("kendoDialog").open()


                }

            })


            $("#pager").kendoPager({
                dataSource: this.ticketListDtSrc,
            });
            $("#pager2").kendoPager({
                dataSource: this.ticketListDtSrc,
            });
        }


        protected ticketMessageSection: kendo.data.ObservableObject;
        public FormLoader(): void {

            this.ticketMessageSection = kendo.observable({
                action: [{ text: "In-coming-call" }, { text: "Out-going-call" }, { text: "Reply" }, { text: "Comment" }, { text: "Note" }, { text: "Complain" }],
                actionVal: null,
                getObject: function () {
                    alert(this.actionVal.text)
                }
            })//Ends this.ticketMessageSection
            kendo.bind($("#ticket-message-section"), this.ticketMessageSection)

            $("#vertical-splitter").kendoSplitter({
                orientation: "vertical",
                panes: [{ collapsible: true, size: "280px" }, { collapsible: true }]

            })
        }

        public HideAddButton(): void {
            $("#add-btn").hide();
        }


        public HideFilterPane(): void {
            $("#filter-pane").hide()
        }




    }
}