

/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />

namespace CustomerSupport.BusinessObjects {

    export class CustomerHandler {

        private refMessenger: any;
        private responseObj: any;
        private LocationIdInplaceBtnVar: kendo.ui.Button; 



        constructor()
        {

            this.LocationIdInplaceBtnVar = $('#LocationIdInplaceBtn').kendoButton({
                icon: 'add',
                click: () => {

                    FEUtilities.OnInplaceButtonClicked(
                        this.LocationIdInplaceBtnVar,
                        $("#location-dialog"),
                        this.customerMessenger,
                        this.locationMessenger,
                        "LocationIdFld"
                    );  

                    if (this.LocationIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {

                        $("#UpdateLocationBtn").data("kendoButton").element.hide()
                        $("#NewLocationBtn").data("kendoButton").element.show()

                    } else {

                        $("#NewLocationBtn").data("kendoButton").element.hide()
                        $("#UpdateLocationBtn").data("kendoButton").element.show()

                    }

                },
            }).data('kendoButton');


        }

     
    public OnFieldValueChanged(id: string, classRef: any, responseObj: Object)
    {

        if (id == 'LocationIdFld')
        {
             FEUtilities.ToggleInplaceButtonIcon(this.LocationIdInplaceBtnVar, responseObj);     
        }

        this.responseObj = responseObj
        this.refMessenger = classRef;

    }


    private customerMessenger: CustomerMessenger;
    private locationMessenger: LocationMessenger;

    public SetTeamPlayers(customerMessenger: CustomerMessenger, locationMessenger: LocationMessenger) {
        this.customerMessenger = customerMessenger
        this.locationMessenger = locationMessenger
    }


    public AfterUpdate(id: string, responseObj: any)
    {

        if (id == "LocationMessenger")
        {

            var arr = this.customerMessenger.GetObservable().get("LocationIddtSrc")
            var position: number = 0;

            $.map(arr, (obj, index) => {

                if (obj.LocationIdFld == responseObj.LocationIdFld) {
                    position = index;
                }

            })

            arr.splice(position, 1, responseObj)
            this.customerMessenger.GetObservable().set("LocationIdFld", responseObj);

            $("#location-dialog").data("kendoDialog").close();

        }

    }


}
}
