namespace CustomerSupport.BusinessObjects {
    export interface SmsResponse extends Serenity.ServiceResponse {
        LocationId?: number;
        PhoneNumbers?: string;
        Message?: string;
        TicketId?: number;
        TicketIds?: number[];
    }
}

