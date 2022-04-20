
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects
    {

   export class ProductMessenger {

 protected observ: kendo.data.ObservableObject;
 protected filterObserv: kendo.data.ObservableObject;
 protected kendoDataSrc: kendo.data.DataSource;
 protected ProductId: number;
 private bondClass: any;
 public static MessengerClass: ProductMessenger;

 constructor(bondClass: any) {
    ProductMessenger.MessengerClass = this;
    this.bondClass = bondClass;
    this.KendoDataSource();

                this.observ = kendo.observable
                            (
                                {
                                        
LocationListFld:null,
LocationListdtSrc:Q.getLookup('Administration.LocationLookup').items,
LocationListFldChanged:function (){ ProductMessenger.MessengerClass.bondClass.OnFieldValueChanged('LocationListFld', ProductMessenger.MessengerClass, this.get('LocationListFld'))},
NameFld:null,
PriceFld:null,
ProductIdFld:null,
    
getObject: function () {
                    return{ 
LocationList:this.get('LocationListFld') != null ? this.get('LocationListFld').LocationId : null,
Name:this.get('NameFld') != null ? this.get('NameFld') : null,
Price:this.get('PriceFld') != null ? this.get('PriceFld') : null,
ProductId:this.get('ProductIdFld') != null ? this.get('ProductIdFld') : null
}},
setObject: function (obj) {
                     
this.set('LocationListFld', (obj != null && obj.hasOwnProperty('LocationList')) ? obj.LocationList : null) 
this.set('NameFld', (obj != null && obj.hasOwnProperty('Name')) ? obj.Name : null) 
this.set('PriceFld', (obj != null && obj.hasOwnProperty('Price')) ? obj.Price : null) 
this.set('ProductIdFld', (obj != null && obj.hasOwnProperty('ProductId')) ? obj.ProductId : null) 
},
 submit: function () {
ProductService.Create({Entity:{
LocationList:this.get('LocationListFld') != null ? this.get('LocationListFld').LocationId : null,
Name:this.get('NameFld') != null ? this.get('NameFld') : null,
Price:this.get('PriceFld') != null ? this.get('PriceFld') : null,
ProductId:this.get('ProductIdFld') != null ? this.get('ProductIdFld') : null}}, res => { this.set('ProductIdFld', res.EntityId); ProductMessenger.MessengerClass.bondClass.AfterSave('ProductMessenger', res.EntityId, ProductMessenger.MessengerClass);})
    }
       }
                            );




    }



  public GetObservable() {
            return this.observ;
        }



        public Read(criteria: string, equalityFilter: string, includeColumns: string[]) {

            var requestObj = null;

            if (criteria != undefined) {
                requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
            }
            else if (equalityFilter != undefined) {
                requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
            }
            else {
                requestObj = { IncludeColumns: includeColumns };
            }


            if (this.bondClass.BeforeRead('ProductMessenger', requestObj)) {
                ProductService.List(requestObj,
                    res => {
                        this.bondClass.AfterRead('ProductMessenger', res);
                    })
            }

        }




        public DetailLoad(entityId: number) {
            if (this.bondClass.BeforeDetailLoad('ProductMessenger', entityId)) {
                ProductService.Retrieve({ EntityId: entityId },
                    res => {
                        this.GetObservable().setObject(res)
                        this.bondClass.AfterDetailLoad('ProductMessenger', res.Entity);
                    },
                    { blockUI: false, onError: response => { this.bondClass.OnError('ProductMessenger', 'DetailLoad', response) } }
                )
            }
        }


   public Create(){
if (this.bondClass.BeforeSave('ProductMessenger', this))
this.observ.submit();
}



        public Update() {
            if(this.bondClass.BeforeUpdate('ProductMessenger', this))
                ProductService.Update({ Entity: this.GetObject() }, res => { alert('Update successful'); this.bondClass.AfterUpdate('ProductMessenger', this.GetObject()) })
        }




public GetPrimaryKeyId():number{return this.observ.get('ProductId')}

    public GetObject(): ProductRow {
            var obj = this.observ.getObject();
            var obj_1 = <BusinessObjects.ProductRow>({
                
LocationList:obj.LocationList,
Name:obj.Name,
Price:obj.Price,
ProductId:obj.ProductId
            });
            return obj_1;
        }



private KendoDataSource(): void {
            this.kendoDataSrc = new kendo.data.DataSource({
                schema: {
                    //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                    data: 'Entities',
                    total: 'TotalCount',
                    model: {
                        id: 'ProductId',
                        fields: {
                            
LocationList: { type: 'string' },
Name: { type: 'string' },
Price: { type: 'string' },
ProductId: { type: 'string' }
                        },
                    }
                },
                batch: false,
                pageSize: 5,
                transport: {
                    read: function(options){


                        if (options.data.Criteria != undefined) {
                            ProductService.List({Criteria: options.data.Criteria, IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    ProductMessenger.MessengerClass.bondClass.AfterRead('Product-Kendo-Data-Source', res)
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            ProductService.List({EqualityFilter: options.data.EqualityFilter, IncludeColumns: null},
                                res => {

                                    options.success(res);
                                    ProductMessenger.MessengerClass.bondClass.AfterRead('Product-Kendo-Data-Source', res)

                                })
                        }
                        else {
                            ProductService.List({IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    ProductMessenger.MessengerClass.bondClass.AfterRead('Product-Kendo-Data-Source', res)

                                })
                        }

                    }
                },
            })//Ends
}







public GetKendoDataSource(): kendo.data.DataSource {
    return this.kendoDataSrc;
}



}

}

