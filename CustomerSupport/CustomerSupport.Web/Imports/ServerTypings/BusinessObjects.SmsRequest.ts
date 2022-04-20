namespace CustomerSupport.BusinessObjects {
    export interface SmsRequest extends Serenity.ServiceRequest {
        LocationId?: number;
        PhoneNumbers?: string;
        Message?: string;
        TicketId?: number;
        TicketIds?: number[];
        CustomerId?: number;
        CustomerIds?: number[];
    }
}

