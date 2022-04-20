namespace CustomerSupport.BusinessObjects {
    export interface CallProcessRow {
        CallProcessId?: number;
        CallId?: number;
        UserId?: number;
        Date?: string;
        Description?: string;
        ReplyComment?: number;
        CreatorId?: number;
        CallDirection?: number;
        CallCustomerId?: number;
        CallGroupId?: number;
        CallUserId?: number;
        CallDate?: string;
        CallSubject?: string;
        CallDescription?: string;
        CallCallDirection?: number;
        CallPriority?: number;
        CallStatus?: number;
        CallNextFollowUpDate?: string;
        CallCreatorId?: number;
        CallMe?: boolean;
        CallLocationId?: number;
        CallFollowUpAction?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserAccountId?: number;
        UserLocationId?: number;
    }

    export namespace CallProcessRow {
        export const idProperty = 'CallProcessId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'BusinessObjects.CallProcess';
        export const lookupKey = 'BusinessObjects.CallProcess';

        export function getLookup(): Q.Lookup<CallProcessRow> {
            return Q.getLookup<CallProcessRow>('BusinessObjects.CallProcess');
        }

        export namespace Fields {
            export declare const CallProcessId: string;
            export declare const CallId: string;
            export declare const UserId: string;
            export declare const Date: string;
            export declare const Description: string;
            export declare const ReplyComment: string;
            export declare const CreatorId: string;
            export declare const CallDirection: string;
            export declare const CallCustomerId: string;
            export declare const CallGroupId: string;
            export declare const CallUserId: string;
            export declare const CallDate: string;
            export declare const CallSubject: string;
            export declare const CallDescription: string;
            export declare const CallCallDirection: string;
            export declare const CallPriority: string;
            export declare const CallStatus: string;
            export declare const CallNextFollowUpDate: string;
            export declare const CallCreatorId: string;
            export declare const CallMe: string;
            export declare const CallLocationId: string;
            export declare const CallFollowUpAction: string;
            export declare const UserUsername: string;
            export declare const UserDisplayName: string;
            export declare const UserEmail: string;
            export declare const UserSource: string;
            export declare const UserPasswordHash: string;
            export declare const UserPasswordSalt: string;
            export declare const UserInsertDate: string;
            export declare const UserInsertUserId: string;
            export declare const UserUpdateDate: string;
            export declare const UserUpdateUserId: string;
            export declare const UserIsActive: string;
            export declare const UserLastDirectoryUpdate: string;
            export declare const UserUserImage: string;
            export declare const UserAccountId: string;
            export declare const UserLocationId: string;
        }

        ['CallProcessId', 'CallId', 'UserId', 'Date', 'Description', 'ReplyComment', 'CreatorId', 'CallDirection', 'CallCustomerId', 'CallGroupId', 'CallUserId', 'CallDate', 'CallSubject', 'CallDescription', 'CallCallDirection', 'CallPriority', 'CallStatus', 'CallNextFollowUpDate', 'CallCreatorId', 'CallMe', 'CallLocationId', 'CallFollowUpAction', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserAccountId', 'UserLocationId'].forEach(x => (<any>Fields)[x] = x);
    }
}

