
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects
    {

   export class ProductFilterMessenger {

     protected filterObserv: kendo.data.ObservableObject;
     protected kendoDataSrc: kendo.data.DataSource;
     private bondClass: BondClass;
     public static MessengerClass: ProductFilterMessenger;



 constructor(bondClass: BondClass) {
    ProductFilterMessenger.MessengerClass = this;
    this.bondClass = bondClass;
    this.KendoDataSource();

                this.filterObserv = kendo.observable
                            (
                                {
                                        
LocationListdtSrc:Q.getLookup('Administration.LocationLookup').items,
LocationListFld:null,
NameFld:null,
    
getObject: function () {
                    return{

LocationList:this.get('LocationListFld') != null ? this.get('LocationListFld') : null,
Name:this.get('NameFld') != null ? this.get('NameFld') : null
}},

                getRequestCriteriaObject: function () {

                    var requestQry = []
                    
                    if (this.get('LocationListFld') != null && this.get('LocationListFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('LocationList'), '=', this.get('LocationListFld')])
                    }

                    
                    if (this.get('NameFld') != null && this.get('NameFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('Name'), '=', this.get('NameFld')])
                    }

                    

return requestQry;

},
assemble: function (arrRef, obj) {
                    
            if (arrRef.length == 0)
            {
                arrRef.push(obj)
                return arrRef;
            }
            else if (arrRef.length == 1) {
                arrRef.push('and')
                arrRef.push(obj)
                return arrRef;
            }
            else {

                var newArr1 = []
newArr1.push([arrRef[0], arrRef[1], arrRef[2]])
                newArr1.push('and')
                newArr1.push(obj)

                return newArr1;
            }
                },

setObject: function (obj) {
                     
this.set('LocationListFld', obj.Entity.LocationList) 
this.set('NameFld', obj.Entity.Name) 
},


                                }
                            );




    }




   protected GetFilterObservable() {
           return this.filterObserv;
       }


   public GetFilterValues(): string[] {
       return this.GetFilterObservable().getRequestCriteriaObject();
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


            if (this.bondClass.BeforeRead('Filter-ProductFilterMessenger', requestObj)) {
                ProductService.List(requestObj,
                    res => {
                        this.bondClass.AfterRead('Filter-ProductFilterMessenger', res);
                    })
            }

        }//Ends the read method




     private KendoDataSourceRead_1(criteria: string[])
     {

            if (criteria.length >= 1) {

                var criteria_1 = (criteria.length == 1) ? criteria[0] : criteria
                if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', { Criteria: criteria_1 })) {
                    this.kendoDataSrc.read({ Criteria: criteria_1 })
                }

            }
            else {
                if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', null)) {
                    this.kendoDataSrc.read()
                }
            }

        }



       public KendoDataSourceRead()
       {
            this.KendoDataSourceRead_1(this.GetFilterValues())
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
Name: { type: 'string' }
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
                                    ProductFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Product-Kendo-Data-Source', res)
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            ProductService.List({EqualityFilter: options.data.EqualityFilter, IncludeColumns: null},
                                res => {

                                    options.success(res);
                                    ProductFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Product-Kendo-Data-Source', res)

                                })
                        }
                        else {
                            ProductService.List({IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    ProductFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Product-Kendo-Data-Source', res)

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

