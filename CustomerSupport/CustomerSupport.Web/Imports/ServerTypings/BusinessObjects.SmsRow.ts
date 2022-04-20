namespace CustomerSupport.BusinessObjects {
    export interface SmsRow {
        SmsId?: number;
        Date?: string;
        Message?: string;
    }

    export namespace SmsRow {
        export const idProperty = 'SmsId';
        export const nameProperty = 'Message';
        export const localTextPrefix = 'BusinessObjects.Sms';
        export const lookupKey = 'BusinessObjects.Sms';

        export function getLookup(): Q.Lookup<SmsRow> {
            return Q.getLookup<SmsRow>('BusinessObjects.Sms');
        }

        export namespace Fields {
            export declare const SmsId: string;
            export declare const Date: string;
            export declare const Message: string;
        }

        ['SmsId', 'Date', 'Message'].forEach(x => (<any>Fields)[x] = x);
    }
}

