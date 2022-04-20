/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
namespace CustomerSupport.BusinessObjects {

    export class CustomerFormLoader {

        protected customerDtlFrm: kendo.data.ObservableObject;
        public static custFormStatic: kendo.data.ObservableObject
        public static CustomerFormLoaderRef: CustomerFormLoader;

        constructor() {
            
            this.customerDtlFrm = kendo.observable({
                custId:null,
                date: new Date(),
                fullNm: null,
                genderVal: null,
                genderSrc: GlobalScripts.GetGender(),
                dob: null,
                phnNum: null,
                email: null,
                address: null,
                loctnSrc: Q.getLookup("Administration.LocationLookup").items,
                loctnVal: null,
                submitBtnTxt:"Submit",
                getObject: function () {

                    var validator = $("#customer-dtl-form").kendoValidator().data("kendoValidator")

                    if (validator.validate()) {
              

                            var gender = this.get("genderVal") != null ? this.get("genderVal").value : null;
                            var loctnVal = this.get("loctnVal") != null ? this.get("loctnVal").LocationId : null;

                            if (this.get("submitBtnTxt") == "Submit") {
                                CustomerService.Create({ Entity: { LocationId: loctnVal, Date: this.get("date"), FullName: this.get("fullNm"), Sex: gender, DateOfBirth: this.get("dob"), PhoneNumber: this.get("phnNum"), Email: this.get("email"), Address: this.get("address") } },
                                    res => {
                                        Q.notifySuccess("Customer account successfully created")
                                        CustomerFormLoader.CustomerFormLoaderRef.HasAccount();
                                    }
                                )
                            }
                            else {
                                CustomerService.Update({ Entity: { CustomerId: this.get("custId"), LocationId: loctnVal, Date: this.get("date"), FullName: this.get("fullNm"), Sex: gender, DateOfBirth: this.get("dob"), PhoneNumber: this.get("phnNum"), Email: this.get("email"), Address: this.get("address") } },
                                    res => {
                                        Q.notifySuccess("Customer update successful")
                                    }
                                )
                            }
                      

                    } else { Q.notifyWarning("Some fields are required. Please check.") }

                },
                setObject: function (obj) {
                    this.set("custId", obj.Entity.CustomerId)
                    this.set("date", obj.Entity.Date)
                    this.set("fullNm", obj.Entity.FullName)
                    this.set("phnNum", obj.Entity.PhoneNumber)
                    this.set("loctnVal", obj.Entity.LocationId)
                    this.set("email", (obj.Entity.Email == undefined) ? null : obj.Entity.Email)
                }
            })//Ends this.customerList

            kendo.bind($("#customer-dtl-form"), this.customerDtlFrm)

            CustomerFormLoader.custFormStatic = this.customerDtlFrm
            CustomerFormLoader.CustomerFormLoaderRef = this;
        }


        public Load(customerId: number): void {
            
            if (customerId != undefined) {
                CustomerFormLoader.custFormStatic.set("submitBtnTxt", "Update")
                CustomerService.Retrieve({ EntityId: customerId },
                   res => {
                       CustomerFormLoader.custFormStatic.setObject(res)
                       this.HasAccount();
                   }
                )
            }

            $("#new-customer-tab").kendoTabStrip({

            })
        }

        private HasAccount() {
            $("#new-customer-tab > ul > li:nth-child(2)").removeClass("k-state-disabled")
            $("#new-customer-tab > ul > li:nth-child(2)").addClass("k-state-enabled")
            $("#new-customer-tab > ul > li:nth-child(4)").removeClass("k-state-disabled")
            $("#new-customer-tab > ul > li:nth-child(4)").addClass("k-state-enabled")
        }



    }
}