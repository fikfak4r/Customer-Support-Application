/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />


namespace CustomerSupport.BusinessObjects {

    export class TransactionFormLoader {

//        Q.serviceRequest("BusinessObjects/Transaction/NewTransaction", {Customer:{Entity: {Date:"2017-09-16",DateOfBirth:"2017-09-16",FullName:"Ihuoma Onu Fikayo",LocationId:2,PhoneNumber:"08065701697",Sex:1}},
//        Transaction
//        :
//        { Entity: { Status: 'Open', OrderId: 'FikFik', LocationId:2,Subject: "Purchases",TotalAmount:317298,TotalAmountLeft:317298,TotalAmountPaid:0,Date: "2017-09-16"
//    }
//},
//TransactionDetails
//:
//[{ Entity: { Amount: 318000, Date: "2017-09-24", Discount: 0, ProductId: 1, Quantity: 30, UnitName: "Pieces", UnitPrice: 53000 } }]}, res => { alert(JSON.stringify(res)) })

        protected calcObservable: kendo.data.ObservableObject;
        protected customerInfoObservable: kendo.data.ObservableObject;
        protected TransactionFormLoadersDtSrc: kendo.data.DataSource;

        private gridContextMenu: any;
        private static tranx_dtl_grd: any;


        public static CalcObservable_Static: kendo.data.ObservableObject;
        public static CustomerInfoObservable_Static: kendo.data.ObservableObject;

