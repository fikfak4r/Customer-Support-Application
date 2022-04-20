/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
namespace CustomerSupport.BusinessObjects {

    //Q.serviceRequest("BusinessObjects/Ticket/NewTicket", { Customer: { Entity: { FullName: "Fikoli Chrome" } }, Ticket: { Entity: { LocationId: 2, Subject: 'My Chrome', Date: '9/22/2017 3:01:08 PM', TicketIdString: '11kdkdldls' } }, Note: { Entity: { Text: 'My chrome Text', EntityType: '[dbo].[Tickets]' } } }, res => { alert(JSON.stringify(res)) })


    export class TicketFormLoader {

//JSON.parse(Q.replaceAll(Q.replaceAll(JSON.stringify(Q.getLookup("Administration.CustomerLocationLookup").items), "LocationId", "value"), "LocationName", "text")),
        protected ticketForm: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected ticketMessageSection: kendo.data.ObservableObject;

        public static ticketFormStatic: kendo.data.ObservableObject;
        public static MessageSectnObsvbl: kendo.data.ObservableObject;
        public ticketId: number;
        public static TheTicketFormLoader: TicketFormLoader;


        constructor() {


            this.ticketForm = kendo.observable({
                customerList: Q.getLookup("Administration.CustomerLocationLookup").items,
                customerName: null,
                phoneNumber: null,
                customerNameFilter: null,
                phoneNumberFilter: null,
                customerChangedFilter: function () {
                    this.setPrefill(this.get("customerNameFilter"))
                },
                phoneNumberChangedFilter: function () {
                    this.setPrefill(this.get("phoneNumberFilter"))
                },
                ticketIdInt: null,
                customerId:null,
                ticketId: null,
                subject: null,
                followUpDate: null,
                followUpAction: null,
                messageChannel:null,
                message: null,
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
                setPrefill: function (obj) {

                    if (obj != null && obj != undefined) {
                        this.set("customerName", obj.FullName)
                        this.set("phoneNumber", obj.PhoneNumber)
                    }
                    else {
                        this.set("customerName", "")
                        this.set("phoneNumber", "")
                    }

                },
                getObject: function () {
                    return {
                        customerName: this.get("customerName"),
                        phoneNumber: this.get("phoneNumber"),
                        ticketId: this.get("ticketId"),
                        subject: this.get("subject"),
                        followUpDate: this.get("followUpDate"),
                        followUpAction: this.get("followUpAction"),
                        messageChannel: this.get("messageChannel"),
                        message: this.get("message"),
                        requestType: this.get("requestType"),
                        priority: this.get("priority"),
                        status: this.get("status"),
                        locationId: this.get("locationId").LocationId,
                        group: this.get("group"),
                        user: this.get("user"),
                        ticketIdInt: this.get("ticketIdInt"),
                        customerId: this.get("customerId"),

                       

                    }
                },
                renderMessages: function (obj) {
                    $("#timeline").html("");
                    $("#timeline").html(kendo.template($("#timeline-tmplt").html())(obj.Note.Entities))
                },
                submit: function () {

                    var validator = $("#new-ticket-form").kendoValidator().data("kendoValidator")


                    if (validator.validate()) {

                        if (this.get("message") != null && this.get("message") != "") {

                        var obj = this.getObject();

                        Q.notifyInfo("Creating a new Ticket . . .")

                        if (TicketFormLoader.TheTicketFormLoader.ticketId == undefined)
                        {

                            Q.serviceRequest("BusinessObjects/Ticket/NewTicket",
                                {

                                    Customer: { Entity: { FullName: obj.customerName } },
                                    Ticket: {
                                        Entity: {
                                            LocationId: obj.locationId, Subject: obj.subject, Date: new Date(), TicketIdString: obj.ticketId,
                                            Priority: obj.priority != null ? obj.priority.value : null,
                                            Status: obj.status != null ? obj.status.value : null,
                                            Type: obj.requestType != null ? obj.requestType.value : null,
                                            GroupId: obj.group != null ? obj.group.RoleId : null,
                                            UserId: obj.user != null ? obj.user.UserId : null,
                                            NextFollowUpDate: obj.followUpDate != null ? obj.followUpDate : null,
                                            FollowUpAction: obj.followUpAction != null ? obj.followUpAction : null
                                        }
                                    },
                                    Note: { Entity: { Text: obj.message, EntityType: '[dbo].[Tickets]', CallDirection: obj.messageChannel } }
                                },
                                res => {

                                    TicketFormLoader.TheTicketFormLoader.ticketId = res.Ticket.Entity.TicketId
                                    TicketFormLoader.ticketFormStatic.setEntityIds(res)
                                    TicketFormLoader.ticketFormStatic.set("isVisible", true)
                                    TicketFormLoader.ticketFormStatic.renderMessages(res)
                                    $("#ticket-messsage-dialog").data("kendoDialog").close()
                                    Q.notifySuccess("Ticket created");
                                });

                        }
                        else {
                            //Sending Message
                            Q.serviceRequest("BusinessObjects/Ticket/UpdateTicketMessage",
                                { Customer: { EntityId: obj.customerId, Entity: { CustomerId: obj.customerId, FullName: obj.customerName } }, Ticket: { EntityId: obj.ticketIdInt, Entity: { TicketId: obj.TicketIdInt, LocationId: obj.locationId, Subject: obj.subject, Date: new Date(), TicketIdString: obj.ticketId } }, Note: { Entity: { Text: obj.message, EntityType: '[dbo].[Tickets]', CallDirection: obj.messageChannel } } },
                                res => {
                                    TicketFormLoader.ticketFormStatic.renderMessages(res)
                                    $("#ticket-messsage-dialog").data("kendoDialog").close()                                    
                                    Q.notifySuccess("Message saved");
                                })
                        }
                        }
                        else
                            Q.notifyWarning("Enter a message")
                    }
                         else { Q.notifyWarning("Some fields are required. Please check.") }
                },
                update: function () {
                    var validator = $("#new-ticket-form").kendoValidator().data("kendoValidator")


                    if (validator.validate()) {
                    var obj = this.getObject();

                    Q.notifyInfo("Ticket updating . . .")
                    
                    Q.serviceRequest("BusinessObjects/Ticket/UpdateTicket",
                        {
                            Customer: { EntityId: obj.customerId, Entity: { FullName: obj.customerName } },
                            Ticket: {
                                EntityId: obj.ticketIdInt, Entity: {
                                    LocationId: obj.locationId, Subject: obj.subject, Date: new Date(), TicketIdString: obj.ticketId,
                                    Priority: obj.priority != null ? obj.priority.value : null,
                                    Status: obj.status != null ? obj.status.value : null,
                                    Type: obj.requestType != null ? obj.requestType.value : null,
                                    GroupId: obj.group != null ? obj.group.RoleId : null,
                                    UserId: obj.user != null ? obj.user.UserId : null, 
                                    NextFollowUpDate: obj.followUpDate != null ? obj.followUpDate : null,
                                    FollowUpAction: obj.followUpAction != null ? obj.followUpAction : null
                                }
                            }
                        },
                        res => {
                            $("#ticket-messsage-dialog").data("kendoDialog").close()
                            Q.notifySuccess("Update successful");
                        })

                }
                else { Q.notifyWarning("Some fields are required. Please check.") }

                },
                clearMessage:function(){
                    this.set("message", "")
                },
                setEntityIds: function (obj) {
                    this.set("ticketIdInt", obj.Ticket.Entity.TicketId)
                    this.set("customerId", obj.Customer.Entity.CustomerId)
                },
                setObject: function (obj) {

                    this.set("customerName", obj.Customer.Entity.FullName)
                    this.set("phoneNumber", obj.Customer.Entity.PhoneNumber)
                    this.set("locationId", obj.Ticket.Entity.LocationId)
                    this.set("ticketId", obj.Ticket.Entity.TicketIdString)
                    this.set("subject", obj.Ticket.Entity.Subject)
                    this.set("priority", obj.Ticket.Entity.Priority)
                    this.set("status", obj.Ticket.Entity.Status)
                    this.set("requestType", obj.Ticket.Entity.Type)
                    this.set("group", obj.Ticket.Entity.GroupId)
                    this.set("user", obj.Ticket.Entity.UserId)
                    this.set("followUpDate", obj.Ticket.Entity.NextFollowUpDate)
                    this.set("followUpAction", obj.Ticket.Entity.FollowUpAction)
                    this.set("messageChannel", null)

                    this.setEntityIds(obj)

                    this.renderMessages(obj)


                },

                isMsgDlgVisible: false,

                openDialog: function () {
                    $("#ticket-messsage-dialog").data("kendoDialog").open();
                }, getNextNumber :function() {

                    //var val = Q.trimToNull(this.form.TicketIdString.value);
                    var val = null
                    // we will only get next number when customer ID is empty or 1 character in length
                    if (!val || val.length <= 1) {

                        // if no customer ID yet (new record mode probably) use 'C' as a prefix
                        var prefix = (val || 'ID_').toUpperCase();


                        // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                        BusinessObjects.TicketService.GetNextNumber({
                            Prefix: prefix,
                            Length: 8 // we want service to search for and return serials of 5 in length
                        }, response => {
                            //this.form.TicketIdString.value = response.Serial;
                            TicketFormLoader.ticketFormStatic.set("ticketId", response.Serial)

                            // this is to mark numerical part after prefix
                            //(this.form.TicketIdString.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                        });
                    }
                }
             

            })//Ends this.ticketList
       
            kendo.bind($("#new-ticket-form"), this.ticketForm)

            TicketFormLoader.ticketFormStatic = this.ticketForm

            TicketFormLoader.TheTicketFormLoader = this;

         

        }



