/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />

namespace CustomerSupport.BusinessObjects {

    export class TicketDetailLoader {

        protected ticketList: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected ticketListDtSrc: kendo.data.DataSource;
        public static TicketListLoaderRef: TicketListLoader;
        protected menuObservable: kendo.data.ObservableObject;

        constructor() {



          
        }









        public Load(): void {
     
            var cfl = new CustomerFormLoaderAutoGen(null);
            cfl.GetObject().

            this.LoadMenu()


        }

  

        private LoadMenu() {
    

            $("#detail-menu").kendoMenu({
                select: function (e) {
                    if ($(e.item).children(".k-link").find("i").hasClass("fa-plus")) {
                        $('.nomail').addClass('hide');
                        $('.mailcontent').addClass('hide')
                        $('.new-ticket-form').removeClass('hide');
                    }
                    else if ($(e.item).children(".k-link").find("i").hasClass("fa-exclamation-triangle")) {
                        alert('Warning alert clicked')

                    }
                }
            });


            $("#detail-menu-pagination").kendoMenu({})
        }




    }
}