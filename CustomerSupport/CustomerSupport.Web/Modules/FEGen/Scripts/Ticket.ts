
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects
    {

   export class TicketMessenger {

 protected observ: kendo.data.ObservableObject;
 protected filterObserv: kendo.data.ObservableObject;
 protected kendoDataSrc: kendo.data.DataSource;
 protected : number;
 private bondClass: BondClass;
 public static MessengerClass: TicketMessenger;

 constructor(bondClass: BondClass) {
    TicketMessenger.MessengerClass = this;
    this.bondClass = bondClass;
    this.KendoDataSource();

                this.observ = kendo.observable
                            (
                                {
                                        
CreatorIdFld:null,
CustomerIdFld:null,
CustomerIddtSrc:Q.getLookup('Administration.CustomerLocationLookup').items,
CustomerIdFldChanged:function (){ TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('CustomerIdFld', TicketMessenger.MessengerClass, this.get('CustomerIdFld'))},
DateFld:new Date(),
FollowUpActionFld:null,
GroupIdFld:null,
GroupIddtSrc:Q.getLookup('Administration.RoleLocationLookup').items,
GroupIdFldChanged:function (){ TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('GroupIdFld', TicketMessenger.MessengerClass, this.get('GroupIdFld'))},
LocationIdFld:null,
LocationIddtSrc:Q.getLookup('Administration.LocationLookup').items,
LocationIdFldChanged:function (){ TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('LocationIdFld', TicketMessenger.MessengerClass, this.get('LocationIdFld'))},
MeFld:null,
NextFollowUpDateFld:new Date(),
NoteListFld:null,
PhoneNumberFld:null,
PriorityFld:null,
ProductIdFld:null,
ProductIddtSrc:Q.getLookup('Administration.ProductLocationLookup').items,
ProductIdFldChanged:function (){ TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('ProductIdFld', TicketMessenger.MessengerClass, this.get('ProductIdFld'))},
StatusFld:null,
SubjectFld:null,
TicketIdStringFld:null,
TransactionIdFld:null,
TransactionIddtSrc:Q.getLookup('BusinessObjects.Transaction').items,
TransactionIdFldChanged:function (){ TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('TransactionIdFld', TicketMessenger.MessengerClass, this.get('TransactionIdFld'))},
TypeFld:null,
UserIdFld:null,
UserIddtSrc:Q.getLookup('Administration.UserRoleLookup').items,
UserIdFldChanged:function (){ TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('UserIdFld', TicketMessenger.MessengerClass, this.get('UserIdFld'))},
UserUsernameFld:null,
    
getObject: function () {
                    return{ 
CreatorId:this.get('CreatorIdFld') != null ? this.get('CreatorIdFld') : null,
CustomerId:this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
Date:this.get('DateFld') != null ? this.get('DateFld') : null,
FollowUpAction:this.get('FollowUpActionFld') != null ? this.get('FollowUpActionFld') : null,
GroupId:this.get('GroupIdFld') != null ? this.get('GroupIdFld') : null,
LocationId:this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
Me:this.get('MeFld') != null ? this.get('MeFld') : null,
NextFollowUpDate:this.get('NextFollowUpDateFld') != null ? this.get('NextFollowUpDateFld') : null,
NoteList:this.get('NoteListFld') != null ? this.get('NoteListFld') : null,
PhoneNumber:this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
Priority:this.get('PriorityFld') != null ? this.get('PriorityFld') : null,
ProductId:this.get('ProductIdFld') != null ? this.get('ProductIdFld') : null,
Status:this.get('StatusFld') != null ? this.get('StatusFld') : null,
Subject:this.get('SubjectFld') != null ? this.get('SubjectFld') : null,
TicketIdString:this.get('TicketIdStringFld') != null ? this.get('TicketIdStringFld') : null,
TransactionId:this.get('TransactionIdFld') != null ? this.get('TransactionIdFld') : null,
Type:this.get('TypeFld') != null ? this.get('TypeFld') : null,
UserId:this.get('UserIdFld') != null ? this.get('UserIdFld') : null,
UserUsername:this.get('UserUsernameFld') != null ? this.get('UserUsernameFld') : null
}},
setObject: function (obj) {
                     
this.set('CreatorIdFld', (obj != null && obj.hasOwnProperty('CreatorId')) ? obj.CreatorId : null) 
this.set('CustomerIdFld', (obj != null && obj.hasOwnProperty('CustomerId')) ? obj.CustomerId : null) 
this.set('DateFld', (obj != null && obj.hasOwnProperty('Date')) ? obj.Date : null) 
this.set('FollowUpActionFld', (obj != null && obj.hasOwnProperty('FollowUpAction')) ? obj.FollowUpAction : null) 
this.set('GroupIdFld', (obj != null && obj.hasOwnProperty('GroupId')) ? obj.GroupId : null) 
this.set('LocationIdFld', (obj != null && obj.hasOwnProperty('LocationId')) ? obj.LocationId : null) 
this.set('MeFld', (obj != null && obj.hasOwnProperty('Me')) ? obj.Me : null) 
this.set('NextFollowUpDateFld', (obj != null && obj.hasOwnProperty('NextFollowUpDate')) ? obj.NextFollowUpDate : null) 
this.set('NoteListFld', (obj != null && obj.hasOwnProperty('NoteList')) ? obj.NoteList : null) 
this.set('PhoneNumberFld', (obj != null && obj.hasOwnProperty('PhoneNumber')) ? obj.PhoneNumber : null) 
this.set('PriorityFld', (obj != null && obj.hasOwnProperty('Priority')) ? obj.Priority : null) 
this.set('ProductIdFld', (obj != null && obj.hasOwnProperty('ProductId')) ? obj.ProductId : null) 
this.set('StatusFld', (obj != null && obj.hasOwnProperty('Status')) ? obj.Status : null) 
this.set('SubjectFld', (obj != null && obj.hasOwnProperty('Subject')) ? obj.Subject : null) 
this.set('TicketIdStringFld', (obj != null && obj.hasOwnProperty('TicketIdString')) ? obj.TicketIdString : null) 
this.set('TransactionIdFld', (obj != null && obj.hasOwnProperty('TransactionId')) ? obj.TransactionId : null) 
this.set('TypeFld', (obj != null && obj.hasOwnProperty('Type')) ? obj.Type : null) 
this.set('UserIdFld', (obj != null && obj.hasOwnProperty('UserId')) ? obj.UserId : null) 
this.set('UserUsernameFld', (obj != null && obj.hasOwnProperty('UserUsername')) ? obj.UserUsername : null) 
},
 submit: function () {
TicketService.Create({Entity:{
CreatorId:this.get('CreatorIdFld') != null ? this.get('CreatorIdFld') : null,
CustomerId:this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
Date:this.get('DateFld') != null ? this.get('DateFld') : null,
FollowUpAction:this.get('FollowUpActionFld') != null ? this.get('FollowUpActionFld') : null,
GroupId:this.get('GroupIdFld') != null ? this.get('GroupIdFld') : null,
LocationId:this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
Me:this.get('MeFld') != null ? this.get('MeFld') : null,
NextFollowUpDate:this.get('NextFollowUpDateFld') != null ? this.get('NextFollowUpDateFld') : null,
NoteList:this.get('NoteListFld') != null ? this.get('NoteListFld') : null,
PhoneNumber:this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
Priority:this.get('PriorityFld') != null ? this.get('PriorityFld') : null,
ProductId:this.get('ProductIdFld') != null ? this.get('ProductIdFld') : null,
Status:this.get('StatusFld') != null ? this.get('StatusFld') : null,
Subject:this.get('SubjectFld') != null ? this.get('SubjectFld') : null,
TicketIdString:this.get('TicketIdStringFld') != null ? this.get('TicketIdStringFld') : null,
TransactionId:this.get('TransactionIdFld') != null ? this.get('TransactionIdFld') : null,
Type:this.get('TypeFld') != null ? this.get('TypeFld') : null,
UserId:this.get('UserIdFld') != null ? this.get('UserIdFld') : null,
UserUsername:this.get('UserUsernameFld') != null ? this.get('UserUsernameFld') : null}}, res => { this.set('Fld', res.EntityId); TicketMessenger.MessengerClass.bondClass.AfterSave('TicketMessenger', res.EntityId, TicketMessenger.MessengerClass);})
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


            if (this.bondClass.BeforeRead('TicketMessenger', requestObj)) {
                TicketService.List(requestObj,
                    res => {
                        this.bondClass.AfterRead('TicketMessenger', res);
                    })
            }

        }




        public DetailLoad(entityId: number) {
            if (this.bondClass.BeforeDetailLoad('TicketMessenger', entityId)) {
                TicketService.Retrieve({ EntityId: entityId },
                    res => {
                        this.GetObservable().setObject(res)
                        this.bondClass.AfterDetailLoad('TicketMessenger', res.Entity);
                    },
                    { blockUI: false, onError: response => { this.bondClass.OnError('TicketMessenger', 'DetailLoad', response) } }
                )
            }
        }


   public Create(){
if (this.bondClass.BeforeSave('TicketMessenger', this))
this.observ.submit();
}



        public Update() {
            if(this.bondClass.BeforeUpdate('TicketMessenger', this))
                TicketService.Update({ Entity: this.GetObject() }, res => { alert('Update successful'); this.bondClass.AfterUpdate('TicketMessenger', this.GetObject()) })
        }




public GetPrimaryKeyId():number{return this.observ.get('')}

    public GetObject(): TicketRow {
            var obj = this.observ.getObject();
            var obj_1 = <BusinessObjects.TicketRow>({
                
CreatorId:obj.CreatorId,
CustomerId:obj.CustomerId,
Date:obj.Date,
FollowUpAction:obj.FollowUpAction,
GroupId:obj.GroupId,
LocationId:obj.LocationId,
Me:obj.Me,
NextFollowUpDate:obj.NextFollowUpDate,
NoteList:obj.NoteList,
PhoneNumber:obj.PhoneNumber,
Priority:obj.Priority,
ProductId:obj.ProductId,
Status:obj.Status,
Subject:obj.Subject,
TicketIdString:obj.TicketIdString,
TransactionId:obj.TransactionId,
Type:obj.Type,
UserId:obj.UserId,
UserUsername:obj.UserUsername
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
                        id: 'TicketId',
                        fields: {
                            
CreatorId: { type: 'string' },
CustomerId: { type: 'string' },
CustomerName: { type: 'string' },
Date: { type: 'string' },
FollowUpAction: { type: 'string' },
GroupRoleName: { type: 'string' },
LocationId: { type: 'string' },
Me: { type: 'string' },
NextFollowUpDate: { type: 'string' },
PhoneNumber: { type: 'string' },
Priority: { type: 'string' },
ProductName: { type: 'string' },
Status: { type: 'string' },
Subject: { type: 'string' },
TicketId: { type: 'string' },
TicketIdString: { type: 'string' },
TransactionId: { type: 'string' },
Type: { type: 'string' },
UserUsername: { type: 'string' }
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
                                    TicketMessenger.MessengerClass.bondClass.AfterRead('Ticket-Kendo-Data-Source', res)
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            TicketService.List({EqualityFilter: options.data.EqualityFilter, IncludeColumns: null},
                                res => {

                                    options.success(res);
                                    TicketMessenger.MessengerClass.bondClass.AfterRead('Ticket-Kendo-Data-Source', res)

                                })
                        }
                        else {
                            TicketService.List({IncludeColumns: null},
                                res => {
                                    options.success(res);
                                    TicketMessenger.MessengerClass.bondClass.AfterRead('Ticket-Kendo-Data-Source', res)

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

