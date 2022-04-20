namespace CustomerSupport.BusinessObjects {
    export interface ProductRow {
        ProductId?: number;
        Name?: string;
        Price?: number;
        LocationList?: number[];
    }

    export namespace ProductRow {
        export const idProperty = 'ProductId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'BusinessObjects.Product';
        export const lookupKey = 'BusinessObjects.Product';

        export function getLookup(): Q.Lookup<ProductRow> {
            return Q.getLookup<ProductRow>('BusinessObjects.Product');
        }

        export namespace Fields {
            export declare const ProductId: string;
            export declare const Name: string;
            export declare const Price: string;
            export declare const LocationList: string;
        }

        ['ProductId', 'Name', 'Price', 'LocationList'].forEach(x => (<any>Fields)[x] = x);
    }
}

