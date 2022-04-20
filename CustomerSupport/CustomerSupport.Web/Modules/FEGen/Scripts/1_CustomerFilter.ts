
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects
    {

   export class CustomerFilterMessenger {

     protected filterObserv: kendo.data.ObservableObject;
     protected kendoDataSrc: kendo.data.DataSource;
     private bondClass: BondClass;
     private static MessengerClass: CustomerFilterMessenger;



     constructor(bondClass: BondClass) {

    CustomerFilterMessenger.MessengerClass = this;
    this.bondClass = bondClass;
    this.KendoDataSource();

                this.filterObserv = kendo.observable
                            (
                                {
                                        
DateOfBirthFld:new Date(),
LocationIddtSrc:Q.getLookup('Administration.LocationLookup').items,
LocationIdFld:null,
SexdtSrc:GlobalScripts.GetGender(),
SexFld:null,
    
getObject: function () {
                    return{

DateOfBirth:this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
LocationId:this.get('LocationIdFld') != null ? this.get('LocationIdFld').LocationId : null,
Sex:this.get('SexFld') != null ? this.get('SexFld') : null
}},

                getRequestCriteriaObject: function () {

                    var requestQry = []
                    
                    if (this.get('DateOfBirthFld') != null && this.get('DateOfBirthFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('DateOfBirth'), '=', this.get('DateOfBirthFld')])
                    }

                    
                    if (this.get('LocationIdFld') != null && this.get('LocationIdFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('LocationId'), '=', this.get('LocationIdFld').LocationId])
                    }

                    
                    if (this.get('SexFld') != null && this.get('SexFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('Sex'), '=', this.get('SexFld').value])
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
                     
this.set('DateOfBirthFld', obj.Entity.DateOfBirth) 
this.set('LocationIdFld', obj.Entity.LocationId) 
this.set('SexFld', obj.Entity.Sex) 
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


            if (this.bondClass.BeforeRead('Filter-CustomerFilterMessenger', requestObj)) {
                CustomerService.List(requestObj,
                    res => {
                        this.bondClass.AfterRead('Filter-CustomerFilterMessenger', res);
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
                        id: 'CustomerId',
                        fields: {
                            
DateOfBirth: { type: 'string' },
LocationId: { type: 'string' },
Sex: { type: 'string' }
                        },
                    }
                },
                batch: false,
                pageSize: 5,
                transport: {
                    read: function(options){
                  

                        if (options.data.Criteria != undefined) {
                            
                            CustomerService.List({Criteria: options.data.Criteria, IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    CustomerFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Customer-Kendo-Data-Source', res)
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            CustomerService.List({EqualityFilter: options.data.EqualityFilter, IncludeColumns: null},
                                res => {

                                    options.success(res);
                                    CustomerFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Customer-Kendo-Data-Source', res)

                                })
                        }
                        else {

                            CustomerService.List({IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    CustomerFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Customer-Kendo-Data-Source', res)

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

