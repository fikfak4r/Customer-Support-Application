namespace CustomerSupport.BusinessObjects {
    export interface TicketRow {
        TicketId?: number;
        TicketIdString?: string;
        LocationId?: number;
        ProductId?: number;
        TransactionId?: number;
        Date?: string;
        PhoneNumber?: string;
        CustomerId?: number;
        Type?: RequestType;
        Priority?: Priority;
        Status?: Status;
        GroupId?: number;
        UserId?: number;
        Subject?: string;
        CreatorId?: number;
        Me?: boolean;
        NextFollowUpDate?: string;
        FollowUpAction?: string;
        CallDirection?: CallDirection;
        ProductName?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        CustomerLocationId?: number;
        CustomerDate?: string;
        CustomerName?: string;
        CustomerSex?: number;
        CustomerDateOfBirth?: string;
        CustomerPhoneNumber?: string;
        CustomerEmail?: string;
        CustomerAddress?: string;
        GroupRoleName?: string;
        GroupAccountId?: number;
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
        TicketProcess?: TicketProcessRow[];
        NoteList?: NoteRow[];
    }

    export namespace TicketRow {
        export const idProperty = 'TicketId';
        export const nameProperty = 'Subject';
        export const localTextPrefix = 'BusinessObjects.Ticket';
        export const lookupKey = 'BusinessObjects.Ticket';

        export function getLookup(): Q.Lookup<TicketRow> {
            return Q.getLookup<TicketRow>('BusinessObjects.Ticket');
        }

        export namespace Fields {
            export declare const TicketId: string;
            export declare const TicketIdString: string;
            export declare const LocationId: string;
            export declare const ProductId: string;
            export declare const TransactionId: string;
            export declare const Date: string;
            export declare const PhoneNumber: string;
            export declare const CustomerId: string;
            export declare const Type: string;
            export declare const Priority: string;
            export declare const Status: string;
            export declare const GroupId: string;
            export declare const UserId: string;
            export declare const Subject: string;
            export declare const CreatorId: string;
            export declare const Me: string;
            export declare const NextFollowUpDate: string;
            export declare const FollowUpAction: string;
            export declare const CallDirection: string;
            export declare const ProductName: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
            export declare const CustomerLocationId: string;
            export declare const CustomerDate: string;
            export declare const CustomerName: string;
            export declare const CustomerSex: string;
            export declare const CustomerDateOfBirth: string;
            export declare const CustomerPhoneNumber: string;
            export declare const CustomerEmail: string;
            export declare const CustomerAddress: string;
            export declare const GroupRoleName: string;
            export declare const GroupAccountId: string;
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
            export declare const TicketProcess: string;
            export declare const NoteList: string;
        }

        ['TicketId', 'TicketIdString', 'LocationId', 'ProductId', 'TransactionId', 'Date', 'PhoneNumber', 'CustomerId', 'Type', 'Priority', 'Status', 'GroupId', 'UserId', 'Subject', 'CreatorId', 'Me', 'NextFollowUpDate', 'FollowUpAction', 'CallDirection', 'ProductName', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId', 'CustomerLocationId', 'CustomerDate', 'CustomerName', 'CustomerSex', 'CustomerDateOfBirth', 'CustomerPhoneNumber', 'CustomerEmail', 'CustomerAddress', 'GroupRoleName', 'GroupAccountId', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserAccountId', 'TicketProcess', 'NoteList'].forEach(x => (<any>Fields)[x] = x);
    }
}

