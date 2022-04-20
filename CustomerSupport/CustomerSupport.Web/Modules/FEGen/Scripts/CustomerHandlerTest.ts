
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
namespace CustomerSupport.BusinessObjects {

    export class CustomerHandlerTest {

        private LocationIdFldAddBtn: kendo.ui.Button;
        private customerMessenger: CustomerMessenger;

        constructor() {

            this.LocationIdFldAddBtn = $("#LocationIdFldAddBtn").kendoButton({
                icon: "add",
                click: () => { alert(JSON.stringify(this.customerMessenger.GetObservable().get("LocationIdFld"))) },

            }).data("kendoButton");
        }


        public OnFieldValueChanged(id: string, classRef: any, responseObj: Object) {

            if (id == 'LocationIdFld') {
                if (responseObj != undefined) {
                    this.LocationIdFldAddBtn.element.find("span").removeClass("k-i-add")
                    this.LocationIdFldAddBtn.element.find("span").addClass("k-i-edit")
                }
                else {
                    this.LocationIdFldAddBtn.element.find("span").removeClass("k-i-edit")
                    this.LocationIdFldAddBtn.element.find("span").addClass("k-i-add")
                }

            }

            this.customerMessenger = classRef;

        }


    }
}