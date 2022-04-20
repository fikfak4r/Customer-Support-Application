namespace CustomerSupport.BusinessObjects {
    export interface TransactionDetailRow {
        TransactionDetailId?: number;
        TransactionId?: number;
        Date?: string;
        ProductId?: number;
        UnitPrice?: number;
        UnitName?: string;
        Discount?: number;
        Quantity?: number;
        Amount?: number;
        LocationId?: number;
        IsReceived?: boolean;
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
        ProductName?: string;
        ProductUnitName?: string;
        ProductPrice?: number;
    }

    export namespace TransactionDetailRow {
        export const idProperty = 'TransactionDetailId';
        export const localTextPrefix = 'BusinessObjects.TransactionDetail';
        export const lookupKey = 'BusinessObjects.TransactionDetail';

        export function getLookup(): Q.Lookup<TransactionDetailRow> {
            return Q.getLookup<TransactionDetailRow>('BusinessObjects.TransactionDetail');
        }

        export namespace Fields {
            export declare const TransactionDetailId: string;
            export declare const TransactionId: string;
            export declare const Date: string;
            export declare const ProductId: string;
            export declare const UnitPrice: string;
            export declare const UnitName: string;
            export declare const Discount: string;
            export declare const Quantity: string;
            export declare const Amount: string;
            export declare const LocationId: string;
            export declare const IsReceived: string;
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
            export declare const ProductName: string;
            export declare const ProductUnitName: string;
            export declare const ProductPrice: string;
        }

        ['TransactionDetailId', 'TransactionId', 'Date', 'ProductId', 'UnitPrice', 'UnitName', 'Discount', 'Quantity', 'Amount', 'LocationId', 'IsReceived', 'TransactionOrderId', 'TransactionDate', 'TransactionTotalAmount', 'TransactionTotalAmountPaid', 'TransactionTotalAmountLeft', 'TransactionHasTransactionsDetails', 'TransactionLocationId', 'TransactionIsIntegerTrailingOrderIdWithPrefixPo', 'TransactionStatus', 'TransactionIsOpen', 'TransactionIsInProgress', 'TransactionIsFullyReceived', 'TransactionIsFullyPaid', 'TransactionIsAdvanced', 'ProductName', 'ProductUnitName', 'ProductPrice'].forEach(x => (<any>Fields)[x] = x);
    }
}

