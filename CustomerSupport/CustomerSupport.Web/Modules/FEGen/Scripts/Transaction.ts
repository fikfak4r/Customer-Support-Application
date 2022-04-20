
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects
    {

   export class TransactionMessenger {

 protected observ: kendo.data.ObservableObject;
 protected filterObserv: kendo.data.ObservableObject;
 protected kendoDataSrc: kendo.data.DataSource;
 protected TransactionId: number;
 private bondClass: any;
 public static MessengerClass: TransactionMessenger;

 constructor(bondClass: any) {
    TransactionMessenger.MessengerClass = this;
    this.bondClass = bondClass;
    this.KendoDataSource();

                this.observ = kendo.observable
                            (
                                {
                                        
CustomerIdFld:null,
CustomerIddtSrc:Q.getLookup('Administration.CustomerLocationLookup').items,
CustomerIdFldChanged:function (){ TransactionMessenger.MessengerClass.bondClass.OnFieldValueChanged('CustomerIdFld', TransactionMessenger.MessengerClass, this.get('CustomerIdFld'))},
DateFld:new Date(),
DiscountFld:null,
HasTransactionsDetailsFld:null,
IsAdvancedFld:null,
IsFullyPaidFld:null,
IsFullyReceivedFld:null,
IsInProgressFld:null,
IsIntegerTrailingOrderIdWithPrefixPoFld:null,
IsOpenFld:null,
LocationIdFld:null,
LocationIddtSrc:Q.getLookup('Administration.LocationLookup').items,
LocationIdFldChanged:function (){ TransactionMessenger.MessengerClass.bondClass.OnFieldValueChanged('LocationIdFld', TransactionMessenger.MessengerClass, this.get('LocationIdFld'))},
OrderIdFld:null,
StatusFld:null,
SubjectFld:null,
TaxFld:null,
TicketIdFld:null,
TotalAmountFld:null,
TotalAmountLeftFld:null,
TotalAmountPaidFld:null,
TransactionIdFld:null,
    
getObject: function () {
                    return{ 
CustomerId:this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
Date:this.get('DateFld') != null ? this.get('DateFld') : null,
Discount:this.get('DiscountFld') != null ? this.get('DiscountFld') : null,
HasTransactionsDetails:this.get('HasTransactionsDetailsFld') != null ? this.get('HasTransactionsDetailsFld') : null,
IsAdvanced:this.get('IsAdvancedFld') != null ? this.get('IsAdvancedFld') : null,
IsFullyPaid:this.get('IsFullyPaidFld') != null ? this.get('IsFullyPaidFld') : null,
IsFullyReceived:this.get('IsFullyReceivedFld') != null ? this.get('IsFullyReceivedFld') : null,
IsInProgress:this.get('IsInProgressFld') != null ? this.get('IsInProgressFld') : null,
IsIntegerTrailingOrderIdWithPrefixPo:this.get('IsIntegerTrailingOrderIdWithPrefixPoFld') != null ? this.get('IsIntegerTrailingOrderIdWithPrefixPoFld') : null,
IsOpen:this.get('IsOpenFld') != null ? this.get('IsOpenFld') : null,
LocationId:this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
OrderId:this.get('OrderIdFld') != null ? this.get('OrderIdFld') : null,
Status:this.get('StatusFld') != null ? this.get('StatusFld') : null,
Subject:this.get('SubjectFld') != null ? this.get('SubjectFld') : null,
Tax:this.get('TaxFld') != null ? this.get('TaxFld') : null,
TicketId:this.get('TicketIdFld') != null ? this.get('TicketIdFld') : null,
TotalAmount:this.get('TotalAmountFld') != null ? this.get('TotalAmountFld') : null,
TotalAmountLeft:this.get('TotalAmountLeftFld') != null ? this.get('TotalAmountLeftFld') : null,
TotalAmountPaid:this.get('TotalAmountPaidFld') != null ? this.get('TotalAmountPaidFld') : null,
TransactionId:this.get('TransactionIdFld') != null ? this.get('TransactionIdFld') : null
}},
setObject: function (obj) {
                     
this.set('CustomerIdFld', (obj != null && obj.hasOwnProperty('CustomerId')) ? obj.CustomerId : null) 
this.set('DateFld', (obj != null && obj.hasOwnProperty('Date')) ? obj.Date : null) 
this.set('DiscountFld', (obj != null && obj.hasOwnProperty('Discount')) ? obj.Discount : null) 
this.set('HasTransactionsDetailsFld', (obj != null && obj.hasOwnProperty('HasTransactionsDetails')) ? obj.HasTransactionsDetails : null) 
this.set('IsAdvancedFld', (obj != null && obj.hasOwnProperty('IsAdvanced')) ? obj.IsAdvanced : null) 
this.set('IsFullyPaidFld', (obj != null && obj.hasOwnProperty('IsFullyPaid')) ? obj.IsFullyPaid : null) 
this.set('IsFullyReceivedFld', (obj != null && obj.hasOwnProperty('IsFullyReceived')) ? obj.IsFullyReceived : null) 
this.set('IsInProgressFld', (obj != null && obj.hasOwnProperty('IsInProgress')) ? obj.IsInProgress : null) 
this.set('IsIntegerTrailingOrderIdWithPrefixPoFld', (obj != null && obj.hasOwnProperty('IsIntegerTrailingOrderIdWithPrefixPo')) ? obj.IsIntegerTrailingOrderIdWithPrefixPo : null) 
this.set('IsOpenFld', (obj != null && obj.hasOwnProperty('IsOpen')) ? obj.IsOpen : null) 
this.set('LocationIdFld', (obj != null && obj.hasOwnProperty('LocationId')) ? obj.LocationId : null) 
this.set('OrderIdFld', (obj != null && obj.hasOwnProperty('OrderId')) ? obj.OrderId : null) 
this.set('StatusFld', (obj != null && obj.hasOwnProperty('Status')) ? obj.Status : null) 
this.set('SubjectFld', (obj != null && obj.hasOwnProperty('Subject')) ? obj.Subject : null) 
this.set('TaxFld', (obj != null && obj.hasOwnProperty('Tax')) ? obj.Tax : null) 
this.set('TicketIdFld', (obj != null && obj.hasOwnProperty('TicketId')) ? obj.TicketId : null) 
this.set('TotalAmountFld', (obj != null && obj.hasOwnProperty('TotalAmount')) ? obj.TotalAmount : null) 
this.set('TotalAmountLeftFld', (obj != null && obj.hasOwnProperty('TotalAmountLeft')) ? obj.TotalAmountLeft : null) 
this.set('TotalAmountPaidFld', (obj != null && obj.hasOwnProperty('TotalAmountPaid')) ? obj.TotalAmountPaid : null) 
this.set('TransactionIdFld', (obj != null && obj.hasOwnProperty('TransactionId')) ? obj.TransactionId : null) 
},
 submit: function () {
TransactionService.Create({Entity:{
CustomerId:this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
Date:this.get('DateFld') != null ? this.get('DateFld') : null,
Discount:this.get('DiscountFld') != null ? this.get('DiscountFld') : null,
HasTransactionsDetails:this.get('HasTransactionsDetailsFld') != null ? this.get('HasTransactionsDetailsFld') : null,
IsAdvanced:this.get('IsAdvancedFld') != null ? this.get('IsAdvancedFld') : null,
IsFullyPaid:this.get('IsFullyPaidFld') != null ? this.get('IsFullyPaidFld') : null,
IsFullyReceived:this.get('IsFullyReceivedFld') != null ? this.get('IsFullyReceivedFld') : null,
IsInProgress:this.get('IsInProgressFld') != null ? this.get('IsInProgressFld') : null,
IsIntegerTrailingOrderIdWithPrefixPo:this.get('IsIntegerTrailingOrderIdWithPrefixPoFld') != null ? this.get('IsIntegerTrailingOrderIdWithPrefixPoFld') : null,
IsOpen:this.get('IsOpenFld') != null ? this.get('IsOpenFld') : null,
LocationId:this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
OrderId:this.get('OrderIdFld') != null ? this.get('OrderIdFld') : null,
Status:this.get('StatusFld') != null ? this.get('StatusFld') : null,
Subject:this.get('SubjectFld') != null ? this.get('SubjectFld') : null,
Tax:this.get('TaxFld') != null ? this.get('TaxFld') : null,
TicketId:this.get('TicketIdFld') != null ? this.get('TicketIdFld') : null,
TotalAmount:this.get('TotalAmountFld') != null ? this.get('TotalAmountFld') : null,
TotalAmountLeft:this.get('TotalAmountLeftFld') != null ? this.get('TotalAmountLeftFld') : null,
TotalAmountPaid:this.get('TotalAmountPaidFld') != null ? this.get('TotalAmountPaidFld') : null,
TransactionId:this.get('TransactionIdFld') != null ? this.get('TransactionIdFld') : null}}, res => { this.set('TransactionIdFld', res.EntityId); TransactionMessenger.MessengerClass.bondClass.AfterSave('TransactionMessenger', res.EntityId, TransactionMessenger.MessengerClass);})
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


            if (this.bondClass.BeforeRead('TransactionMessenger', requestObj)) {
                TransactionService.List(requestObj,
                    res => {
                        this.bondClass.AfterRead('TransactionMessenger', res);
                    })
            }

        }




        public DetailLoad(entityId: number) {
            if (this.bondClass.BeforeDetailLoad('TransactionMessenger', entityId)) {
                TransactionService.Retrieve({ EntityId: entityId },
                    res => {
                        this.GetObservable().setObject(res)
                        this.bondClass.AfterDetailLoad('TransactionMessenger', res.Entity);
                    },
                    { blockUI: false, onError: response => { this.bondClass.OnError('TransactionMessenger', 'DetailLoad', response) } }
                )
            }
        }


   public Create(){
if (this.bondClass.BeforeSave('TransactionMessenger', this))
this.observ.submit();
}



        public Update() {
            if(this.bondClass.BeforeUpdate('TransactionMessenger', this))
                TransactionService.Update({ Entity: this.GetObject() }, res => { alert('Update successful'); this.bondClass.AfterUpdate('TransactionMessenger', this.GetObject()) })
        }




public GetPrimaryKeyId():number{return this.observ.get('TransactionId')}

    public GetObject(): TransactionRow {
            var obj = this.observ.getObject();
            var obj_1 = <BusinessObjects.TransactionRow>({
                
CustomerId:obj.CustomerId,
Date:obj.Date,
Discount:obj.Discount,
HasTransactionsDetails:obj.HasTransactionsDetails,
IsAdvanced:obj.IsAdvanced,
IsFullyPaid:obj.IsFullyPaid,
IsFullyReceived:obj.IsFullyReceived,
IsInProgress:obj.IsInProgress,
IsIntegerTrailingOrderIdWithPrefixPo:obj.IsIntegerTrailingOrderIdWithPrefixPo,
IsOpen:obj.IsOpen,
LocationId:obj.LocationId,
OrderId:obj.OrderId,
Status:obj.Status,
Subject:obj.Subject,
Tax:obj.Tax,
TicketId:obj.TicketId,
TotalAmount:obj.TotalAmount,
TotalAmountLeft:obj.TotalAmountLeft,
TotalAmountPaid:obj.TotalAmountPaid,
TransactionId:obj.TransactionId
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
                        id: 'TransactionId',
                        fields: {
                            
CustomerId: { type: 'string' },
CustomerName: { type: 'string' },
Date: { type: 'string' },
HasTransactionsDetails: { type: 'string' },
IsAdvanced: { type: 'string' },
IsFullyPaid: { type: 'string' },
IsFullyReceived: { type: 'string' },
IsInProgress: { type: 'string' },
IsIntegerTrailingOrderIdWithPrefixPo: { type: 'string' },
IsOpen: { type: 'string' },
LocationId: { type: 'string' },
OrderId: { type: 'string' },
Status: { type: 'string' },
Subject: { type: 'string' },
TicketId: { type: 'string' },
TotalAmount: { type: 'string' },
TotalAmountLeft: { type: 'string' },
TotalAmountPaid: { type: 'string' },
TransactionId: { type: 'string' }
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
                                    TransactionMessenger.MessengerClass.bondClass.AfterRead('Transaction-Kendo-Data-Source', res)
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            TransactionService.List({EqualityFilter: options.data.EqualityFilter, IncludeColumns: null},
                                res => {

                                    options.success(res);
                                    TransactionMessenger.MessengerClass.bondClass.AfterRead('Transaction-Kendo-Data-Source', res)

                                })
                        }
                        else {
                            TransactionService.List({IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    TransactionMessenger.MessengerClass.bondClass.AfterRead('Transaction-Kendo-Data-Source', res)

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

