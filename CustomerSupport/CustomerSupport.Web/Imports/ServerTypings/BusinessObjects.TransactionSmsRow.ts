namespace CustomerSupport.BusinessObjects {
    export interface TransactionSmsRow {
        TransactionSmsId?: number;
        TransactionId?: number;
        SmsId?: number;
        Sent?: boolean;
        Delivered?: boolean;
        UnDelivered?: boolean;
        TransactionSmsDate?: string;
        TransactionSmsMessage?: string;
    }

    export namespace TransactionSmsRow {
        export const idProperty = 'TransactionSmsId';
        export const localTextPrefix = 'BusinessObjects.TransactionSms';
        export const lookupKey = 'BusinessObjects.TransactionSms';

        export function getLookup(): Q.Lookup<TransactionSmsRow> {
            return Q.getLookup<TransactionSmsRow>('BusinessObjects.TransactionSms');
        }

        export namespace Fields {
            export declare const TransactionSmsId: string;
            export declare const TransactionId: string;
            export declare const SmsId: string;
            export declare const Sent: string;
            export declare const Delivered: string;
            export declare const UnDelivered: string;
            export declare const TransactionSmsDate: string;
            export declare const TransactionSmsMessage: string;
        }

        ['TransactionSmsId', 'TransactionId', 'SmsId', 'Sent', 'Delivered', 'UnDelivered', 'TransactionSmsDate', 'TransactionSmsMessage'].forEach(x => (<any>Fields)[x] = x);
    }
}

