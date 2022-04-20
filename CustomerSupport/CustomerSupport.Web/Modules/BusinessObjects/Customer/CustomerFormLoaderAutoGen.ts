
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects {

    export class CustomerFormLoaderAutoGen {

        protected observ: kendo.data.ObservableObject;
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        protected CustomerId: number;
        private bondClass: BondClass;
        public static MessClass: CustomerFormLoaderAutoGen;


        constructor(bondClass: BondClass) {
            CustomerFormLoaderAutoGen.LoaderClass = this;

            this.bondClass = bondClass;
            this.KendoDataSource();

            this.observ = kendo.observable
                (
                {

                    AddressFld: null,
                    CustomerIdFld: null,
                    DateFld: new Date(),
                    DateOfBirthFld: new Date(),
                    EmailFld: null,
                    FullNameFld: null,
                    LocationIddtSrc: Q.getLookup('Administration.LocationLookup').items,
                    LocationIdFld: null,
                    PhoneNumberFld: null,
                    SexFld: null,

                    getObject: function () {
                        return {
                            Address: this.get('AddressFld') != null ? this.get('AddressFld') : null,
                            CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                            Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                            DateOfBirth: this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
                            Email: this.get('EmailFld') != null ? this.get('EmailFld') : null,
                            FullName: this.get('FullNameFld') != null ? this.get('FullNameFld') : null,
                            LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                            PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                            Sex: this.get('SexFld') != null ? this.get('SexFld') : null
                        }
                    },
                    setObject: function (obj) {

                        this.set('AddressFld', obj.Entity.Address)
                        this.set('CustomerIdFld', obj.Entity.CustomerId)
                        this.set('DateFld', obj.Entity.Date)
                        this.set('DateOfBirthFld', obj.Entity.DateOfBirth)
                        this.set('EmailFld', obj.Entity.Email)
                        this.set('FullNameFld', obj.Entity.FullName)
                        this.set('LocationIdFld', obj.Entity.LocationId)
                        this.set('PhoneNumberFld', obj.Entity.PhoneNumber)
                        this.set('SexFld', obj.Entity.Sex)
                    },
                    submit: function () {
                        CustomerService.Create({
                            Entity: {
                                Address: this.get('AddressFld') != null ? this.get('AddressFld') : null,
                                CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                                Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                                DateOfBirth: this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
                                Email: this.get('EmailFld') != null ? this.get('EmailFld') : null,
                                FullName: this.get('FullNameFld') != null ? this.get('FullNameFld') : null,
                                LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                                PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                                Sex: this.get('SexFld') != null ? this.get('SexFld') : null
                            }
                        }, res => { this.set('CustomerId', res.EntityId); this.bondClass.AfterSave('Customer', res.EntityId, this); })
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


            if (this.bondClass.BeforeRead('Customer', requestObj)) {
                CustomerService.List(requestObj,
                    res => {
                        this.bondClass.AfterRead('Customer', res);
                    })
            }

        }




        public DetailLoad(entityId: number) {
            if (this.bondClass.BeforeDetailLoad('Customer', entityId)) {
                CustomerService.Retrieve({ EntityId: entityId },
                    res => {
                        this.GetObservable().setObject(res)
                        this.bondClass.AfterDetailLoad('Customer', res);
                    },
                    { blockUI: false, onError: response => { this.bondClass.OnError('Customer', 'DetailLoad', response) } }
                )
            }
        }





        public Create() {
            if (this.bondClass.BeforeSave('Customer', this))
                this.observ.submit();
        }

        public GetPrimaryKeyId(): number { return this.observ.get('CustomerId') }

        public GetObject(): CustomerRow {
            var obj = this.observ.getObject();
            var obj_1 = <BusinessObjects.CustomerRow>({

                Address: obj.Address,
                CustomerId: obj.CustomerId,
                Date: obj.Date,
                DateOfBirth: obj.DateOfBirth,
                Email: obj.Email,
                FullName: obj.FullName,
                LocationId: obj.LocationId,
                PhoneNumber: obj.PhoneNumber,
                Sex: obj.Sex
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
                    read: function (options) {


                        if (options.data.Criteria != undefined) {
                            TicketService.List({ Criteria: options.data.Criteria, IncludeColumns: ['LocationLocationName'] },
                                res => {
                                    options.success(res);
                                    CustomerFormLoaderAutoGen.LoaderClass.bondClass.AfterRead('Customer-Kendo-Data-Source', res)
                                })
                        }
                        else if (options.data.EqualityFilter != undefined) {

                            TicketService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: ['LocationLocationName'] },
                                res => {

                                    options.success(res);
                                    this.bondClass.AfterRead('Customer-Kendo-Data-Source', res)

                                })
                        }
                        else {
                            TicketService.List({ IncludeColumns: ['LocationLocationName'] },
                                res => {
                                    options.success(res);
                                    this.bondClass.AfterRead('Customer-Kendo-Data-Source', res)

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

