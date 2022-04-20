/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />

namespace CustomerSupport.BusinessObjects {

    export class CustomerSMSListLoader {

        protected ticketList: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected customerSmsListDtSrc: kendo.data.DataSource;
        public static CustomerSMSListLoaderRef: CustomerSMSListLoader;
        protected menuObservable: kendo.data.ObservableObject;

        constructor() {

            this.GridListDataSource();
            CustomerSMSListLoader.CustomerSMSListLoaderRef = this;
        
            
        }


        private GridListDataSource() {
            this.customerSmsListDtSrc = new kendo.data.DataSource({
                schema: {
                    //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                    data: "Entities",
                    total: "TotalCount",
                    model: {
                        id: "CustomerSmsId",
                        fields: {
                            SmsDate: { type: "date" }
                        },
                    }
                },
                batch: false,
                pageSize: 5,
                transport: {
                    read: function (options) {


                         if (options.data.EqualityFilter != undefined) {
                             
                             CustomerSmsService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: ["SmsMessage", "SmsDate", "Delivered", "UnDelivered"]}, 
                                res => {

                                    options.success(res);
                                })
                        }
                         else {
                             
                             CustomerSmsService.List({ IncludeColumns: ["SmsMessage", "SmsDate", "Delivered", "UnDelivered"]},
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




        public Load(): void {
            //alert($("#ticket-template").html())
            // $("#ticket-list").kendoListView({
            //   dataSource: this.customerSmsListDtSrc,
            //    template:kendo.template($("#ticket-template").html())
            //  })
            this.LoadGrid();


            //this.LoadMenu()


        }

        public LoadInCustomer(customerId: number): void {

            CustomerSMSListLoader.CustomerSMSListLoaderRef.LoadGrid()
            var dtSrc = CustomerSMSListLoader.CustomerSMSListLoaderRef.customerSmsListDtSrc
            dtSrc.read({ EqualityFilter: { CustomerId: customerId } })
                //.then(function () { CustomerSMSListLoader.CustomerSMSListLoaderRef.LoadGrid() })



        }

   

        private LoadGrid() {

            $("#customer-sms-list").kendoGrid({
                dataSource: this.customerSmsListDtSrc,
                columns: [
                    { field: "SmsDate", format: "{0:MM/dd/yyyy}", title: "Date" },
                    { field: "SmsMessage", title:"Message" },
                    { field: "Sent" },
                    { field: "Delivered" },
                    { field: "UnDelivered" },


                ],

            })


            $("#pager").kendoPager({
                dataSource: this.customerSmsListDtSrc,
            });
            $("#pager2").kendoPager({
                dataSource: this.customerSmsListDtSrc,
            });
        }




    }
}