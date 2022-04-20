namespace CustomerSupport.BusinessObjects {
    export interface CustomerRow {
        CustomerId?: number;
        LocationId?: number;
        Date?: string;
        FirstName?: string;
        LastName?: string;
        FullName?: string;
        Sex?: Gender;
        DateOfBirth?: string;
        PhoneNumber?: string;
        Email?: string;
        Address?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
    }

    export namespace CustomerRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'BusinessObjects.Customer';
        export const lookupKey = 'BusinessObjects.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('BusinessObjects.Customer');
        }

        export namespace Fields {
            export declare const CustomerId: string;
            export declare const LocationId: string;
            export declare const Date: string;
            export declare const FirstName: string;
            export declare const LastName: string;
            export declare const FullName: string;
            export declare const Sex: string;
            export declare const DateOfBirth: string;
            export declare const PhoneNumber: string;
            export declare const Email: string;
            export declare const Address: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
        }

        ['CustomerId', 'LocationId', 'Date', 'FirstName', 'LastName', 'FullName', 'Sex', 'DateOfBirth', 'PhoneNumber', 'Email', 'Address', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId'].forEach(x => (<any>Fields)[x] = x);
    }
}