        private LoadMenu() {
            //$("#menu").kendoMenu({
            //    select: function (e) {
            //        alert($(e.item).children(".k-link").text())
            //    }
            //})

            $("#form-menu").kendoMenu({

            })
        }



        public Load(ticketId: number): void {

            if (ticketId != undefined) {
                this.ticketId = ticketId;
                Q.notifyInfo("Loading Ticket . . . ")
                Q.serviceRequest("BusinessObjects/Ticket/DetailTicket",
                    { EntityId: ticketId },
                    res => {
                        TicketFormLoader.ticketFormStatic.set("isVisible", true)
                        TicketFormLoader.ticketFormStatic.setObject(res)
                    })

            } else {
                TicketFormLoader.ticketFormStatic.getNextNumber()
            }


            $("#vertical-splitter").kendoSplitter({
                orientation: "vertical",
                panes: [{ min:"600px" }]

            })

            this.LoadMenu();
            this.InitCommunicationMedium()

        }


        public InitCommunicationMedium() {
            $("#communication-medium").kendoMobileButtonGroup({
                select: function (e) {
                 
                    TicketFormLoader.ticketFormStatic.set("messageChannel",  $(e.sender.element).find("li.k-state-active").text())

                },
            })
        }


        public static Submit()
        {
            
            //alert(JSON.stringify(TicketFormLoader.ticketFormStatic.getObject()))
            //return;

    

        }

    }
}