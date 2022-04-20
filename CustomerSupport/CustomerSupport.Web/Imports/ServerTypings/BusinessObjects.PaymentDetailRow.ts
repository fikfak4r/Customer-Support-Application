namespace CustomerSupport.BusinessObjects {
    export interface PaymentDetailRow {
        PaymentDetailId?: number;
        TransactionId?: number;
        Date?: string;
        TotalAmount?: number;
        AmountPaid?: number;
        AmountLeft?: number;
        IsTotalAmountRow?: boolean;
        LocationId?: number;
        TransactionOrderId?: string;
        TransactionDate?: string;
        TransactionTotalAmount?: number;
        TransactionTotalAmountPaid?: number;
        TransactionTotalAmountLeft?: number;
        TransactionHasTransactionsDetails?: boolean;
        TransactionLocationId?: number;
        TransactionIsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        TransactionStatus?: string;
        TransactionIsOpen?: boolean;
        TransactionIsInProgress?: boolean;
        TransactionIsFullyReceived?: boolean;
        TransactionIsFullyPaid?: boolean;
        TransactionIsAdvanced?: boolean;
    }

    export namespace PaymentDetailRow {
        export const idProperty = 'PaymentDetailId';
        export const localTextPrefix = 'BusinessObjects.PaymentDetail';
        export const lookupKey = 'BusinessObjects.PaymentDetail';

        export function getLookup(): Q.Lookup<PaymentDetailRow> {
            return Q.getLookup<PaymentDetailRow>('BusinessObjects.PaymentDetail');
        }

        export namespace Fields {
            export declare const PaymentDetailId: string;
            export declare const TransactionId: string;
            export declare const Date: string;
            export declare const TotalAmount: string;
            export declare const AmountPaid: string;
            export declare const AmountLeft: string;
            export declare const IsTotalAmountRow: string;
            export declare const LocationId: string;
            export declare const TransactionOrderId: string;
            export declare const TransactionDate: string;
            export declare const TransactionTotalAmount: string;
            export declare const TransactionTotalAmountPaid: string;
            export declare const TransactionTotalAmountLeft: string;
            export declare const TransactionHasTransactionsDetails: string;
            export declare const TransactionLocationId: string;
            export declare const TransactionIsIntegerTrailingOrderIdWithPrefixPo: string;
            export declare const TransactionStatus: string;
            export declare const TransactionIsOpen: string;
            export declare const TransactionIsInProgress: string;
            export declare const TransactionIsFullyReceived: string;
            export declare const TransactionIsFullyPaid: string;
            export declare const TransactionIsAdvanced: string;
        }

        ['PaymentDetailId', 'TransactionId', 'Date', 'TotalAmount', 'AmountPaid', 'AmountLeft', 'IsTotalAmountRow', 'LocationId', 'TransactionOrderId', 'TransactionDate', 'TransactionTotalAmount', 'TransactionTotalAmountPaid', 'TransactionTotalAmountLeft', 'TransactionHasTransactionsDetails', 'TransactionLocationId', 'TransactionIsIntegerTrailingOrderIdWithPrefixPo', 'TransactionStatus', 'TransactionIsOpen', 'TransactionIsInProgress', 'TransactionIsFullyReceived', 'TransactionIsFullyPaid', 'TransactionIsAdvanced'].forEach(x => (<any>Fields)[x] = x);
    }
}

