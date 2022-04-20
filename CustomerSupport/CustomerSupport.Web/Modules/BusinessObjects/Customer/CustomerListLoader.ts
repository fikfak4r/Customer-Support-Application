/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
namespace CustomerSupport.BusinessObjects {

    export class CustomerListLoader {

        protected customerListDtSrc: kendo.data.DataSource;


        constructor() {

    

            this.customerListDtSrc = new kendo.data.DataSource({
                schema: {
                    //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                    data: "Entities",
                    total: "TotalCount",
                    model: {
                        id: "CustomerId",
                        fields: {
                            Date: {type:"date"}
                        },
                    }
                },
                batch: false,
                pageSize: 5,
                transport: {
                    read: function (options) {
                            CustomerService.List({Take:20},
                               res => {
                                       //options.success(res);
                                       options.success(res);
                               })

                        //options.success({ Entities: [{ CustomerId: 1, Subject: "Subj 1" }, { CustomerId: 2, Subject: "Subj 2" }], TotalCount: 2 })

                    },
                    create: function (options) {
                        // ClassNameService.Create({ Entity: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"CustomerId":0,', '')) },
                        //      res => {
                        //           options.success(res);
                        //   })
                    }
                },
            })//Ends


        }





        public Load(): void {
     

            $("#customer-list").kendoGrid({
                dataSource: this.customerListDtSrc,
                columns: [{ selectable: true, width: "50px" },
         
                    { field: "Date", format: "{0:MM/dd/yyyy}" },
                    { field: "FullName", title: "Name" },
                    {
                        field: "PhoneNumber", title :"Phone number"
                    },
                    { field:"Email",  },
                    { title: "&nbsp;", template: '<a href="Customer/CustomerDetail?customerId=#:CustomerId#" type="button" class="btn"><i class="glyphicon glyphicon-edit"></i></a>', width: "100px" }
                ],

            })

            $("#pager").kendoPager({
                dataSource: this.customerListDtSrc,
            });
            $("#pager2").kendoPager({
                dataSource: this.customerListDtSrc,
            });
        }


   


    }
}