/// <reference path="../../Content/js/Kendo/typescript/jquery.d.ts" />
/// <reference path="../../Content/js/Kendo/typescript/kendo.all.d.ts" />


var calcObserv = kendo.observable({
    CalculateAmount:function(dataItem){
       return dataItem.Quantity * dataItem.UnitPrice;
    },
    CalculateTotalAmount:function(gridRef){
          var items = gridRef.items();
          var rowCount = items.length - 1
          var ttlAmt = 0;
          for(x = 0; x < items.length; x++)
          {
          ttlAmt += this.CalculateAmount(gridRef.dataItem(items[x]))
          }
          this.set("totalAmountProp", ttlAmt);
    },
    totalAmountProp:0,
    paid:0,
    discount:0,
    tax:0,
    grandTotal:0,
    calculateGrandTotal:function(){

        var discount = 0;
        var tax = 0;
        var totalPaid = this.get("paid")
        var totalAmount = this.get("totalAmountProp")

        if(this.get("tax") > 0 &&  isNaN(this.get("tax")))
        {
            tax = (this.get("tax")/100) * totalAmount
        }

         if(this.get("discount") > 0 &&  isNaN(this.get("discount")))
        {
            tax = (this.get("discount")/100) * totalAmount
        }

        paid = totalAmount - discount;
        paid = paid + tax

        this.set("paid", paid)
        this.set("grandTotal", paid)

    }


})

var custInfo = kendo.observable({
    date:null,
    name:"Fikoli",
    email:"fik@yahoo.com",
    phoneNumber:"080",
    customerInfo:function(){
        return {date:this.get("date"),name:this.get("name"),email:this.get("email"),phoneNumber:this.get("phoneNumber")}
    }
})


function Transaction() {

}

Transaction.DltGrdDataSource = function () {

    var inMem = [{ Product: "Inf", Quantity: "2", UnitPrice: "300", Amount: "6000" }]
    var dtSrc = new kendo.data.DataSource({
        schema: {

            model: {
                id: "",
                fields: {
                    Product: { type: "string" },
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


Transaction.prototype.Load = function () {

    $("#customer-date").kendoDatePicker()

    var trax_dtl_grd = $("#transaction-dtl-grd").kendoGrid({
        dataSource: Transaction.DltGrdDataSource(),
        columns: [
            { field: "Product" },
            { field: "Quantity" },
            { field: "UnitPrice", title: "Unit price" },
            { field: "Amount" },
            

        ],
        editable: {
            createAt: "bottom"
        },
        navigatable: true,
        cellClose:function(e){
            
        }
    }).data("kendoGrid");

    trax_dtl_grd.addRow();

    trax_dtl_grd.tbody.on('keydown', function (e) {
        if ($(e.target).closest('td').is(':last-child') && $(e.target).closest('tr').is(':last-child')) {
            trax_dtl_grd.addRow();

            calcObserv.CalculateTotalAmount(trax_dtl_grd)
            calcObserv.calculateGrandTotal();
            

        }
    })


    

    $("#customer-list-ddl").kendoAutoComplete(
        {
            dataSource: ["Data 1", "Data 2"],
            placeholder: "Select customer"
        }
    )



}//Ends the Load method






Transaction.Submit = function(){
    alert(kendo.stringify(custInfo.customerInfo()))
    $("#transaction-dtl-grd").data("kendoGrid").saveChanges()
}