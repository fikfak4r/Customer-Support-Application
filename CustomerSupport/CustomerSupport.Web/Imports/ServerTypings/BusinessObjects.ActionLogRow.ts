namespace CustomerSupport.BusinessObjects {
    export interface ActionLogRow {
        ActionLogId?: number;
        TicketId?: number;
        Action?: string;
        Date?: string;
        UserId?: number;
        TicketLocationId?: number;
        TicketDate?: string;
        TicketCustomerId?: number;
        TicketCallDirection?: number;
        TicketType?: number;
        TicketPriority?: number;
        TicketStatus?: number;
        TicketGroupId?: number;
        TicketUserId?: number;
        TicketSubject?: string;
        TicketDescription?: string;
        TicketCreatorId?: number;
        TicketMe?: boolean;
        TicketPhoneNumber?: string;
        TicketNextFollowUpdate?: string;
        TicketFollowUpAction?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserAccountId?: number;
        UserCustomerId?: number;
    }

    export namespace ActionLogRow {
        export const idProperty = 'ActionLogId';
        export const nameProperty = 'Action';
        export const localTextPrefix = 'BusinessObjects.ActionLog';
        export const lookupKey = 'BusinessObjects.ActionLog';

        export function getLookup(): Q.Lookup<ActionLogRow> {
            return Q.getLookup<ActionLogRow>('BusinessObjects.ActionLog');
        }

        export namespace Fields {
            export declare const ActionLogId: string;
            export declare const TicketId: string;
            export declare const Action: string;
            export declare const Date: string;
            export declare const UserId: string;
            export declare const TicketLocationId: string;
            export declare const TicketDate: string;
            export declare const TicketCustomerId: string;
            export declare const TicketCallDirection: string;
            export declare const TicketType: string;
            export declare const TicketPriority: string;
            export declare const TicketStatus: string;
            export declare const TicketGroupId: string;
            export declare const TicketUserId: string;
            export declare const TicketSubject: string;
            export declare const TicketDescription: string;
            export declare const TicketCreatorId: string;
            export declare const TicketMe: string;
            export declare const TicketPhoneNumber: string;
            export declare const TicketNextFollowUpdate: string;
            export declare const TicketFollowUpAction: string;
            export declare const UserUsername: string;
            export declare const UserDisplayName: string;
            export declare const UserEmail: string;
            export declare const UserSource: string;
            export declare const UserPasswordHash: string;
            export declare const UserPasswordSalt: string;
            export declare const UserLastDirectoryUpdate: string;
            export declare const UserUserImage: string;
            export declare const UserInsertDate: string;
            export declare const UserInsertUserId: string;
            export declare const UserUpdateDate: string;
            export declare const UserUpdateUserId: string;
            export declare const UserIsActive: string;
            export declare const UserAccountId: string;
            export declare const UserCustomerId: string;
        }

        ['ActionLogId', 'TicketId', 'Action', 'Date', 'UserId', 'TicketLocationId', 'TicketDate', 'TicketCustomerId', 'TicketCallDirection', 'TicketType', 'TicketPriority', 'TicketStatus', 'TicketGroupId', 'TicketUserId', 'TicketSubject', 'TicketDescription', 'TicketCreatorId', 'TicketMe', 'TicketPhoneNumber', 'TicketNextFollowUpdate', 'TicketFollowUpAction', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive', 'UserAccountId', 'UserCustomerId'].forEach(x => (<any>Fields)[x] = x);
    }
}

