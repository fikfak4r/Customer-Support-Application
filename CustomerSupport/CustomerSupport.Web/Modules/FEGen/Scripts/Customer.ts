
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects
    {

   export class CustomerMessenger {

 protected observ: kendo.data.ObservableObject;
 protected filterObserv: kendo.data.ObservableObject;
 protected kendoDataSrc: kendo.data.DataSource;
 protected CustomerId: number;
 private bondClass: BondClass;
 public static MessengerClass: CustomerMessenger;

 constructor(bondClass: BondClass) {
    CustomerMessenger.MessengerClass = this;
    this.bondClass = bondClass;
    this.KendoDataSource();

                this.observ = kendo.observable
                            (
                                {
                                        
AddressFld:null,
CustomerIdFld:null,
DateFld:new Date(),
DateOfBirthFld:new Date(),
EmailFld:null,
FullNameFld:null,
LocationIdFld:null,
LocationIddtSrc:Q.getLookup('Administration.LocationLookup').items,
LocationIdFldChanged:function (){ CustomerMessenger.MessengerClass.bondClass.OnFieldValueChanged('LocationIdFld', CustomerMessenger.MessengerClass, this.get('LocationIdFld'))},
PhoneNumberFld:null,
SexFld:null,
SexdtSrc:GlobalScripts.GetGender(),
SexFldChanged:function (){ CustomerMessenger.MessengerClass.bondClass.OnFieldValueChanged('SexFld', CustomerMessenger.MessengerClass, this.get('SexFld'))},
    
getObject: function () {
                    return{ 
Address:this.get('AddressFld') != null ? this.get('AddressFld') : null,
CustomerId:this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
Date:this.get('DateFld') != null ? this.get('DateFld') : null,
DateOfBirth:this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
Email:this.get('EmailFld') != null ? this.get('EmailFld') : null,
FullName:this.get('FullNameFld') != null ? this.get('FullNameFld') : null,
LocationId:this.get('LocationIdFld') != null ? this.get('LocationIdFld').LocationId : null,
PhoneNumber:this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
Sex:this.get('SexFld') != null ? this.get('SexFld') : null
}},
setObject: function (obj) {
                     
this.set('AddressFld', (obj != null && obj.hasOwnProperty('Address')) ? obj.Address : null) 
this.set('CustomerIdFld', (obj != null && obj.hasOwnProperty('CustomerId')) ? obj.CustomerId : null) 
this.set('DateFld', (obj != null && obj.hasOwnProperty('Date')) ? obj.Date : null) 
this.set('DateOfBirthFld', (obj != null && obj.hasOwnProperty('DateOfBirth')) ? obj.DateOfBirth : null) 
this.set('EmailFld', (obj != null && obj.hasOwnProperty('Email')) ? obj.Email : null) 
this.set('FullNameFld', (obj != null && obj.hasOwnProperty('FullName')) ? obj.FullName : null) 
this.set('LocationIdFld', (obj != null && obj.hasOwnProperty('LocationId')) ? obj.LocationId : null) 
this.set('PhoneNumberFld', (obj != null && obj.hasOwnProperty('PhoneNumber')) ? obj.PhoneNumber : null) 
this.set('SexFld', (obj != null && obj.hasOwnProperty('Sex')) ? obj.Sex : null) 
},
 submit: function () {
CustomerService.Create({Entity:{
Address:this.get('AddressFld') != null ? this.get('AddressFld') : null,
CustomerId:this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
Date:this.get('DateFld') != null ? this.get('DateFld') : null,
DateOfBirth:this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
Email:this.get('EmailFld') != null ? this.get('EmailFld') : null,
FullName:this.get('FullNameFld') != null ? this.get('FullNameFld') : null,
LocationId:this.get('LocationIdFld') != null ? this.get('LocationIdFld').LocationId : null,
PhoneNumber:this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
Sex:this.get('SexFld') != null ? this.get('SexFld') : null}}, res => { this.set('CustomerIdFld', res.EntityId); CustomerMessenger.MessengerClass.bondClass.AfterSave('CustomerMessenger', res.EntityId, CustomerMessenger.MessengerClass);})
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


            if (this.bondClass.BeforeRead('CustomerMessenger', requestObj)) {
                CustomerService.List(requestObj,
                    res => {
                        this.bondClass.AfterRead('CustomerMessenger', res);
                    })
            }

        }




        public DetailLoad(entityId: number) {
            if (this.bondClass.BeforeDetailLoad('CustomerMessenger', entityId)) {
                CustomerService.Retrieve({ EntityId: entityId },
                    res => {
                        this.GetObservable().setObject(res)
                        this.bondClass.AfterDetailLoad('CustomerMessenger', res.Entity);
                    },
                    { blockUI: false, onError: response => { this.bondClass.OnError('CustomerMessenger', 'DetailLoad', response) } }
                )
            }
        }


   public Create(){
if (this.bondClass.BeforeSave('CustomerMessenger', this))
this.observ.submit();
}



        public Update() {
            if(this.bondClass.BeforeUpdate('CustomerMessenger', this))
                CustomerService.Update({ Entity: this.GetObject() }, res => { alert('Update successful'); this.bondClass.AfterUpdate('CustomerMessenger', this.GetObject()) })
        }




public GetPrimaryKeyId():number{return this.observ.get('CustomerId')}

    public GetObject(): CustomerRow {
            var obj = this.observ.getObject();
            var obj_1 = <BusinessObjects.CustomerRow>({
                
Address:obj.Address,
CustomerId:obj.CustomerId,
Date:obj.Date,
DateOfBirth:obj.DateOfBirth,
Email:obj.Email,
FullName:obj.FullName,
LocationId:obj.LocationId,
PhoneNumber:obj.PhoneNumber,
Sex:obj.Sex
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
                        id: 'CustomerId',
                        fields: {
                            
Address: { type: 'string' },
CustomerId: { type: 'string' },
Date: { type: 'string' },
DateOfBirth: { type: 'string' },
Email: { type: 'string' },
FullName: { type: 'string' },
LocationId: { type: 'string' },
LocationLocationName: { type: 'string' },
PhoneNumber: { type: 'string' },
Sex: { type: 'string' }
                        },
                    }
                },
                batch: false,
                pageSize: 5,
                transport: {
                    read: function(options){


                        if (options.data.Criteria != undefined) {
                            CustomerService.List({Criteria: options.data.Criteria, IncludeColumns: ['LocationLocationName']},
                                res => {
                                    options.success(res);
                                    CustomerMessenger.MessengerClass.bondClass.AfterRead('Customer-Kendo-Data-Source', res)
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            CustomerService.List({EqualityFilter: options.data.EqualityFilter, IncludeColumns: ['LocationLocationName']},
                                res => {

                                    options.success(res);
                                    CustomerMessenger.MessengerClass.bondClass.AfterRead('Customer-Kendo-Data-Source', res)

                                })
                        }
                        else {
                            CustomerService.List({IncludeColumns: ['LocationLocationName']},
                                res => {
                                    options.success(res);
                                    CustomerMessenger.MessengerClass.bondClass.AfterRead('Customer-Kendo-Data-Source', res)

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