        constructor() {

            this.calcObservable = kendo.observable({
                CalculateAmount: function (dataItem) {
                    return dataItem.Quantity * dataItem.UnitPrice;
                },
                CalculateRowAmount: function (index) {
                    var grid = TransactionFormLoader.tranx_dtl_grd
                    var dataItem = grid.dataItem("tbody tr:eq(" + index + ")");
                    return (dataItem.Quantity * dataItem.UnitPrice);
                },
                CalculateTotalAmount: function (gridRef) {
                   
                    var items = gridRef.items();
                    var rowCount = items.length - 1
                    var ttlAmt = 0;
                    for (var x = 0; x < items.length; x++) {
                        var amt = this.CalculateAmount(gridRef.dataItem(items[x]))
                        ttlAmt += amt
                        gridRef.dataItem(items[x]).Amount = amt;
                    }
                    //gridRef.refresh();
                    this.set("totalAmountProp", ttlAmt);
                    this.set("totalAmountPropFmtd", kendo.toString(ttlAmt, "##,#.00"))
                  
                },
                totalAmountProp: 0,
                totalAmountPropFmtd:"0.00",
                paid: 0,
                discount: 0,
                discountFmtd:"0.00",
                tax: 0,
                taxFmtd:"0.00",
                grandTotal: 0,
                grandTotalFmtd: "0.00",
                bal:"0.00",
                calculateGrandTotal: function () {

                    var discount = 0;
                    var tax = 0;
                    var totalPaid = this.get("paid")
                    var totalAmount = this.get("totalAmountProp")

                    

                    if (this.get("tax") > 0 && !isNaN(this.get("tax"))) {
                        //tax = (this.get("tax") / 100) * totalAmount
                        tax = this.get("tax") * totalAmount;
                    }

                    if (this.get("discount") > 0 && !isNaN(this.get("discount"))) {
                        //discount = (this.get("discount") / 100) * totalAmount
                        discount = this.get("discount") * totalAmount;
                    }

                    var paid = totalAmount - discount;
                    paid = paid + tax

                    this.set("paid", paid)
                    this.set("grandTotal", paid)
                    this.set("grandTotalFmtd", kendo.toString(paid, "##,#.00"))
                    this.set("bal", kendo.toString((this.get("grandTotal") - this.get("paid")), "##,#.00"))

                },
                pdChngd: function () {
                    this.set("bal", kendo.toString((this.get("grandTotal") - this.get("paid")), "##,#.00"))
                },
                 getObject: function () {

                    var gridItems = [];
                    var gridRef = TransactionFormLoader.tranx_dtl_grd;
                    var items = gridRef.items();
                    var rowCount = items.length - 1
                    
                    for (var x = 0; x < items.length; x++) {
                        var item = gridRef.dataItem(items[x])
                        if (item.Product.ProductId != null && item.Product.ProductId != undefined)
                            gridItems.push({ Entity: { Date: new Date(), ProductId: item.Product.ProductId, Quantity: item.Quantity, UnitName:"Piece", UnitPrice: item.UnitPrice, Amount: item.Amount } })
                    }

                    return { Entities: gridItems, TotalAmount: this.get("grandTotal"), Paid: this.get("paid"), TotalAmountLeft: this.get("grandTotal") - this.get("paid"), Tax : this.get("tax"), Discount: this.get("discount") }
                },
                clear: function () {

                    //var x = TransactionFormLoader.tranx_dtl_grd.items().length
                    //for (var y = -1; y <= x; y++ )
                    //    TransactionFormLoader.tranx_dtl_grd.removeRow("tr:eq(" + (y + 1) + ")")

                    
                    TransactionFormLoader.tranx_dtl_grd.dataSource.data([])
                    
                    setTimeout(function () {
                        
                        TransactionFormLoader.tranx_dtl_grd.addRow();
                    }, 50)


                    this.set("totalAmountProp", "0.00")
                    this.set("totalAmountPropFmtd", "0.00")
                    this.set("paid", "0.00")
                    this.set("discount", "0.00")
                    this.set("tax", "0.00")
                    this.set("grandTotal", 0)
                    this.set("grandTotalFmtd", "0.00")
                    this.set("bal", "0.00")


                },

                

            })//Ends calcObservable
            kendo.bind($("#total-amt-calc"), this.calcObservable)

            TransactionFormLoader.CalcObservable_Static = this.calcObservable;

            this.customerInfoObservable = kendo.observable({
                orderId: null,
                locationIdSource: Q.getLookup("Administration.LocationLookup").items,
                locationId: null,
                date: new Date(),
                name: "Fikoli",
                email: "fik@yahoo.com",
                phoneNumber: "080",
                customerInfo: function () {
                    return { orderId: this.get("orderId"), date: this.get("date"), name: this.get("name"), email: this.get("email"), phoneNumber: this.get("phoneNumber"), locationId: this.get("locationId").LocationId }
                },
                clear: function () {
                    this.set("date", new Date());
                    this.set("name", "");
                    this.set("email", "");
                    this.set("phoneNumber", "");
                    this.getNextNumber();
                },
                getNextNumber: function () {

                    //var val = Q.trimToNull(this.form.TicketIdString.value);
                    var val = null
                    // we will only get next number when customer ID is empty or 1 character in length
                    if (!val || val.length <= 1) {

                        // if no customer ID yet (new record mode probably) use 'C' as a prefix
                        var prefix = (val || 'ID_').toUpperCase();


                        // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                        BusinessObjects.TransactionService.GetNextNumber({
                            Prefix: prefix,
                            Length: 8 // we want service to search for and return serials of 5 in length
                        }, response => {
                            //this.form.TicketIdString.value = response.Serial;
                            TransactionFormLoader.CustomerInfoObservable_Static.set("orderId", response.Serial)

                            // this is to mark numerical part after prefix
                            //(this.form.TicketIdString.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                        });
                    }
                }
            })

            kendo.bind($("#customer-info"), this.customerInfoObservable)

            TransactionFormLoader.CustomerInfoObservable_Static = this.customerInfoObservable



            this.TransactionFormLoadersDtSrc = new kendo.data.DataSource({
                schema: {
                    model: {
                        id: "TransactionId",
                        fields: {
                            TransactionFormLoaderId: { type: "number" },
                            TransactionId: { type: "number" },
                            Date: { type: "number" },
                            ProductName: { type: "string" },
                        }
                    },
                },
                pageSize: 20,
                transport: {
                    create: function (options) {
                        //options.
                    },
                    update: function (options) { }
                }

            })


        }

        public static CalculatorObservable(): kendo.data.ObservableObject {
            return
        }

        public static CustomerInfoObservable(): kendo.data.ObservableObject {

            return

        }




