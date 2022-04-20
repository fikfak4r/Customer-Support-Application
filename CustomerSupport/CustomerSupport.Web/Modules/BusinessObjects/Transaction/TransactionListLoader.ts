/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />

namespace CustomerSupport.BusinessObjects {

    export class TransactionListLoader {

        protected transactionDtlFrm: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected transactionListDtSrc: kendo.data.DataSource;


        constructor() {


            this.transactionListDtSrc = new kendo.data.DataSource({
                schema: {
                    //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                    data: "Entities",
                    total: "TotalCount",
                    model: {
                        id: "TransactionId",
                        fields: {
                            Date: { type: "date" }
                        },
                    }
                },
                batch: false,
                pageSize: 5,
                transport: {
                    read: function (options) {
                        TransactionService.List({ IncludeColumns:["CustomerName"] },
                               res => {
                                       
                                       options.success(res);
                               })

                        //options.success({ Entities: [{ TransactionId: 1, Subject: "Subj 1" }, { TransactionId: 2, Subject: "Subj 2" }], TotalCount: 2 })

                    },
                    create: function (options) {
                        // ClassNameService.Create({ Entity: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"TransactionId":0,', '')) },
                        //      res => {
                        //           options.success(res);
                        //   })
                    }
                },
            })//Ends


        }





        public Load(): void {
   
            $("#transaction-list").kendoGrid({
                dataSource: this.transactionListDtSrc,
                columns: [{ selectable: true, width: "50px" },
                    { field: "OrderId" },
                    { field: "Date", format: "{0:MM/dd/yyyy}", width:"100px" },
                    { field: "CustomerName", title:"Customer" },
                    { field: "Subject" },
                    { field: "TotalAmount", title: "Amount", format:"{0:##,#.00}" },
                    { field: "TotalAmountPaid", title: "Paid", format: "{0:##,#.00}" },
                    { field: "TotalAmountLeft", title: "Balance", format: "{0:##,#.00}" }
                ],

            })

            $("#pager").kendoPager({
                dataSource: this.transactionListDtSrc,
            });
            $("#pager2").kendoPager({
                dataSource: this.transactionListDtSrc,
            });
        }


    


    }
}