namespace CustomerSupport.BusinessObjects {
    export interface TransactionRequest extends Serenity.ServiceRequest {
        Customer?: Serenity.SaveRequest<CustomerRow>;
        TransactionDetails?: Serenity.SaveRequest<TransactionDetailRow>[];
        Transaction?: Serenity.SaveRequest<TransactionRow>;
    }
}

