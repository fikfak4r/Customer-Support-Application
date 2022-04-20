namespace CustomerSupport.BusinessObjects {
    export interface TransactionDetailSaveRequest<MyRow> extends Serenity.ServiceRequest {
        Entities?: Serenity.SaveRequest<MyRow>[];
    }
}

