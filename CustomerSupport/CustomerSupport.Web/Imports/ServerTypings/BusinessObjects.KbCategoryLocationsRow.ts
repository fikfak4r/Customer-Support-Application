namespace CustomerSupport.BusinessObjects {
    export interface KbCategoryLocationsRow {
        KbCategoryLocationId?: number;
        KbCategoryId?: number;
        LocationId?: number;
    }

    export namespace KbCategoryLocationsRow {
        export const idProperty = 'KbCategoryLocationId';
        export const localTextPrefix = 'BusinessObjects.KbCategoryLocations';
        export const lookupKey = 'BusinessObjects.KbCategoryLocationsRow';

        export function getLookup(): Q.Lookup<KbCategoryLocationsRow> {
            return Q.getLookup<KbCategoryLocationsRow>('BusinessObjects.KbCategoryLocationsRow');
        }

        export namespace Fields {
            export declare const KbCategoryLocationId: string;
            export declare const KbCategoryId: string;
            export declare const LocationId: string;
        }

        ['KbCategoryLocationId', 'KbCategoryId', 'LocationId'].forEach(x => (<any>Fields)[x] = x);
    }
}

