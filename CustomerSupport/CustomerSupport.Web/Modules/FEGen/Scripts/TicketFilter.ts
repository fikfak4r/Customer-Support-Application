
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects
    {

   export class TicketFilterMessenger {

     protected filterObserv: kendo.data.ObservableObject;
     protected kendoDataSrc: kendo.data.DataSource;
     private bondClass: BondClass;
     public static MessengerClass: TicketFilterMessenger;



 constructor(bondClass: BondClass) {
    TicketFilterMessenger.MessengerClass = this;
    this.bondClass = bondClass;
    this.KendoDataSource();

                this.filterObserv = kendo.observable
                            (
                                {
                                        
CallDirectionFld:null,
GroupIddtSrc:Q.getLookup('Administration.RoleLocationLookup').items,
GroupIdFld:null,
LocationIdFld:null,
PriorityFld:null,
ProductIddtSrc:Q.getLookup('Administration.ProductLocationLookup').items,
ProductIdFld:null,
ProductNameFld:null,
StatusFld:null,
TypeFld:null,
UserIddtSrc:Q.getLookup('Administration.UserRoleLookup').items,
UserIdFld:null,
    
getObject: function () {
                    return{

CallDirection:this.get('CallDirectionFld') != null ? this.get('CallDirectionFld') : null,
GroupId:this.get('GroupIdFld') != null ? this.get('GroupIdFld') : null,
LocationId:this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
Priority:this.get('PriorityFld') != null ? this.get('PriorityFld') : null,
ProductId:this.get('ProductIdFld') != null ? this.get('ProductIdFld') : null,
ProductName:this.get('ProductNameFld') != null ? this.get('ProductNameFld') : null,
Status:this.get('StatusFld') != null ? this.get('StatusFld') : null,
Type:this.get('TypeFld') != null ? this.get('TypeFld') : null,
UserId:this.get('UserIdFld') != null ? this.get('UserIdFld') : null
}},

                getRequestCriteriaObject: function () {

                    var requestQry = []
                    
                    if (this.get('CallDirectionFld') != null && this.get('CallDirectionFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('CallDirection'), '=', this.get('CallDirectionFld')])
                    }

                    
                    if (this.get('GroupIdFld') != null && this.get('GroupIdFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('GroupId'), '=', this.get('GroupIdFld')])
                    }

                    
                    if (this.get('LocationIdFld') != null && this.get('LocationIdFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('LocationId'), '=', this.get('LocationIdFld')])
                    }

                    
                    if (this.get('PriorityFld') != null && this.get('PriorityFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('Priority'), '=', this.get('PriorityFld')])
                    }

                    
                    if (this.get('ProductIdFld') != null && this.get('ProductIdFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('ProductId'), '=', this.get('ProductIdFld')])
                    }

                    
                    if (this.get('ProductNameFld') != null && this.get('ProductNameFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('ProductName'), '=', this.get('ProductNameFld')])
                    }

                    
                    if (this.get('StatusFld') != null && this.get('StatusFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('Status'), '=', this.get('StatusFld')])
                    }

                    
                    if (this.get('TypeFld') != null && this.get('TypeFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('Type'), '=', this.get('TypeFld')])
                    }

                    
                    if (this.get('UserIdFld') != null && this.get('UserIdFld') != undefined)
                    {
                      requestQry =  this.assemble(requestQry, [Serenity.Criteria('UserId'), '=', this.get('UserIdFld')])
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
                     
this.set('CallDirectionFld', obj.Entity.CallDirection) 
this.set('GroupIdFld', obj.Entity.GroupId) 
this.set('LocationIdFld', obj.Entity.LocationId) 
this.set('PriorityFld', obj.Entity.Priority) 
this.set('ProductIdFld', obj.Entity.ProductId) 
this.set('ProductNameFld', obj.Entity.ProductName) 
this.set('StatusFld', obj.Entity.Status) 
this.set('TypeFld', obj.Entity.Type) 
this.set('UserIdFld', obj.Entity.UserId) 
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


            if (this.bondClass.BeforeRead('Filter-TicketFilterMessenger', requestObj)) {
                TicketService.List(requestObj,
                    res => {
                        this.bondClass.AfterRead('Filter-TicketFilterMessenger', res);
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
                        id: 'TicketId',
                        fields: {
                            
CallDirection: { type: 'string' },
GroupId: { type: 'string' },
LocationId: { type: 'string' },
Priority: { type: 'string' },
ProductId: { type: 'string' },
ProductName: { type: 'string' },
Status: { type: 'string' },
Type: { type: 'string' },
UserId: { type: 'string' }
                        },
                    }
                },
                batch: false,
                pageSize: 5,
                transport: {
                    read: function(options){


                        if (options.data.Criteria != undefined) {
                            TicketService.List({Criteria: options.data.Criteria, IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    TicketFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Ticket-Kendo-Data-Source', res)
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            TicketService.List({EqualityFilter: options.data.EqualityFilter, IncludeColumns: null},
                                res => {

                                    options.success(res);
                                    TicketFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Ticket-Kendo-Data-Source', res)

                                })
                        }
                        else {
                            TicketService.List({IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    TicketFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Ticket-Kendo-Data-Source', res)

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

