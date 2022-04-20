/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
namespace CustomerSupport.BusinessObjects {

    //Q.serviceRequest("BusinessObjects/Product/NewProduct", { Customer: { Entity: { FullName: "Fikoli Chrome" } }, Product: { Entity: { LocationId: 2, Subject: 'My Chrome', Date: '9/22/2017 3:01:08 PM', ProductIdString: '11kdkdldls' } }, Note: { Entity: { Text: 'My chrome Text', EntityType: '[dbo].[Products]' } } }, res => { alert(JSON.stringify(res)) })


    export class ProductFormLoader {

        //JSON.parse(Q.replaceAll(Q.replaceAll(JSON.stringify(Q.getLookup("Administration.CustomerLocationLookup").items), "LocationId", "value"), "LocationName", "text")),
        protected productForm: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected productMessageSection: kendo.data.ObservableObject;

        public static productFormStatic: kendo.data.ObservableObject;
        public static MessageSectnObsvbl: kendo.data.ObservableObject;
        public productId: number;
        public static TheProductFormLoader: ProductFormLoader;
        constructor() {


            this.productForm = kendo.observable({
                productName: null,
                price: null,
                locationList: null,
                getObject: function () {

                    alert(JSON.stringify(this.get("locationList")))

                }

            })//Ends this.productList

            kendo.bind($("#product-form"), this.productForm)

            ProductFormLoader.productFormStatic = this.productForm

            ProductFormLoader.TheProductFormLoader = this;
        }





        public Load(productId: number): void {

            if (productId != undefined) {
                //this.productId = productId;
                //Q.notifyInfo("Loading Product . . . ")
                //Q.serviceRequest("BusinessObjects/Product/DetailProduct",
                //    { EntityId: productId },
                //    res => {
                //        ProductFormLoader.productFormStatic.set("isVisible", true)
                //        ProductFormLoader.productFormStatic.setObject(res)
                //    })

            } else {
               
            }
            this.LoadLocations();

        }


        private LoadLocations(): void{
            $("#location-list").kendoGrid({
                dataSource: new kendo.data.DataSource({
                    schema: {
                        model: {
                            id:"LocationId"
                        }

                    },
                    transport: {
                        read: function (options) {
                            options.success(Q.getLookup("Administration.LocationLookup").items)
                        }
                    }
                }),
                persistSelection: true,
                columns: [
                    { selectable:true, width:"50px" },
                    {
                        field: "LocationId", hidden:true
                    },
                    {field:"LocationName", title:"Location"}
                ],
                change: function () {
                    var selectedKeys = this.selectedKeyNames()//.join(",")

                    if (selectedKeys != '') {

                        var selectedKeysInt = []
                        $.map(selectedKeys, function (item) {
                            selectedKeysInt.push(parseInt(item))
                        })
                        ProductFormLoader.productFormStatic.set("locationList", selectedKeysInt)

                    }
                }
            })
    }
    


        public static Submit() {

            //alert(JSON.stringify(ProductFormLoader.productFormStatic.getObject()))
            //return;



        }

    }
}