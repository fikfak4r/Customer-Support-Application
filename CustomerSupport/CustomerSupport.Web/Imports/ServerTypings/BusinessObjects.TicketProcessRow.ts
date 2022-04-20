namespace CustomerSupport.BusinessObjects {
    export interface TicketProcessRow {
        TicketProcessId?: number;
        TicketId?: number;
        Date?: string;
        UserId?: number;
        Description?: string;
        CreatorId?: number;
        TicketLocationId?: number;
        TicketDate?: string;
        TicketCustomerId?: number;
        TicketType?: number;
        TicketPriority?: number;
        TicketStatus?: number;
        TicketGroupId?: number;
        TicketUserId?: number;
        TicketSubject?: string;
        TicketDescription?: string;
        TicketCreatorId?: number;
        TicketMe?: boolean;
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
        ReplyComment?: ReplyComment;
    }

    export namespace TicketProcessRow {
        export const idProperty = 'TicketProcessId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'BusinessObjects.TicketProcess';
        export const lookupKey = 'BusinessObjects.TicketProcessRow';

        export function getLookup(): Q.Lookup<TicketProcessRow> {
            return Q.getLookup<TicketProcessRow>('BusinessObjects.TicketProcessRow');
        }

        export namespace Fields {
            export declare const TicketProcessId: string;
            export declare const TicketId: string;
            export declare const Date: string;
            export declare const UserId: string;
            export declare const Description: string;
            export declare const CreatorId: string;
            export declare const TicketLocationId: string;
            export declare const TicketDate: string;
            export declare const TicketCustomerId: string;
            export declare const TicketType: string;
            export declare const TicketPriority: string;
            export declare const TicketStatus: string;
            export declare const TicketGroupId: string;
            export declare const TicketUserId: string;
            export declare const TicketSubject: string;
            export declare const TicketDescription: string;
            export declare const TicketCreatorId: string;
            export declare const TicketMe: string;
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
            export declare const ReplyComment: string;
        }

        ['TicketProcessId', 'TicketId', 'Date', 'UserId', 'Description', 'CreatorId', 'TicketLocationId', 'TicketDate', 'TicketCustomerId', 'TicketType', 'TicketPriority', 'TicketStatus', 'TicketGroupId', 'TicketUserId', 'TicketSubject', 'TicketDescription', 'TicketCreatorId', 'TicketMe', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserAccountId', 'UserLocationId', 'ReplyComment'].forEach(x => (<any>Fields)[x] = x);
    }
}

