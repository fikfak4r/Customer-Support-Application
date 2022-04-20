namespace CustomerSupport.BusinessObjects {
    export interface TicketListRequest extends Serenity.ListRequest {
        Locations?: number[];
    }
}

