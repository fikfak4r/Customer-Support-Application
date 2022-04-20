namespace CustomerSupport.BusinessObjects {
    export interface TicketResponse extends Serenity.ServiceResponse {
        Customer?: Serenity.RetrieveResponse<CustomerRow>;
        Ticket?: Serenity.RetrieveResponse<TicketRow>;
        Note?: Serenity.ListResponse<NoteRow>;
    }
}

