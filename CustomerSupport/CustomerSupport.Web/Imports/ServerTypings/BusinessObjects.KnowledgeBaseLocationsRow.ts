namespace CustomerSupport.BusinessObjects {
    export interface KnowledgeBaseLocationsRow {
        KbLocationId?: number;
        KbId?: number;
        LocationId?: number;
    }

    export namespace KnowledgeBaseLocationsRow {
        export const idProperty = 'KbLocationId';
        export const localTextPrefix = 'BusinessObjects.KnowledgeBaseLocations';
        export const lookupKey = 'BusinessObjects.KnowledgeBaseLocationsRow';

        export function getLookup(): Q.Lookup<KnowledgeBaseLocationsRow> {
            return Q.getLookup<KnowledgeBaseLocationsRow>('BusinessObjects.KnowledgeBaseLocationsRow');
        }

        export namespace Fields {
            export declare const KbLocationId: string;
            export declare const KbId: string;
            export declare const LocationId: string;
        }

        ['KbLocationId', 'KbId', 'LocationId'].forEach(x => (<any>Fields)[x] = x);
    }
}

