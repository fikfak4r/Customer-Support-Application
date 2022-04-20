namespace CustomerSupport.BusinessObjects {
    export interface KbCategoryRow {
        KbCategoryId?: number;
        CategoryName?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationList?: number[];
        KnowledgeBase?: KnowledgeBaseRow[];
    }

    export namespace KbCategoryRow {
        export const idProperty = 'KbCategoryId';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'BusinessObjects.KbCategory';
        export const lookupKey = 'BusinessObjects.KbCategory';

        export function getLookup(): Q.Lookup<KbCategoryRow> {
            return Q.getLookup<KbCategoryRow>('BusinessObjects.KbCategory');
        }

        export namespace Fields {
            export declare const KbCategoryId: string;
            export declare const CategoryName: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
            export declare const LocationList: string;
            export declare const KnowledgeBase: string;
        }

        ['KbCategoryId', 'CategoryName', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId', 'LocationList', 'KnowledgeBase'].forEach(x => (<any>Fields)[x] = x);
    }
}

