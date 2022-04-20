/// <reference path="../../Content/js/Kendo/typescript/jquery.d.ts" />
/// <reference path="../../Content/js/Kendo/typescript/kendo.all.d.ts" />

//alert(JSON.stringify(Q.getLookup("Administration.CustomerLocationLookup").items))
var newTicket = kendo.observable({
    CustomerId: Q.getLookup("Administration.CustomerLocationLookup").items,
    CustomerIdChanged:null
});