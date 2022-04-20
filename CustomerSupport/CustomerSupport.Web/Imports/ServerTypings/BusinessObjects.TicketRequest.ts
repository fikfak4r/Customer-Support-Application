namespace CustomerSupport.BusinessObjects {
    export interface TicketRequest extends Serenity.ServiceRequest {
        Customer?: Serenity.SaveRequest<CustomerRow>;
        Ticket?: Serenity.SaveRequest<TicketRow>;
        Note?: Serenity.SaveRequest<NoteRow>;
    }
}

