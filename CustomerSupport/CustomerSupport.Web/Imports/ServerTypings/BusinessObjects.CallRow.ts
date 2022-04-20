namespace CustomerSupport.BusinessObjects {
    export interface CallRow {
        CallId?: number;
        CustomerId?: number;
        GroupId?: number;
        UserId?: number;
        Date?: string;
        Subject?: string;
        Description?: string;
        CallDirection?: number;
        Priority?: number;
        Status?: number;
        NextFollowUpDate?: string;
        CreatorId?: number;
        Me?: boolean;
        LocationId?: number;
        FollowUpAction?: string;
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
        UserLocationId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
    }

    export namespace CallRow {
        export const idProperty = 'CallId';
        export const nameProperty = 'Subject';
        export const localTextPrefix = 'BusinessObjects.Call';
        export const lookupKey = 'BusinessObjects.Call';

        export function getLookup(): Q.Lookup<CallRow> {
            return Q.getLookup<CallRow>('BusinessObjects.Call');
        }

        export namespace Fields {
            export declare const CallId: string;
            export declare const CustomerId: string;
            export declare const GroupId: string;
            export declare const UserId: string;
            export declare const Date: string;
            export declare const Subject: string;
            export declare const Description: string;
            export declare const CallDirection: string;
            export declare const Priority: string;
            export declare const Status: string;
            export declare const NextFollowUpDate: string;
            export declare const CreatorId: string;
            export declare const Me: string;
            export declare const LocationId: string;
            export declare const FollowUpAction: string;
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
            export declare const UserLocationId: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
        }

        ['CallId', 'CustomerId', 'GroupId', 'UserId', 'Date', 'Subject', 'Description', 'CallDirection', 'Priority', 'Status', 'NextFollowUpDate', 'CreatorId', 'Me', 'LocationId', 'FollowUpAction', 'CustomerLocationId', 'CustomerDate', 'CustomerName', 'CustomerSex', 'CustomerDateOfBirth', 'CustomerPhoneNumber', 'CustomerEmail', 'CustomerAddress', 'GroupRoleName', 'GroupAccountId', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserAccountId', 'UserLocationId', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId'].forEach(x => (<any>Fields)[x] = x);
    }
}