        public static DltGrdDataSource(): kendo.data.DataSource {

            var inMem = []
            var dtSrc = new kendo.data.DataSource({
                schema: {

                    model: {
                        id: "TransactionDetailId",
                        fields: {
                            Product: { type: "object", defaultValue: {}, editable: true, },
                       
                            Quantity: { type: "number" },
                            UnitPrice: { type: "number" },
                            Amount: { type: "number" }

                        }
                    }
                },
                transport: {
                    read: function (options) {
                        options.success(inMem)
                    }
                }
            })//Ends dtSrc
            return dtSrc;
        }


        public Load() {

            $("#customer-date").kendoDatePicker()


            this.TranxDtlGrid();

            this.GridContextMenuMthd();

            TransactionFormLoader.CustomerInfoObservable_Static.getNextNumber()


        }//Ends the Load method


        private TranxDtlGrid() {

             TransactionFormLoader.tranx_dtl_grd = $("#transaction-dtl-grd").kendoGrid({

                dataSource: TransactionFormLoader.DltGrdDataSource(),
                columns: [
                    {
                        field: "Product",
                        editor: TransactionFormLoader.ProductDropDownEditor,
                        template: "#:Product.Name#"
                    },
                    { field: "Quantity" },
                    { field: "UnitPrice", title: "Unit price", format: "{0:##,#.00}"},
                    { field: "Amount", format: "{0:##,#.00}", },


                ],
                editable: {
                    createAt: "bottom",
                },
                navigatable: true,
                cellClose: function (e) {

                    //alert($(e.container).val())
                    //alert($(e.container).html())

                    TransactionFormLoader.tranx_dtl_grd.tbody.find("tr:eq(" + e.container.parent("tr").index() + ")").find("td:nth-child(4)").text(kendo.toString(TransactionFormLoader.CalcObservable_Static.CalculateRowAmount(e.container.parent("tr").index()), "##,#.00"))
                    TransactionFormLoader.CalcObservable_Static.CalculateTotalAmount(TransactionFormLoader.tranx_dtl_grd)
                    TransactionFormLoader.CalcObservable_Static.calculateGrandTotal()
                    //alert("Cell closed: " + e.container.index() + " Cell index" +  e.sender.cellIndex(e.sender.element[0].innerHTML))

                },
                beforeEdit: function (e) {
                    
                },
                
                edit: function (e) {
                    
                    
                    //alert(e.container)
                    //alert(TransactionFormLoader.tranx_dtl_grd.tbody.find("tr:first"))
                    //alert(TransactionFormLoader.tranx_dtl_grd.tbody.find("tr:first").find("td:nth-child(4)").html());
             
 
                     //e.preventDefault()
                    //alert("Edit: " + e.container.index()+ " Cell index" + e.sender.element[0].innerHTML)
                },
                change: function (e) {
                    
                    alert(Object.getOwnPropertyNames(e))
                }


             }).data("kendoGrid");

            TransactionFormLoader.tranx_dtl_grd.addRow();


            TransactionFormLoader.tranx_dtl_grd.tbody.on('keydown', function (e) {

                if (e.keyCode == 13 && $(e.target).closest('tr').find("td:first").is(':first-child')) {


                    var rowIndex = $(e.target).closest('tr').index();
                    var cellIndex = $(e.target).closest('tr > td').index();


                    setTimeout(function () {
                        TransactionFormLoader.tranx_dtl_grd.tbody.find("tr:first td:first").blur();
                        TransactionFormLoader.tranx_dtl_grd.current(TransactionFormLoader.tranx_dtl_grd.tbody.find("tr:eq(" + rowIndex + ") td:eq(" + cellIndex + ")"))
                    }, 50)

                }else if(e.keyCode == 46)
                {
                    var rowIndex = $(e.target).closest('tr').index();
                    //alert('Row-Index: ' + rowIndex)
                    TransactionFormLoader.DeleteDtlGridRcrd(rowIndex)
                }

                if ($(e.target).closest('td').is(':last-child') && $(e.target).closest('tr').is(':last-child'))
                {


                    setTimeout(function () {
                        //TransactionFormLoader.tranx_dtl_grd.saveRow();
                        TransactionFormLoader.tranx_dtl_grd.addRow();


                    }, 50)

                }

                

            })
        }

