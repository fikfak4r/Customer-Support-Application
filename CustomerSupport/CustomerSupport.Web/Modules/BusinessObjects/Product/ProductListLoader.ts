/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
namespace CustomerSupport.BusinessObjects {

    export class ProductListLoader {

        protected productList: kendo.data.ObservableObject;
        protected productListDtSrc: kendo.data.DataSource;


        constructor() {


            this.ProductDataSource();



        }





        public Load(): void {
            //alert($("#product-template").html())
            // $("#product-list").kendoListView({
            //   dataSource: this.productListDtSrc,
            //    template:kendo.template($("#product-template").html())
            //  })


            this.ProductGrid();



        }


        private ProductDataSource() {
            this.productListDtSrc = new kendo.data.DataSource({
                schema: {
                    //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                    data: "Entities",
                    total: "TotalCount",
                    model: {
                        id: "ProductId",
                        fields: {
                            Date: { type: "date" },
                            Price: { type: "number" },
                            
                        },
                    }
                },
                batch: true,
                pageSize: 5,
                transport: {
                    read: function (options) {

                        ProductService.List({},
                            res => {
                                options.success(res);
                            })



                        //options.success({ Entities: [{ ProductId: 1, Subject: "Subj 1" }, { ProductId: 2, Subject: "Subj 2" }], TotalCount: 2 })
                    },
                    create: function (options) {
                        alert(JSON.stringify(options.data))
                        // ClassNameService.Create({ Entity: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"ProductId":0,', '')) },
                        //      res => {
                        //           options.success(res);
                        //   })
                    },
                     update: function (options) {
                         alert("Update: " + JSON.stringify( options.data))
                        // ClassNameService.Create({ Entity: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"ProductId":0,', '')) },
                        //      res => {
                        //           options.success(res);
                        //   })
                    }
                },
            })//Ends
        }//Ends ProductDataSource

        private ProductGrid() {
            //alert(JSON.stringify(Q.getLookup("Administration.CustomerLocationLookup").items))
            $("#product-list").kendoGrid({
                dataSource: this.productListDtSrc,
                columns: [{ selectable: true, width: "50px" },
                    { field: "Name", format: "{0:c}" },
                    { field: "Price", },
                    {
                        field: "LocationList", title: "Location",
                        template: "<div class='contentDivs' style='white-space: nowrap; height: 25px; overflow: hidden; max-width:65%; float: left;'></div>< button class='editButtons' style='float:right' > Manage Location</button > "
                        
                        
                    },
                    { command: ["destroy"], title :"&nbsp;" },

                ],
                //toolbar: ["create", "save", "cancel"],
                navigatable:true,
                editable: true,
                dataBound: ProductListLoader.OnProductGridDataBound
            })


            $("#pager").kendoPager({
                dataSource: this.productListDtSrc,
            });
            $("#pager2").kendoPager({
                dataSource: this.productListDtSrc,
            });
        }


        public static OnProductGridDataBound() {

            
                $(".contentDivs").children().css("display", "table-cell");
                $(".editButtons").kendoButton({
                    click: function (e) {
                        alert('Location button clicked')
                        //var grid = $("#grid").data("kendoGrid");
                        //var editor = $("#editor").data("kendoEditor");
                        //var window = $("#window").data("kendoWindow");
                        //var row = e.sender.element.closest("tr");
                        //var dataItem = grid.dataItem(row);

                        //kendo.bind(editor.element, dataItem);
                        //window.open().center();
                    }
                });
            

        }
     

    }
}