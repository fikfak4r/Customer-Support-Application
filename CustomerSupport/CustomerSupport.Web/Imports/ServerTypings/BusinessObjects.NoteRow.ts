namespace CustomerSupport.BusinessObjects {
    export interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
        CallDirection?: string;
        InsertUserUserName?: string;
    }

    export namespace NoteRow {
        export const idProperty = 'NoteId';
        export const nameProperty = 'EntityType';
        export const localTextPrefix = 'BusinessObjects.Note';

        export namespace Fields {
            export declare const NoteId: string;
            export declare const EntityType: string;
            export declare const EntityId: string;
            export declare const Text: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const InsertUserDisplayName: string;
            export declare const CallDirection: string;
            export declare const InsertUserUserName: string;
        }

        ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName', 'CallDirection', 'InsertUserUserName'].forEach(x => (<any>Fields)[x] = x);
    }
}

