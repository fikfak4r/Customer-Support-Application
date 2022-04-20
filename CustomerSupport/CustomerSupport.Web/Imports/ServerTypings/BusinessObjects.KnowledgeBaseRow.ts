namespace CustomerSupport.BusinessObjects {
    export interface KnowledgeBaseRow {
        KbId?: number;
        KbCategoryId?: number;
        Title?: string;
        KbContent?: string;
        KbCategoryCategoryName?: string;
        KbCategoryLocationId?: number;
        LocationList?: number[];
    }

    export namespace KnowledgeBaseRow {
        export const idProperty = 'KbId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'BusinessObjects.KnowledgeBase';
        export const lookupKey = 'BusinessObjects.KnowledgeBase';

        export function getLookup(): Q.Lookup<KnowledgeBaseRow> {
            return Q.getLookup<KnowledgeBaseRow>('BusinessObjects.KnowledgeBase');
        }

        export namespace Fields {
            export declare const KbId: string;
            export declare const KbCategoryId: string;
            export declare const Title: string;
            export declare const KbContent: string;
            export declare const KbCategoryCategoryName: string;
            export declare const KbCategoryLocationId: string;
            export declare const LocationList: string;
        }

        ['KbId', 'KbCategoryId', 'Title', 'KbContent', 'KbCategoryCategoryName', 'KbCategoryLocationId', 'LocationList'].forEach(x => (<any>Fields)[x] = x);
    }
}

