namespace CustomerSupport.BusinessObjects {
    export interface TransactionRow {
        TransactionId?: number;
        OrderId?: string;
        Date?: string;
        CustomerId?: number;
        TicketId?: number;
        Subject?: string;
        TotalAmount?: number;
        TotalAmountPaid?: number;
        TotalAmountLeft?: number;
        HasTransactionsDetails?: boolean;
        LocationId?: number;
        IsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        Status?: string;
        IsOpen?: boolean;
        IsInProgress?: boolean;
        IsFullyReceived?: boolean;
        IsFullyPaid?: boolean;
        IsAdvanced?: boolean;
        Tax?: number;
        Discount?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
        CustomerName?: string;
    }

    export namespace TransactionRow {
        export const idProperty = 'TransactionId';
        export const nameProperty = 'OrderId';
        export const localTextPrefix = 'BusinessObjects.Transaction';
        export const lookupKey = 'BusinessObjects.Transaction';

        export function getLookup(): Q.Lookup<TransactionRow> {
            return Q.getLookup<TransactionRow>('BusinessObjects.Transaction');
        }

        export namespace Fields {
            export declare const TransactionId: string;
            export declare const OrderId: string;
            export declare const Date: string;
            export declare const CustomerId: string;
            export declare const TicketId: string;
            export declare const Subject: string;
            export declare const TotalAmount: string;
            export declare const TotalAmountPaid: string;
            export declare const TotalAmountLeft: string;
            export declare const HasTransactionsDetails: string;
            export declare const LocationId: string;
            export declare const IsIntegerTrailingOrderIdWithPrefixPo: string;
            export declare const Status: string;
            export declare const IsOpen: string;
            export declare const IsInProgress: string;
            export declare const IsFullyReceived: string;
            export declare const IsFullyPaid: string;
            export declare const IsAdvanced: string;
            export declare const Tax: string;
            export declare const Discount: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
            export declare const LocationIsVisible: string;
            export declare const CustomerName: string;
        }

        ['TransactionId', 'OrderId', 'Date', 'CustomerId', 'TicketId', 'Subject', 'TotalAmount', 'TotalAmountPaid', 'TotalAmountLeft', 'HasTransactionsDetails', 'LocationId', 'IsIntegerTrailingOrderIdWithPrefixPo', 'Status', 'IsOpen', 'IsInProgress', 'IsFullyReceived', 'IsFullyPaid', 'IsAdvanced', 'Tax', 'Discount', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId', 'LocationIsVisible', 'CustomerName'].forEach(x => (<any>Fields)[x] = x);
    }
}

