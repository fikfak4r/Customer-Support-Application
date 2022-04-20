namespace CustomerSupport.BusinessObjects {
    export interface TransactionResponse extends Serenity.ServiceResponse {
        Customer?: Serenity.RetrieveResponse<CustomerRow>;
        TransactionDetails?: Serenity.ListResponse<TransactionDetailRow>;
        Transaction?: Serenity.RetrieveResponse<TransactionRow>;
    }
}

