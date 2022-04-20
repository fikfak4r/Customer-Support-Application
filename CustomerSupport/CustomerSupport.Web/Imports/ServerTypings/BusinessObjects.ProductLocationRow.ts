namespace CustomerSupport.BusinessObjects {
    export interface ProductLocationRow {
        ProductLocationId?: number;
        ProductId?: number;
        LocationId?: number;
        ProductName?: string;
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

    export namespace ProductLocationRow {
        export const idProperty = 'ProductLocationId';
        export const localTextPrefix = 'BusinessObjects.ProductLocation';
        export const lookupKey = 'BusinessObjects.ProductLocation';

        export function getLookup(): Q.Lookup<ProductLocationRow> {
            return Q.getLookup<ProductLocationRow>('BusinessObjects.ProductLocation');
        }

        export namespace Fields {
            export declare const ProductLocationId: string;
            export declare const ProductId: string;
            export declare const LocationId: string;
            export declare const ProductName: string;
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

        ['ProductLocationId', 'ProductId', 'LocationId', 'ProductName', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId', 'LocationIsVisible'].forEach(x => (<any>Fields)[x] = x);
    }
}

