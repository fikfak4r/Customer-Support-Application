namespace CustomerSupport.BusinessObjects {
    export interface CustomerSmsRow {
        CustomerSmsId?: number;
        CustomerId?: number;
        SmsId?: number;
        Sent?: boolean;
        Delivered?: boolean;
        UnDelivered?: boolean;
        CustomerLocationId?: number;
        CustomerDate?: string;
        CustomerFirstName?: string;
        CustomerLastName?: string;
        CustomerFullName?: string;
        CustomerSex?: number;
        CustomerDateOfBirth?: string;
        CustomerPhoneNumber?: string;
        CustomerEmail?: string;
        CustomerAddress?: string;
        SmsDate?: string;
        SmsMessage?: string;
    }

    export namespace CustomerSmsRow {
        export const idProperty = 'CustomerSmsId';
        export const localTextPrefix = 'BusinessObjects.CustomerSms';
        export const lookupKey = 'BusinessObjects.CustomerSms';

        export function getLookup(): Q.Lookup<CustomerSmsRow> {
            return Q.getLookup<CustomerSmsRow>('BusinessObjects.CustomerSms');
        }

        export namespace Fields {
            export declare const CustomerSmsId: string;
            export declare const CustomerId: string;
            export declare const SmsId: string;
            export declare const Sent: string;
            export declare const Delivered: string;
            export declare const UnDelivered: string;
            export declare const CustomerLocationId: string;
            export declare const CustomerDate: string;
            export declare const CustomerFirstName: string;
            export declare const CustomerLastName: string;
            export declare const CustomerFullName: string;
            export declare const CustomerSex: string;
            export declare const CustomerDateOfBirth: string;
            export declare const CustomerPhoneNumber: string;
            export declare const CustomerEmail: string;
            export declare const CustomerAddress: string;
            export declare const SmsDate: string;
            export declare const SmsMessage: string;
        }

        ['CustomerSmsId', 'CustomerId', 'SmsId', 'Sent', 'Delivered', 'UnDelivered', 'CustomerLocationId', 'CustomerDate', 'CustomerFirstName', 'CustomerLastName', 'CustomerFullName', 'CustomerSex', 'CustomerDateOfBirth', 'CustomerPhoneNumber', 'CustomerEmail', 'CustomerAddress', 'SmsDate', 'SmsMessage'].forEach(x => (<any>Fields)[x] = x);
    }
}

