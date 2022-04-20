
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects
    {

   export class LocationMessenger {

 protected observ: kendo.data.ObservableObject;
 protected filterObserv: kendo.data.ObservableObject;
 protected kendoDataSrc: kendo.data.DataSource;
 protected LocationId: number;
 private bondClass: BondClass;
 private static MessengerClass: LocationMessenger;

 constructor(bondClass: BondClass) {
    LocationMessenger.MessengerClass = this;
    this.bondClass = bondClass;
    this.KendoDataSource();

                this.observ = kendo.observable
                            (
                                {
                                        
AccountIdFld:null,
AccountIddtSrc:Q.getLookup('Administration.Account').items,
AccountIdFldChanged:function (){ LocationMessenger.MessengerClass.bondClass.OnFieldValueChanged('AccountIdFld', LocationMessenger.MessengerClass, this.get('AccountIdFld'))},
AddressFld:null,
DateFld:new Date(),
EmailFld:null,
IsVisibleFld:null,
LocationIdFld:null,
LocationNameFld:null,
PhoneNumberFld:null,
UserIdFld:null,
WebsiteFld:null,
    
getObject: function () {
                    return{ 
AccountId:this.get('AccountIdFld') != null ? this.get('AccountIdFld') : null,
Address:this.get('AddressFld') != null ? this.get('AddressFld') : null,
Date:this.get('DateFld') != null ? this.get('DateFld') : null,
Email:this.get('EmailFld') != null ? this.get('EmailFld') : null,
IsVisible:this.get('IsVisibleFld') != null ? this.get('IsVisibleFld') : null,
LocationId:this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
LocationName:this.get('LocationNameFld') != null ? this.get('LocationNameFld') : null,
PhoneNumber:this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
UserId:this.get('UserIdFld') != null ? this.get('UserIdFld') : null,
Website:this.get('WebsiteFld') != null ? this.get('WebsiteFld') : null
}},
setObject: function (obj) {
                     
this.set('AccountIdFld', (obj != null && obj.hasOwnProperty('AccountId')) ? obj.AccountId : null) 
this.set('AddressFld', (obj != null && obj.hasOwnProperty('Address')) ? obj.Address : null) 
this.set('DateFld', (obj != null && obj.hasOwnProperty('Date')) ? obj.Date : null) 
this.set('EmailFld', (obj != null && obj.hasOwnProperty('Email')) ? obj.Email : null) 
this.set('IsVisibleFld', (obj != null && obj.hasOwnProperty('IsVisible')) ? obj.IsVisible : null) 
this.set('LocationIdFld', (obj != null && obj.hasOwnProperty('LocationId')) ? obj.LocationId : null) 
this.set('LocationNameFld', (obj != null && obj.hasOwnProperty('LocationName')) ? obj.LocationName : null) 
this.set('PhoneNumberFld', (obj != null && obj.hasOwnProperty('PhoneNumber')) ? obj.PhoneNumber : null) 
this.set('UserIdFld', (obj != null && obj.hasOwnProperty('UserId')) ? obj.UserId : null) 
this.set('WebsiteFld', (obj != null && obj.hasOwnProperty('Website')) ? obj.Website : null) 
},
 submit: function () {
Administration.LocationService.Create({Entity:{
AccountId:this.get('AccountIdFld') != null ? this.get('AccountIdFld') : null,
Address:this.get('AddressFld') != null ? this.get('AddressFld') : null,
Date:this.get('DateFld') != null ? this.get('DateFld') : null,
Email:this.get('EmailFld') != null ? this.get('EmailFld') : null,
IsVisible:this.get('IsVisibleFld') != null ? this.get('IsVisibleFld') : null,
LocationId:this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
LocationName:this.get('LocationNameFld') != null ? this.get('LocationNameFld') : null,
PhoneNumber:this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
UserId:this.get('UserIdFld') != null ? this.get('UserIdFld') : null,
Website:this.get('WebsiteFld') != null ? this.get('WebsiteFld') : null}}, res => { this.set('LocationIdFld', res.EntityId); LocationMessenger.MessengerClass.bondClass.AfterSave('LocationMessenger', res.EntityId, LocationMessenger.MessengerClass);})
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


            if (this.bondClass.BeforeRead('LocationMessenger', requestObj)) {
                Administration.LocationService.List(requestObj,
                    res => {
                        this.bondClass.AfterRead('LocationMessenger', res);
                    })
            }

        }




        public DetailLoad(entityId: number) {
            if (this.bondClass.BeforeDetailLoad('LocationMessenger', entityId)) {
                Administration.LocationService.Retrieve({ EntityId: entityId },
                    res => {
                        this.GetObservable().setObject(res)
                        this.bondClass.AfterDetailLoad('LocationMessenger', res.Entity);
                    },
                    { blockUI: false, onError: response => { this.bondClass.OnError('LocationMessenger', 'DetailLoad', response) } }
                )
            }
        }


   public Create(){
if (this.bondClass.BeforeSave('LocationMessenger', this))
this.observ.submit();
}



public Update() {
    if(this.bondClass.BeforeUpdate('LocationMessenger', this))
        Administration.LocationService.Update({ Entity: this.GetObject() }, res => { this.bondClass.AfterUpdate('LocationMessenger', this.GetObject()) })
}




public GetPrimaryKeyId():number{return this.observ.get('LocationId')}

public GetObject(): Administration.LocationRow {
            var obj = this.observ.getObject();
            var obj_1 = <Administration.LocationRow>({
                
AccountId:obj.AccountId,
Address:obj.Address,
Date:obj.Date,
Email:obj.Email,
IsVisible:obj.IsVisible,
LocationId:obj.LocationId,
LocationName:obj.LocationName,
PhoneNumber:obj.PhoneNumber,
UserId:obj.UserId,
Website:obj.Website
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
                        id: 'LocationId',
                        fields: {
                            
AccountId: { type: 'string' },
Address: { type: 'string' },
Date: { type: 'string' },
Email: { type: 'string' },
LocationId: { type: 'string' },
LocationName: { type: 'string' },
PhoneNumber: { type: 'string' },
UserId: { type: 'string' },
Website: { type: 'string' }
                        },
                    }
                },
                batch: false,
                pageSize: 5,
                transport: {
                    read: function(options){


                        if (options.data.Criteria != undefined) {
                            Administration.LocationService.List({Criteria: options.data.Criteria, IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    LocationMessenger.MessengerClass.bondClass.AfterRead('Location-Kendo-Data-Source', res)
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            Administration.LocationService.List({EqualityFilter: options.data.EqualityFilter, IncludeColumns: null},
                                res => {

                                    options.success(res);
                                    LocationMessenger.MessengerClass.bondClass.AfterRead('Location-Kendo-Data-Source', res)

                                })
                        }
                        else {
                            Administration.LocationService.List({IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    LocationMessenger.MessengerClass.bondClass.AfterRead('Location-Kendo-Data-Source', res)

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

