
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects
    {

   export class TransactionFilterMessenger {

     protected filterObserv: kendo.data.ObservableObject;
     protected kendoDataSrc: kendo.data.DataSource;
     private bondClass: BondClass;
     public static MessengerClass: TransactionFilterMessenger;



     constructor(bondClass: BondClass) {

    TransactionFilterMessenger.MessengerClass = this;
    this.bondClass = bondClass;
    this.KendoDataSource();

                this.filterObserv = kendo.observable
                            (
                                {
                                        
CustomerIdFld:null,
DateFld:new Date(),
TotalAmountFld:null,
TotalAmountLeftFld:null,
TotalAmountPaidFld:null,
    
getObject: function () {
                    return{

CustomerId:this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
Date:this.get('DateFld') != null ? this.get('DateFld') : null,
TotalAmount:this.get('TotalAmountFld') != null ? this.get('TotalAmountFld') : null,
TotalAmountLeft:this.get('TotalAmountLeftFld') != null ? this.get('TotalAmountLeftFld') : null,
TotalAmountPaid:this.get('TotalAmountPaidFld') != null ? this.get('TotalAmountPaidFld') : null
}},

                getRequestCriteriaObject: function () {

                    var requestQry = []
                    
                    if (this.get('CustomerIdFld') != null && this.get('CustomerIdFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('CustomerId'), '=', this.get('CustomerIdFld')])
                    }

                    
                    if (this.get('DateFld') != null && this.get('DateFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('Date'), '=', this.get('DateFld')])
                    }

                    
                    if (this.get('TotalAmountFld') != null && this.get('TotalAmountFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('TotalAmount'), '=', this.get('TotalAmountFld')])
                    }

                    
                    if (this.get('TotalAmountLeftFld') != null && this.get('TotalAmountLeftFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('TotalAmountLeft'), '=', this.get('TotalAmountLeftFld')])
                    }

                    
                    if (this.get('TotalAmountPaidFld') != null && this.get('TotalAmountPaidFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('TotalAmountPaid'), '=', this.get('TotalAmountPaidFld')])
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
                     
this.set('CustomerIdFld', obj.Entity.CustomerId) 
this.set('DateFld', obj.Entity.Date) 
this.set('TotalAmountFld', obj.Entity.TotalAmount) 
this.set('TotalAmountLeftFld', obj.Entity.TotalAmountLeft) 
this.set('TotalAmountPaidFld', obj.Entity.TotalAmountPaid) 
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


            if (this.bondClass.BeforeRead('Filter-TransactionFilterMessenger', requestObj)) {
                TransactionService.List(requestObj,
                    res => {
                        this.bondClass.AfterRead('Filter-TransactionFilterMessenger', res);
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
                        id: 'TransactionId',
                        fields: {
                            
CustomerId: { type: 'string' },
Date: { type: 'string' },
TotalAmount: { type: 'string' },
TotalAmountLeft: { type: 'string' },
TotalAmountPaid: { type: 'string' }
                        },
                    }
                },
                batch: false,
                pageSize: 5,
                transport: {
                    read: function(options){


                        if (options.data.Criteria != undefined) {
                            TransactionService.List({Criteria: options.data.Criteria, IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    TransactionFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Transaction-Kendo-Data-Source', res)
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            TransactionService.List({EqualityFilter: options.data.EqualityFilter, IncludeColumns: null},
                                res => {

                                    options.success(res);
                                    TransactionFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Transaction-Kendo-Data-Source', res)

                                })
                        }
                        else {
                            TransactionService.List({IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    TransactionFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Transaction-Kendo-Data-Source', res)

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

