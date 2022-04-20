/// <reference path="../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../Content/js/Kendo/typescript/jquery.d.ts" />
/// <reference path="../Kendo/typescript/kendo.all.d.ts" />
/// <reference types="jqueryui" />
declare namespace CustomerSupport.Administration {
}
declare namespace CustomerSupport.Administration {
    class AccountForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AccountForm {
        Date: Serenity.DateEditor;
        CompanyName: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        WebsiteAddress: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
    }
}
declare namespace CustomerSupport.Administration {
    interface AccountRow {
        AccountId?: number;
        Date?: string;
        CompanyName?: string;
        Address?: string;
        Email?: string;
        PhoneNumber?: string;
        WebsiteAddress?: string;
        AgreeToTerms?: boolean;
    }
    namespace AccountRow {
        const idProperty = "AccountId";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Administration.Account";
        const lookupKey = "Administration.Account";
        function getLookup(): Q.Lookup<AccountRow>;
        namespace Fields {
            const AccountId: string;
            const Date: string;
            const CompanyName: string;
            const Address: string;
            const Email: string;
            const PhoneNumber: string;
            const WebsiteAddress: string;
            const AgreeToTerms: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    namespace AccountService {
        const baseUrl = "Administration/Account";
        function Create(request: Serenity.SaveRequest<AccountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
}
declare namespace CustomerSupport.Administration {
    class GetCodeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface GetCodeForm {
        AccountId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        LocationLocationName: Serenity.StringEditor;
        LinkCode: Serenity.TextAreaEditor;
        FormCode: Serenity.TextAreaEditor;
    }
}
declare namespace CustomerSupport.Administration {
    interface GetCodeRow {
        GetCodeId?: number;
        AccountId?: number;
        LocationId?: number;
        LinkCode?: string;
        FormCode?: string;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
    }
    namespace GetCodeRow {
        const idProperty = "GetCodeId";
        const nameProperty = "LocationLocationName";
        const localTextPrefix = "Administration.GetCode";
        const lookupKey = "Administration.GetCode";
        function getLookup(): Q.Lookup<GetCodeRow>;
        namespace Fields {
            const GetCodeId: string;
            const AccountId: string;
            const LocationId: string;
            const LinkCode: string;
            const FormCode: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountLogo: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const LocationIsVisible: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    namespace GetCodeService {
        const baseUrl = "Administration/GetCode";
        function Create(request: Serenity.SaveRequest<GetCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GetCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GetCodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GetCodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
}
declare namespace CustomerSupport.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace CustomerSupport.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
}
declare namespace CustomerSupport.Administration {
    class LocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LocationForm {
        LocationId: Serenity.IntegerEditor;
        AccountId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        LocationName: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        UserId: Serenity.IntegerEditor;
        IsVisible: Serenity.BooleanEditor;
    }
}
declare namespace CustomerSupport.Administration {
    interface LocationRow {
        LocationId?: number;
        AccountId?: number;
        Date?: string;
        PhoneNumber?: string;
        Email?: string;
        Website?: string;
        LocationName?: string;
        Address?: string;
        UserId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        IsVisible?: boolean;
    }
    namespace LocationRow {
        const idProperty = "LocationId";
        const nameProperty = "LocationName";
        const localTextPrefix = "Administration.Location";
        const lookupKey = "Administration.Location";
        function getLookup(): Q.Lookup<LocationRow>;
        namespace Fields {
            const LocationId: string;
            const AccountId: string;
            const Date: string;
            const PhoneNumber: string;
            const Email: string;
            const Website: string;
            const LocationName: string;
            const Address: string;
            const UserId: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
            const IsVisible: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    namespace LocationService {
        const baseUrl = "Administration/Location";
        function Create(request: Serenity.SaveRequest<LocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
}
declare namespace CustomerSupport.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
        LocationList: Serenity.LookupEditor;
    }
}
declare namespace CustomerSupport.Administration {
}
declare namespace CustomerSupport.Administration {
    class RoleLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleLocationForm {
        RoleId: Serenity.IntegerEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace CustomerSupport.Administration {
    interface RoleLocationRow {
        RoleLocationId?: number;
        RoleId?: number;
        LocationId?: number;
        RoleRoleName?: string;
    }
    namespace RoleLocationRow {
        const idProperty = "RoleId";
        const localTextPrefix = "Administration.RoleLocation";
        const lookupKey = "Administration.RoleLocationRow";
        function getLookup(): Q.Lookup<RoleLocationRow>;
        namespace Fields {
            const RoleLocationId: string;
            const RoleId: string;
            const LocationId: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    namespace RoleLocationService {
        const baseUrl = "Administration/RoleLocation";
        function Create(request: Serenity.SaveRequest<RoleLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace CustomerSupport.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace CustomerSupport.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace CustomerSupport.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        LocationList?: number[];
        AccountId?: number;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
            const LocationList: string;
            const AccountId: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace CustomerSupport.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace CustomerSupport.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace CustomerSupport.Administration {
}
declare namespace CustomerSupport.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
        LocationList: Serenity.LookupEditor;
    }
}
declare namespace CustomerSupport.Administration {
}
declare namespace CustomerSupport.Administration {
    class UserLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserLocationForm {
        UserId: Serenity.IntegerEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace CustomerSupport.Administration {
    interface UserLocationRow {
        UserLocationId?: number;
        UserId?: number;
        LocationId?: number;
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
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
    }
    namespace UserLocationRow {
        const idProperty = "UserLocationId";
        const localTextPrefix = "Administration.UserLocation";
        const lookupKey = "Administration.UserLocation";
        function getLookup(): Q.Lookup<UserLocationRow>;
        namespace Fields {
            const UserLocationId: string;
            const UserId: string;
            const LocationId: string;
            const UserUsername: string;
            const UserDisplayName: string;
            const UserEmail: string;
            const UserSource: string;
            const UserPasswordHash: string;
            const UserPasswordSalt: string;
            const UserInsertDate: string;
            const UserInsertUserId: string;
            const UserUpdateDate: string;
            const UserUpdateUserId: string;
            const UserIsActive: string;
            const UserLastDirectoryUpdate: string;
            const UserUserImage: string;
            const UserAccountId: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    namespace UserLocationService {
        const baseUrl = "Administration/UserLocation";
        function Create(request: Serenity.SaveRequest<UserLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace CustomerSupport.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace CustomerSupport.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace CustomerSupport.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace CustomerSupport.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const lookupKey = "Administration.UserRoleRow";
        function getLookup(): Q.Lookup<UserRoleRow>;
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace CustomerSupport.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        AccountId?: number;
        CustomerId?: number;
        LocationList?: number[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const UserImage: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const AccountId: string;
            const CustomerId: string;
            const LocationList: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace CustomerSupport.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class ActionLogForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ActionLogForm {
        Action: Serenity.StringEditor;
        Date: Serenity.DateEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface ActionLogRow {
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
    namespace ActionLogRow {
        const idProperty = "ActionLogId";
        const nameProperty = "Action";
        const localTextPrefix = "BusinessObjects.ActionLog";
        const lookupKey = "BusinessObjects.ActionLog";
        function getLookup(): Q.Lookup<ActionLogRow>;
        namespace Fields {
            const ActionLogId: string;
            const TicketId: string;
            const Action: string;
            const Date: string;
            const UserId: string;
            const TicketLocationId: string;
            const TicketDate: string;
            const TicketCustomerId: string;
            const TicketCallDirection: string;
            const TicketType: string;
            const TicketPriority: string;
            const TicketStatus: string;
            const TicketGroupId: string;
            const TicketUserId: string;
            const TicketSubject: string;
            const TicketDescription: string;
            const TicketCreatorId: string;
            const TicketMe: string;
            const TicketPhoneNumber: string;
            const TicketNextFollowUpdate: string;
            const TicketFollowUpAction: string;
            const UserUsername: string;
            const UserDisplayName: string;
            const UserEmail: string;
            const UserSource: string;
            const UserPasswordHash: string;
            const UserPasswordSalt: string;
            const UserLastDirectoryUpdate: string;
            const UserUserImage: string;
            const UserInsertDate: string;
            const UserInsertUserId: string;
            const UserUpdateDate: string;
            const UserUpdateUserId: string;
            const UserIsActive: string;
            const UserAccountId: string;
            const UserCustomerId: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace ActionLogService {
        const baseUrl = "BusinessObjects/ActionLog";
        function Create(request: Serenity.SaveRequest<ActionLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ActionLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActionLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActionLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ActionsSettingsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ActionsSettingsForm {
        Type: Serenity.EnumEditor;
        Priority: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        LocationId: Serenity.LookupEditor;
        GroupId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface ActionsSettingsRequest extends Serenity.ServiceRequest {
        Priority?: number;
        Status?: number;
        Type?: number;
        LocationId?: number;
        GroupId?: number;
        AgentId?: number;
        TicketIds?: number[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class AssignToAgentsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssignToAgentsForm {
        LocationId: Serenity.LookupEditor;
        GroupId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface AssignToAgentsRequest extends Serenity.ServiceRequest {
        LocationId?: number;
        GroupId?: number;
        AgentId?: number;
        TicketIds?: number[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface AssignToAgentsResponse extends Serenity.ServiceResponse {
        Reply?: string;
        LocationId?: number;
        GroupId?: number;
        AgentId?: number;
        TicketIds?: number[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    enum CallDirection {
        Complain = 1,
        Request = 2,
        Enquiry = 3,
        Transaction = 4,
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CallForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CallForm {
        CustomerId: Serenity.LookupEditor;
        GroupId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        Subject: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        CallDirection: Serenity.IntegerEditor;
        Priority: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        NextFollowUpDate: Serenity.DateEditor;
        CreatorId: Serenity.IntegerEditor;
        Me: Serenity.BooleanEditor;
        LocationId: Serenity.LookupEditor;
        FollowUpAction: Serenity.StringEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class CallProcessForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CallProcessForm {
        CallId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        ReplyComment: Serenity.IntegerEditor;
        CreatorId: Serenity.IntegerEditor;
        CallDirection: Serenity.IntegerEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface CallProcessRow {
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
    namespace CallProcessRow {
        const idProperty = "CallProcessId";
        const nameProperty = "Description";
        const localTextPrefix = "BusinessObjects.CallProcess";
        const lookupKey = "BusinessObjects.CallProcess";
        function getLookup(): Q.Lookup<CallProcessRow>;
        namespace Fields {
            const CallProcessId: string;
            const CallId: string;
            const UserId: string;
            const Date: string;
            const Description: string;
            const ReplyComment: string;
            const CreatorId: string;
            const CallDirection: string;
            const CallCustomerId: string;
            const CallGroupId: string;
            const CallUserId: string;
            const CallDate: string;
            const CallSubject: string;
            const CallDescription: string;
            const CallCallDirection: string;
            const CallPriority: string;
            const CallStatus: string;
            const CallNextFollowUpDate: string;
            const CallCreatorId: string;
            const CallMe: string;
            const CallLocationId: string;
            const CallFollowUpAction: string;
            const UserUsername: string;
            const UserDisplayName: string;
            const UserEmail: string;
            const UserSource: string;
            const UserPasswordHash: string;
            const UserPasswordSalt: string;
            const UserInsertDate: string;
            const UserInsertUserId: string;
            const UserUpdateDate: string;
            const UserUpdateUserId: string;
            const UserIsActive: string;
            const UserLastDirectoryUpdate: string;
            const UserUserImage: string;
            const UserAccountId: string;
            const UserLocationId: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace CallProcessService {
        const baseUrl = "BusinessObjects/CallProcess";
        function Create(request: Serenity.SaveRequest<CallProcessRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CallProcessRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CallProcessRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CallProcessRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface CallRow {
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
    namespace CallRow {
        const idProperty = "CallId";
        const nameProperty = "Subject";
        const localTextPrefix = "BusinessObjects.Call";
        const lookupKey = "BusinessObjects.Call";
        function getLookup(): Q.Lookup<CallRow>;
        namespace Fields {
            const CallId: string;
            const CustomerId: string;
            const GroupId: string;
            const UserId: string;
            const Date: string;
            const Subject: string;
            const Description: string;
            const CallDirection: string;
            const Priority: string;
            const Status: string;
            const NextFollowUpDate: string;
            const CreatorId: string;
            const Me: string;
            const LocationId: string;
            const FollowUpAction: string;
            const CustomerLocationId: string;
            const CustomerDate: string;
            const CustomerName: string;
            const CustomerSex: string;
            const CustomerDateOfBirth: string;
            const CustomerPhoneNumber: string;
            const CustomerEmail: string;
            const CustomerAddress: string;
            const GroupRoleName: string;
            const GroupAccountId: string;
            const UserUsername: string;
            const UserDisplayName: string;
            const UserEmail: string;
            const UserSource: string;
            const UserPasswordHash: string;
            const UserPasswordSalt: string;
            const UserInsertDate: string;
            const UserInsertUserId: string;
            const UserUpdateDate: string;
            const UserUpdateUserId: string;
            const UserIsActive: string;
            const UserLastDirectoryUpdate: string;
            const UserUserImage: string;
            const UserAccountId: string;
            const UserLocationId: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace CallService {
        const baseUrl = "BusinessObjects/Call";
        function Create(request: Serenity.SaveRequest<CallRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CallRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CallRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CallRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerForm {
        CustomerId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        FullName: Serenity.StringEditor;
        Sex: Serenity.EnumEditor;
        DateOfBirth: Serenity.DateEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        LocationId: Serenity.LookupEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface CustomerRow {
        CustomerId?: number;
        LocationId?: number;
        Date?: string;
        FirstName?: string;
        LastName?: string;
        FullName?: string;
        Sex?: Gender;
        DateOfBirth?: string;
        PhoneNumber?: string;
        Email?: string;
        Address?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
    }
    namespace CustomerRow {
        const idProperty = "CustomerId";
        const nameProperty = "FullName";
        const localTextPrefix = "BusinessObjects.Customer";
        const lookupKey = "BusinessObjects.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        namespace Fields {
            const CustomerId: string;
            const LocationId: string;
            const Date: string;
            const FirstName: string;
            const LastName: string;
            const FullName: string;
            const Sex: string;
            const DateOfBirth: string;
            const PhoneNumber: string;
            const Email: string;
            const Address: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace CustomerService {
        const baseUrl = "BusinessObjects/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerSmsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerSmsForm {
        CustomerId: Serenity.LookupEditor;
        SmsId: Serenity.LookupEditor;
        SmsMessage: Serenity.TextAreaEditor;
        Sent: Serenity.BooleanEditor;
        Delivered: Serenity.BooleanEditor;
        UnDelivered: Serenity.BooleanEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface CustomerSmsRow {
        CustomerSmsId?: number;
        CustomerId?: number;
        SmsId?: number;
        Sent?: boolean;
        Delivered?: boolean;
        UnDelivered?: boolean;
        CustomerLocationId?: number;
        CustomerDate?: string;
        CustomerFirstName?: string;
        CustomerLastName?: string;
        CustomerFullName?: string;
        CustomerSex?: number;
        CustomerDateOfBirth?: string;
        CustomerPhoneNumber?: string;
        CustomerEmail?: string;
        CustomerAddress?: string;
        SmsDate?: string;
        SmsMessage?: string;
    }
    namespace CustomerSmsRow {
        const idProperty = "CustomerSmsId";
        const localTextPrefix = "BusinessObjects.CustomerSms";
        const lookupKey = "BusinessObjects.CustomerSms";
        function getLookup(): Q.Lookup<CustomerSmsRow>;
        namespace Fields {
            const CustomerSmsId: string;
            const CustomerId: string;
            const SmsId: string;
            const Sent: string;
            const Delivered: string;
            const UnDelivered: string;
            const CustomerLocationId: string;
            const CustomerDate: string;
            const CustomerFirstName: string;
            const CustomerLastName: string;
            const CustomerFullName: string;
            const CustomerSex: string;
            const CustomerDateOfBirth: string;
            const CustomerPhoneNumber: string;
            const CustomerEmail: string;
            const CustomerAddress: string;
            const SmsDate: string;
            const SmsMessage: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace CustomerSmsService {
        const baseUrl = "BusinessObjects/CustomerSms";
        function Create(request: Serenity.SaveRequest<CustomerSmsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerSmsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerSmsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerSmsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class ForwardAsMailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForwardAsMailForm {
        Email: Serenity.StringEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    enum Gender {
        Female = 1,
        Male = 2,
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface KbCategoryForm {
        CategoryName: Serenity.StringEditor;
        LocationList: Serenity.LookupEditor;
        KnowledgeBase: KnowledgeBaseEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryLocationsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface KbCategoryLocationsForm {
        KbCategoryId: Serenity.IntegerEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface KbCategoryLocationsRow {
        KbCategoryLocationId?: number;
        KbCategoryId?: number;
        LocationId?: number;
    }
    namespace KbCategoryLocationsRow {
        const idProperty = "KbCategoryLocationId";
        const localTextPrefix = "BusinessObjects.KbCategoryLocations";
        const lookupKey = "BusinessObjects.KbCategoryLocationsRow";
        function getLookup(): Q.Lookup<KbCategoryLocationsRow>;
        namespace Fields {
            const KbCategoryLocationId: string;
            const KbCategoryId: string;
            const LocationId: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace KbCategoryLocationsService {
        const baseUrl = "BusinessObjects/KbCategoryLocations";
        function Create(request: Serenity.SaveRequest<KbCategoryLocationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KbCategoryLocationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KbCategoryLocationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KbCategoryLocationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface KbCategoryRow {
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
    namespace KbCategoryRow {
        const idProperty = "KbCategoryId";
        const nameProperty = "CategoryName";
        const localTextPrefix = "BusinessObjects.KbCategory";
        const lookupKey = "BusinessObjects.KbCategory";
        function getLookup(): Q.Lookup<KbCategoryRow>;
        namespace Fields {
            const KbCategoryId: string;
            const CategoryName: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const LocationList: string;
            const KnowledgeBase: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace KbCategoryService {
        const baseUrl = "BusinessObjects/KbCategory";
        function Create(request: Serenity.SaveRequest<KbCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KbCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KbCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KbCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryThreadForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface KbCategoryThreadForm {
        CategoryName: Serenity.StringEditor;
        LocationList: Serenity.LookupEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class KnowledgeBaseForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface KnowledgeBaseForm {
        KbCategoryId: Serenity.LookupEditor;
        Title: Serenity.StringEditor;
        KbContent: Serenity.TextAreaEditor;
        LocationList: Serenity.LookupEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class KnowledgeBaseLocationsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface KnowledgeBaseLocationsForm {
        KbCategoryId: Serenity.IntegerEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface KnowledgeBaseLocationsRow {
        KbLocationId?: number;
        KbId?: number;
        LocationId?: number;
    }
    namespace KnowledgeBaseLocationsRow {
        const idProperty = "KbLocationId";
        const localTextPrefix = "BusinessObjects.KnowledgeBaseLocations";
        const lookupKey = "BusinessObjects.KnowledgeBaseLocationsRow";
        function getLookup(): Q.Lookup<KnowledgeBaseLocationsRow>;
        namespace Fields {
            const KbLocationId: string;
            const KbId: string;
            const LocationId: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace KnowledgeBaseLocationsService {
        const baseUrl = "BusinessObjects/KnowledgeBaseLocations";
        function Create(request: Serenity.SaveRequest<KnowledgeBaseLocationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KnowledgeBaseLocationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KnowledgeBaseLocationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KnowledgeBaseLocationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface KnowledgeBaseRow {
        KbId?: number;
        KbCategoryId?: number;
        Title?: string;
        KbContent?: string;
        KbCategoryCategoryName?: string;
        KbCategoryLocationId?: number;
        LocationList?: number[];
    }
    namespace KnowledgeBaseRow {
        const idProperty = "KbId";
        const nameProperty = "Title";
        const localTextPrefix = "BusinessObjects.KnowledgeBase";
        const lookupKey = "BusinessObjects.KnowledgeBase";
        function getLookup(): Q.Lookup<KnowledgeBaseRow>;
        namespace Fields {
            const KbId: string;
            const KbCategoryId: string;
            const Title: string;
            const KbContent: string;
            const KbCategoryCategoryName: string;
            const KbCategoryLocationId: string;
            const LocationList: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace KnowledgeBaseService {
        const baseUrl = "BusinessObjects/KnowledgeBase";
        function Create(request: Serenity.SaveRequest<KnowledgeBaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KnowledgeBaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KnowledgeBaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KnowledgeBaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface MyRow {
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface NoteRow {
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
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "BusinessObjects.Note";
        namespace Fields {
            const NoteId: string;
            const EntityType: string;
            const EntityId: string;
            const Text: string;
            const InsertUserId: string;
            const InsertDate: string;
            const InsertUserDisplayName: string;
            const CallDirection: string;
            const InsertUserUserName: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class PaymentDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PaymentDetailForm {
        TransactionId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        TotalAmount: Serenity.DecimalEditor;
        AmountPaid: Serenity.DecimalEditor;
        AmountLeft: Serenity.DecimalEditor;
        IsTotalAmountRow: Serenity.BooleanEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface PaymentDetailRow {
        PaymentDetailId?: number;
        TransactionId?: number;
        Date?: string;
        TotalAmount?: number;
        AmountPaid?: number;
        AmountLeft?: number;
        IsTotalAmountRow?: boolean;
        LocationId?: number;
        TransactionOrderId?: string;
        TransactionDate?: string;
        TransactionTotalAmount?: number;
        TransactionTotalAmountPaid?: number;
        TransactionTotalAmountLeft?: number;
        TransactionHasTransactionsDetails?: boolean;
        TransactionLocationId?: number;
        TransactionIsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        TransactionStatus?: string;
        TransactionIsOpen?: boolean;
        TransactionIsInProgress?: boolean;
        TransactionIsFullyReceived?: boolean;
        TransactionIsFullyPaid?: boolean;
        TransactionIsAdvanced?: boolean;
    }
    namespace PaymentDetailRow {
        const idProperty = "PaymentDetailId";
        const localTextPrefix = "BusinessObjects.PaymentDetail";
        const lookupKey = "BusinessObjects.PaymentDetail";
        function getLookup(): Q.Lookup<PaymentDetailRow>;
        namespace Fields {
            const PaymentDetailId: string;
            const TransactionId: string;
            const Date: string;
            const TotalAmount: string;
            const AmountPaid: string;
            const AmountLeft: string;
            const IsTotalAmountRow: string;
            const LocationId: string;
            const TransactionOrderId: string;
            const TransactionDate: string;
            const TransactionTotalAmount: string;
            const TransactionTotalAmountPaid: string;
            const TransactionTotalAmountLeft: string;
            const TransactionHasTransactionsDetails: string;
            const TransactionLocationId: string;
            const TransactionIsIntegerTrailingOrderIdWithPrefixPo: string;
            const TransactionStatus: string;
            const TransactionIsOpen: string;
            const TransactionIsInProgress: string;
            const TransactionIsFullyReceived: string;
            const TransactionIsFullyPaid: string;
            const TransactionIsAdvanced: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace PaymentDetailService {
        const baseUrl = "BusinessObjects/PaymentDetail";
        function Create(request: Serenity.SaveRequest<PaymentDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PaymentDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaymentDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaymentDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    enum Priority {
        Low = 1,
        Normal = 2,
        High = 3,
        Urgent = 4,
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductForm {
        Name: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
        LocationList: Serenity.LookupEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductLocationForm {
        ProductId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface ProductLocationRow {
        ProductLocationId?: number;
        ProductId?: number;
        LocationId?: number;
        ProductName?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
    }
    namespace ProductLocationRow {
        const idProperty = "ProductLocationId";
        const localTextPrefix = "BusinessObjects.ProductLocation";
        const lookupKey = "BusinessObjects.ProductLocation";
        function getLookup(): Q.Lookup<ProductLocationRow>;
        namespace Fields {
            const ProductLocationId: string;
            const ProductId: string;
            const LocationId: string;
            const ProductName: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const LocationIsVisible: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace ProductLocationService {
        const baseUrl = "BusinessObjects/ProductLocation";
        function Create(request: Serenity.SaveRequest<ProductLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface ProductRow {
        ProductId?: number;
        Name?: string;
        Price?: number;
        LocationList?: number[];
    }
    namespace ProductRow {
        const idProperty = "ProductId";
        const nameProperty = "Name";
        const localTextPrefix = "BusinessObjects.Product";
        const lookupKey = "BusinessObjects.Product";
        function getLookup(): Q.Lookup<ProductRow>;
        namespace Fields {
            const ProductId: string;
            const Name: string;
            const Price: string;
            const LocationList: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace ProductService {
        const baseUrl = "BusinessObjects/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    enum ReplyComment {
        Reply = 1,
        Comment = 2,
    }
}
declare namespace CustomerSupport.BusinessObjects {
    enum RequestType {
        Question = 1,
        Incident = 2,
        Problem = 3,
        Task = 4,
        Complain = 5,
        Request = 6,
        Transaction = 7,
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class SendSmsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SendSmsForm {
        LocationId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        Message: Serenity.TextAreaEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class SmsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SmsForm {
        Date: Serenity.DateEditor;
        Message: Serenity.StringEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class SmsLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SmsLocationForm {
        SmsId: Serenity.LookupEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface SmsLocationRow {
        SmsLocationId?: number;
        SmsId?: number;
        LocationId?: number;
        SmsDate?: string;
        SmsMessage?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
    }
    namespace SmsLocationRow {
        const idProperty = "SmsLocationId";
        const localTextPrefix = "BusinessObjects.SmsLocation";
        const lookupKey = "BusinessObjects.SmsLocation";
        function getLookup(): Q.Lookup<SmsLocationRow>;
        namespace Fields {
            const SmsLocationId: string;
            const SmsId: string;
            const LocationId: string;
            const SmsDate: string;
            const SmsMessage: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const LocationIsVisible: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace SmsLocationService {
        const baseUrl = "BusinessObjects/SmsLocation";
        function Create(request: Serenity.SaveRequest<SmsLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SmsLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SmsLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SmsLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface SmsRequest extends Serenity.ServiceRequest {
        LocationId?: number;
        PhoneNumbers?: string;
        Message?: string;
        TicketId?: number;
        TicketIds?: number[];
        CustomerId?: number;
        CustomerIds?: number[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface SmsResponse extends Serenity.ServiceResponse {
        LocationId?: number;
        PhoneNumbers?: string;
        Message?: string;
        TicketId?: number;
        TicketIds?: number[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface SmsRow {
        SmsId?: number;
        Date?: string;
        Message?: string;
    }
    namespace SmsRow {
        const idProperty = "SmsId";
        const nameProperty = "Message";
        const localTextPrefix = "BusinessObjects.Sms";
        const lookupKey = "BusinessObjects.Sms";
        function getLookup(): Q.Lookup<SmsRow>;
        namespace Fields {
            const SmsId: string;
            const Date: string;
            const Message: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace SmsService {
        const baseUrl = "BusinessObjects/Sms";
        function Create(request: Serenity.SaveRequest<SmsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SmsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SmsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SmsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function TicketsSms(request: SmsRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CustomersSms(request: SmsRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
            const TicketsSms: string;
            const CustomersSms: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    enum Status {
        Open = 1,
        Pending = 2,
        Resolved = 3,
        Closed = 4,
        WaitingOnCustomer = 5,
        WaitingOnThirdParty = 6,
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketActionLogForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TicketActionLogForm {
        Actions: Serenity.StringEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TicketForm {
        Date: Serenity.DateTimeEditor;
        TicketIdString: Serenity.StringEditor;
        TransactionId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        ProductId: Serenity.LookupEditor;
        Subject: Serenity.StringEditor;
        Type: Serenity.EnumEditor;
        Priority: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        LocationId: Serenity.LookupEditor;
        GroupId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
        CreatorId: Serenity.IntegerEditor;
        Me: Serenity.BooleanEditor;
        NextFollowUpDate: Serenity.DateTimeEditor;
        FollowUpAction: Serenity.TextAreaEditor;
        NoteList: NotesEditor;
        UserUsername: Serenity.StringEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TicketListRequest extends Serenity.ListRequest {
        Locations?: number[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketProcessForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TicketProcessForm {
        TicketId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        ReplyComment: Serenity.EnumEditor;
        UserId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        CreatorId: Serenity.IntegerEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TicketProcessRow {
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
    namespace TicketProcessRow {
        const idProperty = "TicketProcessId";
        const nameProperty = "Description";
        const localTextPrefix = "BusinessObjects.TicketProcess";
        const lookupKey = "BusinessObjects.TicketProcessRow";
        function getLookup(): Q.Lookup<TicketProcessRow>;
        namespace Fields {
            const TicketProcessId: string;
            const TicketId: string;
            const Date: string;
            const UserId: string;
            const Description: string;
            const CreatorId: string;
            const TicketLocationId: string;
            const TicketDate: string;
            const TicketCustomerId: string;
            const TicketType: string;
            const TicketPriority: string;
            const TicketStatus: string;
            const TicketGroupId: string;
            const TicketUserId: string;
            const TicketSubject: string;
            const TicketDescription: string;
            const TicketCreatorId: string;
            const TicketMe: string;
            const UserUsername: string;
            const UserDisplayName: string;
            const UserEmail: string;
            const UserSource: string;
            const UserPasswordHash: string;
            const UserPasswordSalt: string;
            const UserInsertDate: string;
            const UserInsertUserId: string;
            const UserUpdateDate: string;
            const UserUpdateUserId: string;
            const UserIsActive: string;
            const UserLastDirectoryUpdate: string;
            const UserUserImage: string;
            const UserAccountId: string;
            const UserLocationId: string;
            const ReplyComment: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace TicketProcessService {
        const baseUrl = "BusinessObjects/TicketProcess";
        function Create(request: Serenity.SaveRequest<TicketProcessRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TicketProcessRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TicketProcessRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TicketProcessRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TicketRequest extends Serenity.ServiceRequest {
        Customer?: Serenity.SaveRequest<CustomerRow>;
        Ticket?: Serenity.SaveRequest<TicketRow>;
        Note?: Serenity.SaveRequest<NoteRow>;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TicketResponse extends Serenity.ServiceResponse {
        Customer?: Serenity.RetrieveResponse<CustomerRow>;
        Ticket?: Serenity.RetrieveResponse<TicketRow>;
        Note?: Serenity.ListResponse<NoteRow>;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TicketRow {
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
    namespace TicketRow {
        const idProperty = "TicketId";
        const nameProperty = "Subject";
        const localTextPrefix = "BusinessObjects.Ticket";
        const lookupKey = "BusinessObjects.Ticket";
        function getLookup(): Q.Lookup<TicketRow>;
        namespace Fields {
            const TicketId: string;
            const TicketIdString: string;
            const LocationId: string;
            const ProductId: string;
            const TransactionId: string;
            const Date: string;
            const PhoneNumber: string;
            const CustomerId: string;
            const Type: string;
            const Priority: string;
            const Status: string;
            const GroupId: string;
            const UserId: string;
            const Subject: string;
            const CreatorId: string;
            const Me: string;
            const NextFollowUpDate: string;
            const FollowUpAction: string;
            const CallDirection: string;
            const ProductName: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const CustomerLocationId: string;
            const CustomerDate: string;
            const CustomerName: string;
            const CustomerSex: string;
            const CustomerDateOfBirth: string;
            const CustomerPhoneNumber: string;
            const CustomerEmail: string;
            const CustomerAddress: string;
            const GroupRoleName: string;
            const GroupAccountId: string;
            const UserUsername: string;
            const UserDisplayName: string;
            const UserEmail: string;
            const UserSource: string;
            const UserPasswordHash: string;
            const UserPasswordSalt: string;
            const UserInsertDate: string;
            const UserInsertUserId: string;
            const UserUpdateDate: string;
            const UserUpdateUserId: string;
            const UserIsActive: string;
            const UserLastDirectoryUpdate: string;
            const UserUserImage: string;
            const UserAccountId: string;
            const TicketProcess: string;
            const NoteList: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace TicketService {
        const baseUrl = "BusinessObjects/Ticket";
        function Create(request: Serenity.SaveRequest<TicketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function AssignToAgents(request: AssignToAgentsRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ActionsSettings(request: ActionsSettingsRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TicketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TicketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TicketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function NewTicket(request: TicketRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DetailTicket(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UpdateTicketMessage(request: TicketRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UpdateTicket(request: TicketRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function NewMessage(request: Serenity.SaveRequest<NoteRow>, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const GetNextNumber: string;
            const AssignToAgents: string;
            const ActionsSettings: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
            const NewTicket: string;
            const DetailTicket: string;
            const UpdateTicketMessage: string;
            const UpdateTicket: string;
            const NewMessage: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketSmsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TicketSmsForm {
        TicketId: Serenity.LookupEditor;
        SmsId: Serenity.IntegerEditor;
        TicketSmsMessage: Serenity.TextAreaEditor;
        Sent: Serenity.BooleanEditor;
        Delivered: Serenity.BooleanEditor;
        UnDelivered: Serenity.BooleanEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TicketSmsRow {
        TicketSmsId?: number;
        TicketId?: number;
        SmsId?: number;
        Sent?: boolean;
        Delivered?: boolean;
        UnDelivered?: boolean;
        TicketSmsDate?: string;
        TicketSmsMessage?: string;
        TicketLocationId?: number;
        TicketDate?: string;
        TicketCustomerId?: number;
        TicketCallDirection?: number;
        TicketProductId?: number;
        TicketType?: number;
        TicketPriority?: number;
        TicketStatus?: number;
        TicketGroupId?: number;
        TicketUserId?: number;
        TicketSubject?: string;
        TicketCreatorId?: number;
        TicketMe?: boolean;
        TicketPhoneNumber?: string;
        TicketNextFollowUpdate?: string;
        TicketFollowUpAction?: string;
    }
    namespace TicketSmsRow {
        const idProperty = "TicketSmsId";
        const localTextPrefix = "BusinessObjects.TicketSms";
        const lookupKey = "BusinessObjects.TicketSms";
        function getLookup(): Q.Lookup<TicketSmsRow>;
        namespace Fields {
            const TicketSmsId: string;
            const TicketId: string;
            const SmsId: string;
            const Sent: string;
            const Delivered: string;
            const UnDelivered: string;
            const TicketSmsDate: string;
            const TicketSmsMessage: string;
            const TicketLocationId: string;
            const TicketDate: string;
            const TicketCustomerId: string;
            const TicketCallDirection: string;
            const TicketProductId: string;
            const TicketType: string;
            const TicketPriority: string;
            const TicketStatus: string;
            const TicketGroupId: string;
            const TicketUserId: string;
            const TicketSubject: string;
            const TicketCreatorId: string;
            const TicketMe: string;
            const TicketPhoneNumber: string;
            const TicketNextFollowUpdate: string;
            const TicketFollowUpAction: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace TicketSmsService {
        const baseUrl = "BusinessObjects/TicketSms";
        function Create(request: Serenity.SaveRequest<TicketSmsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TicketSmsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TicketSmsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TicketSmsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketThreadForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TicketThreadForm {
        Date: Serenity.DateTimeEditor;
        CallDirection: Serenity.EnumEditor;
        PhoneNumber: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
        Subject: Serenity.StringEditor;
        TicketProcess: TicketProcessEditor;
        Type: Serenity.EnumEditor;
        Priority: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        LocationId: Serenity.LookupEditor;
        GroupId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
        CreatorId: Serenity.IntegerEditor;
        Me: Serenity.BooleanEditor;
        NextFollowUpDate: Serenity.DateTimeEditor;
        FollowUpAction: Serenity.TextAreaEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TransactionDetailForm {
        TransactionId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        UnitName: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
        IsReceived: Serenity.BooleanEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TransactionDetailRow {
        TransactionDetailId?: number;
        TransactionId?: number;
        Date?: string;
        ProductId?: number;
        UnitPrice?: number;
        UnitName?: string;
        Discount?: number;
        Quantity?: number;
        Amount?: number;
        LocationId?: number;
        IsReceived?: boolean;
        TransactionOrderId?: string;
        TransactionDate?: string;
        TransactionTotalAmount?: number;
        TransactionTotalAmountPaid?: number;
        TransactionTotalAmountLeft?: number;
        TransactionHasTransactionsDetails?: boolean;
        TransactionLocationId?: number;
        TransactionIsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        TransactionStatus?: string;
        TransactionIsOpen?: boolean;
        TransactionIsInProgress?: boolean;
        TransactionIsFullyReceived?: boolean;
        TransactionIsFullyPaid?: boolean;
        TransactionIsAdvanced?: boolean;
        ProductName?: string;
        ProductUnitName?: string;
        ProductPrice?: number;
    }
    namespace TransactionDetailRow {
        const idProperty = "TransactionDetailId";
        const localTextPrefix = "BusinessObjects.TransactionDetail";
        const lookupKey = "BusinessObjects.TransactionDetail";
        function getLookup(): Q.Lookup<TransactionDetailRow>;
        namespace Fields {
            const TransactionDetailId: string;
            const TransactionId: string;
            const Date: string;
            const ProductId: string;
            const UnitPrice: string;
            const UnitName: string;
            const Discount: string;
            const Quantity: string;
            const Amount: string;
            const LocationId: string;
            const IsReceived: string;
            const TransactionOrderId: string;
            const TransactionDate: string;
            const TransactionTotalAmount: string;
            const TransactionTotalAmountPaid: string;
            const TransactionTotalAmountLeft: string;
            const TransactionHasTransactionsDetails: string;
            const TransactionLocationId: string;
            const TransactionIsIntegerTrailingOrderIdWithPrefixPo: string;
            const TransactionStatus: string;
            const TransactionIsOpen: string;
            const TransactionIsInProgress: string;
            const TransactionIsFullyReceived: string;
            const TransactionIsFullyPaid: string;
            const TransactionIsAdvanced: string;
            const ProductName: string;
            const ProductUnitName: string;
            const ProductPrice: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TransactionDetailSaveRequest<MyRow> extends Serenity.ServiceRequest {
        Entities?: Serenity.SaveRequest<MyRow>[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace TransactionDetailService {
        const baseUrl = "BusinessObjects/TransactionDetail";
        function Create(request: Serenity.SaveRequest<TransactionDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TransactionDetailSaveRequest<TransactionDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransactionDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransactionDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TransactionForm {
        TransactionId: Serenity.IntegerEditor;
        OrderId: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        Subject: Serenity.StringEditor;
        TicketId: Serenity.IntegerEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalAmountPaid: Serenity.DecimalEditor;
        TotalAmountLeft: Serenity.DecimalEditor;
        HasTransactionsDetails: Serenity.BooleanEditor;
        LocationId: Serenity.LookupEditor;
        IsIntegerTrailingOrderIdWithPrefixPo: Serenity.BooleanEditor;
        Status: Serenity.StringEditor;
        IsOpen: Serenity.BooleanEditor;
        IsInProgress: Serenity.BooleanEditor;
        IsFullyReceived: Serenity.BooleanEditor;
        IsFullyPaid: Serenity.BooleanEditor;
        IsAdvanced: Serenity.BooleanEditor;
        Tax: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TransactionRequest extends Serenity.ServiceRequest {
        Customer?: Serenity.SaveRequest<CustomerRow>;
        TransactionDetails?: Serenity.SaveRequest<TransactionDetailRow>[];
        Transaction?: Serenity.SaveRequest<TransactionRow>;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TransactionResponse extends Serenity.ServiceResponse {
        Customer?: Serenity.RetrieveResponse<CustomerRow>;
        TransactionDetails?: Serenity.ListResponse<TransactionDetailRow>;
        Transaction?: Serenity.RetrieveResponse<TransactionRow>;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TransactionRow {
        TransactionId?: number;
        OrderId?: string;
        Date?: string;
        CustomerId?: number;
        TicketId?: number;
        Subject?: string;
        TotalAmount?: number;
        TotalAmountPaid?: number;
        TotalAmountLeft?: number;
        HasTransactionsDetails?: boolean;
        LocationId?: number;
        IsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        Status?: string;
        IsOpen?: boolean;
        IsInProgress?: boolean;
        IsFullyReceived?: boolean;
        IsFullyPaid?: boolean;
        IsAdvanced?: boolean;
        Tax?: number;
        Discount?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
        CustomerName?: string;
    }
    namespace TransactionRow {
        const idProperty = "TransactionId";
        const nameProperty = "OrderId";
        const localTextPrefix = "BusinessObjects.Transaction";
        const lookupKey = "BusinessObjects.Transaction";
        function getLookup(): Q.Lookup<TransactionRow>;
        namespace Fields {
            const TransactionId: string;
            const OrderId: string;
            const Date: string;
            const CustomerId: string;
            const TicketId: string;
            const Subject: string;
            const TotalAmount: string;
            const TotalAmountPaid: string;
            const TotalAmountLeft: string;
            const HasTransactionsDetails: string;
            const LocationId: string;
            const IsIntegerTrailingOrderIdWithPrefixPo: string;
            const Status: string;
            const IsOpen: string;
            const IsInProgress: string;
            const IsFullyReceived: string;
            const IsFullyPaid: string;
            const IsAdvanced: string;
            const Tax: string;
            const Discount: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const LocationIsVisible: string;
            const CustomerName: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace TransactionService {
        const baseUrl = "BusinessObjects/Transaction";
        function Create(request: Serenity.SaveRequest<TransactionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransactionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransactionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransactionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function NewTransaction(request: TransactionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DetailTransaction(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
            const GetNextNumber: string;
            const NewTransaction: string;
            const DetailTransaction: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionSmsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TransactionSmsForm {
        TransactionId: Serenity.LookupEditor;
        SmsId: Serenity.IntegerEditor;
        Sent: Serenity.BooleanEditor;
        Delivered: Serenity.BooleanEditor;
        UnDelivered: Serenity.BooleanEditor;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    interface TransactionSmsRow {
        TransactionSmsId?: number;
        TransactionId?: number;
        SmsId?: number;
        Sent?: boolean;
        Delivered?: boolean;
        UnDelivered?: boolean;
        TransactionSmsDate?: string;
        TransactionSmsMessage?: string;
    }
    namespace TransactionSmsRow {
        const idProperty = "TransactionSmsId";
        const localTextPrefix = "BusinessObjects.TransactionSms";
        const lookupKey = "BusinessObjects.TransactionSms";
        function getLookup(): Q.Lookup<TransactionSmsRow>;
        namespace Fields {
            const TransactionSmsId: string;
            const TransactionId: string;
            const SmsId: string;
            const Sent: string;
            const Delivered: string;
            const UnDelivered: string;
            const TransactionSmsDate: string;
            const TransactionSmsMessage: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
    namespace TransactionSmsService {
        const baseUrl = "BusinessObjects/TransactionSms";
        function Create(request: Serenity.SaveRequest<TransactionSmsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransactionSmsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransactionSmsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransactionSmsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace CustomerSupport.BusinessObjects {
}
declare namespace CustomerSupport.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace CustomerSupport.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace CustomerSupport.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace CustomerSupport.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace CustomerSupport.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace CustomerSupport.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace CustomerSupport {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace CustomerSupport {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace CustomerSupport {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace CustomerSupport {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace CustomerSupport.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace CustomerSupport.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace CustomerSupport.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace CustomerSupport.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace CustomerSupport.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        LoginAs: Serenity.StringEditor;
        Username: Serenity.StringEditor;
        Password: Serenity.StringEditor;
        RememberMe: Serenity.BooleanEditor;
    }
}
declare namespace CustomerSupport.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace CustomerSupport.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace CustomerSupport.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace CustomerSupport.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace CustomerSupport.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        CompanyName?: string;
        Address?: string;
        FullName?: string;
        Email?: string;
        Password?: string;
        ConfirmPassword?: string;
        Sex?: BusinessObjects.Gender;
        AgreeToTerms?: boolean;
    }
}
declare namespace CustomerSupport.Modules {
    interface LocationListRequest extends Serenity.ListRequest {
        LocationList?: number[];
    }
}
declare namespace CustomerSupport {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace CustomerSupport.Administration {
    class AccountDialog extends Serenity.EntityDialog<AccountRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AccountForm;
        constructor();
    }
}
declare namespace CustomerSupport.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace CustomerSupport.Administration {
    class AccountEditor extends Common.GridEditorBase<AccountRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace CustomerSupport.Administration {
    class AccountEditorDialog extends Common.GridEditorDialog<AccountRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AccountForm;
    }
}
declare namespace CustomerSupport.Administration {
    class AccountGrid extends Serenity.EntityGrid<AccountRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.Administration {
    class GetCodeDialog extends Serenity.EntityDialog<GetCodeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: GetCodeForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace CustomerSupport.Administration {
    class GetCodeEditor extends Common.GridEditorBase<GetCodeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GetCodeEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.Administration {
    class GetCodeEditorDialog extends Common.GridEditorDialog<GetCodeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: GetCodeForm;
    }
}
declare namespace CustomerSupport.Administration {
    class GetCodeGrid extends Serenity.EntityGrid<GetCodeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GetCodeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace CustomerSupport.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace CustomerSupport.Administration {
    class LocationDialog extends Serenity.EntityDialog<LocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LocationForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.Administration {
    class LocationEditor extends Common.GridEditorBase<LocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.Administration {
    class LocationEditorDialog extends Common.GridEditorDialog<LocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: LocationForm;
    }
}
declare namespace CustomerSupport.Administration {
    class LocationGrid extends Serenity.EntityGrid<LocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.Administration {
    class LocationListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CustomerSupport.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace CustomerSupport.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.Administration {
    class RoleLocationDialog extends Serenity.EntityDialog<RoleLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: RoleLocationForm;
    }
}
declare namespace CustomerSupport.Administration {
    class RoleLocationEditor extends Common.GridEditorBase<RoleLocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleLocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.Administration {
    class RoleLocationEditorDialog extends Common.GridEditorDialog<RoleLocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: RoleLocationForm;
    }
}
declare namespace CustomerSupport.Administration {
    class RoleLocationGrid extends Serenity.EntityGrid<RoleLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace CustomerSupport.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): RSVP.Promise<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace CustomerSupport.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace CustomerSupport.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace CustomerSupport.Administration {
    class UserLocationDialog extends Serenity.EntityDialog<UserLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: UserLocationForm;
    }
}
declare namespace CustomerSupport.Administration {
    class UserLocationEditor extends Common.GridEditorBase<UserLocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserLocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.Administration {
    class UserLocationEditorDialog extends Common.GridEditorDialog<UserLocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: UserLocationForm;
    }
}
declare namespace CustomerSupport.Administration {
    class UserLocationGrid extends Serenity.EntityGrid<UserLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        private rolePermissions;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        get_value(): UserPermissionRow[];
        set_value(value: UserPermissionRow[]): void;
        get_rolePermissions(): string[];
        set_rolePermissions(value: string[]): void;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace CustomerSupport.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace CustomerSupport.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace CustomerSupport.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ActionLogDialog extends Serenity.EntityDialog<ActionLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ActionLogForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ActionLogEditor extends Common.GridEditorBase<ActionLogRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ActionLogEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ActionLogEditorDialog extends Common.GridEditorDialog<ActionLogRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ActionLogForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ActionLogGrid extends Serenity.EntityGrid<ActionLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ActionLogDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CallDialog extends Serenity.EntityDialog<CallRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CallForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CallEditor extends Common.GridEditorBase<CallRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CallEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CallEditorDialog extends Common.GridEditorDialog<CallRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CallForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CallGrid extends Serenity.EntityGrid<CallRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CallDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CallProcessDialog extends Serenity.EntityDialog<CallProcessRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CallProcessForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CallProcessEditor extends Common.GridEditorBase<CallProcessRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CallProcessEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CallProcessEditorDialog extends Common.GridEditorDialog<CallProcessRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CallProcessForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CallProcessGrid extends Serenity.EntityGrid<CallProcessRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CallProcessDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        private custometTicketsGrid;
        private customerSms;
        private customerTrxnGrid;
        constructor();
        loadEntity(entity: CustomerRow): void;
        protected onSaveSuccess(): void;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerEditor extends Common.GridEditorBase<CustomerRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerEditorDialog extends Common.GridEditorDialog<CustomerRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CustomerForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerFormLoader {
        protected customerDtlFrm: kendo.data.ObservableObject;
        static custFormStatic: kendo.data.ObservableObject;
        static CustomerFormLoaderRef: CustomerFormLoader;
        constructor();
        Load(customerId: number): void;
        private HasAccount();
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerFormLoaderAutoGen {
        protected observ: kendo.data.ObservableObject;
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        protected CustomerId: number;
        private bondClass;
        static MessClass: CustomerFormLoaderAutoGen;
        constructor(bondClass: BondClass);
        GetObservable(): kendo.data.ObservableObject;
        Read(criteria: string, equalityFilter: string, includeColumns: string[]): void;
        DetailLoad(entityId: number): void;
        Create(): void;
        GetPrimaryKeyId(): number;
        GetObject(): CustomerRow;
        private KendoDataSource();
        GetKendoDataSource(): kendo.data.DataSource;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerFormLoaderTemplate {
        constructor();
        GetCustomerLookUp(): {}[];
        GetCustomer(customerId: number): CustomerRow;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getSms(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        };
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerListLoader {
        protected customerListDtSrc: kendo.data.DataSource;
        constructor();
        Load(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketDialog extends Serenity.EntityDialog<TicketRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TicketForm;
        private loadedState;
        constructor();
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        getSaveState(): string;
        loadResponse(data: any): void;
        private _transactionId;
        transactionID: number;
        protected afterLoadEntity(): void;
        private getNextNumber();
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerTicketsDialog extends TicketDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketGrid extends Serenity.EntityGrid<TicketRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketTransactionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getAssignToAgentsBtn(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        };
        protected getActionsSettingsBtn(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        };
        protected getSms(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        };
        protected getSendAsMailBtn(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        };
        protected getForwardAsMailBtn(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        };
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerTicketsGrid extends TicketGrid {
        protected getColumnsKey(): string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        customerID: number;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerTransactionGrid extends Serenity.EntityGrid<TransactionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransactionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _customerId;
        customerID: number;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    /**
     * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
     */
    class ProfileDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        constructor();
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerSmsDialog extends Serenity.EntityDialog<CustomerSmsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: CustomerSmsForm;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerSmsEditor extends Common.GridEditorBase<CustomerSmsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerSmsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerSmsEditorDialog extends Common.GridEditorDialog<CustomerSmsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: CustomerSmsForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerSmsGrid extends Serenity.EntityGrid<CustomerSmsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerSmsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        customerID: number;
        private _phoneNumber;
        phoneNumber: string;
        protected getButtons(): Serenity.ToolButton[];
        protected getSms(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        };
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerSMSListLoader {
        protected ticketList: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected customerSmsListDtSrc: kendo.data.DataSource;
        static CustomerSMSListLoaderRef: CustomerSMSListLoader;
        protected menuObservable: kendo.data.ObservableObject;
        constructor();
        private GridListDataSource();
        Load(): void;
        LoadInCustomer(customerId: number): void;
        private LoadGrid();
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class BondClass {
        private customerMessenger;
        private locationMessenger;
        private customerHandler;
        private locationHandler;
        constructor();
        SetTeamPlayers(customerMessenger: CustomerMessenger, locationMessenger: LocationMessenger, customerHandler: CustomerHandler, locationHandler: LocationHandler): void;
        BeforeRead(className: string, requestObject: Object): boolean;
        AfterRead(className: string, responseObj: Object): void;
        BeforeSave(className: string, myClassRef: Object): boolean;
        AfterSave(className: string, entityId: number, myClassRef: Object): void;
        BeforeDetailLoad(className: string, entityId: number): boolean;
        AfterDetailLoad(className: string, responseObj: Object): void;
        OnError(className: string, requestType: string, errorMessage: Object): void;
        BeforeUpdate(className: string, classObj: Object): boolean;
        AfterUpdate(className: string, responseObj: Object): void;
        OnFieldValueChanged(id: string, classRef: any, responseObj: Object): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class GlobalScripts {
        static Ticket_Read: string;
        static Ticket_Insert: string;
        static Ticket_Update: string;
        static Ticket_Delete: string;
        static Transaction_Read: string;
        static Transaction_Insert: string;
        static Transaction_Update: string;
        static Transaction_Delete: string;
        static Sms_Read: string;
        static Sms_Insert: string;
        static Sms_Update: string;
        static Customer_Read: string;
        static Customer_Insert: string;
        static Customer_Update: string;
        static Customer_Delete: string;
        static TicketId: number;
        static TransactionId: number;
        static CustomerId: number;
        /**
         *  GetType
         */
        static GetRequestType(): {
            text: string;
            value: number;
        }[];
        static GetPriority(): {
            text: string;
            value: number;
        }[];
        static GetStatus(): {
            text: string;
            value: number;
        }[];
        static GetGender(): {
            text: string;
            value: number;
        }[];
        static GetVal(arr: any, val: number): string;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryDialog extends Serenity.EntityDialog<KbCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: KbCategoryForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryEditor extends Common.GridEditorBase<KbCategoryRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KbCategoryEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryEditorDialog extends Common.GridEditorDialog<KbCategoryRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: KbCategoryForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryGrid extends Serenity.EntityGrid<KbCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KbCategoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryThreadDialog extends Serenity.EntityDialog<KbCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: KbCategoryForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryLocationsDialog extends Serenity.EntityDialog<KbCategoryLocationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: KbCategoryLocationsForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryLocationsEditor extends Common.GridEditorBase<KbCategoryLocationsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KbCategoryLocationsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryLocationsEditorDialog extends Common.GridEditorDialog<KbCategoryLocationsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: KbCategoryLocationsForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KbCategoryLocationsGrid extends Serenity.EntityGrid<KbCategoryLocationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KbCategoryLocationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KnowledgeBaseDialog extends Serenity.EntityDialog<KnowledgeBaseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: KnowledgeBaseForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KnowledgeBaseEditor extends Common.GridEditorBase<KnowledgeBaseRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KnowledgeBaseEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected onclick(ev: MouseEvent): void;
        protected getAddButtonCaption(): string;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KnowledgeBaseEditorDialog extends Common.GridEditorDialog<KnowledgeBaseRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: KnowledgeBaseForm;
        protected getPropertyItems(): Serenity.PropertyItem[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KnowledgeBaseGrid extends Serenity.EntityGrid<KnowledgeBaseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KnowledgeBaseDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KnowledgeBaseLocationsDialog extends Serenity.EntityDialog<KnowledgeBaseLocationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: KnowledgeBaseLocationsForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KnowledgeBaseLocationsEditor extends Common.GridEditorBase<KnowledgeBaseLocationsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KnowledgeBaseLocationsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KnowledgeBaseLocationsEditorDialog extends Common.GridEditorDialog<KnowledgeBaseLocationsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: KnowledgeBaseLocationsForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class KnowledgeBaseLocationsGrid extends Serenity.EntityGrid<KnowledgeBaseLocationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KnowledgeBaseLocationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [CallDirectionEditor]
     */
    class CallDirectionEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
        protected emptyItemText(): string;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        private callDirectionEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        callDirection: string;
        okClick: () => void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class PaymentDetailDialog extends Serenity.EntityDialog<PaymentDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: PaymentDetailForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class PaymentDetailEditor extends Common.GridEditorBase<PaymentDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaymentDetailEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class PaymentDetailEditorDialog extends Common.GridEditorDialog<PaymentDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PaymentDetailForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class PaymentDetailGrid extends Serenity.EntityGrid<PaymentDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaymentDetailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _transactionId;
        transactionID: number;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductEditor extends Common.GridEditorBase<ProductRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductEditorDialog extends Common.GridEditorDialog<ProductRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ProductForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductFormLoader {
        protected productForm: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected productMessageSection: kendo.data.ObservableObject;
        static productFormStatic: kendo.data.ObservableObject;
        static MessageSectnObsvbl: kendo.data.ObservableObject;
        productId: number;
        static TheProductFormLoader: ProductFormLoader;
        constructor();
        Load(productId: number): void;
        private LoadLocations();
        static Submit(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductListLoader {
        protected productList: kendo.data.ObservableObject;
        protected productListDtSrc: kendo.data.DataSource;
        constructor();
        Load(): void;
        private ProductDataSource();
        private ProductGrid();
        static OnProductGridDataBound(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductLocationDialog extends Serenity.EntityDialog<ProductLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ProductLocationForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductLocationEditor extends Common.GridEditorBase<ProductLocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductLocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductLocationEditorDialog extends Common.GridEditorDialog<ProductLocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ProductLocationForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductLocationGrid extends Serenity.EntityGrid<ProductLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class SendSmsDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: SendSmsForm;
        private messageId;
        private locationId;
        private messageRef;
        constructor();
        readonly locationID: string;
        readonly messageID: string;
        readonly message: any;
        readonly phoneNumbers: string;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class SmsDialog extends Serenity.EntityDialog<SmsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SmsForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class SmsEditor extends Common.GridEditorBase<SmsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SmsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class SmsEditorDialog extends Common.GridEditorDialog<SmsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: SmsForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class SmsGrid extends Serenity.EntityGrid<SmsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SmsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class SmsLocationDialog extends Serenity.EntityDialog<SmsLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: SmsLocationForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class SmsLocationEditor extends Common.GridEditorBase<SmsLocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SmsLocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class SmsLocationEditorDialog extends Common.GridEditorDialog<SmsLocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: SmsLocationForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class SmsLocationGrid extends Serenity.EntityGrid<SmsLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SmsLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ActionsSettingsDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: ActionsSettingsForm;
        private groupId;
        private locationId;
        private userId;
        private typeId;
        private statusId;
        private priorityId;
        constructor();
        readonly typeID: string;
        readonly statusID: string;
        readonly priorityID: string;
        readonly locationID: string;
        readonly groupID: string;
        readonly agentID: string;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class AssignToAgentsDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: AssignToAgentsForm;
        private groupId;
        private locationId;
        private userId;
        constructor();
        readonly locationID: string;
        readonly groupID: string;
        readonly agentID: string;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ForwardAsMailDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: ForwardAsMailForm;
        constructor();
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class NewTicketLoader {
        protected newTicketForm: kendo.data.ObservableObject;
        constructor();
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketActionLogDialog extends Serenity.EntityDialog<TicketRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TicketForm;
        private loadedState;
        constructor();
        protected updateTitle(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketDetailLoader {
        protected ticketList: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected ticketListDtSrc: kendo.data.DataSource;
        static TicketListLoaderRef: TicketListLoader;
        protected menuObservable: kendo.data.ObservableObject;
        constructor();
        Load(): void;
        private LoadMenu();
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketEditor extends Common.GridEditorBase<TicketRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketEditorDialog extends Common.GridEditorDialog<TicketRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: TicketForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketFormLoader {
        protected ticketForm: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected ticketMessageSection: kendo.data.ObservableObject;
        static ticketFormStatic: kendo.data.ObservableObject;
        static MessageSectnObsvbl: kendo.data.ObservableObject;
        ticketId: number;
        static TheTicketFormLoader: TicketFormLoader;
        constructor();
        private LoadMenu();
        Load(ticketId: number): void;
        InitCommunicationMedium(): void;
        static Submit(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketListLoader {
        protected ticketList: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected ticketListDtSrc: kendo.data.DataSource;
        static TicketListLoaderRef: TicketListLoader;
        protected menuObservable: kendo.data.ObservableObject;
        constructor();
        private GridListDataSource();
        private FilterPaneObervable();
        private MyNewObserv();
        private MenuObservable();
        Load(): void;
        LoadInCustomer(customerId: number): void;
        private LoadMenu();
        private LoadGrid();
        protected ticketMessageSection: kendo.data.ObservableObject;
        FormLoader(): void;
        HideAddButton(): void;
        HideFilterPane(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketLoader1 {
        protected dtSrc: typeof kendo.data.DataSource;
        constructor();
        Load(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketLoader3 {
        protected dtSrc: typeof kendo.data.DataSource;
        constructor();
        Load(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketThreadDialog extends Serenity.EntityDialog<TicketRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TicketThreadForm;
        protected updateInterface(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketTransactionDialog extends TicketDialog {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private ticketTrxnGrid;
        private ticketSms;
        constructor();
        protected afterLoadEntity(): void;
        loadEntity(entity: TicketRow): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketTransactionGrid extends Serenity.EntityGrid<TransactionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransactionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _ticketId;
        ticketID: number;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketProcessDialog extends Serenity.EntityDialog<TicketProcessRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TicketProcessForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketProcessEditor extends Common.GridEditorBase<TicketProcessRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketProcessEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        private _isReply;
        protected addButtonClick(): void;
        protected onclick(ev: MouseEvent): void;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected getAddButtonCaption(): string;
        protected getButtons(): Serenity.ToolButton[];
        protected validateEntity(row: TicketProcessRow, id: number): boolean;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketProcessEditorDialog extends Common.GridEditorDialog<TicketProcessRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: TicketProcessForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketProcessGrid extends Serenity.EntityGrid<TicketProcessRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketProcessDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketSmsDialog extends Serenity.EntityDialog<TicketSmsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: TicketSmsForm;
        protected updateInterface(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketSmsEditor extends Common.GridEditorBase<TicketSmsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketSmsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketSmsEditorDialog extends Common.GridEditorDialog<TicketSmsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: TicketSmsForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketSmsGrid extends Serenity.EntityGrid<TicketSmsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TicketSmsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _ticketID;
        ticketID: number;
        protected getButtons(): Serenity.ToolButton[];
        protected getSms(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        };
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionDialog extends Serenity.EntityDialog<TransactionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TransactionForm;
        private transDtlGrid;
        private pymntDtlGrid;
        constructor();
        protected afterLoadEntity(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        private initChildren();
        protected getTicket(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        };
        private getNextNumber();
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionEditor extends Common.GridEditorBase<TransactionRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransactionEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionEditorDialog extends Common.GridEditorDialog<TransactionRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: TransactionForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionFormLoader {
        protected calcObservable: kendo.data.ObservableObject;
        protected customerInfoObservable: kendo.data.ObservableObject;
        protected TransactionFormLoadersDtSrc: kendo.data.DataSource;
        private gridContextMenu;
        private static tranx_dtl_grd;
        static CalcObservable_Static: kendo.data.ObservableObject;
        static CustomerInfoObservable_Static: kendo.data.ObservableObject;
        constructor();
        static CalculatorObservable(): kendo.data.ObservableObject;
        static CustomerInfoObservable(): kendo.data.ObservableObject;
        static DltGrdDataSource(): kendo.data.DataSource;
        Load(): void;
        private TranxDtlGrid();
        private static DeleteDtlGridRcrd(rowIndex);
        private GridContextMenuMthd();
        static ProductDropDownEditor(container: any, options: any): void;
        static Submit(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionGrid extends Serenity.EntityGrid<TransactionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransactionTicketDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionListLoader {
        protected transactionDtlFrm: kendo.data.ObservableObject;
        protected fitlerPane: kendo.data.ObservableObject;
        protected transactionListDtSrc: kendo.data.DataSource;
        constructor();
        Load(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionTicketDialog extends TransactionDialog {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private trxnTicketGrid;
        private trxnSms;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionTicketGrid extends TicketGrid {
        protected getDialogType(): typeof TicketDialog;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _transactionId;
        transactionID: number;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionDetailDialog extends Serenity.EntityDialog<TransactionDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: TransactionDetailForm;
        constructor();
        private calculateAmount();
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionDetailEditor extends Common.GridEditorBase<TransactionDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransactionDetailEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionDetailEditorDialog extends Common.GridEditorDialog<TransactionDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: TransactionDetailForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionDetailGrid extends Serenity.EntityGrid<TransactionDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransactionDetailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _transactionId;
        transactionID: number;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionDetailList {
        protected transDtlDtSrc: any;
        constructor();
        Load(): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionSmsDialog extends Serenity.EntityDialog<TransactionSmsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: TransactionSmsForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionSmsEditor extends Common.GridEditorBase<TransactionSmsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransactionSmsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionSmsEditorDialog extends Common.GridEditorDialog<TransactionSmsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: TransactionSmsForm;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionSmsGrid extends Serenity.EntityGrid<TransactionSmsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransactionSmsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _transactionID;
        transactionID: number;
        protected getButtons(): Serenity.ToolButton[];
        protected getSms(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        };
    }
}
declare namespace CustomerSupport.ScriptInitialization {
}
declare namespace CustomerSupport.BusinessObjects {
    class DashboardDialog extends Serenity.EntityDialog<any, any> {
        protected getFormKey(): any;
        private form;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace CustomerSupport {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace CustomerSupport.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace CustomerSupport.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace CustomerSupport.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace CustomerSupport.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace CustomerSupport.LanguageList {
    function getValue(): string[][];
}
declare namespace CustomerSupport.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace CustomerSupport.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace CustomerSupport.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace CustomerSupport.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace CustomerSupport.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyItems;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace CustomerSupport.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace CustomerSupport.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace CustomerSupport.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerMessengerOld {
        protected observ: kendo.data.ObservableObject;
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        protected CustomerId: number;
        private bondClass;
        static MessengerClass: CustomerMessengerOld;
        constructor(bondClass: BondClass);
        GetObservable(): kendo.data.ObservableObject;
        Read(criteria: string, equalityFilter: string, includeColumns: string[]): void;
        DetailLoad(entityId: number): void;
        Create(): void;
        GetPrimaryKeyId(): number;
        GetObject(): CustomerRow;
        private KendoDataSource();
        GetKendoDataSource(): kendo.data.DataSource;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerFilterMessenger {
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        private bondClass;
        private static MessengerClass;
        constructor(bondClass: BondClass);
        protected GetFilterObservable(): kendo.data.ObservableObject;
        GetFilterValues(): string[];
        Read(criteria: string, equalityFilter: string, includeColumns: string[]): void;
        private KendoDataSourceRead_1(criteria);
        KendoDataSourceRead(): void;
        private KendoDataSource();
        GetKendoDataSource(): kendo.data.DataSource;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerHandler {
        private refMessenger;
        private responseObj;
        private LocationIdInplaceBtnVar;
        constructor();
        OnFieldValueChanged(id: string, classRef: any, responseObj: Object): void;
        private customerMessenger;
        private locationMessenger;
        SetTeamPlayers(customerMessenger: CustomerMessenger, locationMessenger: LocationMessenger): void;
        AfterUpdate(id: string, responseObj: any): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class LocationMessenger {
        protected observ: kendo.data.ObservableObject;
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        protected LocationId: number;
        private bondClass;
        private static MessengerClass;
        constructor(bondClass: BondClass);
        GetObservable(): kendo.data.ObservableObject;
        Read(criteria: string, equalityFilter: string, includeColumns: string[]): void;
        DetailLoad(entityId: number): void;
        Create(): void;
        Update(): void;
        GetPrimaryKeyId(): number;
        GetObject(): Administration.LocationRow;
        private KendoDataSource();
        GetKendoDataSource(): kendo.data.DataSource;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class LocationHandler {
        private locationMessenger;
        private AccountIdInplaceBtnVar;
        constructor();
        BeforeSave(className: string, myClassRef: Object): boolean;
        AfterSave(className: string, entityId: number, myClassRef: Object): void;
        OnFieldValueChanged(id: string, classRef: any, responseObj: Object): void;
        BeforeUpdate(): void;
        AfterUpdate(id: string, resonseObj: Object): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerMessenger {
        protected observ: kendo.data.ObservableObject;
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        protected CustomerId: number;
        private bondClass;
        static MessengerClass: CustomerMessenger;
        constructor(bondClass: BondClass);
        GetObservable(): kendo.data.ObservableObject;
        Read(criteria: string, equalityFilter: string, includeColumns: string[]): void;
        DetailLoad(entityId: number): void;
        Create(): void;
        Update(): void;
        GetPrimaryKeyId(): number;
        GetObject(): CustomerRow;
        private KendoDataSource();
        GetKendoDataSource(): kendo.data.DataSource;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerHandlerTest {
        private LocationIdFldAddBtn;
        private customerMessenger;
        constructor();
        OnFieldValueChanged(id: string, classRef: any, responseObj: Object): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class CustomerMessengerMethodTest {
        constructor();
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class FEUtilities {
        constructor();
        static ToggleInplaceButtonIcon(inplaceBtnRef: any, lookupValue: any): void;
        static OnInplaceButtonClicked(inplaceBtnRef: kendo.ui.Button, kendoDialogjQuery: JQuery, masterMessengerObj: any, lookUpMessengerObj: any, editorFieldId: string): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductMessenger {
        protected observ: kendo.data.ObservableObject;
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        protected ProductId: number;
        private bondClass;
        static MessengerClass: ProductMessenger;
        constructor(bondClass: any);
        GetObservable(): kendo.data.ObservableObject;
        Read(criteria: string, equalityFilter: string, includeColumns: string[]): void;
        DetailLoad(entityId: number): void;
        Create(): void;
        Update(): void;
        GetPrimaryKeyId(): number;
        GetObject(): ProductRow;
        private KendoDataSource();
        GetKendoDataSource(): kendo.data.DataSource;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductBond {
        private customerMessenger;
        private locationMessenger;
        private productHandler;
        private locationHandler;
        constructor();
        SetTeamPlayers(customerMessenger: ProductMessenger, locationMessenger: LocationMessenger, productHandler: ProductHandler, locationHandler: LocationHandler): void;
        BeforeRead(className: string, requestObject: Object): boolean;
        AfterRead(className: string, responseObj: Object): void;
        BeforeSave(className: string, myClassRef: Object): boolean;
        AfterSave(className: string, entityId: number, myClassRef: Object): void;
        BeforeDetailLoad(className: string, entityId: number): boolean;
        AfterDetailLoad(className: string, responseObj: Object): void;
        OnError(className: string, requestType: string, errorMessage: Object): void;
        BeforeUpdate(className: string, classObj: Object): boolean;
        AfterUpdate(className: string, responseObj: Object): void;
        OnFieldValueChanged(id: string, classRef: any, responseObj: Object): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductFilterMessenger {
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        private bondClass;
        static MessengerClass: ProductFilterMessenger;
        constructor(bondClass: BondClass);
        protected GetFilterObservable(): kendo.data.ObservableObject;
        GetFilterValues(): string[];
        Read(criteria: string, equalityFilter: string, includeColumns: string[]): void;
        private KendoDataSourceRead_1(criteria);
        KendoDataSourceRead(): void;
        private KendoDataSource();
        GetKendoDataSource(): kendo.data.DataSource;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class ProductHandler {
        private refMessenger;
        private responseObj;
        private LocationListInplaceBtnVar;
        constructor();
        BeforeSave(className: string, myClassRef: Object): boolean;
        AfterSave(className: string, entityId: number, myClassRef: Object): void;
        private productMessenger;
        private locationMessenger;
        SetTeamPlayers(productMessenger: ProductMessenger, locationMessenger: LocationMessenger): void;
        OnFieldValueChanged(id: string, classRef: any, responseObj: Object): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketMessenger {
        protected observ: kendo.data.ObservableObject;
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        protected: number;
        private bondClass;
        static MessengerClass: TicketMessenger;
        constructor(bondClass: BondClass);
        GetObservable(): kendo.data.ObservableObject;
        Read(criteria: string, equalityFilter: string, includeColumns: string[]): void;
        DetailLoad(entityId: number): void;
        Create(): void;
        Update(): void;
        GetPrimaryKeyId(): number;
        GetObject(): TicketRow;
        private KendoDataSource();
        GetKendoDataSource(): kendo.data.DataSource;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketFilterMessenger {
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        private bondClass;
        static MessengerClass: TicketFilterMessenger;
        constructor(bondClass: BondClass);
        protected GetFilterObservable(): kendo.data.ObservableObject;
        GetFilterValues(): string[];
        Read(criteria: string, equalityFilter: string, includeColumns: string[]): void;
        private KendoDataSourceRead_1(criteria);
        KendoDataSourceRead(): void;
        private KendoDataSource();
        GetKendoDataSource(): kendo.data.DataSource;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TicketHandler {
        private refMessenger;
        private responseObj;
        private CustomerIdInplaceBtnVar;
        private GroupIdInplaceBtnVar;
        private LocationIdInplaceBtnVar;
        private ProductIdInplaceBtnVar;
        private TransactionIdInplaceBtnVar;
        private UserIdInplaceBtnVar;
        constructor();
        BeforeSave(className: string, myClassRef: Object): boolean;
        AfterSave(className: string, entityId: number, myClassRef: Object): void;
        private ticketMessenger;
        SetTeamPlayers(ticketMessenger: TicketMessenger): void;
        OnFieldValueChanged(id: string, classRef: any, responseObj: Object): void;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionMessenger {
        protected observ: kendo.data.ObservableObject;
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        protected TransactionId: number;
        private bondClass;
        static MessengerClass: TransactionMessenger;
        constructor(bondClass: any);
        GetObservable(): kendo.data.ObservableObject;
        Read(criteria: string, equalityFilter: string, includeColumns: string[]): void;
        DetailLoad(entityId: number): void;
        Create(): void;
        Update(): void;
        GetPrimaryKeyId(): number;
        GetObject(): TransactionRow;
        private KendoDataSource();
        GetKendoDataSource(): kendo.data.DataSource;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionFilterMessenger {
        protected filterObserv: kendo.data.ObservableObject;
        protected kendoDataSrc: kendo.data.DataSource;
        private bondClass;
        static MessengerClass: TransactionFilterMessenger;
        constructor(bondClass: BondClass);
        protected GetFilterObservable(): kendo.data.ObservableObject;
        GetFilterValues(): string[];
        Read(criteria: string, equalityFilter: string, includeColumns: string[]): void;
        private KendoDataSourceRead_1(criteria);
        KendoDataSourceRead(): void;
        private KendoDataSource();
        GetKendoDataSource(): kendo.data.DataSource;
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionHandler {
        private refMessenger;
        private responseObj;
        private CustomerIdInplaceBtnVar;
        private LocationIdInplaceBtnVar;
        constructor();
        BeforeSave(className: string, myClassRef: Object): boolean;
        AfterSave(className: string, entityId: number, myClassRef: Object): void;
        private transactionMessenger;
        SetTeamPlayers(transactionMessenger: TransactionMessenger): void;
        OnFieldValueChanged(id: string, classRef: any, responseObj: Object): void;
    }
}
declare namespace CustomerSupport.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CustomerSupport.BusinessObjects {
    class TransactionDetailLoader {
        protected calcObservable: kendo.data.ObservableObject;
        protected customerInfoObservable: kendo.data.ObservableObject;
        protected transactionDetailsDtSrc: kendo.data.DataSource;
        static CalcObservable_Static: kendo.data.ObservableObject;
        static CustomerInfoObservable_Static: kendo.data.ObservableObject;
        constructor();
        static CalculatorObservable(): kendo.data.ObservableObject;
        static CustomerInfoObservable(): kendo.data.ObservableObject;
        static DltGrdDataSource(): kendo.data.DataSource;
        Load(): void;
        static Submit(): void;
    }
}