        private static DeleteDtlGridRcrd(rowIndex:number)
        {
            var grdRef = TransactionFormLoader.tranx_dtl_grd;
            if(grdRef.items().length > 1)
            {
                grdRef.removeRow("tr:eq(" + (rowIndex + 1) + ")")
                TransactionFormLoader.CalcObservable_Static.CalculateTotalAmount(TransactionFormLoader.tranx_dtl_grd)
                TransactionFormLoader.CalcObservable_Static.calculateGrandTotal()
            }
        }

        private GridContextMenuMthd()
        {
            this.gridContextMenu = $("#menu").kendoContextMenu({
                orientation: "vertical",
                target: "#transaction-dtl-grd",
                filter: "table > tbody > tr",
                animation: {
                    open: { effects: "fadeIn" },
                    duration: 500
                },
                select: function (e) {
                    var rowIndex = $(e.target).closest('tr').index();
                    TransactionFormLoader.DeleteDtlGridRcrd(rowIndex)
                }
            });
        }

        public static ProductDropDownEditor(container, options) {
            
          
            $('<input data-bind="value:' + options.field + '" name="' + options.field +'"/>')
                    .appendTo(container)
                    .kendoComboBox({
                        autoBind: false,
                        dataTextField: "Name",
                        dataValueField: "ProductId",
                        placeholder: "Select a product . . .",
                        dataSource: {
                            schema: {
                                model: {
                                    id: "ProductId",
                                    fields: {
                                        ProductId: { type: "number" },
                                        Name: {type:"string"}
                                    }
                                }
                            },
                            transport: {
                                read: function (options) {
                                    options.success(Q.getLookup("Administration.ProductLocationLookup").items)
                                }
                            }
                        },
                        change: function (e) {
                            var widget = e.sender;

                            if (widget.value() && widget.select() === -1) {
                                //custom has been selected
                                widget.value("");
                                
                               
                                //widget.value(""); //reset widget
                            }
                            
                        },
                        select: function (e) {
                         //alert('selected')
                       
                        },
                       
                    });
            
        }


        public static Submit() {
            //alert(kendo.stringify(TransactionFormLoader.CalcObservable_Static.getObject()))
            //alert(kendo.stringify(TransactionFormLoader.CustomerInfoObservable_Static.customerInfo()))
    
            var validator = $("#customer-info").kendoValidator().data("kendoValidator")


            if (validator.validate()) {

            Q.notifyInfo("Processing sales . . .")

            var custObj = TransactionFormLoader.CustomerInfoObservable_Static.customerInfo();
            var transDtls = TransactionFormLoader.CalcObservable_Static.getObject();

            //alert(JSON.stringify({

            //Transaction: { Entity: { Date: custObj.date, OrderId: custObj.orderId, Subject: "Sales", TotalAmount: transDtls.TotalAmount, TotalAmountPaid: transDtls.Paid, TotalAmountLeft: transDtls.TotalAmountLeft, Tax: transDtls.Tax, Discount: transDtls.Discount, LocationId: custObj.locationId } },
            //Customer: { Entity: { FullName: custObj.name } },
            //TransactionDetails: transDtls.Entities

            //}))

            //return;
            
            Q.serviceRequest("BusinessObjects/Transaction/NewTransaction",
                {

                    Transaction: { Entity: { Date: custObj.date, OrderId: custObj.orderId, Subject: "Sales", TotalAmount: transDtls.TotalAmount, TotalAmountPaid: transDtls.Paid, TotalAmountLeft: transDtls.TotalAmountLeft, Tax: transDtls.Tax, Discount: transDtls.Discount, LocationId: custObj.locationId } },
                    Customer: { Entity: { FullName: custObj.name } },
                    TransactionDetails: transDtls.Entities

                },
                res => {
                    TransactionFormLoader.CustomerInfoObservable_Static.clear()
                    TransactionFormLoader.CalcObservable_Static.clear()
                    Q.notifySuccess("Sales completed");
                })


            } else { Q.notifyWarning("Some fields are required. Please check.") }
            //alert(kendo.stringify({
            //    Transaction: {
            //        CustomerInfo: TransactionFormLoader.CustomerInfoObservable_Static.customerInfo(),
            //        TransactionDetails : TransactionFormLoader.CalcObservable_Static.getObject()
            //    }
            //}))
      
            //$("#transaction-dtl-grd").data("kendoGrid").saveChanges()
        }

    }
}