namespace CustomerSupport.BusinessObjects {
    export interface SmsLocationRow {
        SmsLocationId?: number;
        SmsId?: number;
        LocationId?: number;
        SmsDate?: string;
        SmsMessage?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
    }

    export namespace SmsLocationRow {
        export const idProperty = 'SmsLocationId';
        export const localTextPrefix = 'BusinessObjects.SmsLocation';
        export const lookupKey = 'BusinessObjects.SmsLocation';

        export function getLookup(): Q.Lookup<SmsLocationRow> {
            return Q.getLookup<SmsLocationRow>('BusinessObjects.SmsLocation');
        }

        export namespace Fields {
            export declare const SmsLocationId: string;
            export declare const SmsId: string;
            export declare const LocationId: string;
            export declare const SmsDate: string;
            export declare const SmsMessage: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
            export declare const LocationIsVisible: string;
        }

        ['SmsLocationId', 'SmsId', 'LocationId', 'SmsDate', 'SmsMessage', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId', 'LocationIsVisible'].forEach(x => (<any>Fields)[x] = x);
    }
}

