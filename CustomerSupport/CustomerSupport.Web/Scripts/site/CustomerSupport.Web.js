var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var AccountForm = (function (_super) {
            __extends(AccountForm, _super);
            function AccountForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AccountForm.formKey = 'Administration.Account';
            return AccountForm;
        }(Serenity.PrefixedContext));
        Administration.AccountForm = AccountForm;
        [['Date', function () { return Serenity.DateEditor; }], ['CompanyName', function () { return Serenity.StringEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.StringEditor; }], ['WebsiteAddress', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(AccountForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var AccountRow;
        (function (AccountRow) {
            AccountRow.idProperty = 'AccountId';
            AccountRow.nameProperty = 'CompanyName';
            AccountRow.localTextPrefix = 'Administration.Account';
            AccountRow.lookupKey = 'Administration.Account';
            function getLookup() {
                return Q.getLookup('Administration.Account');
            }
            AccountRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AccountRow.Fields || (AccountRow.Fields = {}));
            ['AccountId', 'Date', 'CompanyName', 'Address', 'Email', 'PhoneNumber', 'WebsiteAddress', 'AgreeToTerms'].forEach(function (x) { return Fields[x] = x; });
        })(AccountRow = Administration.AccountRow || (Administration.AccountRow = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var AccountService;
        (function (AccountService) {
            AccountService.baseUrl = 'Administration/Account';
            var Methods;
            (function (Methods) {
            })(Methods = AccountService.Methods || (AccountService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AccountService[x] = function (r, s, o) { return Q.serviceRequest(AccountService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AccountService.baseUrl + '/' + x;
            });
        })(AccountService = Administration.AccountService || (Administration.AccountService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var GetCodeForm = (function (_super) {
            __extends(GetCodeForm, _super);
            function GetCodeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GetCodeForm.formKey = 'Administration.GetCode';
            return GetCodeForm;
        }(Serenity.PrefixedContext));
        Administration.GetCodeForm = GetCodeForm;
        [['AccountId', function () { return Serenity.LookupEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['LocationLocationName', function () { return Serenity.StringEditor; }], ['LinkCode', function () { return Serenity.TextAreaEditor; }], ['FormCode', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(GetCodeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var GetCodeRow;
        (function (GetCodeRow) {
            GetCodeRow.idProperty = 'GetCodeId';
            GetCodeRow.nameProperty = 'LocationLocationName';
            GetCodeRow.localTextPrefix = 'Administration.GetCode';
            GetCodeRow.lookupKey = 'Administration.GetCode';
            function getLookup() {
                return Q.getLookup('Administration.GetCode');
            }
            GetCodeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = GetCodeRow.Fields || (GetCodeRow.Fields = {}));
            ['GetCodeId', 'AccountId', 'LocationId', 'LinkCode', 'FormCode', 'AccountDate', 'AccountCompanyName', 'AccountLogo', 'AccountAddress', 'AccountEmail', 'AccountPhoneNumber', 'AccountWebsiteAddress', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId', 'LocationIsVisible'].forEach(function (x) { return Fields[x] = x; });
        })(GetCodeRow = Administration.GetCodeRow || (Administration.GetCodeRow = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var GetCodeService;
        (function (GetCodeService) {
            GetCodeService.baseUrl = 'Administration/GetCode';
            var Methods;
            (function (Methods) {
            })(Methods = GetCodeService.Methods || (GetCodeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                GetCodeService[x] = function (r, s, o) { return Q.serviceRequest(GetCodeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = GetCodeService.baseUrl + '/' + x;
            });
        })(GetCodeService = Administration.GetCodeService || (Administration.GetCodeService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LocationForm = (function (_super) {
            __extends(LocationForm, _super);
            function LocationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LocationForm.formKey = 'Administration.Location';
            return LocationForm;
        }(Serenity.PrefixedContext));
        Administration.LocationForm = LocationForm;
        [['LocationId', function () { return Serenity.IntegerEditor; }], ['AccountId', function () { return Serenity.LookupEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['LocationName', function () { return Serenity.StringEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.StringEditor; }], ['Website', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.TextAreaEditor; }], ['UserId', function () { return Serenity.IntegerEditor; }], ['IsVisible', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(LocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LocationRow;
        (function (LocationRow) {
            LocationRow.idProperty = 'LocationId';
            LocationRow.nameProperty = 'LocationName';
            LocationRow.localTextPrefix = 'Administration.Location';
            LocationRow.lookupKey = 'Administration.Location';
            function getLookup() {
                return Q.getLookup('Administration.Location');
            }
            LocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LocationRow.Fields || (LocationRow.Fields = {}));
            ['LocationId', 'AccountId', 'Date', 'PhoneNumber', 'Email', 'Website', 'LocationName', 'Address', 'UserId', 'AccountDate', 'AccountCompanyName', 'AccountAddress', 'AccountEmail', 'AccountPhoneNumber', 'AccountWebsiteAddress', 'IsVisible'].forEach(function (x) { return Fields[x] = x; });
        })(LocationRow = Administration.LocationRow || (Administration.LocationRow = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LocationService;
        (function (LocationService) {
            LocationService.baseUrl = 'Administration/Location';
            var Methods;
            (function (Methods) {
            })(Methods = LocationService.Methods || (LocationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LocationService[x] = function (r, s, o) { return Q.serviceRequest(LocationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LocationService.baseUrl + '/' + x;
            });
        })(LocationService = Administration.LocationService || (Administration.LocationService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleLocationForm = (function (_super) {
            __extends(RoleLocationForm, _super);
            function RoleLocationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoleLocationForm.formKey = 'Administration.RoleLocation';
            return RoleLocationForm;
        }(Serenity.PrefixedContext));
        Administration.RoleLocationForm = RoleLocationForm;
        [['RoleId', function () { return Serenity.IntegerEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(RoleLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleLocationRow;
        (function (RoleLocationRow) {
            RoleLocationRow.idProperty = 'RoleId';
            RoleLocationRow.localTextPrefix = 'Administration.RoleLocation';
            RoleLocationRow.lookupKey = 'Administration.RoleLocationRow';
            function getLookup() {
                return Q.getLookup('Administration.RoleLocationRow');
            }
            RoleLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleLocationRow.Fields || (RoleLocationRow.Fields = {}));
            ['RoleLocationId', 'RoleId', 'LocationId', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleLocationRow = Administration.RoleLocationRow || (Administration.RoleLocationRow = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleLocationService;
        (function (RoleLocationService) {
            RoleLocationService.baseUrl = 'Administration/RoleLocation';
            var Methods;
            (function (Methods) {
            })(Methods = RoleLocationService.Methods || (RoleLocationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleLocationService[x] = function (r, s, o) { return Q.serviceRequest(RoleLocationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleLocationService.baseUrl + '/' + x;
            });
        })(RoleLocationService = Administration.RoleLocationService || (Administration.RoleLocationService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName', 'LocationList', 'AccountId'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }], ['CustomerId', function () { return Serenity.IntegerEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserLocationForm = (function (_super) {
            __extends(UserLocationForm, _super);
            function UserLocationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserLocationForm.formKey = 'Administration.UserLocation';
            return UserLocationForm;
        }(Serenity.PrefixedContext));
        Administration.UserLocationForm = UserLocationForm;
        [['UserId', function () { return Serenity.IntegerEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(UserLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserLocationRow;
        (function (UserLocationRow) {
            UserLocationRow.idProperty = 'UserLocationId';
            UserLocationRow.localTextPrefix = 'Administration.UserLocation';
            UserLocationRow.lookupKey = 'Administration.UserLocation';
            function getLookup() {
                return Q.getLookup('Administration.UserLocation');
            }
            UserLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserLocationRow.Fields || (UserLocationRow.Fields = {}));
            ['UserLocationId', 'UserId', 'LocationId', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserAccountId', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId'].forEach(function (x) { return Fields[x] = x; });
        })(UserLocationRow = Administration.UserLocationRow || (Administration.UserLocationRow = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserLocationService;
        (function (UserLocationService) {
            UserLocationService.baseUrl = 'Administration/UserLocation';
            var Methods;
            (function (Methods) {
            })(Methods = UserLocationService.Methods || (UserLocationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                UserLocationService[x] = function (r, s, o) { return Q.serviceRequest(UserLocationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserLocationService.baseUrl + '/' + x;
            });
        })(UserLocationService = Administration.UserLocationService || (Administration.UserLocationService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.lookupKey = 'Administration.UserRoleRow';
            function getLookup() {
                return Q.getLookup('Administration.UserRoleRow');
            }
            UserRoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'UserImage', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'AccountId', 'CustomerId', 'LocationList', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ActionLogForm = (function (_super) {
            __extends(ActionLogForm, _super);
            function ActionLogForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActionLogForm.formKey = 'BusinessObjects.ActionLog';
            return ActionLogForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ActionLogForm = ActionLogForm;
        [['Action', function () { return Serenity.StringEditor; }], ['Date', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(ActionLogForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ActionLogRow;
        (function (ActionLogRow) {
            ActionLogRow.idProperty = 'ActionLogId';
            ActionLogRow.nameProperty = 'Action';
            ActionLogRow.localTextPrefix = 'BusinessObjects.ActionLog';
            ActionLogRow.lookupKey = 'BusinessObjects.ActionLog';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ActionLog');
            }
            ActionLogRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ActionLogRow.Fields || (ActionLogRow.Fields = {}));
            ['ActionLogId', 'TicketId', 'Action', 'Date', 'UserId', 'TicketLocationId', 'TicketDate', 'TicketCustomerId', 'TicketCallDirection', 'TicketType', 'TicketPriority', 'TicketStatus', 'TicketGroupId', 'TicketUserId', 'TicketSubject', 'TicketDescription', 'TicketCreatorId', 'TicketMe', 'TicketPhoneNumber', 'TicketNextFollowUpdate', 'TicketFollowUpAction', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive', 'UserAccountId', 'UserCustomerId'].forEach(function (x) { return Fields[x] = x; });
        })(ActionLogRow = BusinessObjects.ActionLogRow || (BusinessObjects.ActionLogRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ActionLogService;
        (function (ActionLogService) {
            ActionLogService.baseUrl = 'BusinessObjects/ActionLog';
            var Methods;
            (function (Methods) {
            })(Methods = ActionLogService.Methods || (ActionLogService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ActionLogService[x] = function (r, s, o) { return Q.serviceRequest(ActionLogService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ActionLogService.baseUrl + '/' + x;
            });
        })(ActionLogService = BusinessObjects.ActionLogService || (BusinessObjects.ActionLogService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ActionsSettingsForm = (function (_super) {
            __extends(ActionsSettingsForm, _super);
            function ActionsSettingsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActionsSettingsForm.formKey = 'BusinessObjects.ActionsSettings';
            return ActionsSettingsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ActionsSettingsForm = ActionsSettingsForm;
        [['Type', function () { return Serenity.EnumEditor; }], ['Priority', function () { return Serenity.EnumEditor; }], ['Status', function () { return Serenity.EnumEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['GroupId', function () { return Serenity.LookupEditor; }], ['UserId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ActionsSettingsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var AssignToAgentsForm = (function (_super) {
            __extends(AssignToAgentsForm, _super);
            function AssignToAgentsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssignToAgentsForm.formKey = 'BusinessObjects.AssignToAgents';
            return AssignToAgentsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.AssignToAgentsForm = AssignToAgentsForm;
        [['LocationId', function () { return Serenity.LookupEditor; }], ['GroupId', function () { return Serenity.LookupEditor; }], ['UserId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(AssignToAgentsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallDirection;
        (function (CallDirection) {
            CallDirection[CallDirection["Complain"] = 1] = "Complain";
            CallDirection[CallDirection["Request"] = 2] = "Request";
            CallDirection[CallDirection["Enquiry"] = 3] = "Enquiry";
            CallDirection[CallDirection["Transaction"] = 4] = "Transaction";
        })(CallDirection = BusinessObjects.CallDirection || (BusinessObjects.CallDirection = {}));
        Serenity.Decorators.registerEnum(CallDirection, 'BusinessObjects.CallDirection');
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallForm = (function (_super) {
            __extends(CallForm, _super);
            function CallForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CallForm.formKey = 'BusinessObjects.Call';
            return CallForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.CallForm = CallForm;
        [['CustomerId', function () { return Serenity.LookupEditor; }], ['GroupId', function () { return Serenity.LookupEditor; }], ['UserId', function () { return Serenity.LookupEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['Subject', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['CallDirection', function () { return Serenity.IntegerEditor; }], ['Priority', function () { return Serenity.IntegerEditor; }], ['Status', function () { return Serenity.IntegerEditor; }], ['NextFollowUpDate', function () { return Serenity.DateEditor; }], ['CreatorId', function () { return Serenity.IntegerEditor; }], ['Me', function () { return Serenity.BooleanEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['FollowUpAction', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CallForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallProcessForm = (function (_super) {
            __extends(CallProcessForm, _super);
            function CallProcessForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CallProcessForm.formKey = 'BusinessObjects.CallProcess';
            return CallProcessForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.CallProcessForm = CallProcessForm;
        [['CallId', function () { return Serenity.LookupEditor; }], ['UserId', function () { return Serenity.LookupEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['ReplyComment', function () { return Serenity.IntegerEditor; }], ['CreatorId', function () { return Serenity.IntegerEditor; }], ['CallDirection', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(CallProcessForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallProcessRow;
        (function (CallProcessRow) {
            CallProcessRow.idProperty = 'CallProcessId';
            CallProcessRow.nameProperty = 'Description';
            CallProcessRow.localTextPrefix = 'BusinessObjects.CallProcess';
            CallProcessRow.lookupKey = 'BusinessObjects.CallProcess';
            function getLookup() {
                return Q.getLookup('BusinessObjects.CallProcess');
            }
            CallProcessRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CallProcessRow.Fields || (CallProcessRow.Fields = {}));
            ['CallProcessId', 'CallId', 'UserId', 'Date', 'Description', 'ReplyComment', 'CreatorId', 'CallDirection', 'CallCustomerId', 'CallGroupId', 'CallUserId', 'CallDate', 'CallSubject', 'CallDescription', 'CallCallDirection', 'CallPriority', 'CallStatus', 'CallNextFollowUpDate', 'CallCreatorId', 'CallMe', 'CallLocationId', 'CallFollowUpAction', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserAccountId', 'UserLocationId'].forEach(function (x) { return Fields[x] = x; });
        })(CallProcessRow = BusinessObjects.CallProcessRow || (BusinessObjects.CallProcessRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallProcessService;
        (function (CallProcessService) {
            CallProcessService.baseUrl = 'BusinessObjects/CallProcess';
            var Methods;
            (function (Methods) {
            })(Methods = CallProcessService.Methods || (CallProcessService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CallProcessService[x] = function (r, s, o) { return Q.serviceRequest(CallProcessService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CallProcessService.baseUrl + '/' + x;
            });
        })(CallProcessService = BusinessObjects.CallProcessService || (BusinessObjects.CallProcessService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallRow;
        (function (CallRow) {
            CallRow.idProperty = 'CallId';
            CallRow.nameProperty = 'Subject';
            CallRow.localTextPrefix = 'BusinessObjects.Call';
            CallRow.lookupKey = 'BusinessObjects.Call';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Call');
            }
            CallRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CallRow.Fields || (CallRow.Fields = {}));
            ['CallId', 'CustomerId', 'GroupId', 'UserId', 'Date', 'Subject', 'Description', 'CallDirection', 'Priority', 'Status', 'NextFollowUpDate', 'CreatorId', 'Me', 'LocationId', 'FollowUpAction', 'CustomerLocationId', 'CustomerDate', 'CustomerName', 'CustomerSex', 'CustomerDateOfBirth', 'CustomerPhoneNumber', 'CustomerEmail', 'CustomerAddress', 'GroupRoleName', 'GroupAccountId', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserAccountId', 'UserLocationId', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId'].forEach(function (x) { return Fields[x] = x; });
        })(CallRow = BusinessObjects.CallRow || (BusinessObjects.CallRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallService;
        (function (CallService) {
            CallService.baseUrl = 'BusinessObjects/Call';
            var Methods;
            (function (Methods) {
            })(Methods = CallService.Methods || (CallService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CallService[x] = function (r, s, o) { return Q.serviceRequest(CallService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CallService.baseUrl + '/' + x;
            });
        })(CallService = BusinessObjects.CallService || (BusinessObjects.CallService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerForm = (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomerForm.formKey = 'BusinessObjects.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.CustomerForm = CustomerForm;
        [['CustomerId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['FullName', function () { return Serenity.StringEditor; }], ['Sex', function () { return Serenity.EnumEditor; }], ['DateOfBirth', function () { return Serenity.DateEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.TextAreaEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(CustomerForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'CustomerId';
            CustomerRow.nameProperty = 'FullName';
            CustomerRow.localTextPrefix = 'BusinessObjects.Customer';
            CustomerRow.lookupKey = 'BusinessObjects.Customer';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Customer');
            }
            CustomerRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRow.Fields || (CustomerRow.Fields = {}));
            ['CustomerId', 'LocationId', 'Date', 'FirstName', 'LastName', 'FullName', 'Sex', 'DateOfBirth', 'PhoneNumber', 'Email', 'Address', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRow = BusinessObjects.CustomerRow || (BusinessObjects.CustomerRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'BusinessObjects/Customer';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerService.Methods || (CustomerService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CustomerService[x] = function (r, s, o) { return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerService.baseUrl + '/' + x;
            });
        })(CustomerService = BusinessObjects.CustomerService || (BusinessObjects.CustomerService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerSmsForm = (function (_super) {
            __extends(CustomerSmsForm, _super);
            function CustomerSmsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomerSmsForm.formKey = 'BusinessObjects.CustomerSms';
            return CustomerSmsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.CustomerSmsForm = CustomerSmsForm;
        [['CustomerId', function () { return Serenity.LookupEditor; }], ['SmsId', function () { return Serenity.LookupEditor; }], ['SmsMessage', function () { return Serenity.TextAreaEditor; }], ['Sent', function () { return Serenity.BooleanEditor; }], ['Delivered', function () { return Serenity.BooleanEditor; }], ['UnDelivered', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(CustomerSmsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerSmsRow;
        (function (CustomerSmsRow) {
            CustomerSmsRow.idProperty = 'CustomerSmsId';
            CustomerSmsRow.localTextPrefix = 'BusinessObjects.CustomerSms';
            CustomerSmsRow.lookupKey = 'BusinessObjects.CustomerSms';
            function getLookup() {
                return Q.getLookup('BusinessObjects.CustomerSms');
            }
            CustomerSmsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerSmsRow.Fields || (CustomerSmsRow.Fields = {}));
            ['CustomerSmsId', 'CustomerId', 'SmsId', 'Sent', 'Delivered', 'UnDelivered', 'CustomerLocationId', 'CustomerDate', 'CustomerFirstName', 'CustomerLastName', 'CustomerFullName', 'CustomerSex', 'CustomerDateOfBirth', 'CustomerPhoneNumber', 'CustomerEmail', 'CustomerAddress', 'SmsDate', 'SmsMessage'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerSmsRow = BusinessObjects.CustomerSmsRow || (BusinessObjects.CustomerSmsRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerSmsService;
        (function (CustomerSmsService) {
            CustomerSmsService.baseUrl = 'BusinessObjects/CustomerSms';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerSmsService.Methods || (CustomerSmsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CustomerSmsService[x] = function (r, s, o) { return Q.serviceRequest(CustomerSmsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerSmsService.baseUrl + '/' + x;
            });
        })(CustomerSmsService = BusinessObjects.CustomerSmsService || (BusinessObjects.CustomerSmsService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ForwardAsMailForm = (function (_super) {
            __extends(ForwardAsMailForm, _super);
            function ForwardAsMailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ForwardAsMailForm.formKey = 'BusinessObjects.ForwardAsMail';
            return ForwardAsMailForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ForwardAsMailForm = ForwardAsMailForm;
        [['Email', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ForwardAsMailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Female"] = 1] = "Female";
            Gender[Gender["Male"] = 2] = "Male";
        })(Gender = BusinessObjects.Gender || (BusinessObjects.Gender = {}));
        Serenity.Decorators.registerEnum(Gender, 'BusinessObjects.Gender');
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryForm = (function (_super) {
            __extends(KbCategoryForm, _super);
            function KbCategoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            KbCategoryForm.formKey = 'BusinessObjects.KbCategory';
            return KbCategoryForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.KbCategoryForm = KbCategoryForm;
        [['CategoryName', function () { return Serenity.StringEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }], ['KnowledgeBase', function () { return BusinessObjects.KnowledgeBaseEditor; }]].forEach(function (x) { return Object.defineProperty(KbCategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryLocationsForm = (function (_super) {
            __extends(KbCategoryLocationsForm, _super);
            function KbCategoryLocationsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            KbCategoryLocationsForm.formKey = 'BusinessObjects.KbCategoryLocations';
            return KbCategoryLocationsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.KbCategoryLocationsForm = KbCategoryLocationsForm;
        [['KbCategoryId', function () { return Serenity.IntegerEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(KbCategoryLocationsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryLocationsRow;
        (function (KbCategoryLocationsRow) {
            KbCategoryLocationsRow.idProperty = 'KbCategoryLocationId';
            KbCategoryLocationsRow.localTextPrefix = 'BusinessObjects.KbCategoryLocations';
            KbCategoryLocationsRow.lookupKey = 'BusinessObjects.KbCategoryLocationsRow';
            function getLookup() {
                return Q.getLookup('BusinessObjects.KbCategoryLocationsRow');
            }
            KbCategoryLocationsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = KbCategoryLocationsRow.Fields || (KbCategoryLocationsRow.Fields = {}));
            ['KbCategoryLocationId', 'KbCategoryId', 'LocationId'].forEach(function (x) { return Fields[x] = x; });
        })(KbCategoryLocationsRow = BusinessObjects.KbCategoryLocationsRow || (BusinessObjects.KbCategoryLocationsRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryLocationsService;
        (function (KbCategoryLocationsService) {
            KbCategoryLocationsService.baseUrl = 'BusinessObjects/KbCategoryLocations';
            var Methods;
            (function (Methods) {
            })(Methods = KbCategoryLocationsService.Methods || (KbCategoryLocationsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                KbCategoryLocationsService[x] = function (r, s, o) { return Q.serviceRequest(KbCategoryLocationsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = KbCategoryLocationsService.baseUrl + '/' + x;
            });
        })(KbCategoryLocationsService = BusinessObjects.KbCategoryLocationsService || (BusinessObjects.KbCategoryLocationsService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryRow;
        (function (KbCategoryRow) {
            KbCategoryRow.idProperty = 'KbCategoryId';
            KbCategoryRow.nameProperty = 'CategoryName';
            KbCategoryRow.localTextPrefix = 'BusinessObjects.KbCategory';
            KbCategoryRow.lookupKey = 'BusinessObjects.KbCategory';
            function getLookup() {
                return Q.getLookup('BusinessObjects.KbCategory');
            }
            KbCategoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = KbCategoryRow.Fields || (KbCategoryRow.Fields = {}));
            ['KbCategoryId', 'CategoryName', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId', 'LocationList', 'KnowledgeBase'].forEach(function (x) { return Fields[x] = x; });
        })(KbCategoryRow = BusinessObjects.KbCategoryRow || (BusinessObjects.KbCategoryRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryService;
        (function (KbCategoryService) {
            KbCategoryService.baseUrl = 'BusinessObjects/KbCategory';
            var Methods;
            (function (Methods) {
            })(Methods = KbCategoryService.Methods || (KbCategoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                KbCategoryService[x] = function (r, s, o) { return Q.serviceRequest(KbCategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = KbCategoryService.baseUrl + '/' + x;
            });
        })(KbCategoryService = BusinessObjects.KbCategoryService || (BusinessObjects.KbCategoryService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryThreadForm = (function (_super) {
            __extends(KbCategoryThreadForm, _super);
            function KbCategoryThreadForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            KbCategoryThreadForm.formKey = 'BusinessObjects.KbCategoryThread';
            return KbCategoryThreadForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.KbCategoryThreadForm = KbCategoryThreadForm;
        [['CategoryName', function () { return Serenity.StringEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(KbCategoryThreadForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseForm = (function (_super) {
            __extends(KnowledgeBaseForm, _super);
            function KnowledgeBaseForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            KnowledgeBaseForm.formKey = 'BusinessObjects.KnowledgeBase';
            return KnowledgeBaseForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.KnowledgeBaseForm = KnowledgeBaseForm;
        [['KbCategoryId', function () { return Serenity.LookupEditor; }], ['Title', function () { return Serenity.StringEditor; }], ['KbContent', function () { return Serenity.TextAreaEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(KnowledgeBaseForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseLocationsForm = (function (_super) {
            __extends(KnowledgeBaseLocationsForm, _super);
            function KnowledgeBaseLocationsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            KnowledgeBaseLocationsForm.formKey = 'BusinessObjects.KnowledgeBaseLocations';
            return KnowledgeBaseLocationsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.KnowledgeBaseLocationsForm = KnowledgeBaseLocationsForm;
        [['KbCategoryId', function () { return Serenity.IntegerEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(KnowledgeBaseLocationsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseLocationsRow;
        (function (KnowledgeBaseLocationsRow) {
            KnowledgeBaseLocationsRow.idProperty = 'KbLocationId';
            KnowledgeBaseLocationsRow.localTextPrefix = 'BusinessObjects.KnowledgeBaseLocations';
            KnowledgeBaseLocationsRow.lookupKey = 'BusinessObjects.KnowledgeBaseLocationsRow';
            function getLookup() {
                return Q.getLookup('BusinessObjects.KnowledgeBaseLocationsRow');
            }
            KnowledgeBaseLocationsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = KnowledgeBaseLocationsRow.Fields || (KnowledgeBaseLocationsRow.Fields = {}));
            ['KbLocationId', 'KbId', 'LocationId'].forEach(function (x) { return Fields[x] = x; });
        })(KnowledgeBaseLocationsRow = BusinessObjects.KnowledgeBaseLocationsRow || (BusinessObjects.KnowledgeBaseLocationsRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseLocationsService;
        (function (KnowledgeBaseLocationsService) {
            KnowledgeBaseLocationsService.baseUrl = 'BusinessObjects/KnowledgeBaseLocations';
            var Methods;
            (function (Methods) {
            })(Methods = KnowledgeBaseLocationsService.Methods || (KnowledgeBaseLocationsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                KnowledgeBaseLocationsService[x] = function (r, s, o) { return Q.serviceRequest(KnowledgeBaseLocationsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = KnowledgeBaseLocationsService.baseUrl + '/' + x;
            });
        })(KnowledgeBaseLocationsService = BusinessObjects.KnowledgeBaseLocationsService || (BusinessObjects.KnowledgeBaseLocationsService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseRow;
        (function (KnowledgeBaseRow) {
            KnowledgeBaseRow.idProperty = 'KbId';
            KnowledgeBaseRow.nameProperty = 'Title';
            KnowledgeBaseRow.localTextPrefix = 'BusinessObjects.KnowledgeBase';
            KnowledgeBaseRow.lookupKey = 'BusinessObjects.KnowledgeBase';
            function getLookup() {
                return Q.getLookup('BusinessObjects.KnowledgeBase');
            }
            KnowledgeBaseRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = KnowledgeBaseRow.Fields || (KnowledgeBaseRow.Fields = {}));
            ['KbId', 'KbCategoryId', 'Title', 'KbContent', 'KbCategoryCategoryName', 'KbCategoryLocationId', 'LocationList'].forEach(function (x) { return Fields[x] = x; });
        })(KnowledgeBaseRow = BusinessObjects.KnowledgeBaseRow || (BusinessObjects.KnowledgeBaseRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseService;
        (function (KnowledgeBaseService) {
            KnowledgeBaseService.baseUrl = 'BusinessObjects/KnowledgeBase';
            var Methods;
            (function (Methods) {
            })(Methods = KnowledgeBaseService.Methods || (KnowledgeBaseService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                KnowledgeBaseService[x] = function (r, s, o) { return Q.serviceRequest(KnowledgeBaseService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = KnowledgeBaseService.baseUrl + '/' + x;
            });
        })(KnowledgeBaseService = BusinessObjects.KnowledgeBaseService || (BusinessObjects.KnowledgeBaseService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'BusinessObjects.Note';
            var Fields;
            (function (Fields) {
            })(Fields = NoteRow.Fields || (NoteRow.Fields = {}));
            ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName', 'CallDirection', 'InsertUserUserName'].forEach(function (x) { return Fields[x] = x; });
        })(NoteRow = BusinessObjects.NoteRow || (BusinessObjects.NoteRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PaymentDetailForm = (function (_super) {
            __extends(PaymentDetailForm, _super);
            function PaymentDetailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PaymentDetailForm.formKey = 'BusinessObjects.PaymentDetail';
            return PaymentDetailForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.PaymentDetailForm = PaymentDetailForm;
        [['TransactionId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['TotalAmount', function () { return Serenity.DecimalEditor; }], ['AmountPaid', function () { return Serenity.DecimalEditor; }], ['AmountLeft', function () { return Serenity.DecimalEditor; }], ['IsTotalAmountRow', function () { return Serenity.BooleanEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(PaymentDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PaymentDetailRow;
        (function (PaymentDetailRow) {
            PaymentDetailRow.idProperty = 'PaymentDetailId';
            PaymentDetailRow.localTextPrefix = 'BusinessObjects.PaymentDetail';
            PaymentDetailRow.lookupKey = 'BusinessObjects.PaymentDetail';
            function getLookup() {
                return Q.getLookup('BusinessObjects.PaymentDetail');
            }
            PaymentDetailRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PaymentDetailRow.Fields || (PaymentDetailRow.Fields = {}));
            ['PaymentDetailId', 'TransactionId', 'Date', 'TotalAmount', 'AmountPaid', 'AmountLeft', 'IsTotalAmountRow', 'LocationId', 'TransactionOrderId', 'TransactionDate', 'TransactionTotalAmount', 'TransactionTotalAmountPaid', 'TransactionTotalAmountLeft', 'TransactionHasTransactionsDetails', 'TransactionLocationId', 'TransactionIsIntegerTrailingOrderIdWithPrefixPo', 'TransactionStatus', 'TransactionIsOpen', 'TransactionIsInProgress', 'TransactionIsFullyReceived', 'TransactionIsFullyPaid', 'TransactionIsAdvanced'].forEach(function (x) { return Fields[x] = x; });
        })(PaymentDetailRow = BusinessObjects.PaymentDetailRow || (BusinessObjects.PaymentDetailRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PaymentDetailService;
        (function (PaymentDetailService) {
            PaymentDetailService.baseUrl = 'BusinessObjects/PaymentDetail';
            var Methods;
            (function (Methods) {
            })(Methods = PaymentDetailService.Methods || (PaymentDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PaymentDetailService[x] = function (r, s, o) { return Q.serviceRequest(PaymentDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PaymentDetailService.baseUrl + '/' + x;
            });
        })(PaymentDetailService = BusinessObjects.PaymentDetailService || (BusinessObjects.PaymentDetailService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var Priority;
        (function (Priority) {
            Priority[Priority["Low"] = 1] = "Low";
            Priority[Priority["Normal"] = 2] = "Normal";
            Priority[Priority["High"] = 3] = "High";
            Priority[Priority["Urgent"] = 4] = "Urgent";
        })(Priority = BusinessObjects.Priority || (BusinessObjects.Priority = {}));
        Serenity.Decorators.registerEnum(Priority, 'BusinessObjects.Priority');
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductForm = (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProductForm.formKey = 'BusinessObjects.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ProductForm = ProductForm;
        [['Name', function () { return Serenity.StringEditor; }], ['Price', function () { return Serenity.DecimalEditor; }], ['LocationList', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ProductForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationForm = (function (_super) {
            __extends(ProductLocationForm, _super);
            function ProductLocationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProductLocationForm.formKey = 'BusinessObjects.ProductLocation';
            return ProductLocationForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.ProductLocationForm = ProductLocationForm;
        [['ProductId', function () { return Serenity.LookupEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ProductLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationRow;
        (function (ProductLocationRow) {
            ProductLocationRow.idProperty = 'ProductLocationId';
            ProductLocationRow.localTextPrefix = 'BusinessObjects.ProductLocation';
            ProductLocationRow.lookupKey = 'BusinessObjects.ProductLocation';
            function getLookup() {
                return Q.getLookup('BusinessObjects.ProductLocation');
            }
            ProductLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductLocationRow.Fields || (ProductLocationRow.Fields = {}));
            ['ProductLocationId', 'ProductId', 'LocationId', 'ProductName', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId', 'LocationIsVisible'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLocationRow = BusinessObjects.ProductLocationRow || (BusinessObjects.ProductLocationRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationService;
        (function (ProductLocationService) {
            ProductLocationService.baseUrl = 'BusinessObjects/ProductLocation';
            var Methods;
            (function (Methods) {
            })(Methods = ProductLocationService.Methods || (ProductLocationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductLocationService[x] = function (r, s, o) { return Q.serviceRequest(ProductLocationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductLocationService.baseUrl + '/' + x;
            });
        })(ProductLocationService = BusinessObjects.ProductLocationService || (BusinessObjects.ProductLocationService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductId';
            ProductRow.nameProperty = 'Name';
            ProductRow.localTextPrefix = 'BusinessObjects.Product';
            ProductRow.lookupKey = 'BusinessObjects.Product';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Product');
            }
            ProductRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductRow.Fields || (ProductRow.Fields = {}));
            ['ProductId', 'Name', 'Price', 'LocationList'].forEach(function (x) { return Fields[x] = x; });
        })(ProductRow = BusinessObjects.ProductRow || (BusinessObjects.ProductRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'BusinessObjects/Product';
            var Methods;
            (function (Methods) {
            })(Methods = ProductService.Methods || (ProductService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductService[x] = function (r, s, o) { return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductService.baseUrl + '/' + x;
            });
        })(ProductService = BusinessObjects.ProductService || (BusinessObjects.ProductService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ReplyComment;
        (function (ReplyComment) {
            ReplyComment[ReplyComment["Reply"] = 1] = "Reply";
            ReplyComment[ReplyComment["Comment"] = 2] = "Comment";
        })(ReplyComment = BusinessObjects.ReplyComment || (BusinessObjects.ReplyComment = {}));
        Serenity.Decorators.registerEnum(ReplyComment, 'ReplyComment');
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var RequestType;
        (function (RequestType) {
            RequestType[RequestType["Question"] = 1] = "Question";
            RequestType[RequestType["Incident"] = 2] = "Incident";
            RequestType[RequestType["Problem"] = 3] = "Problem";
            RequestType[RequestType["Task"] = 4] = "Task";
            RequestType[RequestType["Complain"] = 5] = "Complain";
            RequestType[RequestType["Request"] = 6] = "Request";
            RequestType[RequestType["Transaction"] = 7] = "Transaction";
        })(RequestType = BusinessObjects.RequestType || (BusinessObjects.RequestType = {}));
        Serenity.Decorators.registerEnum(RequestType, 'BusinessObjects.RequestType');
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SendSmsForm = (function (_super) {
            __extends(SendSmsForm, _super);
            function SendSmsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SendSmsForm.formKey = 'BusinessObjects.SendSms';
            return SendSmsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.SendSmsForm = SendSmsForm;
        [['LocationId', function () { return Serenity.LookupEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['Message', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(SendSmsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsForm = (function (_super) {
            __extends(SmsForm, _super);
            function SmsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SmsForm.formKey = 'BusinessObjects.Sms';
            return SmsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.SmsForm = SmsForm;
        [['Date', function () { return Serenity.DateEditor; }], ['Message', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SmsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsLocationForm = (function (_super) {
            __extends(SmsLocationForm, _super);
            function SmsLocationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SmsLocationForm.formKey = 'BusinessObjects.SmsLocation';
            return SmsLocationForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.SmsLocationForm = SmsLocationForm;
        [['SmsId', function () { return Serenity.LookupEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(SmsLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsLocationRow;
        (function (SmsLocationRow) {
            SmsLocationRow.idProperty = 'SmsLocationId';
            SmsLocationRow.localTextPrefix = 'BusinessObjects.SmsLocation';
            SmsLocationRow.lookupKey = 'BusinessObjects.SmsLocation';
            function getLookup() {
                return Q.getLookup('BusinessObjects.SmsLocation');
            }
            SmsLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SmsLocationRow.Fields || (SmsLocationRow.Fields = {}));
            ['SmsLocationId', 'SmsId', 'LocationId', 'SmsDate', 'SmsMessage', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId', 'LocationIsVisible'].forEach(function (x) { return Fields[x] = x; });
        })(SmsLocationRow = BusinessObjects.SmsLocationRow || (BusinessObjects.SmsLocationRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsLocationService;
        (function (SmsLocationService) {
            SmsLocationService.baseUrl = 'BusinessObjects/SmsLocation';
            var Methods;
            (function (Methods) {
            })(Methods = SmsLocationService.Methods || (SmsLocationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SmsLocationService[x] = function (r, s, o) { return Q.serviceRequest(SmsLocationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SmsLocationService.baseUrl + '/' + x;
            });
        })(SmsLocationService = BusinessObjects.SmsLocationService || (BusinessObjects.SmsLocationService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsRow;
        (function (SmsRow) {
            SmsRow.idProperty = 'SmsId';
            SmsRow.nameProperty = 'Message';
            SmsRow.localTextPrefix = 'BusinessObjects.Sms';
            SmsRow.lookupKey = 'BusinessObjects.Sms';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Sms');
            }
            SmsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SmsRow.Fields || (SmsRow.Fields = {}));
            ['SmsId', 'Date', 'Message'].forEach(function (x) { return Fields[x] = x; });
        })(SmsRow = BusinessObjects.SmsRow || (BusinessObjects.SmsRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsService;
        (function (SmsService) {
            SmsService.baseUrl = 'BusinessObjects/Sms';
            var Methods;
            (function (Methods) {
            })(Methods = SmsService.Methods || (SmsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'TicketsSms', 'CustomersSms'].forEach(function (x) {
                SmsService[x] = function (r, s, o) { return Q.serviceRequest(SmsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SmsService.baseUrl + '/' + x;
            });
        })(SmsService = BusinessObjects.SmsService || (BusinessObjects.SmsService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var Status;
        (function (Status) {
            Status[Status["Open"] = 1] = "Open";
            Status[Status["Pending"] = 2] = "Pending";
            Status[Status["Resolved"] = 3] = "Resolved";
            Status[Status["Closed"] = 4] = "Closed";
            Status[Status["WaitingOnCustomer"] = 5] = "WaitingOnCustomer";
            Status[Status["WaitingOnThirdParty"] = 6] = "WaitingOnThirdParty";
        })(Status = BusinessObjects.Status || (BusinessObjects.Status = {}));
        Serenity.Decorators.registerEnum(Status, 'BusinessObjects.Status');
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketActionLogForm = (function (_super) {
            __extends(TicketActionLogForm, _super);
            function TicketActionLogForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TicketActionLogForm.formKey = 'BusinessObjects.TicketActionLog';
            return TicketActionLogForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.TicketActionLogForm = TicketActionLogForm;
        [['Actions', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TicketActionLogForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketForm = (function (_super) {
            __extends(TicketForm, _super);
            function TicketForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TicketForm.formKey = 'BusinessObjects.Ticket';
            return TicketForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.TicketForm = TicketForm;
        [['Date', function () { return Serenity.DateTimeEditor; }], ['TicketIdString', function () { return Serenity.StringEditor; }], ['TransactionId', function () { return Serenity.LookupEditor; }], ['CustomerId', function () { return Serenity.LookupEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['ProductId', function () { return Serenity.LookupEditor; }], ['Subject', function () { return Serenity.StringEditor; }], ['Type', function () { return Serenity.EnumEditor; }], ['Priority', function () { return Serenity.EnumEditor; }], ['Status', function () { return Serenity.EnumEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['GroupId', function () { return Serenity.LookupEditor; }], ['UserId', function () { return Serenity.LookupEditor; }], ['CreatorId', function () { return Serenity.IntegerEditor; }], ['Me', function () { return Serenity.BooleanEditor; }], ['NextFollowUpDate', function () { return Serenity.DateTimeEditor; }], ['FollowUpAction', function () { return Serenity.TextAreaEditor; }], ['NoteList', function () { return BusinessObjects.NotesEditor; }], ['UserUsername', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TicketForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketProcessForm = (function (_super) {
            __extends(TicketProcessForm, _super);
            function TicketProcessForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TicketProcessForm.formKey = 'BusinessObjects.TicketProcess';
            return TicketProcessForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.TicketProcessForm = TicketProcessForm;
        [['TicketId', function () { return Serenity.LookupEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['ReplyComment', function () { return Serenity.EnumEditor; }], ['UserId', function () { return Serenity.LookupEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }], ['CreatorId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(TicketProcessForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketProcessRow;
        (function (TicketProcessRow) {
            TicketProcessRow.idProperty = 'TicketProcessId';
            TicketProcessRow.nameProperty = 'Description';
            TicketProcessRow.localTextPrefix = 'BusinessObjects.TicketProcess';
            TicketProcessRow.lookupKey = 'BusinessObjects.TicketProcessRow';
            function getLookup() {
                return Q.getLookup('BusinessObjects.TicketProcessRow');
            }
            TicketProcessRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TicketProcessRow.Fields || (TicketProcessRow.Fields = {}));
            ['TicketProcessId', 'TicketId', 'Date', 'UserId', 'Description', 'CreatorId', 'TicketLocationId', 'TicketDate', 'TicketCustomerId', 'TicketType', 'TicketPriority', 'TicketStatus', 'TicketGroupId', 'TicketUserId', 'TicketSubject', 'TicketDescription', 'TicketCreatorId', 'TicketMe', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserAccountId', 'UserLocationId', 'ReplyComment'].forEach(function (x) { return Fields[x] = x; });
        })(TicketProcessRow = BusinessObjects.TicketProcessRow || (BusinessObjects.TicketProcessRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketProcessService;
        (function (TicketProcessService) {
            TicketProcessService.baseUrl = 'BusinessObjects/TicketProcess';
            var Methods;
            (function (Methods) {
            })(Methods = TicketProcessService.Methods || (TicketProcessService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TicketProcessService[x] = function (r, s, o) { return Q.serviceRequest(TicketProcessService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TicketProcessService.baseUrl + '/' + x;
            });
        })(TicketProcessService = BusinessObjects.TicketProcessService || (BusinessObjects.TicketProcessService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketRow;
        (function (TicketRow) {
            TicketRow.idProperty = 'TicketId';
            TicketRow.nameProperty = 'Subject';
            TicketRow.localTextPrefix = 'BusinessObjects.Ticket';
            TicketRow.lookupKey = 'BusinessObjects.Ticket';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Ticket');
            }
            TicketRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TicketRow.Fields || (TicketRow.Fields = {}));
            ['TicketId', 'TicketIdString', 'LocationId', 'ProductId', 'TransactionId', 'Date', 'PhoneNumber', 'CustomerId', 'Type', 'Priority', 'Status', 'GroupId', 'UserId', 'Subject', 'CreatorId', 'Me', 'NextFollowUpDate', 'FollowUpAction', 'CallDirection', 'ProductName', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId', 'CustomerLocationId', 'CustomerDate', 'CustomerName', 'CustomerSex', 'CustomerDateOfBirth', 'CustomerPhoneNumber', 'CustomerEmail', 'CustomerAddress', 'GroupRoleName', 'GroupAccountId', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserAccountId', 'TicketProcess', 'NoteList'].forEach(function (x) { return Fields[x] = x; });
        })(TicketRow = BusinessObjects.TicketRow || (BusinessObjects.TicketRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketService;
        (function (TicketService) {
            TicketService.baseUrl = 'BusinessObjects/Ticket';
            var Methods;
            (function (Methods) {
            })(Methods = TicketService.Methods || (TicketService.Methods = {}));
            ['Create', 'GetNextNumber', 'AssignToAgents', 'ActionsSettings', 'Update', 'Delete', 'Retrieve', 'List', 'NewTicket', 'DetailTicket', 'UpdateTicketMessage', 'UpdateTicket', 'NewMessage'].forEach(function (x) {
                TicketService[x] = function (r, s, o) { return Q.serviceRequest(TicketService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TicketService.baseUrl + '/' + x;
            });
        })(TicketService = BusinessObjects.TicketService || (BusinessObjects.TicketService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketSmsForm = (function (_super) {
            __extends(TicketSmsForm, _super);
            function TicketSmsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TicketSmsForm.formKey = 'BusinessObjects.TicketSms';
            return TicketSmsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.TicketSmsForm = TicketSmsForm;
        [['TicketId', function () { return Serenity.LookupEditor; }], ['SmsId', function () { return Serenity.IntegerEditor; }], ['TicketSmsMessage', function () { return Serenity.TextAreaEditor; }], ['Sent', function () { return Serenity.BooleanEditor; }], ['Delivered', function () { return Serenity.BooleanEditor; }], ['UnDelivered', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(TicketSmsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketSmsRow;
        (function (TicketSmsRow) {
            TicketSmsRow.idProperty = 'TicketSmsId';
            TicketSmsRow.localTextPrefix = 'BusinessObjects.TicketSms';
            TicketSmsRow.lookupKey = 'BusinessObjects.TicketSms';
            function getLookup() {
                return Q.getLookup('BusinessObjects.TicketSms');
            }
            TicketSmsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TicketSmsRow.Fields || (TicketSmsRow.Fields = {}));
            ['TicketSmsId', 'TicketId', 'SmsId', 'Sent', 'Delivered', 'UnDelivered', 'TicketSmsDate', 'TicketSmsMessage', 'TicketLocationId', 'TicketDate', 'TicketCustomerId', 'TicketCallDirection', 'TicketProductId', 'TicketType', 'TicketPriority', 'TicketStatus', 'TicketGroupId', 'TicketUserId', 'TicketSubject', 'TicketCreatorId', 'TicketMe', 'TicketPhoneNumber', 'TicketNextFollowUpdate', 'TicketFollowUpAction'].forEach(function (x) { return Fields[x] = x; });
        })(TicketSmsRow = BusinessObjects.TicketSmsRow || (BusinessObjects.TicketSmsRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketSmsService;
        (function (TicketSmsService) {
            TicketSmsService.baseUrl = 'BusinessObjects/TicketSms';
            var Methods;
            (function (Methods) {
            })(Methods = TicketSmsService.Methods || (TicketSmsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TicketSmsService[x] = function (r, s, o) { return Q.serviceRequest(TicketSmsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TicketSmsService.baseUrl + '/' + x;
            });
        })(TicketSmsService = BusinessObjects.TicketSmsService || (BusinessObjects.TicketSmsService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketThreadForm = (function (_super) {
            __extends(TicketThreadForm, _super);
            function TicketThreadForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TicketThreadForm.formKey = 'BusinessObjects.TicketThread';
            return TicketThreadForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.TicketThreadForm = TicketThreadForm;
        [['Date', function () { return Serenity.DateTimeEditor; }], ['CallDirection', function () { return Serenity.EnumEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['CustomerId', function () { return Serenity.IntegerEditor; }], ['Subject', function () { return Serenity.StringEditor; }], ['TicketProcess', function () { return BusinessObjects.TicketProcessEditor; }], ['Type', function () { return Serenity.EnumEditor; }], ['Priority', function () { return Serenity.EnumEditor; }], ['Status', function () { return Serenity.EnumEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['GroupId', function () { return Serenity.LookupEditor; }], ['UserId', function () { return Serenity.LookupEditor; }], ['CreatorId', function () { return Serenity.IntegerEditor; }], ['Me', function () { return Serenity.BooleanEditor; }], ['NextFollowUpDate', function () { return Serenity.DateTimeEditor; }], ['FollowUpAction', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(TicketThreadForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionDetailForm = (function (_super) {
            __extends(TransactionDetailForm, _super);
            function TransactionDetailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TransactionDetailForm.formKey = 'BusinessObjects.TransactionDetail';
            return TransactionDetailForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.TransactionDetailForm = TransactionDetailForm;
        [['TransactionId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['ProductId', function () { return Serenity.LookupEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['UnitName', function () { return Serenity.StringEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['LocationId', function () { return Serenity.IntegerEditor; }], ['IsReceived', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(TransactionDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionDetailRow;
        (function (TransactionDetailRow) {
            TransactionDetailRow.idProperty = 'TransactionDetailId';
            TransactionDetailRow.localTextPrefix = 'BusinessObjects.TransactionDetail';
            TransactionDetailRow.lookupKey = 'BusinessObjects.TransactionDetail';
            function getLookup() {
                return Q.getLookup('BusinessObjects.TransactionDetail');
            }
            TransactionDetailRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TransactionDetailRow.Fields || (TransactionDetailRow.Fields = {}));
            ['TransactionDetailId', 'TransactionId', 'Date', 'ProductId', 'UnitPrice', 'UnitName', 'Discount', 'Quantity', 'Amount', 'LocationId', 'IsReceived', 'TransactionOrderId', 'TransactionDate', 'TransactionTotalAmount', 'TransactionTotalAmountPaid', 'TransactionTotalAmountLeft', 'TransactionHasTransactionsDetails', 'TransactionLocationId', 'TransactionIsIntegerTrailingOrderIdWithPrefixPo', 'TransactionStatus', 'TransactionIsOpen', 'TransactionIsInProgress', 'TransactionIsFullyReceived', 'TransactionIsFullyPaid', 'TransactionIsAdvanced', 'ProductName', 'ProductUnitName', 'ProductPrice'].forEach(function (x) { return Fields[x] = x; });
        })(TransactionDetailRow = BusinessObjects.TransactionDetailRow || (BusinessObjects.TransactionDetailRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionDetailService;
        (function (TransactionDetailService) {
            TransactionDetailService.baseUrl = 'BusinessObjects/TransactionDetail';
            var Methods;
            (function (Methods) {
            })(Methods = TransactionDetailService.Methods || (TransactionDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TransactionDetailService[x] = function (r, s, o) { return Q.serviceRequest(TransactionDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TransactionDetailService.baseUrl + '/' + x;
            });
        })(TransactionDetailService = BusinessObjects.TransactionDetailService || (BusinessObjects.TransactionDetailService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionForm = (function (_super) {
            __extends(TransactionForm, _super);
            function TransactionForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TransactionForm.formKey = 'BusinessObjects.Transaction';
            return TransactionForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.TransactionForm = TransactionForm;
        [['TransactionId', function () { return Serenity.IntegerEditor; }], ['OrderId', function () { return Serenity.StringEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['CustomerId', function () { return Serenity.LookupEditor; }], ['Subject', function () { return Serenity.StringEditor; }], ['TicketId', function () { return Serenity.IntegerEditor; }], ['TotalAmount', function () { return Serenity.DecimalEditor; }], ['TotalAmountPaid', function () { return Serenity.DecimalEditor; }], ['TotalAmountLeft', function () { return Serenity.DecimalEditor; }], ['HasTransactionsDetails', function () { return Serenity.BooleanEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['IsIntegerTrailingOrderIdWithPrefixPo', function () { return Serenity.BooleanEditor; }], ['Status', function () { return Serenity.StringEditor; }], ['IsOpen', function () { return Serenity.BooleanEditor; }], ['IsInProgress', function () { return Serenity.BooleanEditor; }], ['IsFullyReceived', function () { return Serenity.BooleanEditor; }], ['IsFullyPaid', function () { return Serenity.BooleanEditor; }], ['IsAdvanced', function () { return Serenity.BooleanEditor; }], ['Tax', function () { return Serenity.DecimalEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(TransactionForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionRow;
        (function (TransactionRow) {
            TransactionRow.idProperty = 'TransactionId';
            TransactionRow.nameProperty = 'OrderId';
            TransactionRow.localTextPrefix = 'BusinessObjects.Transaction';
            TransactionRow.lookupKey = 'BusinessObjects.Transaction';
            function getLookup() {
                return Q.getLookup('BusinessObjects.Transaction');
            }
            TransactionRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TransactionRow.Fields || (TransactionRow.Fields = {}));
            ['TransactionId', 'OrderId', 'Date', 'CustomerId', 'TicketId', 'Subject', 'TotalAmount', 'TotalAmountPaid', 'TotalAmountLeft', 'HasTransactionsDetails', 'LocationId', 'IsIntegerTrailingOrderIdWithPrefixPo', 'Status', 'IsOpen', 'IsInProgress', 'IsFullyReceived', 'IsFullyPaid', 'IsAdvanced', 'Tax', 'Discount', 'LocationAccountId', 'LocationDate', 'LocationPhoneNumber', 'LocationEmail', 'LocationWebsite', 'LocationLocationName', 'LocationAddress', 'LocationUserId', 'LocationIsVisible', 'CustomerName'].forEach(function (x) { return Fields[x] = x; });
        })(TransactionRow = BusinessObjects.TransactionRow || (BusinessObjects.TransactionRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionService;
        (function (TransactionService) {
            TransactionService.baseUrl = 'BusinessObjects/Transaction';
            var Methods;
            (function (Methods) {
            })(Methods = TransactionService.Methods || (TransactionService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'GetNextNumber', 'NewTransaction', 'DetailTransaction'].forEach(function (x) {
                TransactionService[x] = function (r, s, o) { return Q.serviceRequest(TransactionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TransactionService.baseUrl + '/' + x;
            });
        })(TransactionService = BusinessObjects.TransactionService || (BusinessObjects.TransactionService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionSmsForm = (function (_super) {
            __extends(TransactionSmsForm, _super);
            function TransactionSmsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TransactionSmsForm.formKey = 'BusinessObjects.TransactionSms';
            return TransactionSmsForm;
        }(Serenity.PrefixedContext));
        BusinessObjects.TransactionSmsForm = TransactionSmsForm;
        [['TransactionId', function () { return Serenity.LookupEditor; }], ['SmsId', function () { return Serenity.IntegerEditor; }], ['Sent', function () { return Serenity.BooleanEditor; }], ['Delivered', function () { return Serenity.BooleanEditor; }], ['UnDelivered', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(TransactionSmsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionSmsRow;
        (function (TransactionSmsRow) {
            TransactionSmsRow.idProperty = 'TransactionSmsId';
            TransactionSmsRow.localTextPrefix = 'BusinessObjects.TransactionSms';
            TransactionSmsRow.lookupKey = 'BusinessObjects.TransactionSms';
            function getLookup() {
                return Q.getLookup('BusinessObjects.TransactionSms');
            }
            TransactionSmsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TransactionSmsRow.Fields || (TransactionSmsRow.Fields = {}));
            ['TransactionSmsId', 'TransactionId', 'SmsId', 'Sent', 'Delivered', 'UnDelivered', 'TransactionSmsDate', 'TransactionSmsMessage'].forEach(function (x) { return Fields[x] = x; });
        })(TransactionSmsRow = BusinessObjects.TransactionSmsRow || (BusinessObjects.TransactionSmsRow = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionSmsService;
        (function (TransactionSmsService) {
            TransactionSmsService.baseUrl = 'BusinessObjects/TransactionSms';
            var Methods;
            (function (Methods) {
            })(Methods = TransactionSmsService.Methods || (TransactionSmsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TransactionSmsService[x] = function (r, s, o) { return Q.serviceRequest(TransactionSmsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TransactionSmsService.baseUrl + '/' + x;
            });
        })(TransactionSmsService = BusinessObjects.TransactionSmsService || (BusinessObjects.TransactionSmsService = {}));
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = CustomerSupport.Membership || (CustomerSupport.Membership = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = CustomerSupport.Membership || (CustomerSupport.Membership = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['LoginAs', function () { return Serenity.StringEditor; }], ['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.StringEditor; }], ['RememberMe', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = CustomerSupport.Membership || (CustomerSupport.Membership = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = CustomerSupport.Membership || (CustomerSupport.Membership = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = CustomerSupport.Membership || (CustomerSupport.Membership = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var AccountDialog = (function (_super) {
            __extends(AccountDialog, _super);
            function AccountDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.AccountForm(_this.idPrefix);
                _this.element.addClass('flex-layout');
                return _this;
            }
            AccountDialog.prototype.getFormKey = function () { return Administration.AccountForm.formKey; };
            AccountDialog.prototype.getIdProperty = function () { return Administration.AccountRow.idProperty; };
            AccountDialog.prototype.getLocalTextPrefix = function () { return Administration.AccountRow.localTextPrefix; };
            AccountDialog.prototype.getNameProperty = function () { return Administration.AccountRow.nameProperty; };
            AccountDialog.prototype.getService = function () { return Administration.AccountService.baseUrl; };
            AccountDialog = __decorate([
                Serenity.Decorators.panel()
            ], AccountDialog);
            return AccountDialog;
        }(Serenity.EntityDialog));
        Administration.AccountDialog = AccountDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var AccountEditor = (function (_super) {
            __extends(AccountEditor, _super);
            function AccountEditor(container) {
                return _super.call(this, container) || this;
            }
            AccountEditor.prototype.getColumnsKey = function () { return 'Administration.Account'; };
            AccountEditor.prototype.getDialogType = function () { return Administration.AccountEditorDialog; };
            AccountEditor.prototype.getLocalTextPrefix = function () { return Administration.AccountRow.localTextPrefix; };
            AccountEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountEditor);
            return AccountEditor;
        }(CustomerSupport.Common.GridEditorBase));
        Administration.AccountEditor = AccountEditor;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var AccountEditorDialog = (function (_super) {
            __extends(AccountEditorDialog, _super);
            function AccountEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.AccountForm(_this.idPrefix);
                return _this;
            }
            AccountEditorDialog.prototype.getFormKey = function () { return Administration.AccountForm.formKey; };
            AccountEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.AccountRow.localTextPrefix; };
            AccountEditorDialog.prototype.getNameProperty = function () { return Administration.AccountRow.nameProperty; };
            AccountEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AccountEditorDialog);
            return AccountEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        Administration.AccountEditorDialog = AccountEditorDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var AccountGrid = (function (_super) {
            __extends(AccountGrid, _super);
            function AccountGrid(container) {
                return _super.call(this, container) || this;
            }
            AccountGrid.prototype.getColumnsKey = function () { return 'Administration.Account'; };
            AccountGrid.prototype.getDialogType = function () { return Administration.AccountDialog; };
            AccountGrid.prototype.getIdProperty = function () { return Administration.AccountRow.idProperty; };
            AccountGrid.prototype.getLocalTextPrefix = function () { return Administration.AccountRow.localTextPrefix; };
            AccountGrid.prototype.getService = function () { return Administration.AccountService.baseUrl; };
            AccountGrid.prototype.getButtons = function () {
                return null;
            };
            AccountGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountGrid);
            return AccountGrid;
        }(Serenity.EntityGrid));
        Administration.AccountGrid = AccountGrid;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var GetCodeDialog = (function (_super) {
            __extends(GetCodeDialog, _super);
            function GetCodeDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.GetCodeForm(_this.idPrefix);
                _this.set_dialogTitle("Get code (" + "this.form.LocationLocationName" + ")");
                _this.dialogTitle = "";
                return _this;
            }
            GetCodeDialog.prototype.getFormKey = function () { return Administration.GetCodeForm.formKey; };
            GetCodeDialog.prototype.getIdProperty = function () { return Administration.GetCodeRow.idProperty; };
            GetCodeDialog.prototype.getLocalTextPrefix = function () { return Administration.GetCodeRow.localTextPrefix; };
            GetCodeDialog.prototype.getNameProperty = function () { return Administration.GetCodeRow.nameProperty; };
            GetCodeDialog.prototype.getService = function () { return Administration.GetCodeService.baseUrl; };
            GetCodeDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return buttons;
            };
            GetCodeDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //Serenity.EditorUtils.setReadonly(this.form.LocationId.element, true);
                this.deleteButton.hide();
            };
            GetCodeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], GetCodeDialog);
            return GetCodeDialog;
        }(Serenity.EntityDialog));
        Administration.GetCodeDialog = GetCodeDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var GetCodeEditor = (function (_super) {
            __extends(GetCodeEditor, _super);
            function GetCodeEditor(container) {
                return _super.call(this, container) || this;
            }
            GetCodeEditor.prototype.getColumnsKey = function () { return 'Administration.GetCode'; };
            GetCodeEditor.prototype.getDialogType = function () { return Administration.GetCodeEditorDialog; };
            GetCodeEditor.prototype.getLocalTextPrefix = function () { return Administration.GetCodeRow.localTextPrefix; };
            GetCodeEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], GetCodeEditor);
            return GetCodeEditor;
        }(CustomerSupport.Common.GridEditorBase));
        Administration.GetCodeEditor = GetCodeEditor;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var GetCodeEditorDialog = (function (_super) {
            __extends(GetCodeEditorDialog, _super);
            function GetCodeEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.GetCodeForm(_this.idPrefix);
                return _this;
            }
            GetCodeEditorDialog.prototype.getFormKey = function () { return Administration.GetCodeForm.formKey; };
            GetCodeEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.GetCodeRow.localTextPrefix; };
            GetCodeEditorDialog.prototype.getNameProperty = function () { return Administration.GetCodeRow.nameProperty; };
            GetCodeEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], GetCodeEditorDialog);
            return GetCodeEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        Administration.GetCodeEditorDialog = GetCodeEditorDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var GetCodeGrid = (function (_super) {
            __extends(GetCodeGrid, _super);
            function GetCodeGrid(container) {
                return _super.call(this, container) || this;
            }
            GetCodeGrid.prototype.getColumnsKey = function () { return 'Administration.GetCode'; };
            GetCodeGrid.prototype.getDialogType = function () { return Administration.GetCodeDialog; };
            GetCodeGrid.prototype.getIdProperty = function () { return Administration.GetCodeRow.idProperty; };
            GetCodeGrid.prototype.getLocalTextPrefix = function () { return Administration.GetCodeRow.localTextPrefix; };
            GetCodeGrid.prototype.getService = function () { return Administration.GetCodeService.baseUrl; };
            GetCodeGrid.prototype.getButtons = function () {
                return null;
            };
            GetCodeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GetCodeGrid);
            return GetCodeGrid;
        }(Serenity.EntityGrid));
        Administration.GetCodeGrid = GetCodeGrid;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LocationDialog = (function (_super) {
            __extends(LocationDialog, _super);
            function LocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LocationForm(_this.idPrefix);
                return _this;
            }
            LocationDialog.prototype.getFormKey = function () { return Administration.LocationForm.formKey; };
            LocationDialog.prototype.getIdProperty = function () { return Administration.LocationRow.idProperty; };
            LocationDialog.prototype.getLocalTextPrefix = function () { return Administration.LocationRow.localTextPrefix; };
            LocationDialog.prototype.getNameProperty = function () { return Administration.LocationRow.nameProperty; };
            LocationDialog.prototype.getService = function () { return Administration.LocationService.baseUrl; };
            LocationDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "undo-delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "localization-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "clone-button"; }), 1);
                return buttons;
            };
            LocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], LocationDialog);
            return LocationDialog;
        }(Serenity.EntityDialog));
        Administration.LocationDialog = LocationDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LocationEditor = (function (_super) {
            __extends(LocationEditor, _super);
            function LocationEditor(container) {
                return _super.call(this, container) || this;
            }
            LocationEditor.prototype.getColumnsKey = function () { return 'Administration.Location'; };
            LocationEditor.prototype.getDialogType = function () { return Administration.LocationEditorDialog; };
            LocationEditor.prototype.getLocalTextPrefix = function () { return Administration.LocationRow.localTextPrefix; };
            LocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationEditor);
            return LocationEditor;
        }(CustomerSupport.Common.GridEditorBase));
        Administration.LocationEditor = LocationEditor;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LocationEditorDialog = (function (_super) {
            __extends(LocationEditorDialog, _super);
            function LocationEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LocationForm(_this.idPrefix);
                return _this;
            }
            LocationEditorDialog.prototype.getFormKey = function () { return Administration.LocationForm.formKey; };
            LocationEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.LocationRow.localTextPrefix; };
            LocationEditorDialog.prototype.getNameProperty = function () { return Administration.LocationRow.nameProperty; };
            LocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], LocationEditorDialog);
            return LocationEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        Administration.LocationEditorDialog = LocationEditorDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LocationGrid = (function (_super) {
            __extends(LocationGrid, _super);
            function LocationGrid(container) {
                return _super.call(this, container) || this;
            }
            LocationGrid.prototype.getColumnsKey = function () { return 'Administration.Location'; };
            LocationGrid.prototype.getDialogType = function () { return Administration.LocationDialog; };
            LocationGrid.prototype.getIdProperty = function () { return Administration.LocationRow.idProperty; };
            LocationGrid.prototype.getLocalTextPrefix = function () { return Administration.LocationRow.localTextPrefix; };
            LocationGrid.prototype.getService = function () { return Administration.LocationService.baseUrl; };
            LocationGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                return btns;
            };
            LocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationGrid);
            return LocationGrid;
        }(Serenity.EntityGrid));
        Administration.LocationGrid = LocationGrid;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var LocationListFormatter = (function () {
            function LocationListFormatter() {
            }
            LocationListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length) {
                    if (ctx.value) {
                        return Q.htmlEncode(Administration.LocationRow.getLookup().itemById[ctx.value].LocationName);
                    }
                    else
                        return "";
                }
                var byId = Administration.LocationRow.getLookup().itemById;
                return idList.map(function (x) {
                    var g = byId[x];
                    if (!g)
                        return x.toString();
                    return Q.htmlEncode(g.LocationName);
                }).join(", ");
            };
            LocationListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], LocationListFormatter);
            return LocationListFormatter;
        }());
        Administration.LocationListFormatter = LocationListFormatter;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            RoleGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                return btns;
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleLocationDialog = (function (_super) {
            __extends(RoleLocationDialog, _super);
            function RoleLocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleLocationForm(_this.idPrefix);
                return _this;
            }
            RoleLocationDialog.prototype.getFormKey = function () { return Administration.RoleLocationForm.formKey; };
            RoleLocationDialog.prototype.getIdProperty = function () { return Administration.RoleLocationRow.idProperty; };
            RoleLocationDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleLocationRow.localTextPrefix; };
            RoleLocationDialog.prototype.getService = function () { return Administration.RoleLocationService.baseUrl; };
            RoleLocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RoleLocationDialog);
            return RoleLocationDialog;
        }(Serenity.EntityDialog));
        Administration.RoleLocationDialog = RoleLocationDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleLocationEditor = (function (_super) {
            __extends(RoleLocationEditor, _super);
            function RoleLocationEditor(container) {
                return _super.call(this, container) || this;
            }
            RoleLocationEditor.prototype.getColumnsKey = function () { return 'Administration.RoleLocation'; };
            RoleLocationEditor.prototype.getDialogType = function () { return Administration.RoleLocationEditorDialog; };
            RoleLocationEditor.prototype.getLocalTextPrefix = function () { return Administration.RoleLocationRow.localTextPrefix; };
            RoleLocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleLocationEditor);
            return RoleLocationEditor;
        }(CustomerSupport.Common.GridEditorBase));
        Administration.RoleLocationEditor = RoleLocationEditor;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleLocationEditorDialog = (function (_super) {
            __extends(RoleLocationEditorDialog, _super);
            function RoleLocationEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleLocationForm(_this.idPrefix);
                return _this;
            }
            RoleLocationEditorDialog.prototype.getFormKey = function () { return Administration.RoleLocationForm.formKey; };
            RoleLocationEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleLocationRow.localTextPrefix; };
            RoleLocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RoleLocationEditorDialog);
            return RoleLocationEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        Administration.RoleLocationEditorDialog = RoleLocationEditorDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleLocationGrid = (function (_super) {
            __extends(RoleLocationGrid, _super);
            function RoleLocationGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleLocationGrid.prototype.getColumnsKey = function () { return 'Administration.RoleLocation'; };
            RoleLocationGrid.prototype.getDialogType = function () { return Administration.RoleLocationDialog; };
            RoleLocationGrid.prototype.getIdProperty = function () { return Administration.RoleLocationRow.idProperty; };
            RoleLocationGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleLocationRow.localTextPrefix; };
            RoleLocationGrid.prototype.getService = function () { return Administration.RoleLocationService.baseUrl; };
            RoleLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleLocationGrid);
            return RoleLocationGrid;
        }(Serenity.EntityGrid));
        Administration.RoleLocationGrid = RoleLocationGrid;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            UserGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                return btns;
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = CustomerSupport.Authorization || (CustomerSupport.Authorization = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserLocationDialog = (function (_super) {
            __extends(UserLocationDialog, _super);
            function UserLocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.UserLocationForm(_this.idPrefix);
                return _this;
            }
            UserLocationDialog.prototype.getFormKey = function () { return Administration.UserLocationForm.formKey; };
            UserLocationDialog.prototype.getIdProperty = function () { return Administration.UserLocationRow.idProperty; };
            UserLocationDialog.prototype.getLocalTextPrefix = function () { return Administration.UserLocationRow.localTextPrefix; };
            UserLocationDialog.prototype.getService = function () { return Administration.UserLocationService.baseUrl; };
            UserLocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], UserLocationDialog);
            return UserLocationDialog;
        }(Serenity.EntityDialog));
        Administration.UserLocationDialog = UserLocationDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserLocationEditor = (function (_super) {
            __extends(UserLocationEditor, _super);
            function UserLocationEditor(container) {
                return _super.call(this, container) || this;
            }
            UserLocationEditor.prototype.getColumnsKey = function () { return 'Administration.UserLocation'; };
            UserLocationEditor.prototype.getDialogType = function () { return Administration.UserLocationEditorDialog; };
            UserLocationEditor.prototype.getLocalTextPrefix = function () { return Administration.UserLocationRow.localTextPrefix; };
            UserLocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], UserLocationEditor);
            return UserLocationEditor;
        }(CustomerSupport.Common.GridEditorBase));
        Administration.UserLocationEditor = UserLocationEditor;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserLocationEditorDialog = (function (_super) {
            __extends(UserLocationEditorDialog, _super);
            function UserLocationEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.UserLocationForm(_this.idPrefix);
                return _this;
            }
            UserLocationEditorDialog.prototype.getFormKey = function () { return Administration.UserLocationForm.formKey; };
            UserLocationEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.UserLocationRow.localTextPrefix; };
            UserLocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], UserLocationEditorDialog);
            return UserLocationEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        Administration.UserLocationEditorDialog = UserLocationEditorDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserLocationGrid = (function (_super) {
            __extends(UserLocationGrid, _super);
            function UserLocationGrid(container) {
                return _super.call(this, container) || this;
            }
            UserLocationGrid.prototype.getColumnsKey = function () { return 'Administration.UserLocation'; };
            UserLocationGrid.prototype.getDialogType = function () { return Administration.UserLocationDialog; };
            UserLocationGrid.prototype.getIdProperty = function () { return Administration.UserLocationRow.idProperty; };
            UserLocationGrid.prototype.getLocalTextPrefix = function () { return Administration.UserLocationRow.localTextPrefix; };
            UserLocationGrid.prototype.getService = function () { return Administration.UserLocationService.baseUrl; };
            UserLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserLocationGrid);
            return UserLocationGrid;
        }(Serenity.EntityGrid));
        Administration.UserLocationGrid = UserLocationGrid;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                //var items = RoleRow.getLookup().items
                var items = Q.getLookup("Administration.RoleLookup").items;
                return items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = CustomerSupport.Administration || (CustomerSupport.Administration = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ActionLogDialog = (function (_super) {
            __extends(ActionLogDialog, _super);
            function ActionLogDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.ActionLogForm(_this.idPrefix);
                return _this;
            }
            ActionLogDialog.prototype.getFormKey = function () { return BusinessObjects.ActionLogForm.formKey; };
            ActionLogDialog.prototype.getIdProperty = function () { return BusinessObjects.ActionLogRow.idProperty; };
            ActionLogDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ActionLogRow.localTextPrefix; };
            ActionLogDialog.prototype.getNameProperty = function () { return BusinessObjects.ActionLogRow.nameProperty; };
            ActionLogDialog.prototype.getService = function () { return BusinessObjects.ActionLogService.baseUrl; };
            ActionLogDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                // We could also remove delete button here, but for demonstration 
                // purposes we'll hide it in another method (updateInterface)
                // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
                return buttons;
            };
            ActionLogDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ActionLogDialog);
            return ActionLogDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ActionLogDialog = ActionLogDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ActionLogEditor = (function (_super) {
            __extends(ActionLogEditor, _super);
            function ActionLogEditor(container) {
                return _super.call(this, container) || this;
            }
            ActionLogEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ActionLog'; };
            ActionLogEditor.prototype.getDialogType = function () { return BusinessObjects.ActionLogEditorDialog; };
            ActionLogEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ActionLogRow.localTextPrefix; };
            ActionLogEditor.prototype.getButtons = function () {
                return null;
            };
            ActionLogEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ActionLogEditor);
            return ActionLogEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.ActionLogEditor = ActionLogEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ActionLogEditorDialog = (function (_super) {
            __extends(ActionLogEditorDialog, _super);
            function ActionLogEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.ActionLogForm(_this.idPrefix);
                return _this;
            }
            ActionLogEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ActionLogForm.formKey; };
            ActionLogEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ActionLogRow.localTextPrefix; };
            ActionLogEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.ActionLogRow.nameProperty; };
            ActionLogEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ActionLogEditorDialog);
            return ActionLogEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.ActionLogEditorDialog = ActionLogEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ActionLogGrid = (function (_super) {
            __extends(ActionLogGrid, _super);
            function ActionLogGrid(container) {
                return _super.call(this, container) || this;
            }
            ActionLogGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ActionLog'; };
            ActionLogGrid.prototype.getDialogType = function () { return BusinessObjects.ActionLogDialog; };
            ActionLogGrid.prototype.getIdProperty = function () { return BusinessObjects.ActionLogRow.idProperty; };
            ActionLogGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ActionLogRow.localTextPrefix; };
            ActionLogGrid.prototype.getService = function () { return BusinessObjects.ActionLogService.baseUrl; };
            ActionLogGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ActionLogGrid);
            return ActionLogGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ActionLogGrid = ActionLogGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallDialog = (function (_super) {
            __extends(CallDialog, _super);
            function CallDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.CallForm(_this.idPrefix);
                return _this;
            }
            CallDialog.prototype.getFormKey = function () { return BusinessObjects.CallForm.formKey; };
            CallDialog.prototype.getIdProperty = function () { return BusinessObjects.CallRow.idProperty; };
            CallDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CallRow.localTextPrefix; };
            CallDialog.prototype.getNameProperty = function () { return BusinessObjects.CallRow.nameProperty; };
            CallDialog.prototype.getService = function () { return BusinessObjects.CallService.baseUrl; };
            CallDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CallDialog);
            return CallDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.CallDialog = CallDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallEditor = (function (_super) {
            __extends(CallEditor, _super);
            function CallEditor(container) {
                return _super.call(this, container) || this;
            }
            CallEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Call'; };
            CallEditor.prototype.getDialogType = function () { return BusinessObjects.CallEditorDialog; };
            CallEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.CallRow.localTextPrefix; };
            CallEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CallEditor);
            return CallEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.CallEditor = CallEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallEditorDialog = (function (_super) {
            __extends(CallEditorDialog, _super);
            function CallEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.CallForm(_this.idPrefix);
                return _this;
            }
            CallEditorDialog.prototype.getFormKey = function () { return BusinessObjects.CallForm.formKey; };
            CallEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CallRow.localTextPrefix; };
            CallEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.CallRow.nameProperty; };
            CallEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CallEditorDialog);
            return CallEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.CallEditorDialog = CallEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallGrid = (function (_super) {
            __extends(CallGrid, _super);
            function CallGrid(container) {
                return _super.call(this, container) || this;
            }
            CallGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Call'; };
            CallGrid.prototype.getDialogType = function () { return BusinessObjects.CallDialog; };
            CallGrid.prototype.getIdProperty = function () { return BusinessObjects.CallRow.idProperty; };
            CallGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.CallRow.localTextPrefix; };
            CallGrid.prototype.getService = function () { return BusinessObjects.CallService.baseUrl; };
            CallGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CallGrid);
            return CallGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.CallGrid = CallGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallProcessDialog = (function (_super) {
            __extends(CallProcessDialog, _super);
            function CallProcessDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.CallProcessForm(_this.idPrefix);
                return _this;
            }
            CallProcessDialog.prototype.getFormKey = function () { return BusinessObjects.CallProcessForm.formKey; };
            CallProcessDialog.prototype.getIdProperty = function () { return BusinessObjects.CallProcessRow.idProperty; };
            CallProcessDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CallProcessRow.localTextPrefix; };
            CallProcessDialog.prototype.getNameProperty = function () { return BusinessObjects.CallProcessRow.nameProperty; };
            CallProcessDialog.prototype.getService = function () { return BusinessObjects.CallProcessService.baseUrl; };
            CallProcessDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CallProcessDialog);
            return CallProcessDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.CallProcessDialog = CallProcessDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallProcessEditor = (function (_super) {
            __extends(CallProcessEditor, _super);
            function CallProcessEditor(container) {
                return _super.call(this, container) || this;
            }
            CallProcessEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.CallProcess'; };
            CallProcessEditor.prototype.getDialogType = function () { return BusinessObjects.CallProcessEditorDialog; };
            CallProcessEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.CallProcessRow.localTextPrefix; };
            CallProcessEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CallProcessEditor);
            return CallProcessEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.CallProcessEditor = CallProcessEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallProcessEditorDialog = (function (_super) {
            __extends(CallProcessEditorDialog, _super);
            function CallProcessEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.CallProcessForm(_this.idPrefix);
                return _this;
            }
            CallProcessEditorDialog.prototype.getFormKey = function () { return BusinessObjects.CallProcessForm.formKey; };
            CallProcessEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CallProcessRow.localTextPrefix; };
            CallProcessEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.CallProcessRow.nameProperty; };
            CallProcessEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CallProcessEditorDialog);
            return CallProcessEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.CallProcessEditorDialog = CallProcessEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CallProcessGrid = (function (_super) {
            __extends(CallProcessGrid, _super);
            function CallProcessGrid(container) {
                return _super.call(this, container) || this;
            }
            CallProcessGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.CallProcess'; };
            CallProcessGrid.prototype.getDialogType = function () { return BusinessObjects.CallProcessDialog; };
            CallProcessGrid.prototype.getIdProperty = function () { return BusinessObjects.CallProcessRow.idProperty; };
            CallProcessGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.CallProcessRow.localTextPrefix; };
            CallProcessGrid.prototype.getService = function () { return BusinessObjects.CallProcessService.baseUrl; };
            CallProcessGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CallProcessGrid);
            return CallProcessGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.CallProcessGrid = CallProcessGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Administration/User/Authentication/Authorization.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerDialog = (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BusinessObjects.CustomerForm(_this.idPrefix);
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Ticket_Read)) {
                    _this.custometTicketsGrid = new BusinessObjects.CustomerTicketsGrid(_this.byId("TicketGrid"));
                }
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Sms_Read)) {
                    _this.customerSms = new BusinessObjects.CustomerSmsGrid(_this.byId("CustomerSms"));
                }
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Transaction_Read)) {
                    _this.customerTrxnGrid = new BusinessObjects.CustomerTransactionGrid(_this.byId("CustomerTransactionGrid"));
                }
                _this.tabs.bind("tabsactivate", function () { return _this.arrange(); });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return BusinessObjects.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return BusinessObjects.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return BusinessObjects.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return BusinessObjects.CustomerService.baseUrl; };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Ticket_Read)) {
                    this.custometTicketsGrid.customerID = entity.CustomerId;
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Tickets", this.isNewOrDeleted());
                }
                else {
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Tickets", true);
                }
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Sms_Read)) {
                    this.customerSms.customerID = entity.CustomerId;
                    //this.customerSms.phoneNumber =  CustomerRow.getLookup().items.filter(x => x.CustomerId === entity.CustomerId)[0].PhoneNumber
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", this.isNewOrDeleted());
                }
                else {
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", true);
                }
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Transaction_Read)) {
                    this.customerTrxnGrid.customerID = entity.CustomerId;
                    Serenity.TabsExtensions.setDisabled(this.tabs, "CustomerTransaction", this.isNewOrDeleted());
                }
                else {
                    Serenity.TabsExtensions.setDisabled(this.tabs, "CustomerTransaction", true);
                }
                BusinessObjects.GlobalScripts.CustomerId = entity.CustomerId;
            };
            CustomerDialog.prototype.onSaveSuccess = function () {
                if (!this.isNew()) {
                    //alert('About to reload')
                    Q.reloadLookup("BusinessObjects.Customer");
                }
            };
            CustomerDialog.prototype.updateInterface = function () {
                if (!Q.Authorization.hasPermission(BusinessObjects.GlobalScripts.Customer_Update)) {
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                }
            };
            CustomerDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                if (!Q.Authorization.hasPermission(BusinessObjects.GlobalScripts.Customer_Update)) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                }
                if (!Q.Authorization.hasPermission(BusinessObjects.GlobalScripts.Customer_Delete)) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "delete-button"; }), 1);
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "undo-delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "localization-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "clone-button"; }), 1);
                return buttons;
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.CustomerDialog = CustomerDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerEditor = (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(container) {
                return _super.call(this, container) || this;
            }
            CustomerEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Customer'; };
            CustomerEditor.prototype.getDialogType = function () { return BusinessObjects.CustomerEditorDialog; };
            CustomerEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerRow.localTextPrefix; };
            CustomerEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerEditor);
            return CustomerEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.CustomerEditor = CustomerEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerEditorDialog = (function (_super) {
            __extends(CustomerEditorDialog, _super);
            function CustomerEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.CustomerForm(_this.idPrefix);
                return _this;
            }
            CustomerEditorDialog.prototype.getFormKey = function () { return BusinessObjects.CustomerForm.formKey; };
            CustomerEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerRow.localTextPrefix; };
            CustomerEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.CustomerRow.nameProperty; };
            CustomerEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CustomerEditorDialog);
            return CustomerEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.CustomerEditorDialog = CustomerEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerFormLoader = (function () {
            function CustomerFormLoader() {
                this.customerDtlFrm = kendo.observable({
                    custId: null,
                    date: new Date(),
                    fullNm: null,
                    genderVal: null,
                    genderSrc: BusinessObjects.GlobalScripts.GetGender(),
                    dob: null,
                    phnNum: null,
                    email: null,
                    address: null,
                    loctnSrc: Q.getLookup("Administration.LocationLookup").items,
                    loctnVal: null,
                    submitBtnTxt: "Submit",
                    getObject: function () {
                        var validator = $("#customer-dtl-form").kendoValidator().data("kendoValidator");
                        if (validator.validate()) {
                            var gender = this.get("genderVal") != null ? this.get("genderVal").value : null;
                            var loctnVal = this.get("loctnVal") != null ? this.get("loctnVal").LocationId : null;
                            if (this.get("submitBtnTxt") == "Submit") {
                                BusinessObjects.CustomerService.Create({ Entity: { LocationId: loctnVal, Date: this.get("date"), FullName: this.get("fullNm"), Sex: gender, DateOfBirth: this.get("dob"), PhoneNumber: this.get("phnNum"), Email: this.get("email"), Address: this.get("address") } }, function (res) {
                                    Q.notifySuccess("Customer account successfully created");
                                    CustomerFormLoader.CustomerFormLoaderRef.HasAccount();
                                });
                            }
                            else {
                                BusinessObjects.CustomerService.Update({ Entity: { CustomerId: this.get("custId"), LocationId: loctnVal, Date: this.get("date"), FullName: this.get("fullNm"), Sex: gender, DateOfBirth: this.get("dob"), PhoneNumber: this.get("phnNum"), Email: this.get("email"), Address: this.get("address") } }, function (res) {
                                    Q.notifySuccess("Customer update successful");
                                });
                            }
                        }
                        else {
                            Q.notifyWarning("Some fields are required. Please check.");
                        }
                    },
                    setObject: function (obj) {
                        this.set("custId", obj.Entity.CustomerId);
                        this.set("date", obj.Entity.Date);
                        this.set("fullNm", obj.Entity.FullName);
                        this.set("phnNum", obj.Entity.PhoneNumber);
                        this.set("loctnVal", obj.Entity.LocationId);
                        this.set("email", (obj.Entity.Email == undefined) ? null : obj.Entity.Email);
                    }
                }); //Ends this.customerList
                kendo.bind($("#customer-dtl-form"), this.customerDtlFrm);
                CustomerFormLoader.custFormStatic = this.customerDtlFrm;
                CustomerFormLoader.CustomerFormLoaderRef = this;
            }
            CustomerFormLoader.prototype.Load = function (customerId) {
                var _this = this;
                if (customerId != undefined) {
                    CustomerFormLoader.custFormStatic.set("submitBtnTxt", "Update");
                    BusinessObjects.CustomerService.Retrieve({ EntityId: customerId }, function (res) {
                        CustomerFormLoader.custFormStatic.setObject(res);
                        _this.HasAccount();
                    });
                }
                $("#new-customer-tab").kendoTabStrip({});
            };
            CustomerFormLoader.prototype.HasAccount = function () {
                $("#new-customer-tab > ul > li:nth-child(2)").removeClass("k-state-disabled");
                $("#new-customer-tab > ul > li:nth-child(2)").addClass("k-state-enabled");
                $("#new-customer-tab > ul > li:nth-child(4)").removeClass("k-state-disabled");
                $("#new-customer-tab > ul > li:nth-child(4)").addClass("k-state-enabled");
            };
            return CustomerFormLoader;
        }());
        BusinessObjects.CustomerFormLoader = CustomerFormLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerFormLoaderAutoGen = (function () {
            function CustomerFormLoaderAutoGen(bondClass) {
                CustomerFormLoaderAutoGen.LoaderClass = this;
                this.bondClass = bondClass;
                this.KendoDataSource();
                this.observ = kendo.observable({
                    AddressFld: null,
                    CustomerIdFld: null,
                    DateFld: new Date(),
                    DateOfBirthFld: new Date(),
                    EmailFld: null,
                    FullNameFld: null,
                    LocationIddtSrc: Q.getLookup('Administration.LocationLookup').items,
                    LocationIdFld: null,
                    PhoneNumberFld: null,
                    SexFld: null,
                    getObject: function () {
                        return {
                            Address: this.get('AddressFld') != null ? this.get('AddressFld') : null,
                            CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                            Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                            DateOfBirth: this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
                            Email: this.get('EmailFld') != null ? this.get('EmailFld') : null,
                            FullName: this.get('FullNameFld') != null ? this.get('FullNameFld') : null,
                            LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                            PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                            Sex: this.get('SexFld') != null ? this.get('SexFld') : null
                        };
                    },
                    setObject: function (obj) {
                        this.set('AddressFld', obj.Entity.Address);
                        this.set('CustomerIdFld', obj.Entity.CustomerId);
                        this.set('DateFld', obj.Entity.Date);
                        this.set('DateOfBirthFld', obj.Entity.DateOfBirth);
                        this.set('EmailFld', obj.Entity.Email);
                        this.set('FullNameFld', obj.Entity.FullName);
                        this.set('LocationIdFld', obj.Entity.LocationId);
                        this.set('PhoneNumberFld', obj.Entity.PhoneNumber);
                        this.set('SexFld', obj.Entity.Sex);
                    },
                    submit: function () {
                        var _this = this;
                        BusinessObjects.CustomerService.Create({
                            Entity: {
                                Address: this.get('AddressFld') != null ? this.get('AddressFld') : null,
                                CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                                Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                                DateOfBirth: this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
                                Email: this.get('EmailFld') != null ? this.get('EmailFld') : null,
                                FullName: this.get('FullNameFld') != null ? this.get('FullNameFld') : null,
                                LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                                PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                                Sex: this.get('SexFld') != null ? this.get('SexFld') : null
                            }
                        }, function (res) { _this.set('CustomerId', res.EntityId); _this.bondClass.AfterSave('Customer', res.EntityId, _this); });
                    }
                });
            }
            CustomerFormLoaderAutoGen.prototype.GetObservable = function () {
                return this.observ;
            };
            CustomerFormLoaderAutoGen.prototype.Read = function (criteria, equalityFilter, includeColumns) {
                var _this = this;
                var requestObj = null;
                if (criteria != undefined) {
                    requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
                }
                else if (equalityFilter != undefined) {
                    requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
                }
                else {
                    requestObj = { IncludeColumns: includeColumns };
                }
                if (this.bondClass.BeforeRead('Customer', requestObj)) {
                    BusinessObjects.CustomerService.List(requestObj, function (res) {
                        _this.bondClass.AfterRead('Customer', res);
                    });
                }
            };
            CustomerFormLoaderAutoGen.prototype.DetailLoad = function (entityId) {
                var _this = this;
                if (this.bondClass.BeforeDetailLoad('Customer', entityId)) {
                    BusinessObjects.CustomerService.Retrieve({ EntityId: entityId }, function (res) {
                        _this.GetObservable().setObject(res);
                        _this.bondClass.AfterDetailLoad('Customer', res);
                    }, { blockUI: false, onError: function (response) { _this.bondClass.OnError('Customer', 'DetailLoad', response); } });
                }
            };
            CustomerFormLoaderAutoGen.prototype.Create = function () {
                if (this.bondClass.BeforeSave('Customer', this))
                    this.observ.submit();
            };
            CustomerFormLoaderAutoGen.prototype.GetPrimaryKeyId = function () { return this.observ.get('CustomerId'); };
            CustomerFormLoaderAutoGen.prototype.GetObject = function () {
                var obj = this.observ.getObject();
                var obj_1 = ({
                    Address: obj.Address,
                    CustomerId: obj.CustomerId,
                    Date: obj.Date,
                    DateOfBirth: obj.DateOfBirth,
                    Email: obj.Email,
                    FullName: obj.FullName,
                    LocationId: obj.LocationId,
                    PhoneNumber: obj.PhoneNumber,
                    Sex: obj.Sex
                });
                return obj_1;
            };
            CustomerFormLoaderAutoGen.prototype.KendoDataSource = function () {
                this.kendoDataSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: 'Entities',
                        total: 'TotalCount',
                        model: {
                            id: 'TicketId',
                            fields: {
                                Address: { type: 'string' },
                                CustomerId: { type: 'string' },
                                Date: { type: 'string' },
                                DateOfBirth: { type: 'string' },
                                Email: { type: 'string' },
                                FullName: { type: 'string' },
                                LocationId: { type: 'string' },
                                LocationLocationName: { type: 'string' },
                                PhoneNumber: { type: 'string' },
                                Sex: { type: 'string' }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            var _this = this;
                            if (options.data.Criteria != undefined) {
                                BusinessObjects.TicketService.List({ Criteria: options.data.Criteria, IncludeColumns: ['LocationLocationName'] }, function (res) {
                                    options.success(res);
                                    CustomerFormLoaderAutoGen.LoaderClass.bondClass.AfterRead('Customer-Kendo-Data-Source', res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.TicketService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: ['LocationLocationName'] }, function (res) {
                                    options.success(res);
                                    _this.bondClass.AfterRead('Customer-Kendo-Data-Source', res);
                                });
                            }
                            else {
                                BusinessObjects.TicketService.List({ IncludeColumns: ['LocationLocationName'] }, function (res) {
                                    options.success(res);
                                    _this.bondClass.AfterRead('Customer-Kendo-Data-Source', res);
                                });
                            }
                        }
                    },
                }); //Ends
            };
            CustomerFormLoaderAutoGen.prototype.GetKendoDataSource = function () {
                return this.kendoDataSrc;
            };
            return CustomerFormLoaderAutoGen;
        }());
        BusinessObjects.CustomerFormLoaderAutoGen = CustomerFormLoaderAutoGen;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerFormLoaderTemplate = (function () {
            function CustomerFormLoaderTemplate() {
            }
            CustomerFormLoaderTemplate.prototype.GetCustomerLookUp = function () {
                return Q.getLookup("Administration.CustomerLocationLookup").items;
            };
            CustomerFormLoaderTemplate.prototype.GetCustomer = function (customerId) {
                BusinessObjects.CustomerService.Retrieve({ EntityId: customerId }, function (res) {
                    return res;
                });
            };
            return CustomerFormLoaderTemplate;
        }());
        BusinessObjects.CustomerFormLoaderTemplate = CustomerFormLoaderTemplate;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerGrid = (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Customer'; };
            CustomerGrid.prototype.getDialogType = function () { return BusinessObjects.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return BusinessObjects.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return BusinessObjects.CustomerService.baseUrl; };
            //     protected getSlickOptions(): Slick.GridOptions {
            //     let opt = super.getSlickOptions();
            //     opt.rowHeight = 150;
            //     return opt;
            // }
            CustomerGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                if (!Q.Authorization.hasPermission("Customer Support:Customer:Insert"))
                    btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "add-button"; }), 1);
                btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'BusinessObjects/Customer/ListExcel',
                    separator: true
                }));
                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }), this.getSms());
                return btns;
            };
            CustomerGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            }; //Ends getColumns
            CustomerGrid.prototype.getSms = function () {
                var _this = this;
                return {
                    title: 'Send SMS',
                    cssClass: 'send-button',
                    onClick: function () {
                        if (!_this.onViewSubmit()) {
                            return;
                        }
                        var selectedIDs = _this.rowSelection.getSelectedKeys();
                        if (selectedIDs.length == 0)
                            Q.notifyWarning("Please select some records to process");
                        else {
                            var sendSms = new BusinessObjects.SendSmsDialog();
                            $("#s-Page > div.s-BusinessObjects-SendSmsDialog > div.ui-dialog-buttonpane > div > button:nth-child(1)")
                                .click(function (evt) {
                                var requestObj = {
                                    PhoneNumbers: sendSms.phoneNumbers,
                                    Message: sendSms.message,
                                    LocationId: sendSms.locationID,
                                    CustomerIds: selectedIDs
                                };
                                var url = "BusinessObjects/Sms/CustomersSms";
                                Q.notifyInfo("Sending SMS ...");
                                Q.serviceRequest(url, requestObj, function (response) {
                                    Q.alert(response.Message);
                                    //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                    $(".refresh-button").click();
                                    //Q.notifySuccess("SMS sent");
                                });
                            });
                            sendSms.dialogOpen();
                        } //Ends the else block
                    }
                };
            }; //Ends getSms()
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.CustomerGrid = CustomerGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerListLoader = (function () {
            function CustomerListLoader() {
                this.customerListDtSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: "Entities",
                        total: "TotalCount",
                        model: {
                            id: "CustomerId",
                            fields: {
                                Date: { type: "date" }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            BusinessObjects.CustomerService.List({ Take: 20 }, function (res) {
                                //options.success(res);
                                options.success(res);
                            });
                            //options.success({ Entities: [{ CustomerId: 1, Subject: "Subj 1" }, { CustomerId: 2, Subject: "Subj 2" }], TotalCount: 2 })
                        },
                        create: function (options) {
                            // ClassNameService.Create({ Entity: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"CustomerId":0,', '')) },
                            //      res => {
                            //           options.success(res);
                            //   })
                        }
                    },
                }); //Ends
            }
            CustomerListLoader.prototype.Load = function () {
                $("#customer-list").kendoGrid({
                    dataSource: this.customerListDtSrc,
                    columns: [{ selectable: true, width: "50px" },
                        { field: "Date", format: "{0:MM/dd/yyyy}" },
                        { field: "FullName", title: "Name" },
                        {
                            field: "PhoneNumber", title: "Phone number"
                        },
                        { field: "Email", },
                        { title: "&nbsp;", template: '<a href="Customer/CustomerDetail?customerId=#:CustomerId#" type="button" class="btn"><i class="glyphicon glyphicon-edit"></i></a>', width: "100px" }
                    ],
                });
                $("#pager").kendoPager({
                    dataSource: this.customerListDtSrc,
                });
                $("#pager2").kendoPager({
                    dataSource: this.customerListDtSrc,
                });
            };
            return CustomerListLoader;
        }());
        BusinessObjects.CustomerListLoader = CustomerListLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketDialog = (function (_super) {
            __extends(TicketDialog, _super);
            function TicketDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BusinessObjects.TicketForm(_this.idPrefix);
                //this.byId('NoteROList').closest('.field').hide().end().appendTo(this.byId('TabNotes'))
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                // if(Authorization.hasPermission(GlobalScripts.Ticket_Update))        
                // {
                //     this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'))
                //     this.byId('CustomerSupport_BusinessObjects_NotesEditor61_Toolbar').hide();
                // }
                // else
                // {
                //     alert('About to render')
                //     this.byId('NoteListRO').closest('.field').hide().end().appendTo(this.byId('TabNotes'))
                // }
                //this.byId('CallDirection').closest('.field').hide().end().appendTo(this.byId('TabNotes')).disableSelection();
                CustomerSupport.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
                _this.form.CustomerId.element.on("change", function () {
                    var customerId = Q.toId(this.form.CustomerId.value);
                    if (customerId != null) {
                        var customers = BusinessObjects.CustomerRow.getLookup();
                        //alert(customers)
                        if (customers.itemById[customerId] != undefined) {
                            if (customers.itemById[customerId].PhoneNumber != undefined)
                                this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
                            else
                                this.form.PhoneNumber.value = '';
                        }
                        else {
                            Q.reloadLookup("BusinessObjects.Customer");
                            customers = BusinessObjects.CustomerRow.getLookup();
                            if (customers.itemById[customerId].PhoneNumber != undefined)
                                this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
                            else
                                this.form.PhoneNumber.value = '';
                        }
                    }
                    else
                        this.form.PhoneNumber.value = '';
                });
                _this.form.TicketIdString.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                return _this;
                //          this.form.CustomerId.changeSelect2(e => {
                //     var customerId = Q.toId(this.form.CustomerId.value);
                //     if (customerId != null) {
                //         var customers = CustomerRow.getLookup();
                //         alert(customers)
                //         if(customers.itemById[customerId] != undefined)
                //             this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
                //         else
                //         {
                //               alert('Reload');
                //                 Q.reloadLookup("BusinessObjects.Customer");
                //                 customers = BusinessObjects.CustomerRow.getLookup();
                //             this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
                //         }
                //     }
                // })
            } //Ends the constructor
            TicketDialog.prototype.getFormKey = function () { return BusinessObjects.TicketForm.formKey; };
            TicketDialog.prototype.getIdProperty = function () { return BusinessObjects.TicketRow.idProperty; };
            TicketDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketRow.localTextPrefix; };
            TicketDialog.prototype.getNameProperty = function () { return BusinessObjects.TicketRow.nameProperty; };
            TicketDialog.prototype.getService = function () { return BusinessObjects.TicketService.baseUrl; };
            TicketDialog.prototype.updateInterface = function () {
                if (!Q.Authorization.hasPermission(BusinessObjects.GlobalScripts.Ticket_Update)) {
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                }
                if (this.isNew()) { }
                else
                    Serenity.EditorUtils.setReadonly(this.form.TicketIdString.element, true);
            };
            TicketDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                if (!Q.Authorization.hasPermission("Customer Support:Ticket:Update")) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                }
                if (!Q.Authorization.hasPermission("Customer Support:Ticket:Delete")) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "delete-button"; }), 1);
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "undo-delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "localization-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "clone-button"; }), 1);
                return buttons;
            };
            TicketDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            TicketDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            Object.defineProperty(TicketDialog.prototype, "transactionID", {
                get: function () {
                    return parseInt(this.form.TransactionId.value);
                },
                set: function (value) {
                    this.form.TransactionId.value = value.toString();
                },
                enumerable: true,
                configurable: true
            });
            TicketDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
                // else
                //    Serenity.EditorUtils.setReadonly(this.form.TicketIdString.element, true);
                if (this.isNewOrDeleted()) {
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Notes", true);
                }
                else {
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Notes", false);
                } //Ends the else block
            };
            TicketDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.TicketIdString.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'ID_').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    BusinessObjects.TicketService.GetNextNumber({
                        Prefix: prefix,
                        Length: 8 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.TicketIdString.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.TicketIdString.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            TicketDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TicketDialog);
            return TicketDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.TicketDialog = TicketDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../Ticket/TicketDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerTicketsDialog = (function (_super) {
            __extends(CustomerTicketsDialog, _super);
            function CustomerTicketsDialog() {
                return _super.call(this) || this;
            }
            CustomerTicketsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //Serenity.EditorUtils.setReadOnly(this.form.SupplierId, true);
            };
            CustomerTicketsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerTicketsDialog);
            return CustomerTicketsDialog;
        }(BusinessObjects.TicketDialog));
        BusinessObjects.CustomerTicketsDialog = CustomerTicketsDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketGrid = (function (_super) {
            __extends(TicketGrid, _super);
            function TicketGrid(container) {
                return _super.call(this, container) || this;
            }
            TicketGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Ticket'; };
            TicketGrid.prototype.getDialogType = function () { return BusinessObjects.TicketTransactionDialog; };
            TicketGrid.prototype.getIdProperty = function () { return BusinessObjects.TicketRow.idProperty; };
            TicketGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketRow.localTextPrefix; };
            TicketGrid.prototype.getService = function () { return BusinessObjects.TicketService.baseUrl; };
            // protected addButtonClick(){
            //     // Q.alert('Show')
            //     // var dlg = new TicketDialog();
            //     // this.initDialog(dlg);
            //     // dlg.dialogOpen();
            // }
            // protected getSlickOptions(): Slick.GridOptions {
            //     let opt = super.getSlickOptions();
            //     opt.rowHeight = 150;
            //     return opt;
            // }
            TicketGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            TicketGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                columns.splice(1, 0, {
                    field: 'Date',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-details" title="view logs">&nbsp;</a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            }; //Ends getColumns
            TicketGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('view-details')) {
                        //this.editItem(item.TicketId);
                        var dlg = new BusinessObjects.TicketActionLogDialog();
                        dlg.loadByIdAndOpenDialog(item.TicketId);
                    }
                }
            }; //Ends onClick
            // protected onClick(e: JQueryEventObject, row: number, cell: number){
            //     e.preventDefault();
            //     var item = this.itemAt(row);
            //     var target = $(e.target)
            //     if(target.hasClass("s-BusinessObjects-TicketLink"))
            //     {
            //         var dlg = new TicketThreadDialog()
            //         this.initDialog(dlg);
            //         dlg.loadByIdAndOpenDialog(item.TicketId)
            //     }
            // }
            TicketGrid.prototype.getButtons = function () {
                var _this = this;
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                //var refreshbtn = btns.filter(x => x.cssClass == 'refresh-button')
                //btns.splice(Q.indexOf(btns, x => x.cssClass == 'refresh-button'), 1)
                btns.push(this.getAssignToAgentsBtn(), this.getActionsSettingsBtn());
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Sms_Read) && CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Sms_Insert))
                    btns.push(this.getSms());
                /*
            btns.push(this.getAssignToAgentsBtn(),
                this.getActionsSettingsBtn(),
                this.getSendAsMailBtn(),
                this.getForwardAsMailBtn())
                */
                //btns.push({cssClass : "refresh-button"})
                if (!Q.Authorization.hasPermission("Customer Support:Ticket:Insert"))
                    btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "add-button"; }), 1);
                btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'BusinessObjects/Ticket/ListExcel',
                    separator: true
                }));
                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return btns;
            }; //Ends getButtons
            TicketGrid.prototype.getAssignToAgentsBtn = function () {
                var _this = this;
                return {
                    title: 'Assign to agent',
                    cssClass: 'send-button',
                    onClick: function () {
                        if (!_this.onViewSubmit()) {
                            return;
                        }
                        var selectedIDs = _this.rowSelection.getSelectedKeys();
                        if (selectedIDs.length == 0)
                            Q.notifyWarning("Please select some records to process");
                        else {
                            var assignToAgentdlg = new BusinessObjects.AssignToAgentsDialog();
                            $("#s-Page > div.s-BusinessObjects-AssignToAgentsDialog > div.ui-dialog-buttonpane > div > button:nth-child(1)")
                                .click(function (evt) {
                                var requestObj = { LocationId: assignToAgentdlg.locationID,
                                    GroupId: assignToAgentdlg.groupID,
                                    AgentId: assignToAgentdlg.agentID,
                                    TicketIds: selectedIDs };
                                var url = "BusinessObjects/Ticket/AssignToAgents";
                                Q.serviceRequest(url, requestObj, function (response) {
                                    //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                    $(".refresh-button").click();
                                    Q.notifySuccess("Update successful");
                                });
                            });
                            assignToAgentdlg.dialogOpen();
                        }
                    }
                };
            };
            TicketGrid.prototype.getActionsSettingsBtn = function () {
                var _this = this;
                return {
                    title: 'Set Type, Priority, Status and Group',
                    cssClass: 'send-button',
                    onClick: function () {
                        if (!_this.onViewSubmit()) {
                            return;
                        }
                        var selectedIDs = selectedIDs = _this.rowSelection.getSelectedKeys();
                        if (selectedIDs.length == 0)
                            Q.notifyWarning("Please select some records to process");
                        else {
                            var actionsSetting = new BusinessObjects.ActionsSettingsDialog();
                            $("#s-Page > div.s-BusinessObjects-ActionsSettingsDialog > div.ui-dialog-buttonpane > div > button:nth-child(1)")
                                .click(function (evt) {
                                var requestObj = {
                                    Priority: actionsSetting.priorityID,
                                    Status: actionsSetting.statusID,
                                    Type: actionsSetting.typeID,
                                    LocationId: actionsSetting.locationID,
                                    GroupId: actionsSetting.groupID,
                                    AgentId: actionsSetting.agentID,
                                    TicketIds: selectedIDs
                                };
                                var url = "BusinessObjects/Ticket/ActionsSettings";
                                Q.serviceRequest(url, requestObj, function (response) {
                                    //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                    $(".refresh-button").click();
                                    Q.notifySuccess("Update successful");
                                });
                            });
                            actionsSetting.dialogOpen();
                        } //Ends the else block
                    }
                };
            }; //Ends getActionSettingsBtn()
            TicketGrid.prototype.getSms = function () {
                var _this = this;
                return {
                    title: 'Send SMS',
                    cssClass: 'send-button',
                    onClick: function () {
                        if (!_this.onViewSubmit()) {
                            return;
                        }
                        var selectedIDs = selectedIDs = _this.rowSelection.getSelectedKeys();
                        if (selectedIDs.length == 0)
                            Q.notifyWarning("Please select some records to process");
                        else {
                            var sendSms = new BusinessObjects.SendSmsDialog();
                            $("#s-Page > div.s-BusinessObjects-SendSmsDialog > div.ui-dialog-buttonpane > div > button:nth-child(1)")
                                .click(function (evt) {
                                var requestObj = {
                                    PhoneNumbers: sendSms.phoneNumbers,
                                    Message: sendSms.message,
                                    LocationId: sendSms.locationID,
                                    TicketIds: selectedIDs
                                };
                                var url = "BusinessObjects/Sms/TicketsSms";
                                Q.notifyInfo("Sending SMS ...");
                                Q.serviceRequest(url, requestObj, function (SmsResponse) {
                                    //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                    $(".refresh-button").click();
                                    Q.notifySuccess("SMS sent");
                                });
                            });
                            sendSms.dialogOpen();
                        } //Ends the else block
                    }
                };
            }; //Ends getSms()
            TicketGrid.prototype.getSendAsMailBtn = function () {
                var _this = this;
                return {
                    title: 'Send as mail',
                    cssClass: 'send-button',
                    onClick: function () {
                        if (!_this.onViewSubmit()) {
                            return;
                        }
                        var selectedIDs = selectedIDs = _this.rowSelection.getSelectedKeys();
                        if (selectedIDs.length == 0)
                            Q.notifyWarning("Please select some records to process");
                        else {
                            Q.notifyInfo("Send mail yet to be implemented");
                        } //Ends the else block
                    }
                };
            }; //Ends getSendAsMailBtn()
            TicketGrid.prototype.getForwardAsMailBtn = function () {
                var _this = this;
                return {
                    title: 'Forward as mail',
                    cssClass: 'send-button',
                    onClick: function () {
                        if (!_this.onViewSubmit()) {
                            return;
                        }
                        var selectedIDs = selectedIDs = _this.rowSelection.getSelectedKeys();
                        if (selectedIDs.length == 0)
                            Q.notifyWarning("Please select some records to process");
                        else {
                            var fwdAsMail = new BusinessObjects.ForwardAsMailDialog();
                            fwdAsMail.dialogOpen();
                        } //Ends the else block
                    }
                };
            }; //Ends getForwardAsMailBtn()
            TicketGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TicketGrid);
            return TicketGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.TicketGrid = TicketGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../Ticket/TicketGrid.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerTicketsGrid = (function (_super) {
            __extends(CustomerTicketsGrid, _super);
            function CustomerTicketsGrid(container) {
                return _super.call(this, container) || this;
            }
            //protected getDialogType(){ return CustomerTicketsDialog; }
            CustomerTicketsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.CustomerTicket'; };
            CustomerTicketsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerTicketsGrid.prototype.getGridCanLoad = function () {
                //return this._customerID != null;
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerTicketsGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID != value) {
                        this._customerID = value;
                        this.setEquality(BusinessObjects.TicketRow.Fields.CustomerId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerTicketsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerTicketsGrid);
            return CustomerTicketsGrid;
        }(BusinessObjects.TicketGrid));
        BusinessObjects.CustomerTicketsGrid = CustomerTicketsGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerTransactionGrid = (function (_super) {
            __extends(CustomerTransactionGrid, _super);
            function CustomerTransactionGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerTransactionGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Transaction'; };
            CustomerTransactionGrid.prototype.getDialogType = function () { return BusinessObjects.TransactionDialog; };
            CustomerTransactionGrid.prototype.getIdProperty = function () { return BusinessObjects.TransactionRow.idProperty; };
            CustomerTransactionGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionRow.localTextPrefix; };
            CustomerTransactionGrid.prototype.getService = function () { return BusinessObjects.TransactionService.baseUrl; };
            CustomerTransactionGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerId: this.customerID });
            };
            CustomerTransactionGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerTransactionGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerTransactionGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerTransactionGrid.prototype, "customerID", {
                get: function () {
                    return this._customerId;
                },
                set: function (value) {
                    if (this._customerId != value) {
                        this._customerId = value;
                        this.setEquality("CustomerId", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerTransactionGrid.prototype.getButtons = function () {
                var _this = this;
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'BusinessObjects/Transaction/ListExcel',
                    separator: true
                }));
                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return btns;
            }; //Ends getButtons
            CustomerTransactionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerTransactionGrid);
            return CustomerTransactionGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.CustomerTransactionGrid = CustomerTransactionGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        /**
         * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
         */
        var ProfileDialog = (function (_super) {
            __extends(ProfileDialog, _super);
            function ProfileDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BusinessObjects.CustomerForm(_this.idPrefix);
                _this.element.addClass('flex-layout');
                return _this;
            }
            ProfileDialog.prototype.getFormKey = function () { return BusinessObjects.CustomerForm.formKey; };
            ProfileDialog.prototype.getIdProperty = function () { return BusinessObjects.CustomerRow.idProperty; };
            ProfileDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerRow.localTextPrefix; };
            ProfileDialog.prototype.getNameProperty = function () { return BusinessObjects.CustomerRow.nameProperty; };
            ProfileDialog.prototype.getService = function () { return BusinessObjects.CustomerService.baseUrl; };
            ProfileDialog = __decorate([
                Serenity.Decorators.panel()
            ], ProfileDialog);
            return ProfileDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ProfileDialog = ProfileDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerSmsDialog = (function (_super) {
            __extends(CustomerSmsDialog, _super);
            function CustomerSmsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.CustomerSmsForm(_this.idPrefix);
                return _this;
            }
            CustomerSmsDialog.prototype.getFormKey = function () { return BusinessObjects.CustomerSmsForm.formKey; };
            CustomerSmsDialog.prototype.getIdProperty = function () { return BusinessObjects.CustomerSmsRow.idProperty; };
            CustomerSmsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerSmsRow.localTextPrefix; };
            CustomerSmsDialog.prototype.getService = function () { return BusinessObjects.CustomerSmsService.baseUrl; };
            CustomerSmsDialog.prototype.updateInterface = function () {
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
            };
            CustomerSmsDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "undo-delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "localization-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "clone-button"; }), 1);
                return buttons;
            };
            CustomerSmsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CustomerSmsDialog);
            return CustomerSmsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.CustomerSmsDialog = CustomerSmsDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerSmsEditor = (function (_super) {
            __extends(CustomerSmsEditor, _super);
            function CustomerSmsEditor(container) {
                return _super.call(this, container) || this;
            }
            CustomerSmsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.CustomerSms'; };
            CustomerSmsEditor.prototype.getDialogType = function () { return BusinessObjects.CustomerSmsEditorDialog; };
            CustomerSmsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerSmsRow.localTextPrefix; };
            CustomerSmsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerSmsEditor);
            return CustomerSmsEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.CustomerSmsEditor = CustomerSmsEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerSmsEditorDialog = (function (_super) {
            __extends(CustomerSmsEditorDialog, _super);
            function CustomerSmsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.CustomerSmsForm(_this.idPrefix);
                return _this;
            }
            CustomerSmsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.CustomerSmsForm.formKey; };
            CustomerSmsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerSmsRow.localTextPrefix; };
            CustomerSmsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CustomerSmsEditorDialog);
            return CustomerSmsEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.CustomerSmsEditorDialog = CustomerSmsEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerSmsGrid = (function (_super) {
            __extends(CustomerSmsGrid, _super);
            function CustomerSmsGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerSmsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.CustomerSms'; };
            CustomerSmsGrid.prototype.getDialogType = function () { return BusinessObjects.CustomerSmsDialog; };
            CustomerSmsGrid.prototype.getIdProperty = function () { return BusinessObjects.CustomerSmsRow.idProperty; };
            CustomerSmsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.CustomerSmsRow.localTextPrefix; };
            CustomerSmsGrid.prototype.getService = function () { return BusinessObjects.CustomerSmsService.baseUrl; };
            CustomerSmsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerSmsGrid.prototype.getGridCanLoad = function () {
                //return this._customerID != null;
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerSmsGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID != value) {
                        this._customerID = value;
                        this.setEquality("CustomerId", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CustomerSmsGrid.prototype, "phoneNumber", {
                get: function () {
                    return this._phoneNumber;
                },
                set: function (value) {
                    this._phoneNumber = value;
                },
                enumerable: true,
                configurable: true
            });
            CustomerSmsGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'add-button'; }), 1);
                btns.push(this.getSms());
                return btns;
            }; //Ends getButtons
            CustomerSmsGrid.prototype.getSms = function () {
                return {
                    title: 'Send SMS',
                    cssClass: 'send-button',
                    onClick: function () {
                        var sendSms = new BusinessObjects.SendSmsDialog();
                        $("#s-Page > div.s-BusinessObjects-SendSmsDialog > div.ui-dialog-buttonpane > div > button:nth-child(1)")
                            .click(function (evt) {
                            var requestObj = {
                                PhoneNumbers: sendSms.phoneNumbers,
                                Message: sendSms.message,
                                LocationId: sendSms.locationID,
                                CustomerId: BusinessObjects.GlobalScripts.CustomerId
                            };
                            var url = "BusinessObjects/Sms/CustomersSms";
                            Q.serviceRequest(url, requestObj, function (response) {
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n CustomerID:" +  response.CustomerIds.join(','))
                                $(".refresh-button").click();
                                //Q.notifySuccess("Update successful");
                                Q.alert(response.Message);
                            });
                        });
                        sendSms.dialogOpen();
                    }
                };
            }; //Ends getSms()
            CustomerSmsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerSmsGrid);
            return CustomerSmsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.CustomerSmsGrid = CustomerSmsGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerSMSListLoader = (function () {
            function CustomerSMSListLoader() {
                this.GridListDataSource();
                CustomerSMSListLoader.CustomerSMSListLoaderRef = this;
            }
            CustomerSMSListLoader.prototype.GridListDataSource = function () {
                this.customerSmsListDtSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: "Entities",
                        total: "TotalCount",
                        model: {
                            id: "CustomerSmsId",
                            fields: {
                                SmsDate: { type: "date" }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.CustomerSmsService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: ["SmsMessage", "SmsDate", "Delivered", "UnDelivered"] }, function (res) {
                                    options.success(res);
                                });
                            }
                            else {
                                BusinessObjects.CustomerSmsService.List({ IncludeColumns: ["SmsMessage", "SmsDate", "Delivered", "UnDelivered"] }, function (res) {
                                    options.success(res);
                                });
                            }
                            //options.success({ Entities: [{ TicketId: 1, Subject: "Subj 1" }, { TicketId: 2, Subject: "Subj 2" }], TotalCount: 2 })
                        },
                        create: function (options) {
                            // ClassNameService.Create({ Entity: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"TicketId":0,', '')) },
                            //      res => {
                            //           options.success(res);
                            //   })
                        }
                    },
                }); //Ends
            };
            CustomerSMSListLoader.prototype.Load = function () {
                //alert($("#ticket-template").html())
                // $("#ticket-list").kendoListView({
                //   dataSource: this.customerSmsListDtSrc,
                //    template:kendo.template($("#ticket-template").html())
                //  })
                this.LoadGrid();
                //this.LoadMenu()
            };
            CustomerSMSListLoader.prototype.LoadInCustomer = function (customerId) {
                CustomerSMSListLoader.CustomerSMSListLoaderRef.LoadGrid();
                var dtSrc = CustomerSMSListLoader.CustomerSMSListLoaderRef.customerSmsListDtSrc;
                dtSrc.read({ EqualityFilter: { CustomerId: customerId } });
                //.then(function () { CustomerSMSListLoader.CustomerSMSListLoaderRef.LoadGrid() })
            };
            CustomerSMSListLoader.prototype.LoadGrid = function () {
                $("#customer-sms-list").kendoGrid({
                    dataSource: this.customerSmsListDtSrc,
                    columns: [
                        { field: "SmsDate", format: "{0:MM/dd/yyyy}", title: "Date" },
                        { field: "SmsMessage", title: "Message" },
                        { field: "Sent" },
                        { field: "Delivered" },
                        { field: "UnDelivered" },
                    ],
                });
                $("#pager").kendoPager({
                    dataSource: this.customerSmsListDtSrc,
                });
                $("#pager2").kendoPager({
                    dataSource: this.customerSmsListDtSrc,
                });
            };
            return CustomerSMSListLoader;
        }());
        BusinessObjects.CustomerSMSListLoader = CustomerSMSListLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BondClass = (function () {
            function BondClass() {
            }
            BondClass.prototype.SetTeamPlayers = function (customerMessenger, locationMessenger, customerHandler, locationHandler) {
                this.customerMessenger = customerMessenger;
                this.locationMessenger = locationMessenger;
                this.locationHandler = locationHandler;
                this.customerHandler = customerHandler;
            };
            BondClass.prototype.BeforeRead = function (className, requestObject) { return true; };
            BondClass.prototype.AfterRead = function (className, responseObj) { /*alert('After Read is called'); */ alert(JSON.stringify(responseObj)); };
            BondClass.prototype.BeforeSave = function (className, myClassRef) {
                if (className == "LocationMessenger") {
                    alert(true);
                    return true;
                }
                else if (className == "CustomerMessenger")
                    return true;
                alert('No handler was implemented for [' + className + ']');
                return false;
            };
            BondClass.prototype.AfterSave = function (className, entityId, myClassRef) {
                if (className == "LocationMessenger") {
                    alert(JSON.stringify(myClassRef.GetObject()));
                    //this.locationMessenger.AfterSave(className, entityId, myClassRef);
                    this.customerMessenger.GetObservable().get("LocationIddtSrc").push(myClassRef.GetObject());
                    this.customerMessenger.GetObservable().set("LocationIdFld", myClassRef.GetObject());
                    this.OnFieldValueChanged('LocationIdFld', BusinessObjects.CustomerMessenger.MessengerClass, myClassRef.GetObject());
                }
                else {
                    alert(JSON.stringify(myClassRef.GetObject()));
                }
            };
            BondClass.prototype.BeforeDetailLoad = function (className, entityId) { alert('Before detail load call'); return true; };
            BondClass.prototype.AfterDetailLoad = function (className, responseObj) { alert('After detail load call'); alert(JSON.stringify(responseObj)); };
            BondClass.prototype.OnError = function (className, requestType, errorMessage) { alert('Error detail load call'); };
            BondClass.prototype.BeforeUpdate = function (className, classObj) { return true; };
            BondClass.prototype.AfterUpdate = function (className, responseObj) {
                this.customerHandler.AfterUpdate(className, responseObj);
            };
            BondClass.prototype.OnFieldValueChanged = function (id, classRef, responseObj) {
                if (id == "LocationIdFld") {
                    this.customerHandler.OnFieldValueChanged(id, classRef, responseObj);
                }
                else
                    alert('No handler was implemented for [' + id + '](BondClass)');
            };
            return BondClass;
        }());
        BusinessObjects.BondClass = BondClass;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var GlobalScripts = (function () {
            function GlobalScripts() {
            }
            /**
             *  GetType
             */
            GlobalScripts.GetRequestType = function () {
                return [{ text: "Enquiry", value: 1 },
                    { text: "Incident", value: 2 },
                    { text: "Problem", value: 3 },
                    { text: "Task", value: 4 },
                    { text: "Complain", value: 5 },
                    { text: "Request", value: 6 },
                    { text: "Transaction", value: 7 }];
            };
            GlobalScripts.GetPriority = function () {
                return [{ text: "Low", value: 1 },
                    { text: "Normal", value: 2 },
                    { text: "High", value: 3 },
                    { text: "Urgent", value: 4 },
                ];
            };
            GlobalScripts.GetStatus = function () {
                return [{ text: "Open", value: 1 },
                    { text: "Pending", value: 2 },
                    { text: "Resolved", value: 3 },
                    { text: "Closed", value: 4 },
                    { text: "Waiting on customer", value: 5 },
                    { text: "Waiting on third party", value: 6 },
                ];
            };
            GlobalScripts.GetGender = function () {
                return [{ text: "Female", value: 1 },
                    { text: "Male", value: 2 },
                ];
            };
            GlobalScripts.GetVal = function (arr, val) {
                for (var x = 0; x < arr.length; x++) {
                    if (arr[x].value == val)
                        return arr[x].text;
                }
                return "N/A";
            };
            GlobalScripts.Ticket_Read = "Customer Support:Ticket:Read";
            GlobalScripts.Ticket_Insert = "Customer Support:Ticket:Insert";
            GlobalScripts.Ticket_Update = "Customer Support:Ticket:Update";
            GlobalScripts.Ticket_Delete = "Customer Support:Ticket:Delete";
            GlobalScripts.Transaction_Read = "Customer Support:Transaction:Read";
            GlobalScripts.Transaction_Insert = "Customer Support:Transaction:Insert";
            GlobalScripts.Transaction_Update = "Customer Support:Transaction:Update";
            GlobalScripts.Transaction_Delete = "Customer Support:Transaction:Delete";
            GlobalScripts.Sms_Read = "Customer Support:Sms:Read";
            GlobalScripts.Sms_Insert = "Customer Support:Sms:Insert";
            GlobalScripts.Sms_Update = "Customer Support:Sms:Update";
            GlobalScripts.Customer_Read = "Customer Support:Customer:Read";
            GlobalScripts.Customer_Insert = "Customer Support:Customer:Insert";
            GlobalScripts.Customer_Update = "Customer Support:Customer:Update";
            GlobalScripts.Customer_Delete = "Customer Support:Customer:Delete";
            GlobalScripts.TicketId = 0;
            GlobalScripts.TransactionId = 0;
            GlobalScripts.CustomerId = 0;
            return GlobalScripts;
        }());
        BusinessObjects.GlobalScripts = GlobalScripts;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryDialog = (function (_super) {
            __extends(KbCategoryDialog, _super);
            function KbCategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.KbCategoryForm(_this.idPrefix);
                return _this;
            }
            KbCategoryDialog.prototype.getFormKey = function () { return BusinessObjects.KbCategoryForm.formKey; };
            KbCategoryDialog.prototype.getIdProperty = function () { return BusinessObjects.KbCategoryRow.idProperty; };
            KbCategoryDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.KbCategoryRow.localTextPrefix; };
            KbCategoryDialog.prototype.getNameProperty = function () { return BusinessObjects.KbCategoryRow.nameProperty; };
            KbCategoryDialog.prototype.getService = function () { return BusinessObjects.KbCategoryService.baseUrl; };
            KbCategoryDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], KbCategoryDialog);
            return KbCategoryDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.KbCategoryDialog = KbCategoryDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryEditor = (function (_super) {
            __extends(KbCategoryEditor, _super);
            function KbCategoryEditor(container) {
                return _super.call(this, container) || this;
            }
            KbCategoryEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.KbCategory'; };
            KbCategoryEditor.prototype.getDialogType = function () { return BusinessObjects.KbCategoryEditorDialog; };
            KbCategoryEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.KbCategoryRow.localTextPrefix; };
            KbCategoryEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], KbCategoryEditor);
            return KbCategoryEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.KbCategoryEditor = KbCategoryEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryEditorDialog = (function (_super) {
            __extends(KbCategoryEditorDialog, _super);
            function KbCategoryEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.KbCategoryForm(_this.idPrefix);
                return _this;
            }
            KbCategoryEditorDialog.prototype.getFormKey = function () { return BusinessObjects.KbCategoryForm.formKey; };
            KbCategoryEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.KbCategoryRow.localTextPrefix; };
            KbCategoryEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.KbCategoryRow.nameProperty; };
            KbCategoryEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], KbCategoryEditorDialog);
            return KbCategoryEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.KbCategoryEditorDialog = KbCategoryEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryGrid = (function (_super) {
            __extends(KbCategoryGrid, _super);
            function KbCategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            KbCategoryGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.KbCategory'; };
            KbCategoryGrid.prototype.getDialogType = function () { return BusinessObjects.KbCategoryDialog; };
            KbCategoryGrid.prototype.getIdProperty = function () { return BusinessObjects.KbCategoryRow.idProperty; };
            KbCategoryGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.KbCategoryRow.localTextPrefix; };
            KbCategoryGrid.prototype.getService = function () { return BusinessObjects.KbCategoryService.baseUrl; };
            KbCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], KbCategoryGrid);
            return KbCategoryGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.KbCategoryGrid = KbCategoryGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryThreadDialog = (function (_super) {
            __extends(KbCategoryThreadDialog, _super);
            function KbCategoryThreadDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.KbCategoryForm(_this.idPrefix);
                return _this;
            }
            KbCategoryThreadDialog.prototype.getFormKey = function () { return BusinessObjects.KbCategoryThreadForm.formKey; };
            KbCategoryThreadDialog.prototype.getIdProperty = function () { return BusinessObjects.KbCategoryRow.idProperty; };
            KbCategoryThreadDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.KbCategoryRow.localTextPrefix; };
            KbCategoryThreadDialog.prototype.getNameProperty = function () { return BusinessObjects.KbCategoryRow.nameProperty; };
            KbCategoryThreadDialog.prototype.getService = function () { return BusinessObjects.KbCategoryService.baseUrl; };
            KbCategoryThreadDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], KbCategoryThreadDialog);
            return KbCategoryThreadDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.KbCategoryThreadDialog = KbCategoryThreadDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryLocationsDialog = (function (_super) {
            __extends(KbCategoryLocationsDialog, _super);
            function KbCategoryLocationsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.KbCategoryLocationsForm(_this.idPrefix);
                return _this;
            }
            KbCategoryLocationsDialog.prototype.getFormKey = function () { return BusinessObjects.KbCategoryLocationsForm.formKey; };
            KbCategoryLocationsDialog.prototype.getIdProperty = function () { return BusinessObjects.KbCategoryLocationsRow.idProperty; };
            KbCategoryLocationsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.KbCategoryLocationsRow.localTextPrefix; };
            KbCategoryLocationsDialog.prototype.getService = function () { return BusinessObjects.KbCategoryLocationsService.baseUrl; };
            KbCategoryLocationsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], KbCategoryLocationsDialog);
            return KbCategoryLocationsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.KbCategoryLocationsDialog = KbCategoryLocationsDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryLocationsEditor = (function (_super) {
            __extends(KbCategoryLocationsEditor, _super);
            function KbCategoryLocationsEditor(container) {
                return _super.call(this, container) || this;
            }
            KbCategoryLocationsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.KbCategoryLocations'; };
            KbCategoryLocationsEditor.prototype.getDialogType = function () { return BusinessObjects.KbCategoryLocationsEditorDialog; };
            KbCategoryLocationsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.KbCategoryLocationsRow.localTextPrefix; };
            KbCategoryLocationsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], KbCategoryLocationsEditor);
            return KbCategoryLocationsEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.KbCategoryLocationsEditor = KbCategoryLocationsEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryLocationsEditorDialog = (function (_super) {
            __extends(KbCategoryLocationsEditorDialog, _super);
            function KbCategoryLocationsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.KbCategoryLocationsForm(_this.idPrefix);
                return _this;
            }
            KbCategoryLocationsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.KbCategoryLocationsForm.formKey; };
            KbCategoryLocationsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.KbCategoryLocationsRow.localTextPrefix; };
            KbCategoryLocationsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], KbCategoryLocationsEditorDialog);
            return KbCategoryLocationsEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.KbCategoryLocationsEditorDialog = KbCategoryLocationsEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KbCategoryLocationsGrid = (function (_super) {
            __extends(KbCategoryLocationsGrid, _super);
            function KbCategoryLocationsGrid(container) {
                return _super.call(this, container) || this;
            }
            KbCategoryLocationsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.KbCategoryLocations'; };
            KbCategoryLocationsGrid.prototype.getDialogType = function () { return BusinessObjects.KbCategoryLocationsDialog; };
            KbCategoryLocationsGrid.prototype.getIdProperty = function () { return BusinessObjects.KbCategoryLocationsRow.idProperty; };
            KbCategoryLocationsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.KbCategoryLocationsRow.localTextPrefix; };
            KbCategoryLocationsGrid.prototype.getService = function () { return BusinessObjects.KbCategoryLocationsService.baseUrl; };
            KbCategoryLocationsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], KbCategoryLocationsGrid);
            return KbCategoryLocationsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.KbCategoryLocationsGrid = KbCategoryLocationsGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseDialog = (function (_super) {
            __extends(KnowledgeBaseDialog, _super);
            function KnowledgeBaseDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.KnowledgeBaseForm(_this.idPrefix);
                return _this;
            }
            KnowledgeBaseDialog.prototype.getFormKey = function () { return BusinessObjects.KnowledgeBaseForm.formKey; };
            KnowledgeBaseDialog.prototype.getIdProperty = function () { return BusinessObjects.KnowledgeBaseRow.idProperty; };
            KnowledgeBaseDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.KnowledgeBaseRow.localTextPrefix; };
            KnowledgeBaseDialog.prototype.getNameProperty = function () { return BusinessObjects.KnowledgeBaseRow.nameProperty; };
            KnowledgeBaseDialog.prototype.getService = function () { return BusinessObjects.KnowledgeBaseService.baseUrl; };
            KnowledgeBaseDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], KnowledgeBaseDialog);
            return KnowledgeBaseDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.KnowledgeBaseDialog = KnowledgeBaseDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseEditor = (function (_super) {
            __extends(KnowledgeBaseEditor, _super);
            function KnowledgeBaseEditor(container) {
                return _super.call(this, container) || this;
            }
            KnowledgeBaseEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.KnowledgeBase'; };
            KnowledgeBaseEditor.prototype.getDialogType = function () { return BusinessObjects.KnowledgeBaseEditorDialog; };
            KnowledgeBaseEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.KnowledgeBaseRow.localTextPrefix; };
            KnowledgeBaseEditor.prototype.addButtonClick = function () {
                alert('add');
            };
            KnowledgeBaseEditor.prototype.onclick = function (ev) {
                alert('Yep');
            };
            KnowledgeBaseEditor.prototype.getAddButtonCaption = function () {
                return "New knowledge base";
            };
            KnowledgeBaseEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], KnowledgeBaseEditor);
            return KnowledgeBaseEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.KnowledgeBaseEditor = KnowledgeBaseEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseEditorDialog = (function (_super) {
            __extends(KnowledgeBaseEditorDialog, _super);
            function KnowledgeBaseEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.KnowledgeBaseForm(_this.idPrefix);
                return _this;
            }
            KnowledgeBaseEditorDialog.prototype.getFormKey = function () { return BusinessObjects.KnowledgeBaseForm.formKey; };
            KnowledgeBaseEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.KnowledgeBaseRow.localTextPrefix; };
            KnowledgeBaseEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.KnowledgeBaseRow.nameProperty; };
            KnowledgeBaseEditorDialog.prototype.getPropertyItems = function () {
                var items = _super.prototype.getPropertyItems.call(this);
                items = items.filter(function (x) { return x.name != BusinessObjects.KnowledgeBaseRow.Fields.KbCategoryId; });
                return items;
            };
            KnowledgeBaseEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], KnowledgeBaseEditorDialog);
            return KnowledgeBaseEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.KnowledgeBaseEditorDialog = KnowledgeBaseEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseGrid = (function (_super) {
            __extends(KnowledgeBaseGrid, _super);
            function KnowledgeBaseGrid(container) {
                return _super.call(this, container) || this;
            }
            KnowledgeBaseGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.KnowledgeBase'; };
            KnowledgeBaseGrid.prototype.getDialogType = function () { return BusinessObjects.KnowledgeBaseDialog; };
            KnowledgeBaseGrid.prototype.getIdProperty = function () { return BusinessObjects.KnowledgeBaseRow.idProperty; };
            KnowledgeBaseGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.KnowledgeBaseRow.localTextPrefix; };
            KnowledgeBaseGrid.prototype.getService = function () { return BusinessObjects.KnowledgeBaseService.baseUrl; };
            KnowledgeBaseGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], KnowledgeBaseGrid);
            return KnowledgeBaseGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.KnowledgeBaseGrid = KnowledgeBaseGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseLocationsDialog = (function (_super) {
            __extends(KnowledgeBaseLocationsDialog, _super);
            function KnowledgeBaseLocationsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.KnowledgeBaseLocationsForm(_this.idPrefix);
                return _this;
            }
            KnowledgeBaseLocationsDialog.prototype.getFormKey = function () { return BusinessObjects.KnowledgeBaseLocationsForm.formKey; };
            KnowledgeBaseLocationsDialog.prototype.getIdProperty = function () { return BusinessObjects.KnowledgeBaseLocationsRow.idProperty; };
            KnowledgeBaseLocationsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.KnowledgeBaseLocationsRow.localTextPrefix; };
            KnowledgeBaseLocationsDialog.prototype.getService = function () { return BusinessObjects.KnowledgeBaseLocationsService.baseUrl; };
            KnowledgeBaseLocationsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], KnowledgeBaseLocationsDialog);
            return KnowledgeBaseLocationsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.KnowledgeBaseLocationsDialog = KnowledgeBaseLocationsDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseLocationsEditor = (function (_super) {
            __extends(KnowledgeBaseLocationsEditor, _super);
            function KnowledgeBaseLocationsEditor(container) {
                return _super.call(this, container) || this;
            }
            KnowledgeBaseLocationsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.KnowledgeBaseLocations'; };
            KnowledgeBaseLocationsEditor.prototype.getDialogType = function () { return BusinessObjects.KnowledgeBaseLocationsEditorDialog; };
            KnowledgeBaseLocationsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.KnowledgeBaseLocationsRow.localTextPrefix; };
            KnowledgeBaseLocationsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], KnowledgeBaseLocationsEditor);
            return KnowledgeBaseLocationsEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.KnowledgeBaseLocationsEditor = KnowledgeBaseLocationsEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseLocationsEditorDialog = (function (_super) {
            __extends(KnowledgeBaseLocationsEditorDialog, _super);
            function KnowledgeBaseLocationsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.KnowledgeBaseLocationsForm(_this.idPrefix);
                return _this;
            }
            KnowledgeBaseLocationsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.KnowledgeBaseLocationsForm.formKey; };
            KnowledgeBaseLocationsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.KnowledgeBaseLocationsRow.localTextPrefix; };
            KnowledgeBaseLocationsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], KnowledgeBaseLocationsEditorDialog);
            return KnowledgeBaseLocationsEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.KnowledgeBaseLocationsEditorDialog = KnowledgeBaseLocationsEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var KnowledgeBaseLocationsGrid = (function (_super) {
            __extends(KnowledgeBaseLocationsGrid, _super);
            function KnowledgeBaseLocationsGrid(container) {
                return _super.call(this, container) || this;
            }
            KnowledgeBaseLocationsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.KnowledgeBaseLocations'; };
            KnowledgeBaseLocationsGrid.prototype.getDialogType = function () { return BusinessObjects.KnowledgeBaseLocationsDialog; };
            KnowledgeBaseLocationsGrid.prototype.getIdProperty = function () { return BusinessObjects.KnowledgeBaseLocationsRow.idProperty; };
            KnowledgeBaseLocationsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.KnowledgeBaseLocationsRow.localTextPrefix; };
            KnowledgeBaseLocationsGrid.prototype.getService = function () { return BusinessObjects.KnowledgeBaseLocationsService.baseUrl; };
            KnowledgeBaseLocationsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], KnowledgeBaseLocationsGrid);
            return KnowledgeBaseLocationsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.KnowledgeBaseLocationsGrid = KnowledgeBaseLocationsGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [CallDirectionEditor]
         */
        var CallDirectionEditor = (function (_super) {
            __extends(CallDirectionEditor, _super);
            function CallDirectionEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("In-coming-call", "In-coming call");
                _this.addOption("Out-going-call", "Out-going call");
                _this.addOption("Reply", "Reply");
                _this.addOption("Comment", "Comment");
                _this.addOption("Note", "Note");
                _this.addOption("Complain", "Complain");
                return _this;
            }
            CallDirectionEditor.prototype.emptyItemText = function () {
                return "Select an action";
            };
            CallDirectionEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CallDirectionEditor);
            return CallDirectionEditor;
        }(Serenity.Select2Editor));
        BusinessObjects.CallDirectionEditor = CallDirectionEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var NoteDialog = (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                _this.callDirectionEditor = new BusinessObjects.CallDirectionEditor(_this.byId('CallDirection'));
                return _this;
            }
            //"<select style='padding:3px;margin-bottom:12px'><option value=''>Select action</option><option value='In-coming'>In-coming</option><option value='Out-going'>Out-going</option></select>"+
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<input id='~_CallDirection' class='required' />" +
                    "<div style='padding:6px'></div>" +
                    "<textarea id='~_Text' class='required' style='margin-top:6px'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NoteDialog.prototype, "callDirection", {
                get: function () {
                    return this.callDirectionEditor.value;
                },
                set: function (value) {
                    this.callDirectionEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        BusinessObjects.NoteDialog = NoteDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var NotesEditor = (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Ticket_Insert))
                    new Serenity.Toolbar(_this.byId('Toolbar'), {
                        buttons: [{
                                title: 'Add Note',
                                cssClass: 'add-button',
                                onClick: function (e) {
                                    e.preventDefault();
                                    _this.addClick();
                                }
                            }]
                    });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><div style='height:396px;width:auto;overflow-y:scroll'><ul id='~_NoteList'></ul></div></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').html("<span style='color:#6E2C00'>" + Q.coalesce(item.CallDirection, '') + "</span>").css({ "margin-bottom": "12px" }).appendTo(li);
                        if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Ticket_Update)) {
                            $('<a/>').attr('href', '#').addClass('note-date')
                                .text(item.InsertUserDisplayName + ' - ' +
                                Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm'))
                                .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        }
                        else {
                            $('<a/>').attr('href', '#').addClass('note-date')
                                .text(item.InsertUserDisplayName + ' - ' +
                                Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm'))
                                .data('index', index).appendTo(li);
                        }
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Ticket_Update)) {
                            $('<a/>').attr('href', '#').addClass('note-date')
                                .text(item.InsertUserDisplayName + ' - ' +
                                Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm'))
                                .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        }
                        else {
                            $('<a/>').attr('href', '#').addClass('note-date')
                                .text(item.InsertUserDisplayName + ' - ' +
                                Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm'))
                                .data('index', index).appendTo(li);
                        }
                        if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Ticket_Delete)) {
                            $('<a/>').attr('href', '#').addClass('note-delete')
                                .attr('title', 'delete note').data('index', index)
                                .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        }
                        else {
                            $('<a/>').attr('href', '#').addClass('note-delete')
                                .attr('title', 'delete note').data('index', index)
                                .appendTo(li);
                        }
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new BusinessObjects.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    var callDirection = Q.trimToNull(dlg.callDirection);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        CallDirection: callDirection,
                        InsertUserDisplayName: CustomerSupport.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new BusinessObjects.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.callDirection = old.CallDirection;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    var callDirection = Q.trimToNull(dlg.callDirection);
                    if (!text) {
                        return;
                    }
                    _this.items[index].CallDirection = callDirection;
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        BusinessObjects.NotesEditor = NotesEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PaymentDetailDialog = (function (_super) {
            __extends(PaymentDetailDialog, _super);
            function PaymentDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.PaymentDetailForm(_this.idPrefix);
                return _this;
            }
            PaymentDetailDialog.prototype.getFormKey = function () { return BusinessObjects.PaymentDetailForm.formKey; };
            PaymentDetailDialog.prototype.getIdProperty = function () { return BusinessObjects.PaymentDetailRow.idProperty; };
            PaymentDetailDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PaymentDetailRow.localTextPrefix; };
            PaymentDetailDialog.prototype.getService = function () { return BusinessObjects.PaymentDetailService.baseUrl; };
            PaymentDetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PaymentDetailDialog);
            return PaymentDetailDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.PaymentDetailDialog = PaymentDetailDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PaymentDetailEditor = (function (_super) {
            __extends(PaymentDetailEditor, _super);
            function PaymentDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            PaymentDetailEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.PaymentDetail'; };
            PaymentDetailEditor.prototype.getDialogType = function () { return BusinessObjects.PaymentDetailEditorDialog; };
            PaymentDetailEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.PaymentDetailRow.localTextPrefix; };
            PaymentDetailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PaymentDetailEditor);
            return PaymentDetailEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.PaymentDetailEditor = PaymentDetailEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PaymentDetailEditorDialog = (function (_super) {
            __extends(PaymentDetailEditorDialog, _super);
            function PaymentDetailEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.PaymentDetailForm(_this.idPrefix);
                return _this;
            }
            PaymentDetailEditorDialog.prototype.getFormKey = function () { return BusinessObjects.PaymentDetailForm.formKey; };
            PaymentDetailEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.PaymentDetailRow.localTextPrefix; };
            PaymentDetailEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PaymentDetailEditorDialog);
            return PaymentDetailEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.PaymentDetailEditorDialog = PaymentDetailEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var PaymentDetailGrid = (function (_super) {
            __extends(PaymentDetailGrid, _super);
            function PaymentDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            PaymentDetailGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.PaymentDetail'; };
            PaymentDetailGrid.prototype.getDialogType = function () { return BusinessObjects.PaymentDetailDialog; };
            PaymentDetailGrid.prototype.getIdProperty = function () { return BusinessObjects.PaymentDetailRow.idProperty; };
            PaymentDetailGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.PaymentDetailRow.localTextPrefix; };
            PaymentDetailGrid.prototype.getService = function () { return BusinessObjects.PaymentDetailService.baseUrl; };
            PaymentDetailGrid.prototype.addButtonClick = function () {
                this.editItem({ TransactionId: this.transactionID });
            };
            PaymentDetailGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PaymentDetailGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            PaymentDetailGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.transactionID;
            };
            Object.defineProperty(PaymentDetailGrid.prototype, "transactionID", {
                get: function () {
                    return this._transactionId;
                },
                set: function (value) {
                    if (this._transactionId != value) {
                        this._transactionId = value;
                        this.setEquality(BusinessObjects.PaymentDetailRow.Fields.TransactionId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            PaymentDetailGrid.prototype.getButtons = function () {
                var _this = this;
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'BusinessObjects/PaymentDetail/ListExcel',
                    separator: true
                }));
                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return btns;
            }; //Ends getButtons
            PaymentDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PaymentDetailGrid);
            return PaymentDetailGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.PaymentDetailGrid = PaymentDetailGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductDialog = (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return BusinessObjects.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return BusinessObjects.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return BusinessObjects.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return BusinessObjects.ProductService.baseUrl; };
            ProductDialog.prototype.updateInterface = function () {
                if (!Q.Authorization.hasPermission("Customer Support:Product:Update")) {
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                }
            };
            ProductDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                if (!Q.Authorization.hasPermission("Customer Support:Product:Update")) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                }
                if (!Q.Authorization.hasPermission("Customer Support:Product:Delete")) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "delete-button"; }), 1);
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "undo-delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "localization-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "clone-button"; }), 1);
                return buttons;
            };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ProductDialog = ProductDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductEditor = (function (_super) {
            __extends(ProductEditor, _super);
            function ProductEditor(container) {
                return _super.call(this, container) || this;
            }
            ProductEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Product'; };
            ProductEditor.prototype.getDialogType = function () { return BusinessObjects.ProductEditorDialog; };
            ProductEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductRow.localTextPrefix; };
            ProductEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductEditor);
            return ProductEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.ProductEditor = ProductEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductEditorDialog = (function (_super) {
            __extends(ProductEditorDialog, _super);
            function ProductEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ProductForm.formKey; };
            ProductEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductRow.localTextPrefix; };
            ProductEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.ProductRow.nameProperty; };
            ProductEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductEditorDialog);
            return ProductEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.ProductEditorDialog = ProductEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        //Q.serviceRequest("BusinessObjects/Product/NewProduct", { Customer: { Entity: { FullName: "Fikoli Chrome" } }, Product: { Entity: { LocationId: 2, Subject: 'My Chrome', Date: '9/22/2017 3:01:08 PM', ProductIdString: '11kdkdldls' } }, Note: { Entity: { Text: 'My chrome Text', EntityType: '[dbo].[Products]' } } }, res => { alert(JSON.stringify(res)) })
        var ProductFormLoader = (function () {
            function ProductFormLoader() {
                this.productForm = kendo.observable({
                    productName: null,
                    price: null,
                    locationList: null,
                    getObject: function () {
                        alert(JSON.stringify(this.get("locationList")));
                    }
                }); //Ends this.productList
                kendo.bind($("#product-form"), this.productForm);
                ProductFormLoader.productFormStatic = this.productForm;
                ProductFormLoader.TheProductFormLoader = this;
            }
            ProductFormLoader.prototype.Load = function (productId) {
                if (productId != undefined) {
                    //this.productId = productId;
                    //Q.notifyInfo("Loading Product . . . ")
                    //Q.serviceRequest("BusinessObjects/Product/DetailProduct",
                    //    { EntityId: productId },
                    //    res => {
                    //        ProductFormLoader.productFormStatic.set("isVisible", true)
                    //        ProductFormLoader.productFormStatic.setObject(res)
                    //    })
                }
                else {
                }
                this.LoadLocations();
            };
            ProductFormLoader.prototype.LoadLocations = function () {
                $("#location-list").kendoGrid({
                    dataSource: new kendo.data.DataSource({
                        schema: {
                            model: {
                                id: "LocationId"
                            }
                        },
                        transport: {
                            read: function (options) {
                                options.success(Q.getLookup("Administration.LocationLookup").items);
                            }
                        }
                    }),
                    persistSelection: true,
                    columns: [
                        { selectable: true, width: "50px" },
                        {
                            field: "LocationId", hidden: true
                        },
                        { field: "LocationName", title: "Location" }
                    ],
                    change: function () {
                        var selectedKeys = this.selectedKeyNames(); //.join(",")
                        if (selectedKeys != '') {
                            var selectedKeysInt = [];
                            $.map(selectedKeys, function (item) {
                                selectedKeysInt.push(parseInt(item));
                            });
                            ProductFormLoader.productFormStatic.set("locationList", selectedKeysInt);
                        }
                    }
                });
            };
            ProductFormLoader.Submit = function () {
                //alert(JSON.stringify(ProductFormLoader.productFormStatic.getObject()))
                //return;
            };
            return ProductFormLoader;
        }());
        BusinessObjects.ProductFormLoader = ProductFormLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductGrid = (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Product'; };
            ProductGrid.prototype.getDialogType = function () { return BusinessObjects.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return BusinessObjects.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return BusinessObjects.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                if (!Q.Authorization.hasPermission("Customer Support:Product:Insert"))
                    btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "add-button"; }), 1);
                btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'BusinessObjects/Product/ListExcel',
                    separator: true
                }));
                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return btns;
            }; //Ends getButtons
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ProductGrid = ProductGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductListLoader = (function () {
            function ProductListLoader() {
                this.ProductDataSource();
            }
            ProductListLoader.prototype.Load = function () {
                //alert($("#product-template").html())
                // $("#product-list").kendoListView({
                //   dataSource: this.productListDtSrc,
                //    template:kendo.template($("#product-template").html())
                //  })
                this.ProductGrid();
            };
            ProductListLoader.prototype.ProductDataSource = function () {
                this.productListDtSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: "Entities",
                        total: "TotalCount",
                        model: {
                            id: "ProductId",
                            fields: {
                                Date: { type: "date" },
                                Price: { type: "number" },
                            },
                        }
                    },
                    batch: true,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            BusinessObjects.ProductService.List({}, function (res) {
                                options.success(res);
                            });
                            //options.success({ Entities: [{ ProductId: 1, Subject: "Subj 1" }, { ProductId: 2, Subject: "Subj 2" }], TotalCount: 2 })
                        },
                        create: function (options) {
                            alert(JSON.stringify(options.data));
                            // ClassNameService.Create({ Entity: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"ProductId":0,', '')) },
                            //      res => {
                            //           options.success(res);
                            //   })
                        },
                        update: function (options) {
                            alert("Update: " + JSON.stringify(options.data));
                            // ClassNameService.Create({ Entity: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"ProductId":0,', '')) },
                            //      res => {
                            //           options.success(res);
                            //   })
                        }
                    },
                }); //Ends
            }; //Ends ProductDataSource
            ProductListLoader.prototype.ProductGrid = function () {
                //alert(JSON.stringify(Q.getLookup("Administration.CustomerLocationLookup").items))
                $("#product-list").kendoGrid({
                    dataSource: this.productListDtSrc,
                    columns: [{ selectable: true, width: "50px" },
                        { field: "Name", format: "{0:c}" },
                        { field: "Price", },
                        {
                            field: "LocationList", title: "Location",
                            template: "<div class='contentDivs' style='white-space: nowrap; height: 25px; overflow: hidden; max-width:65%; float: left;'></div>< button class='editButtons' style='float:right' > Manage Location</button > "
                        },
                        { command: ["destroy"], title: "&nbsp;" },
                    ],
                    //toolbar: ["create", "save", "cancel"],
                    navigatable: true,
                    editable: true,
                    dataBound: ProductListLoader.OnProductGridDataBound
                });
                $("#pager").kendoPager({
                    dataSource: this.productListDtSrc,
                });
                $("#pager2").kendoPager({
                    dataSource: this.productListDtSrc,
                });
            };
            ProductListLoader.OnProductGridDataBound = function () {
                $(".contentDivs").children().css("display", "table-cell");
                $(".editButtons").kendoButton({
                    click: function (e) {
                        alert('Location button clicked');
                        //var grid = $("#grid").data("kendoGrid");
                        //var editor = $("#editor").data("kendoEditor");
                        //var window = $("#window").data("kendoWindow");
                        //var row = e.sender.element.closest("tr");
                        //var dataItem = grid.dataItem(row);
                        //kendo.bind(editor.element, dataItem);
                        //window.open().center();
                    }
                });
            };
            return ProductListLoader;
        }());
        BusinessObjects.ProductListLoader = ProductListLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationDialog = (function (_super) {
            __extends(ProductLocationDialog, _super);
            function ProductLocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.ProductLocationForm(_this.idPrefix);
                return _this;
            }
            ProductLocationDialog.prototype.getFormKey = function () { return BusinessObjects.ProductLocationForm.formKey; };
            ProductLocationDialog.prototype.getIdProperty = function () { return BusinessObjects.ProductLocationRow.idProperty; };
            ProductLocationDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductLocationRow.localTextPrefix; };
            ProductLocationDialog.prototype.getService = function () { return BusinessObjects.ProductLocationService.baseUrl; };
            ProductLocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductLocationDialog);
            return ProductLocationDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.ProductLocationDialog = ProductLocationDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationEditor = (function (_super) {
            __extends(ProductLocationEditor, _super);
            function ProductLocationEditor(container) {
                return _super.call(this, container) || this;
            }
            ProductLocationEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductLocation'; };
            ProductLocationEditor.prototype.getDialogType = function () { return BusinessObjects.ProductLocationEditorDialog; };
            ProductLocationEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductLocationRow.localTextPrefix; };
            ProductLocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductLocationEditor);
            return ProductLocationEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.ProductLocationEditor = ProductLocationEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationEditorDialog = (function (_super) {
            __extends(ProductLocationEditorDialog, _super);
            function ProductLocationEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.ProductLocationForm(_this.idPrefix);
                return _this;
            }
            ProductLocationEditorDialog.prototype.getFormKey = function () { return BusinessObjects.ProductLocationForm.formKey; };
            ProductLocationEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductLocationRow.localTextPrefix; };
            ProductLocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductLocationEditorDialog);
            return ProductLocationEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.ProductLocationEditorDialog = ProductLocationEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductLocationGrid = (function (_super) {
            __extends(ProductLocationGrid, _super);
            function ProductLocationGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductLocationGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.ProductLocation'; };
            ProductLocationGrid.prototype.getDialogType = function () { return BusinessObjects.ProductLocationDialog; };
            ProductLocationGrid.prototype.getIdProperty = function () { return BusinessObjects.ProductLocationRow.idProperty; };
            ProductLocationGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.ProductLocationRow.localTextPrefix; };
            ProductLocationGrid.prototype.getService = function () { return BusinessObjects.ProductLocationService.baseUrl; };
            ProductLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductLocationGrid);
            return ProductLocationGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.ProductLocationGrid = ProductLocationGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SendSmsDialog = (function (_super) {
            __extends(SendSmsDialog, _super);
            function SendSmsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BusinessObjects.SendSmsForm(_this.idPrefix);
                _this.messageId = "0";
                _this.locationId = "0";
                _this.messageRef = "0";
                _this.dialogTitle = "Please select some value";
                _this.form.LocationId.changeSelect2(function (e) {
                    if (_this.form.LocationId.value != "")
                        _this.locationId = _this.form.LocationId.value;
                    else
                        _this.locationId = "0";
                });
                _this.messageRef = _this.form.Message;
                return _this;
                // this.form.Message.changeSelect2(e => {
                //     if(this.form.Message.value != "")
                //         this.messageId = this.form.Message.value
                //     else
                //         this.messageId = "0"
                // });
            }
            SendSmsDialog.prototype.getFormKey = function () { return BusinessObjects.SendSmsForm.formKey; };
            Object.defineProperty(SendSmsDialog.prototype, "locationID", {
                get: function () {
                    return this.locationId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SendSmsDialog.prototype, "messageID", {
                get: function () {
                    return this.messageId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SendSmsDialog.prototype, "message", {
                get: function () {
                    return this.messageRef.value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SendSmsDialog.prototype, "phoneNumbers", {
                get: function () {
                    if (this.form.LocationId.value != "")
                        return this.form.PhoneNumber.value;
                    else
                        return "";
                },
                enumerable: true,
                configurable: true
            });
            SendSmsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SendSmsDialog);
            return SendSmsDialog;
        }(Serenity.PropertyDialog));
        BusinessObjects.SendSmsDialog = SendSmsDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsDialog = (function (_super) {
            __extends(SmsDialog, _super);
            function SmsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.SmsForm(_this.idPrefix);
                return _this;
            }
            SmsDialog.prototype.getFormKey = function () { return BusinessObjects.SmsForm.formKey; };
            SmsDialog.prototype.getIdProperty = function () { return BusinessObjects.SmsRow.idProperty; };
            SmsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SmsRow.localTextPrefix; };
            SmsDialog.prototype.getNameProperty = function () { return BusinessObjects.SmsRow.nameProperty; };
            SmsDialog.prototype.getService = function () { return BusinessObjects.SmsService.baseUrl; };
            SmsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SmsDialog);
            return SmsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.SmsDialog = SmsDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsEditor = (function (_super) {
            __extends(SmsEditor, _super);
            function SmsEditor(container) {
                return _super.call(this, container) || this;
            }
            SmsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Sms'; };
            SmsEditor.prototype.getDialogType = function () { return BusinessObjects.SmsEditorDialog; };
            SmsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.SmsRow.localTextPrefix; };
            SmsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SmsEditor);
            return SmsEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.SmsEditor = SmsEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsEditorDialog = (function (_super) {
            __extends(SmsEditorDialog, _super);
            function SmsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.SmsForm(_this.idPrefix);
                return _this;
            }
            SmsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.SmsForm.formKey; };
            SmsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SmsRow.localTextPrefix; };
            SmsEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.SmsRow.nameProperty; };
            SmsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SmsEditorDialog);
            return SmsEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.SmsEditorDialog = SmsEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsGrid = (function (_super) {
            __extends(SmsGrid, _super);
            function SmsGrid(container) {
                return _super.call(this, container) || this;
            }
            SmsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Sms'; };
            SmsGrid.prototype.getDialogType = function () { return BusinessObjects.SmsDialog; };
            SmsGrid.prototype.getIdProperty = function () { return BusinessObjects.SmsRow.idProperty; };
            SmsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.SmsRow.localTextPrefix; };
            SmsGrid.prototype.getService = function () { return BusinessObjects.SmsService.baseUrl; };
            SmsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SmsGrid);
            return SmsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.SmsGrid = SmsGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsLocationDialog = (function (_super) {
            __extends(SmsLocationDialog, _super);
            function SmsLocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.SmsLocationForm(_this.idPrefix);
                return _this;
            }
            SmsLocationDialog.prototype.getFormKey = function () { return BusinessObjects.SmsLocationForm.formKey; };
            SmsLocationDialog.prototype.getIdProperty = function () { return BusinessObjects.SmsLocationRow.idProperty; };
            SmsLocationDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SmsLocationRow.localTextPrefix; };
            SmsLocationDialog.prototype.getService = function () { return BusinessObjects.SmsLocationService.baseUrl; };
            SmsLocationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SmsLocationDialog);
            return SmsLocationDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.SmsLocationDialog = SmsLocationDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsLocationEditor = (function (_super) {
            __extends(SmsLocationEditor, _super);
            function SmsLocationEditor(container) {
                return _super.call(this, container) || this;
            }
            SmsLocationEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.SmsLocation'; };
            SmsLocationEditor.prototype.getDialogType = function () { return BusinessObjects.SmsLocationEditorDialog; };
            SmsLocationEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.SmsLocationRow.localTextPrefix; };
            SmsLocationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SmsLocationEditor);
            return SmsLocationEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.SmsLocationEditor = SmsLocationEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsLocationEditorDialog = (function (_super) {
            __extends(SmsLocationEditorDialog, _super);
            function SmsLocationEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.SmsLocationForm(_this.idPrefix);
                return _this;
            }
            SmsLocationEditorDialog.prototype.getFormKey = function () { return BusinessObjects.SmsLocationForm.formKey; };
            SmsLocationEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.SmsLocationRow.localTextPrefix; };
            SmsLocationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SmsLocationEditorDialog);
            return SmsLocationEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.SmsLocationEditorDialog = SmsLocationEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var SmsLocationGrid = (function (_super) {
            __extends(SmsLocationGrid, _super);
            function SmsLocationGrid(container) {
                return _super.call(this, container) || this;
            }
            SmsLocationGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.SmsLocation'; };
            SmsLocationGrid.prototype.getDialogType = function () { return BusinessObjects.SmsLocationDialog; };
            SmsLocationGrid.prototype.getIdProperty = function () { return BusinessObjects.SmsLocationRow.idProperty; };
            SmsLocationGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.SmsLocationRow.localTextPrefix; };
            SmsLocationGrid.prototype.getService = function () { return BusinessObjects.SmsLocationService.baseUrl; };
            SmsLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SmsLocationGrid);
            return SmsLocationGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.SmsLocationGrid = SmsLocationGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ActionsSettingsDialog = (function (_super) {
            __extends(ActionsSettingsDialog, _super);
            function ActionsSettingsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BusinessObjects.ActionsSettingsForm(_this.idPrefix);
                _this.groupId = "0";
                _this.locationId = "0";
                _this.userId = "0";
                _this.typeId = "0";
                _this.statusId = "0";
                _this.priorityId = "0";
                _this.dialogTitle = "Please select some value";
                _this.form.Type.changeSelect2(function (e) {
                    if (_this.form.Type.value != "")
                        _this.typeId = _this.form.Type.value;
                    else
                        _this.typeId = "0";
                });
                _this.form.Status.changeSelect2(function (e) {
                    if (_this.form.Status.value != "")
                        _this.statusId = _this.form.Status.value;
                    else
                        _this.statusId = "0";
                });
                _this.form.Priority.changeSelect2(function (e) {
                    if (_this.form.Priority.value != "")
                        _this.priorityId = _this.form.Priority.value;
                    else
                        _this.priorityId = "0";
                });
                _this.form.LocationId.changeSelect2(function (e) {
                    if (_this.form.LocationId.value != "")
                        _this.locationId = _this.form.LocationId.value;
                    else
                        _this.locationId = "0";
                });
                _this.form.GroupId.changeSelect2(function (e) {
                    if (_this.form.GroupId.value != "")
                        _this.groupId = _this.form.GroupId.value;
                    else
                        _this.groupId = "0";
                });
                _this.form.UserId.changeSelect2(function (e) {
                    if (_this.form.UserId.value != "")
                        _this.userId = _this.form.UserId.value;
                    else
                        _this.userId = "0";
                });
                return _this;
            }
            ActionsSettingsDialog.prototype.getFormKey = function () { return BusinessObjects.ActionsSettingsForm.formKey; };
            Object.defineProperty(ActionsSettingsDialog.prototype, "typeID", {
                get: function () {
                    return this.typeId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ActionsSettingsDialog.prototype, "statusID", {
                get: function () {
                    return this.statusId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ActionsSettingsDialog.prototype, "priorityID", {
                get: function () {
                    return this.priorityId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ActionsSettingsDialog.prototype, "locationID", {
                get: function () {
                    return this.locationId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ActionsSettingsDialog.prototype, "groupID", {
                get: function () {
                    return this.groupId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ActionsSettingsDialog.prototype, "agentID", {
                get: function () {
                    return this.userId;
                },
                enumerable: true,
                configurable: true
            });
            ActionsSettingsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ActionsSettingsDialog);
            return ActionsSettingsDialog;
        }(Serenity.PropertyDialog));
        BusinessObjects.ActionsSettingsDialog = ActionsSettingsDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var AssignToAgentsDialog = (function (_super) {
            __extends(AssignToAgentsDialog, _super);
            function AssignToAgentsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BusinessObjects.AssignToAgentsForm(_this.idPrefix);
                _this.groupId = "0";
                _this.locationId = "0";
                _this.userId = "0";
                _this.dialogTitle = "Please select some value";
                _this.form.LocationId.changeSelect2(function (e) {
                    if (_this.form.LocationId.value != "")
                        _this.locationId = _this.form.LocationId.value;
                    else
                        _this.locationId = "0";
                });
                _this.form.GroupId.changeSelect2(function (e) {
                    if (_this.form.GroupId.value != "")
                        _this.groupId = _this.form.GroupId.value;
                    else
                        _this.groupId = "0";
                });
                _this.form.UserId.changeSelect2(function (e) {
                    if (_this.form.UserId.value != "")
                        _this.userId = _this.form.UserId.value;
                    else
                        _this.userId = "0";
                });
                return _this;
            }
            AssignToAgentsDialog.prototype.getFormKey = function () { return BusinessObjects.AssignToAgentsForm.formKey; };
            Object.defineProperty(AssignToAgentsDialog.prototype, "locationID", {
                get: function () {
                    return this.locationId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssignToAgentsDialog.prototype, "groupID", {
                get: function () {
                    return this.groupId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssignToAgentsDialog.prototype, "agentID", {
                get: function () {
                    return this.userId;
                },
                enumerable: true,
                configurable: true
            });
            AssignToAgentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssignToAgentsDialog);
            return AssignToAgentsDialog;
        }(Serenity.PropertyDialog));
        BusinessObjects.AssignToAgentsDialog = AssignToAgentsDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
// namespace CustomerSupport.BusinessObjects{
//      @Serenity.Decorators.registerClass()
//     export class ForwardAsMailDialog extends Serenity.PropertyDialog<any, any>{
//         protected getFormKey(){ ForwardAsMailForm.formKey; }
//         protected form = new ForwardAsMailForm(this.idPrefix);
//         constructor(){
//             super();
//         }
//     }
// }
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ForwardAsMailDialog = (function (_super) {
            __extends(ForwardAsMailDialog, _super);
            function ForwardAsMailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BusinessObjects.ForwardAsMailForm(_this.idPrefix);
                return _this;
            }
            ForwardAsMailDialog.prototype.getFormKey = function () { return BusinessObjects.ForwardAsMailForm.formKey; };
            ForwardAsMailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ForwardAsMailDialog);
            return ForwardAsMailDialog;
        }(Serenity.PropertyDialog));
        BusinessObjects.ForwardAsMailDialog = ForwardAsMailDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Scripts/Kendo/typescript/kendo.all.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var NewTicketLoader = (function () {
            function NewTicketLoader() {
                this.newTicketForm = kendo.observable({
                    CustomerId: Q.getLookup("Administration.CustomerLocationLookup").items,
                    CustomerIdVal: null,
                    getObject: function () {
                        alert('Yup');
                    }
                }); //Ends this.newTicketForm
                kendo.bind($("#new-ticket-form"), this.newTicketForm);
            }
            return NewTicketLoader;
        }());
        BusinessObjects.NewTicketLoader = NewTicketLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketActionLogDialog = (function (_super) {
            __extends(TicketActionLogDialog, _super);
            function TicketActionLogDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BusinessObjects.TicketForm(_this.idPrefix);
                return _this;
            }
            TicketActionLogDialog.prototype.getFormKey = function () { return BusinessObjects.TicketActionLogForm.formKey; };
            TicketActionLogDialog.prototype.getIdProperty = function () { return BusinessObjects.TicketRow.idProperty; };
            TicketActionLogDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketRow.localTextPrefix; };
            TicketActionLogDialog.prototype.getNameProperty = function () { return BusinessObjects.TicketRow.nameProperty; };
            TicketActionLogDialog.prototype.getService = function () { return BusinessObjects.TicketService.baseUrl; };
            TicketActionLogDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                this.dialogTitle = "Call logs";
            };
            TicketActionLogDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "delete-button"; }), 1);
                return buttons;
            };
            TicketActionLogDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TicketActionLogDialog);
            return TicketActionLogDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.TicketActionLogDialog = TicketActionLogDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketDetailLoader = (function () {
            function TicketDetailLoader() {
            }
            TicketDetailLoader.prototype.Load = function () {
                var cfl = new BusinessObjects.CustomerFormLoaderAutoGen(null);
                cfl.GetObject().
                    this.LoadMenu();
            };
            TicketDetailLoader.prototype.LoadMenu = function () {
                $("#detail-menu").kendoMenu({
                    select: function (e) {
                        if ($(e.item).children(".k-link").find("i").hasClass("fa-plus")) {
                            $('.nomail').addClass('hide');
                            $('.mailcontent').addClass('hide');
                            $('.new-ticket-form').removeClass('hide');
                        }
                        else if ($(e.item).children(".k-link").find("i").hasClass("fa-exclamation-triangle")) {
                            alert('Warning alert clicked');
                        }
                    }
                });
                $("#detail-menu-pagination").kendoMenu({});
            };
            return TicketDetailLoader;
        }());
        BusinessObjects.TicketDetailLoader = TicketDetailLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketEditor = (function (_super) {
            __extends(TicketEditor, _super);
            function TicketEditor(container) {
                return _super.call(this, container) || this;
            }
            TicketEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Ticket'; };
            TicketEditor.prototype.getDialogType = function () { return BusinessObjects.TicketEditorDialog; };
            TicketEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketRow.localTextPrefix; };
            TicketEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TicketEditor);
            return TicketEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.TicketEditor = TicketEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketEditorDialog = (function (_super) {
            __extends(TicketEditorDialog, _super);
            function TicketEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.TicketForm(_this.idPrefix);
                return _this;
            }
            TicketEditorDialog.prototype.getFormKey = function () { return BusinessObjects.TicketForm.formKey; };
            TicketEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketRow.localTextPrefix; };
            TicketEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.TicketRow.nameProperty; };
            TicketEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TicketEditorDialog);
            return TicketEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.TicketEditorDialog = TicketEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        //Q.serviceRequest("BusinessObjects/Ticket/NewTicket", { Customer: { Entity: { FullName: "Fikoli Chrome" } }, Ticket: { Entity: { LocationId: 2, Subject: 'My Chrome', Date: '9/22/2017 3:01:08 PM', TicketIdString: '11kdkdldls' } }, Note: { Entity: { Text: 'My chrome Text', EntityType: '[dbo].[Tickets]' } } }, res => { alert(JSON.stringify(res)) })
        var TicketFormLoader = (function () {
            function TicketFormLoader() {
                this.ticketForm = kendo.observable({
                    customerList: Q.getLookup("Administration.CustomerLocationLookup").items,
                    customerName: null,
                    phoneNumber: null,
                    customerNameFilter: null,
                    phoneNumberFilter: null,
                    customerChangedFilter: function () {
                        this.setPrefill(this.get("customerNameFilter"));
                    },
                    phoneNumberChangedFilter: function () {
                        this.setPrefill(this.get("phoneNumberFilter"));
                    },
                    ticketIdInt: null,
                    customerId: null,
                    ticketId: null,
                    subject: null,
                    followUpDate: null,
                    followUpAction: null,
                    messageChannel: null,
                    message: null,
                    requestTypeSource: BusinessObjects.GlobalScripts.GetRequestType(),
                    prioritySource: BusinessObjects.GlobalScripts.GetPriority(),
                    statusSource: BusinessObjects.GlobalScripts.GetStatus(),
                    locationIdSource: Q.getLookup("Administration.LocationLookup").items,
                    groupSource: Q.getLookup("Administration.RoleLocationLookup").items,
                    userSource: Q.getLookup("Administration.UserRoleLookup").items,
                    requestType: null,
                    priority: null,
                    status: null,
                    locationId: null,
                    group: null,
                    user: null,
                    isVisible: false,
                    setPrefill: function (obj) {
                        if (obj != null && obj != undefined) {
                            this.set("customerName", obj.FullName);
                            this.set("phoneNumber", obj.PhoneNumber);
                        }
                        else {
                            this.set("customerName", "");
                            this.set("phoneNumber", "");
                        }
                    },
                    getObject: function () {
                        return {
                            customerName: this.get("customerName"),
                            phoneNumber: this.get("phoneNumber"),
                            ticketId: this.get("ticketId"),
                            subject: this.get("subject"),
                            followUpDate: this.get("followUpDate"),
                            followUpAction: this.get("followUpAction"),
                            messageChannel: this.get("messageChannel"),
                            message: this.get("message"),
                            requestType: this.get("requestType"),
                            priority: this.get("priority"),
                            status: this.get("status"),
                            locationId: this.get("locationId").LocationId,
                            group: this.get("group"),
                            user: this.get("user"),
                            ticketIdInt: this.get("ticketIdInt"),
                            customerId: this.get("customerId"),
                        };
                    },
                    renderMessages: function (obj) {
                        $("#timeline").html("");
                        $("#timeline").html(kendo.template($("#timeline-tmplt").html())(obj.Note.Entities));
                    },
                    submit: function () {
                        var validator = $("#new-ticket-form").kendoValidator().data("kendoValidator");
                        if (validator.validate()) {
                            if (this.get("message") != null && this.get("message") != "") {
                                var obj = this.getObject();
                                Q.notifyInfo("Creating a new Ticket . . .");
                                if (TicketFormLoader.TheTicketFormLoader.ticketId == undefined) {
                                    Q.serviceRequest("BusinessObjects/Ticket/NewTicket", {
                                        Customer: { Entity: { FullName: obj.customerName } },
                                        Ticket: {
                                            Entity: {
                                                LocationId: obj.locationId, Subject: obj.subject, Date: new Date(), TicketIdString: obj.ticketId,
                                                Priority: obj.priority != null ? obj.priority.value : null,
                                                Status: obj.status != null ? obj.status.value : null,
                                                Type: obj.requestType != null ? obj.requestType.value : null,
                                                GroupId: obj.group != null ? obj.group.RoleId : null,
                                                UserId: obj.user != null ? obj.user.UserId : null,
                                                NextFollowUpDate: obj.followUpDate != null ? obj.followUpDate : null,
                                                FollowUpAction: obj.followUpAction != null ? obj.followUpAction : null
                                            }
                                        },
                                        Note: { Entity: { Text: obj.message, EntityType: '[dbo].[Tickets]', CallDirection: obj.messageChannel } }
                                    }, function (res) {
                                        TicketFormLoader.TheTicketFormLoader.ticketId = res.Ticket.Entity.TicketId;
                                        TicketFormLoader.ticketFormStatic.setEntityIds(res);
                                        TicketFormLoader.ticketFormStatic.set("isVisible", true);
                                        TicketFormLoader.ticketFormStatic.renderMessages(res);
                                        $("#ticket-messsage-dialog").data("kendoDialog").close();
                                        Q.notifySuccess("Ticket created");
                                    });
                                }
                                else {
                                    //Sending Message
                                    Q.serviceRequest("BusinessObjects/Ticket/UpdateTicketMessage", { Customer: { EntityId: obj.customerId, Entity: { CustomerId: obj.customerId, FullName: obj.customerName } }, Ticket: { EntityId: obj.ticketIdInt, Entity: { TicketId: obj.TicketIdInt, LocationId: obj.locationId, Subject: obj.subject, Date: new Date(), TicketIdString: obj.ticketId } }, Note: { Entity: { Text: obj.message, EntityType: '[dbo].[Tickets]', CallDirection: obj.messageChannel } } }, function (res) {
                                        TicketFormLoader.ticketFormStatic.renderMessages(res);
                                        $("#ticket-messsage-dialog").data("kendoDialog").close();
                                        Q.notifySuccess("Message saved");
                                    });
                                }
                            }
                            else
                                Q.notifyWarning("Enter a message");
                        }
                        else {
                            Q.notifyWarning("Some fields are required. Please check.");
                        }
                    },
                    update: function () {
                        var validator = $("#new-ticket-form").kendoValidator().data("kendoValidator");
                        if (validator.validate()) {
                            var obj = this.getObject();
                            Q.notifyInfo("Ticket updating . . .");
                            Q.serviceRequest("BusinessObjects/Ticket/UpdateTicket", {
                                Customer: { EntityId: obj.customerId, Entity: { FullName: obj.customerName } },
                                Ticket: {
                                    EntityId: obj.ticketIdInt, Entity: {
                                        LocationId: obj.locationId, Subject: obj.subject, Date: new Date(), TicketIdString: obj.ticketId,
                                        Priority: obj.priority != null ? obj.priority.value : null,
                                        Status: obj.status != null ? obj.status.value : null,
                                        Type: obj.requestType != null ? obj.requestType.value : null,
                                        GroupId: obj.group != null ? obj.group.RoleId : null,
                                        UserId: obj.user != null ? obj.user.UserId : null,
                                        NextFollowUpDate: obj.followUpDate != null ? obj.followUpDate : null,
                                        FollowUpAction: obj.followUpAction != null ? obj.followUpAction : null
                                    }
                                }
                            }, function (res) {
                                $("#ticket-messsage-dialog").data("kendoDialog").close();
                                Q.notifySuccess("Update successful");
                            });
                        }
                        else {
                            Q.notifyWarning("Some fields are required. Please check.");
                        }
                    },
                    clearMessage: function () {
                        this.set("message", "");
                    },
                    setEntityIds: function (obj) {
                        this.set("ticketIdInt", obj.Ticket.Entity.TicketId);
                        this.set("customerId", obj.Customer.Entity.CustomerId);
                    },
                    setObject: function (obj) {
                        this.set("customerName", obj.Customer.Entity.FullName);
                        this.set("phoneNumber", obj.Customer.Entity.PhoneNumber);
                        this.set("locationId", obj.Ticket.Entity.LocationId);
                        this.set("ticketId", obj.Ticket.Entity.TicketIdString);
                        this.set("subject", obj.Ticket.Entity.Subject);
                        this.set("priority", obj.Ticket.Entity.Priority);
                        this.set("status", obj.Ticket.Entity.Status);
                        this.set("requestType", obj.Ticket.Entity.Type);
                        this.set("group", obj.Ticket.Entity.GroupId);
                        this.set("user", obj.Ticket.Entity.UserId);
                        this.set("followUpDate", obj.Ticket.Entity.NextFollowUpDate);
                        this.set("followUpAction", obj.Ticket.Entity.FollowUpAction);
                        this.set("messageChannel", null);
                        this.setEntityIds(obj);
                        this.renderMessages(obj);
                    },
                    isMsgDlgVisible: false,
                    openDialog: function () {
                        $("#ticket-messsage-dialog").data("kendoDialog").open();
                    }, getNextNumber: function () {
                        //var val = Q.trimToNull(this.form.TicketIdString.value);
                        var val = null;
                        // we will only get next number when customer ID is empty or 1 character in length
                        if (!val || val.length <= 1) {
                            // if no customer ID yet (new record mode probably) use 'C' as a prefix
                            var prefix = (val || 'ID_').toUpperCase();
                            // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                            BusinessObjects.TicketService.GetNextNumber({
                                Prefix: prefix,
                                Length: 8 // we want service to search for and return serials of 5 in length
                            }, function (response) {
                                //this.form.TicketIdString.value = response.Serial;
                                TicketFormLoader.ticketFormStatic.set("ticketId", response.Serial);
                                // this is to mark numerical part after prefix
                                //(this.form.TicketIdString.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                            });
                        }
                    }
                }); //Ends this.ticketList
                kendo.bind($("#new-ticket-form"), this.ticketForm);
                TicketFormLoader.ticketFormStatic = this.ticketForm;
                TicketFormLoader.TheTicketFormLoader = this;
            }
            TicketFormLoader.prototype.LoadMenu = function () {
                //$("#menu").kendoMenu({
                //    select: function (e) {
                //        alert($(e.item).children(".k-link").text())
                //    }
                //})
                $("#form-menu").kendoMenu({});
            };
            TicketFormLoader.prototype.Load = function (ticketId) {
                if (ticketId != undefined) {
                    this.ticketId = ticketId;
                    Q.notifyInfo("Loading Ticket . . . ");
                    Q.serviceRequest("BusinessObjects/Ticket/DetailTicket", { EntityId: ticketId }, function (res) {
                        TicketFormLoader.ticketFormStatic.set("isVisible", true);
                        TicketFormLoader.ticketFormStatic.setObject(res);
                    });
                }
                else {
                    TicketFormLoader.ticketFormStatic.getNextNumber();
                }
                $("#vertical-splitter").kendoSplitter({
                    orientation: "vertical",
                    panes: [{ min: "600px" }]
                });
                this.LoadMenu();
                this.InitCommunicationMedium();
            };
            TicketFormLoader.prototype.InitCommunicationMedium = function () {
                $("#communication-medium").kendoMobileButtonGroup({
                    select: function (e) {
                        TicketFormLoader.ticketFormStatic.set("messageChannel", $(e.sender.element).find("li.k-state-active").text());
                    },
                });
            };
            TicketFormLoader.Submit = function () {
                //alert(JSON.stringify(TicketFormLoader.ticketFormStatic.getObject()))
                //return;
            };
            return TicketFormLoader;
        }());
        BusinessObjects.TicketFormLoader = TicketFormLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketListLoader = (function () {
            function TicketListLoader() {
                //this.FilterPaneObervable()
                this.GridListDataSource();
                //this.MenuObservable();
                //this.MyNewObserv()
                TicketListLoader.TicketListLoaderRef = this;
            }
            TicketListLoader.prototype.GridListDataSource = function () {
                this.ticketListDtSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: "Entities",
                        total: "TotalCount",
                        model: {
                            id: "TicketId",
                            fields: {
                                Date: { type: "date" }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.Criteria != undefined) {
                                BusinessObjects.TicketService.List({ Criteria: options.data.Criteria, IncludeColumns: ["CustomerName"] }, function (res) {
                                    options.success(res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.TicketService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: ["CustomerName"] }, function (res) {
                                    options.success(res);
                                });
                            }
                            else {
                                BusinessObjects.TicketService.List({ IncludeColumns: ["CustomerName"] }, function (res) {
                                    options.success(res);
                                });
                            }
                            //options.success({ Entities: [{ TicketId: 1, Subject: "Subj 1" }, { TicketId: 2, Subject: "Subj 2" }], TotalCount: 2 })
                        },
                        create: function (options) {
                            // ClassNameService.Create({ Entity: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"TicketId":0,', '')) },
                            //      res => {
                            //           options.success(res);
                            //   })
                        }
                    },
                }); //Ends
            };
            TicketListLoader.prototype.FilterPaneObervable = function () {
                this.fitlerPane = kendo.observable({
                    requestTypeSource: BusinessObjects.GlobalScripts.GetRequestType(),
                    prioritySource: BusinessObjects.GlobalScripts.GetPriority(),
                    statusSource: BusinessObjects.GlobalScripts.GetStatus(),
                    locationIdSource: Q.getLookup("Administration.LocationLookup").items,
                    groupSource: Q.getLookup("Administration.RoleLocationLookup").items,
                    userSource: Q.getLookup("Administration.UserRoleLookup").items,
                    requestType: null,
                    priority: null,
                    status: null,
                    locationId: null,
                    group: null,
                    user: null,
                    getObject: function () {
                        var requestQry = [];
                        if (this.get("requestType") != null && this.get("requestType") != undefined) {
                            this.assemble(requestQry, [Serenity.Criteria("Type"), '=', this.get("requestType").value]);
                        }
                        if (this.get("priority") != null && this.get("priority") != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria("Priority"), '=', this.get("priority").value]);
                        }
                        if (this.get("status") != null && this.get("status") != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria("Status"), '=', this.get("status").value]);
                        }
                        if (this.get("locationId") != null && this.get("locationId") != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria("LocationId"), '=', this.get("locationId").LocationId]);
                        }
                        if (this.get("group") != null && this.get("group") != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria("GroupId"), '=', this.get("group").RoleId]);
                        }
                        if (this.get("user") != null && this.get("user") != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria("UserId"), '=', this.get("user").UserId]);
                        }
                        if (requestQry.length >= 1) {
                            requestQry = (requestQry.length == 1) ? requestQry[0] : requestQry;
                            TicketListLoader.TicketListLoaderRef.ticketListDtSrc.read({ Criteria: requestQry });
                        }
                        else {
                            TicketListLoader.TicketListLoaderRef.ticketListDtSrc.read();
                        }
                    },
                    assemble: function (arrRef, obj) {
                        if (arrRef.length == 0) {
                            arrRef.push(obj);
                            return arrRef;
                        }
                        else if (arrRef.length == 1) {
                            arrRef.push("and");
                            arrRef.push(obj);
                            return arrRef;
                        }
                        else {
                            var newArr1 = [];
                            newArr1.push([arrRef[0], arrRef[1], arrRef[2]]);
                            newArr1.push("and");
                            newArr1.push(obj);
                            return newArr1;
                        }
                    }
                }); //Ends this.fitlerPane
                kendo.bind($("#filter-pane"), this.fitlerPane);
            };
            TicketListLoader.prototype.MyNewObserv = function () {
                alert('Yeah me called 1 2');
                this.menuObservable = kendo.observable({
                    isVisible: false,
                });
                kendo.bind($("#menu-section-one"), this.menuObservable);
            };
            TicketListLoader.prototype.MenuObservable = function () {
                this.menuObservable = kendo.observable({
                    requestTypeSource: BusinessObjects.GlobalScripts.GetRequestType(),
                    prioritySource: BusinessObjects.GlobalScripts.GetPriority(),
                    statusSource: BusinessObjects.GlobalScripts.GetStatus(),
                    locationIdSource: Q.getLookup("Administration.LocationLookup").items,
                    groupSource: Q.getLookup("Administration.RoleLocationLookup").items,
                    userSource: Q.getLookup("Administration.UserRoleLookup").items,
                    requestType: null,
                    priority: null,
                    status: null,
                    locationId: null,
                    group: null,
                    user: null,
                    isVisible: false,
                    message: null,
                    phoneNumber: null,
                    onNewClicked: function () {
                        $('.new-ticket-form').removeClass('hide');
                    },
                    myValue: "Fikoli",
                    onSelect: function (e) {
                        var text = $(e.item).children(".k-link").text();
                        this.clearObj();
                        if (text == 'Set Type, Priority, Status and Group') {
                            $("#set-status").data("kendoDialog").open();
                        }
                        else if (text == 'Assign to Agent') {
                            $("#assign-to-agent").data("kendoDialog").open();
                        }
                        else if (text == 'Send SMS') {
                            $("#send-sms").data("kendoDialog").open();
                        }
                    },
                    clearObj: function () {
                        this.set("requestType", null);
                        this.set("priority", null);
                        this.set("status", null);
                        this.set("locationId", null);
                        this.set("group", null);
                        this.set("user", null);
                        this.set("message", null);
                        this.set("phoneNumber", null);
                    },
                    assignToAgent: function () {
                        var selectedKeys = $("#ticket-list").data("kendoGrid").selectedKeyNames(); //.join(",")
                        if (selectedKeys != '') {
                            var selectedKeysInt = [];
                            $.map(selectedKeys, function (item) {
                                selectedKeysInt.push(parseInt(item));
                            });
                            var requestObj = {
                                LocationId: this.get("locationId") != null ? this.get("locationId").LocationId : null,
                                GroupId: this.get("group") != null ? this.get("group").RoleId : null,
                                AgentId: this.get("user") != null ? this.get("user").UserId : null,
                                TicketIds: selectedKeysInt
                            };
                            var url = "BusinessObjects/Ticket/AssignToAgents";
                            Q.serviceRequest(url, requestObj, function (response) {
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                TicketListLoader.TicketListLoaderRef.fitlerPane.getObject();
                                Q.notifySuccess("Update successful");
                            });
                        }
                        else
                            Q.notifyWarning("Please select some records to process");
                    },
                    setStatus: function () {
                        var selectedKeys = $("#ticket-list").data("kendoGrid").selectedKeyNames(); //.join(",")
                        if (selectedKeys != '') {
                            var selectedKeysInt = [];
                            $.map(selectedKeys, function (item) {
                                selectedKeysInt.push(parseInt(item));
                            });
                            var requestObj = {
                                Priority: this.get("priority") != null ? this.get("priority").value : null,
                                Status: this.get("status") != null ? this.get("status").value : null,
                                Type: this.get("requestType") != null ? this.get("requestType").value : null,
                                LocationId: this.get("locationId") != null ? this.get("locationId").LocationId : null,
                                GroupId: this.get("group") != null ? this.get("group").RoleId : null,
                                AgentId: this.get("user") != null ? this.get("user").UserId : null,
                                TicketIds: selectedKeysInt
                            };
                            var url = "BusinessObjects/Ticket/ActionsSettings";
                            Q.serviceRequest(url, requestObj, function (response) {
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                TicketListLoader.TicketListLoaderRef.fitlerPane.getObject();
                                Q.notifySuccess("Update successful");
                            });
                        }
                        else
                            Q.notifyWarning("Please select some records to process");
                    },
                    sendSMS: function () {
                        var selectedKeys = $("#ticket-list").data("kendoGrid").selectedKeyNames(); //.join(",")
                        if (selectedKeys != '') {
                            var selectedKeysInt = [];
                            $.map(selectedKeys, function (item) {
                                selectedKeysInt.push(parseInt(item));
                            });
                            var requestObj = {
                                PhoneNumbers: this.get("phoneNumber"),
                                Message: this.get("message"),
                                LocationId: this.get("locationId") != null ? this.get("locationId").LocationId : null,
                                TicketIds: [selectedKeys]
                            };
                            var url = "BusinessObjects/Sms/TicketsSms";
                            Q.notifyInfo("Sending SMS ...");
                            Q.serviceRequest(url, requestObj, function (SmsResponse) {
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                //$(".refresh-button").click();
                                Q.notifySuccess("SMS sent");
                            });
                        }
                        else
                            Q.notifyWarning("Please select some records to process");
                    }
                });
                kendo.bind($("#menu-section"), this.menuObservable);
            };
            TicketListLoader.prototype.Load = function () {
                //alert($("#ticket-template").html())
                // $("#ticket-list").kendoListView({
                //   dataSource: this.ticketListDtSrc,
                //    template:kendo.template($("#ticket-template").html())
                //  })
                this.LoadGrid();
                this.LoadMenu();
            };
            TicketListLoader.prototype.LoadInCustomer = function (customerId) {
                TicketListLoader.TicketListLoaderRef.LoadGrid();
                var dtSrc = TicketListLoader.TicketListLoaderRef.ticketListDtSrc;
                dtSrc.read({ EqualityFilter: { CustomerId: customerId } });
            };
            TicketListLoader.prototype.LoadMenu = function () {
                //$("#menu").kendoMenu({
                //    select: function (e) {
                //        alert($(e.item).children(".k-link").text())
                //    }
                //})
                $("#menu-images").kendoMenu({
                    select: function (e) {
                        if ($(e.item).children(".k-link").find("i").hasClass("fa-plus")) {
                            $('.nomail').addClass('hide');
                            $('.mailcontent').addClass('hide');
                            $('.new-ticket-form').removeClass('hide');
                        }
                        else if ($(e.item).children(".k-link").find("i").hasClass("fa-exclamation-triangle")) {
                            alert('Warning alert clicked');
                        }
                    }
                });
            };
            TicketListLoader.prototype.LoadGrid = function () {
                $("#ticket-list").kendoGrid({
                    dataSource: this.ticketListDtSrc,
                    persistSelection: true,
                    columns: [{ selectable: true, width: "40px", },
                        { title: "Ticket", template: kendo.template($("#col-template").html()) },
                    ],
                    selectable: true,
                    scrollable: true,
                    height: "980px",
                    change: function (e) {
                        // alert(this.dataItem(this.select()[0]).TicketId)
                        $('.nomail').addClass('hide');
                        $('.new-ticket-form').addClass('hide');
                        $('.mailcontent').removeClass('hide');
                        // $("#assign-to-agent").data("kendoDialog").open()
                    }
                });
                $("#pager").kendoPager({
                    dataSource: this.ticketListDtSrc,
                });
                $("#pager2").kendoPager({
                    dataSource: this.ticketListDtSrc,
                });
            };
            TicketListLoader.prototype.FormLoader = function () {
                this.ticketMessageSection = kendo.observable({
                    action: [{ text: "In-coming-call" }, { text: "Out-going-call" }, { text: "Reply" }, { text: "Comment" }, { text: "Note" }, { text: "Complain" }],
                    actionVal: null,
                    getObject: function () {
                        alert(this.actionVal.text);
                    }
                }); //Ends this.ticketMessageSection
                kendo.bind($("#ticket-message-section"), this.ticketMessageSection);
                $("#vertical-splitter").kendoSplitter({
                    orientation: "vertical",
                    panes: [{ collapsible: true, size: "280px" }, { collapsible: true }]
                });
            };
            TicketListLoader.prototype.HideAddButton = function () {
                $("#add-btn").hide();
            };
            TicketListLoader.prototype.HideFilterPane = function () {
                $("#filter-pane").hide();
            };
            return TicketListLoader;
        }());
        BusinessObjects.TicketListLoader = TicketListLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Scripts/Kendo/typescript/kendo.all.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketLoader1 = (function () {
            function TicketLoader1() {
                this.dtSrc = kendo.data.DataSource;
                dtSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: "Entities",
                        total: "TotalCount",
                        model: {
                            id: "TicketId",
                            fields: {
                                TicketId: { editable: false, nullable: false },
                                Date: { type: "date" },
                                CustomerId: { type: "string" },
                                Subject: { type: "string" }
                            },
                        }
                    },
                    batch: true,
                    pageSize: 12,
                    transport: {
                        read: function (options) {
                            BusinessObjects.TicketService.List({}, function (res) {
                                options.success(res);
                            });
                        },
                        create: function (options) {
                            $("#output").html(JSON.parse("{" + Q.replaceAll(JSON.stringify(options.data.models[0]), '"TicketId":"",', '') + "}"));
                            BusinessObjects.TicketService.Create({ Entities: [JSON.parse("{" + Q.replaceAll(JSON.stringify(options.data.models[0]), '"TicketId":"",', '') + "}")] }, function (res) {
                                options.success(options.data.models[0]);
                            });
                            //                                 TicketService.Create({Entity:{
                            //                 TicketIdString:"ID_003067",LocationId:2,ProductId:1,TransactionId:7,Date:"2017-09-22T13:55:00.000",PhoneNumber:"08065701697",CustomerId:1,
                            // Subject:"Sales -Tran-fikoli-Good"
                            //             }}, res => {alert(JSON.stringify(options))})
                        },
                        update: function (options) {
                            // make JSONP request to https://demos.telerik.com/kendo-ui/service/products/create
                            BusinessObjects.TicketService.Update({ Entity: options.data.models[0] }, function (res) {
                                options.success(options.data.models[0]);
                            });
                        },
                        destroy: function (options) {
                            BusinessObjects.TicketService.Delete({ EntityId: options.data.models[0].TicketId }, function (res) {
                                options.success(options.data.models[0]);
                            });
                        },
                        parameterMap: function (options, operation) {
                            if (operation !== "read" && options.models) {
                                return { models: kendo.stringify(options.models) };
                            }
                        },
                    },
                });
            }
            TicketLoader1.prototype.Load = function () {
                BusinessObjects.TicketService.List({}, function (response) {
                    $("#Grid").kendoGrid({
                        dataSource: dtSrc,
                        columns: [
                            { command: ["edit", "destroy"], title: "&nbsp;", width: "250px" },
                            { field: "TicketIdString" },
                            { field: "Date", format: "{0:MM/dd/yyyy}" },
                            { field: "CustomerId", values: JSON.parse(Q.replaceAll(Q.replaceAll(JSON.stringify(Q.getLookup("Administration.CustomerLocationLookup").items), "CustomerId", "value"), "FullName", "text")) },
                            { field: "Subject" },
                            { field: "Type" },
                            { field: "Priority" },
                            { field: "Status" },
                            { field: "GroupRoleName" },
                            { field: "UserUserName" },
                            { field: "ProductName" },
                            { field: "PhoneNumber" },
                            { field: "NextFollowUpDate" },
                            { field: "FollowUpAction" },
                            { field: "LocationId" }
                        ],
                        pageable: true,
                        toolbar: ["create"],
                        editable: "popup",
                    });
                });
            };
            return TicketLoader1;
        }());
        BusinessObjects.TicketLoader1 = TicketLoader1;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Scripts/Kendo/typescript/kendo.all.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketLoader3 = (function () {
            function TicketLoader3() {
                this.dtSrc = kendo.data.DataSource;
                this.dtSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: "Entities",
                        total: "TotalCount",
                        model: {
                            id: "TicketId",
                            fields: {
                                TicketId: { editable: false, nullable: false },
                                Date: { type: "date" },
                                CustomerId: { type: "string" },
                                Subject: { type: "string" }
                            },
                        }
                    },
                    batch: true,
                    pageSize: 12,
                    transport: {
                        read: function (options) {
                            BusinessObjects.TicketService.List({}, function (res) {
                                options.success(res);
                            });
                        },
                        create: function (options) {
                            $("#output").html(JSON.parse("{" + Q.replaceAll(JSON.stringify(options.data.models[0]), '"TicketId":"",', '') + "}"));
                            BusinessObjects.TicketService.Create({ Entities: [JSON.parse("{" + Q.replaceAll(JSON.stringify(options.data.models[0]), '"TicketId":"",', '') + "}")] }, function (res) {
                                options.success(options.data.models[0]);
                            });
                            //                                 TicketService.Create({Entity:{
                            //                 TicketIdString:"ID_003067",LocationId:2,ProductId:1,TransactionId:7,Date:"2017-09-22T13:55:00.000",PhoneNumber:"08065701697",CustomerId:1,
                            // Subject:"Sales -Tran-fikoli-Good"
                            //             }}, res => {alert(JSON.stringify(options))})
                        },
                        update: function (options) {
                            // make JSONP request to https://demos.telerik.com/kendo-ui/service/products/create
                            BusinessObjects.TicketService.Update({ Entity: options.data.models[0] }, function (res) {
                                options.success(options.data.models[0]);
                            });
                        },
                        destroy: function (options) {
                            BusinessObjects.TicketService.Delete({ EntityId: options.data.models[0].TicketId }, function (res) {
                                options.success(options.data.models[0]);
                            });
                        },
                        parameterMap: function (options, operation) {
                            if (operation !== "read" && options.models) {
                                return { models: kendo.stringify(options.models) };
                            }
                        },
                    },
                });
            }
            TicketLoader3.prototype.Load = function () {
                $("#groups").kendoDropDownList({
                    text: "Select Group"
                });
                $("#agents").kendoDropDownList({});
                BusinessObjects.TicketService.List({}, function (res) {
                    $("#ticket-list").kendoListView({
                        dataSource: res.Entities,
                        template: kendo.template($("#ticket-preview").html())
                    });
                });
            };
            return TicketLoader3;
        }());
        BusinessObjects.TicketLoader3 = TicketLoader3;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketThreadDialog = (function (_super) {
            __extends(TicketThreadDialog, _super);
            function TicketThreadDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.TicketThreadForm(_this.idPrefix);
                return _this;
            }
            TicketThreadDialog.prototype.getFormKey = function () { return BusinessObjects.TicketThreadForm.formKey; };
            TicketThreadDialog.prototype.getIdProperty = function () { return BusinessObjects.TicketRow.idProperty; };
            TicketThreadDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketRow.localTextPrefix; };
            TicketThreadDialog.prototype.getNameProperty = function () { return BusinessObjects.TicketRow.nameProperty; };
            TicketThreadDialog.prototype.getService = function () { return BusinessObjects.TicketService.baseUrl; };
            TicketThreadDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.form.CustomerId.element, true);
            };
            TicketThreadDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TicketThreadDialog);
            return TicketThreadDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.TicketThreadDialog = TicketThreadDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketTransactionDialog = (function (_super) {
            __extends(TicketTransactionDialog, _super);
            function TicketTransactionDialog() {
                var _this = _super.call(this) || this;
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Transaction_Read)) {
                    _this.ticketTrxnGrid = new BusinessObjects.TicketTransactionGrid(_this.byId("TicketTransactionGrid"));
                }
                else
                    Serenity.TabsExtensions.setDisabled(_this.tabs, "TicketTransaction", true);
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Sms_Read)) {
                    _this.ticketSms = new BusinessObjects.TicketSmsGrid(_this.byId("TicketSms"));
                }
                else
                    Serenity.TabsExtensions.setDisabled(_this.tabs, "Sms", true);
                _this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
                return _this;
                //          this.form.CustomerId.changeSelect2(e => {
                //     var customerId = Q.toId(this.form.CustomerId.value);
                //     if (customerId != null) {
                //         var customers = CustomerRow.getLookup();
                //         alert(customers)
                //         if(customers.itemById[customerId] != undefined)
                //             this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
                //         else
                //         {
                //               alert('Reload');
                //                 Q.reloadLookup("BusinessObjects.Customer");
                //                 customers = BusinessObjects.CustomerRow.getLookup();
                //             this.form.PhoneNumber.value = customers.itemById[customerId].PhoneNumber;
                //         }
                //     }
                // })
            } //Ends the constructor
            TicketTransactionDialog.prototype.getFormKey = function () { return BusinessObjects.TicketForm.formKey; };
            TicketTransactionDialog.prototype.getIdProperty = function () { return BusinessObjects.TicketRow.idProperty; };
            TicketTransactionDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketRow.localTextPrefix; };
            TicketTransactionDialog.prototype.getNameProperty = function () { return BusinessObjects.TicketRow.nameProperty; };
            TicketTransactionDialog.prototype.getService = function () { return BusinessObjects.TicketService.baseUrl; };
            TicketTransactionDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNewOrDeleted()) {
                    if (this.ticketTrxnGrid != null)
                        Serenity.TabsExtensions.setDisabled(this.tabs, "TicketTransaction", true);
                    if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Sms_Read))
                        Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", true);
                }
                else {
                    if (this.ticketTrxnGrid != null)
                        Serenity.TabsExtensions.setDisabled(this.tabs, "TicketTransaction", false);
                    if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Sms_Read))
                        Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", false);
                } //Ends the else block
            };
            TicketTransactionDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Sms_Read))
                    this.ticketSms.ticketID = entity.TicketId;
                if (this.ticketTrxnGrid != null)
                    this.ticketTrxnGrid.ticketID = entity.TicketId;
                BusinessObjects.GlobalScripts.TicketId = entity.TicketId;
            };
            TicketTransactionDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TicketTransactionDialog);
            return TicketTransactionDialog;
        }(BusinessObjects.TicketDialog));
        BusinessObjects.TicketTransactionDialog = TicketTransactionDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketTransactionGrid = (function (_super) {
            __extends(TicketTransactionGrid, _super);
            function TicketTransactionGrid(container) {
                return _super.call(this, container) || this;
            }
            TicketTransactionGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Transaction'; };
            TicketTransactionGrid.prototype.getDialogType = function () { return BusinessObjects.TransactionDialog; };
            TicketTransactionGrid.prototype.getIdProperty = function () { return BusinessObjects.TransactionRow.idProperty; };
            TicketTransactionGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionRow.localTextPrefix; };
            TicketTransactionGrid.prototype.getService = function () { return BusinessObjects.TransactionService.baseUrl; };
            TicketTransactionGrid.prototype.addButtonClick = function () {
                this.editItem({ TicketId: this.ticketID });
            };
            TicketTransactionGrid.prototype.getInitialTitle = function () {
                return null;
            };
            TicketTransactionGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            TicketTransactionGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.ticketID;
            };
            Object.defineProperty(TicketTransactionGrid.prototype, "ticketID", {
                get: function () {
                    return this._ticketId;
                },
                set: function (value) {
                    if (this._ticketId != value) {
                        this._ticketId = value;
                        this.setEquality("TicketId", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            TicketTransactionGrid.prototype.getButtons = function () {
                var _this = this;
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'BusinessObjects/Transaction/ListExcel',
                    separator: true
                }));
                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return btns;
            }; //Ends getButtons
            TicketTransactionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TicketTransactionGrid);
            return TicketTransactionGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.TicketTransactionGrid = TicketTransactionGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketProcessDialog = (function (_super) {
            __extends(TicketProcessDialog, _super);
            function TicketProcessDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.TicketProcessForm(_this.idPrefix);
                return _this;
            }
            TicketProcessDialog.prototype.getFormKey = function () { return BusinessObjects.TicketProcessForm.formKey; };
            TicketProcessDialog.prototype.getIdProperty = function () { return BusinessObjects.TicketProcessRow.idProperty; };
            TicketProcessDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketProcessRow.localTextPrefix; };
            TicketProcessDialog.prototype.getNameProperty = function () { return BusinessObjects.TicketProcessRow.nameProperty; };
            TicketProcessDialog.prototype.getService = function () { return BusinessObjects.TicketProcessService.baseUrl; };
            TicketProcessDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TicketProcessDialog);
            return TicketProcessDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.TicketProcessDialog = TicketProcessDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketProcessEditor = (function (_super) {
            __extends(TicketProcessEditor, _super);
            function TicketProcessEditor(container) {
                return _super.call(this, container) || this;
            }
            TicketProcessEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.TicketProcess'; };
            TicketProcessEditor.prototype.getDialogType = function () { return BusinessObjects.TicketProcessEditorDialog; };
            TicketProcessEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketProcessRow.localTextPrefix; };
            TicketProcessEditor.prototype.addButtonClick = function () {
                alert('add');
                this._isReply = true;
            };
            TicketProcessEditor.prototype.onclick = function (ev) {
                alert('Yep');
            };
            TicketProcessEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = BusinessObjects.TicketProcessRow.Fields;
                // adding a specific css class to UnitPrice column, 
                // to be able to format cell with a different background
                //Q.first(columns, x => x.field == fld.Description).cssClass += " fld-subscription";
                return columns;
            };
            TicketProcessEditor.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 90;
                //opt.autoHeight=true
                return opt;
            };
            // protected getItemCssClass(item: BusinessObjects.TicketProcessRow, index: number): string {
            //         let klass: string = " fld-subscription-one";
            //         return Q.trimToNull(klass);
            //     }
            TicketProcessEditor.prototype.getAddButtonCaption = function () {
                return "Reply";
            };
            TicketProcessEditor.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                $("#CustomerSupport_BusinessObjects_TicketThreadDialog37_TicketProcess > div.grid-container > div.slick-pane > div.slick-viewport > div > div a").css("font-size", "50px");
                // btns.push({
                //     cssClass:'add-note-button',
                //     title:'Internal note',
                //     onClick:() => {
                //          this._isReply = false;
                //         this.editItem(<TicketProcessRow>{
                //                 ReplyComment: ReplyComment.Comment
                //         });  
                //     }
                // })
                return btns;
            };
            TicketProcessEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.ReplyComment == BusinessObjects.ReplyComment.Comment)
                    row.ReplyComment = BusinessObjects.ReplyComment.Comment;
                else
                    row.ReplyComment = BusinessObjects.ReplyComment.Reply;
                //row.UserUsername = Authorization.userDefinition.Username;
                Q.notifyInfo("Please click the Update button to save to Database");
                return true;
            };
            TicketProcessEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TicketProcessEditor);
            return TicketProcessEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.TicketProcessEditor = TicketProcessEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketProcessEditorDialog = (function (_super) {
            __extends(TicketProcessEditorDialog, _super);
            function TicketProcessEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.TicketProcessForm(_this.idPrefix);
                return _this;
            }
            TicketProcessEditorDialog.prototype.getFormKey = function () { return BusinessObjects.TicketProcessForm.formKey; };
            TicketProcessEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketProcessRow.localTextPrefix; };
            TicketProcessEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.TicketProcessRow.nameProperty; };
            TicketProcessEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TicketProcessEditorDialog);
            return TicketProcessEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.TicketProcessEditorDialog = TicketProcessEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketProcessGrid = (function (_super) {
            __extends(TicketProcessGrid, _super);
            function TicketProcessGrid(container) {
                return _super.call(this, container) || this;
            }
            TicketProcessGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.TicketProcess'; };
            TicketProcessGrid.prototype.getDialogType = function () { return BusinessObjects.TicketProcessDialog; };
            TicketProcessGrid.prototype.getIdProperty = function () { return BusinessObjects.TicketProcessRow.idProperty; };
            TicketProcessGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketProcessRow.localTextPrefix; };
            TicketProcessGrid.prototype.getService = function () { return BusinessObjects.TicketProcessService.baseUrl; };
            TicketProcessGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TicketProcessGrid);
            return TicketProcessGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.TicketProcessGrid = TicketProcessGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketSmsDialog = (function (_super) {
            __extends(TicketSmsDialog, _super);
            function TicketSmsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.TicketSmsForm(_this.idPrefix);
                return _this;
            }
            TicketSmsDialog.prototype.getFormKey = function () { return BusinessObjects.TicketSmsForm.formKey; };
            TicketSmsDialog.prototype.getIdProperty = function () { return BusinessObjects.TicketSmsRow.idProperty; };
            TicketSmsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketSmsRow.localTextPrefix; };
            TicketSmsDialog.prototype.getService = function () { return BusinessObjects.TicketSmsService.baseUrl; };
            TicketSmsDialog.prototype.updateInterface = function () {
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
            };
            TicketSmsDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "undo-delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "localization-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "clone-button"; }), 1);
                return buttons;
            };
            TicketSmsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TicketSmsDialog);
            return TicketSmsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.TicketSmsDialog = TicketSmsDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketSmsEditor = (function (_super) {
            __extends(TicketSmsEditor, _super);
            function TicketSmsEditor(container) {
                return _super.call(this, container) || this;
            }
            TicketSmsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.TicketSms'; };
            TicketSmsEditor.prototype.getDialogType = function () { return BusinessObjects.TicketSmsEditorDialog; };
            TicketSmsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketSmsRow.localTextPrefix; };
            TicketSmsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TicketSmsEditor);
            return TicketSmsEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.TicketSmsEditor = TicketSmsEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketSmsEditorDialog = (function (_super) {
            __extends(TicketSmsEditorDialog, _super);
            function TicketSmsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.TicketSmsForm(_this.idPrefix);
                return _this;
            }
            TicketSmsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.TicketSmsForm.formKey; };
            TicketSmsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketSmsRow.localTextPrefix; };
            TicketSmsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TicketSmsEditorDialog);
            return TicketSmsEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.TicketSmsEditorDialog = TicketSmsEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketSmsGrid = (function (_super) {
            __extends(TicketSmsGrid, _super);
            function TicketSmsGrid(container) {
                return _super.call(this, container) || this;
            }
            TicketSmsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.TicketSms'; };
            TicketSmsGrid.prototype.getDialogType = function () { return BusinessObjects.TicketSmsDialog; };
            TicketSmsGrid.prototype.getIdProperty = function () { return BusinessObjects.TicketSmsRow.idProperty; };
            TicketSmsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.TicketSmsRow.localTextPrefix; };
            TicketSmsGrid.prototype.getService = function () { return BusinessObjects.TicketSmsService.baseUrl; };
            TicketSmsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            TicketSmsGrid.prototype.getGridCanLoad = function () {
                //return this._ticketID != null;
                return _super.prototype.getGridCanLoad.call(this) && !!this.ticketID;
            };
            Object.defineProperty(TicketSmsGrid.prototype, "ticketID", {
                get: function () {
                    return this._ticketID;
                },
                set: function (value) {
                    if (this._ticketID != value) {
                        this._ticketID = value;
                        this.setEquality("TicketId", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            TicketSmsGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'add-button'; }), 1);
                if (CustomerSupport.Authorization.hasPermission(BusinessObjects.GlobalScripts.Sms_Insert))
                    btns.push(this.getSms());
                return btns;
            }; //Ends getButtons
            TicketSmsGrid.prototype.getSms = function () {
                return {
                    title: 'Send SMS',
                    cssClass: 'send-button',
                    onClick: function () {
                        var sendSms = new BusinessObjects.SendSmsDialog();
                        $("#s-Page > div.s-BusinessObjects-SendSmsDialog > div.ui-dialog-buttonpane > div > button:nth-child(1)")
                            .click(function (evt) {
                            var requestObj = {
                                PhoneNumbers: sendSms.phoneNumbers,
                                Message: sendSms.message,
                                LocationId: sendSms.locationID,
                                TicketId: BusinessObjects.GlobalScripts.TicketId
                            };
                            var url = "BusinessObjects/Sms/TicketsSms";
                            Q.serviceRequest(url, requestObj, function (response) {
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TicketID:" +  response.TicketIds.join(','))
                                $(".refresh-button").click();
                                Q.notifySuccess(response.Message);
                            });
                        });
                        sendSms.dialogOpen();
                    }
                };
            }; //Ends getSms()
            TicketSmsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TicketSmsGrid);
            return TicketSmsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.TicketSmsGrid = TicketSmsGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionDialog = (function (_super) {
            __extends(TransactionDialog, _super);
            function TransactionDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BusinessObjects.TransactionForm(_this.idPrefix);
                _this.form.OrderId.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                //this.transDtlGrid = new TransactionDetailGrid(this.byId("TransactionsDetailsGrid"));
                _this.pymntDtlGrid = new BusinessObjects.PaymentDetailGrid(_this.byId("PaymentsDetailsGrid"));
                _this.tabs.bind("tabsactivate", function () { return _this.arrange(); });
                return _this;
            } //Ends the constructor
            TransactionDialog.prototype.getFormKey = function () { return BusinessObjects.TransactionForm.formKey; };
            TransactionDialog.prototype.getIdProperty = function () { return BusinessObjects.TransactionRow.idProperty; };
            TransactionDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionRow.localTextPrefix; };
            TransactionDialog.prototype.getNameProperty = function () { return BusinessObjects.TransactionRow.nameProperty; };
            TransactionDialog.prototype.getService = function () { return BusinessObjects.TransactionService.baseUrl; };
            // loadEntity(entity: TransactionRow) {
            //     super.loadEntity(entity);
            TransactionDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew())
                    this.getNextNumber();
                if (this.isNewOrDeleted()) {
                    Serenity.TabsExtensions.setDisabled(this.tabs, "TransactionsDetails", true);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "PaymentsDetails", true);
                    this.toolbar.findButton("send-button").hide();
                }
                else {
                    if (this.transDtlGrid == undefined)
                        this.initChildren();
                    //    this.transDtlGrid.transactionID = this.entityId;
                    //    this.pymntDtlGrid.transactionID = this.entityId;
                    //    this.trxnTicketGrid.transactionID = this.entityId;
                    //    GlobalScripts.TicketId = entity.TicketId;
                    //    GlobalScripts.TransactionId = this.entityId;
                    this.transDtlGrid.transactionID = this.entityId;
                    Serenity.TabsExtensions.setDisabled(this.tabs, "TransactionsDetails", false);
                    Serenity.TabsExtensions.setDisabled(this.tabs, "PaymentsDetails", false);
                    //this.toolbar.findButton("send-button").show();
                } //Ends the else block
                this.pymntDtlGrid.transactionID = this.entityId;
            };
            TransactionDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                if (!Q.Authorization.hasPermission(BusinessObjects.GlobalScripts.Transaction_Update)) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                }
                if (!Q.Authorization.hasPermission(BusinessObjects.GlobalScripts.Transaction_Delete)) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "delete-button"; }), 1);
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "undo-delete-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "localization-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "clone-button"; }), 1);
                return buttons;
            };
            TransactionDialog.prototype.initChildren = function () {
                if (!this.isNewOrDeleted()) {
                    this.transDtlGrid = new BusinessObjects.TransactionDetailGrid(this.byId("TransactionsDetailsGrid"));
                }
            };
            TransactionDialog.prototype.getTicket = function () {
                return {
                    title: 'Call logs',
                    cssClass: 'send-button',
                    onClick: function () {
                        var ticketDlg = new BusinessObjects.TicketDialog();
                        //this.initDialog(ticketDlg);
                        var trxnId = BusinessObjects.GlobalScripts.TransactionId;
                        Q.reloadLookup("BusinessObjects.Ticket");
                        var ticketRef = BusinessObjects.TicketRow.getLookup().items
                            .filter(function (x) { return x.TransactionId == trxnId; });
                        //alert(this.form.TransactionId.value)
                        if (ticketRef != undefined && ticketRef.length >= 1) {
                            alert('Existing: ' + trxnId);
                            ticketDlg.loadByIdAndOpenDialog(ticketRef[0].TicketId);
                        }
                        else {
                            alert('new ' + trxnId);
                            // alert(this.form.TransactionId.value)
                            ticketDlg.transactionID = trxnId;
                            ticketDlg.dialogOpen();
                            alert('TranId: ' + ticketDlg.transactionID);
                            //         ticketDlg.loadEntityAndOpenDialog(<BusinessObjects.TicketRow>{
                            //     TransactionId: trxnId
                            // });
                        }
                    }
                };
            }; //Ends getTicket()
            TransactionDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.OrderId.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'OD_').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    BusinessObjects.TransactionService.GetNextNumber({
                        Prefix: prefix,
                        Length: 8 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.OrderId.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.OrderId.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            TransactionDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TransactionDialog);
            return TransactionDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.TransactionDialog = TransactionDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionEditor = (function (_super) {
            __extends(TransactionEditor, _super);
            function TransactionEditor(container) {
                return _super.call(this, container) || this;
            }
            TransactionEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.Transaction'; };
            TransactionEditor.prototype.getDialogType = function () { return BusinessObjects.TransactionEditorDialog; };
            TransactionEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionRow.localTextPrefix; };
            TransactionEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionEditor);
            return TransactionEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.TransactionEditor = TransactionEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionEditorDialog = (function (_super) {
            __extends(TransactionEditorDialog, _super);
            function TransactionEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.TransactionForm(_this.idPrefix);
                return _this;
            }
            TransactionEditorDialog.prototype.getFormKey = function () { return BusinessObjects.TransactionForm.formKey; };
            TransactionEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionRow.localTextPrefix; };
            TransactionEditorDialog.prototype.getNameProperty = function () { return BusinessObjects.TransactionRow.nameProperty; };
            TransactionEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TransactionEditorDialog);
            return TransactionEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.TransactionEditorDialog = TransactionEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionFormLoader = (function () {
            function TransactionFormLoader() {
                this.calcObservable = kendo.observable({
                    CalculateAmount: function (dataItem) {
                        return dataItem.Quantity * dataItem.UnitPrice;
                    },
                    CalculateRowAmount: function (index) {
                        var grid = TransactionFormLoader.tranx_dtl_grd;
                        var dataItem = grid.dataItem("tbody tr:eq(" + index + ")");
                        return (dataItem.Quantity * dataItem.UnitPrice);
                    },
                    CalculateTotalAmount: function (gridRef) {
                        var items = gridRef.items();
                        var rowCount = items.length - 1;
                        var ttlAmt = 0;
                        for (var x = 0; x < items.length; x++) {
                            var amt = this.CalculateAmount(gridRef.dataItem(items[x]));
                            ttlAmt += amt;
                            gridRef.dataItem(items[x]).Amount = amt;
                        }
                        //gridRef.refresh();
                        this.set("totalAmountProp", ttlAmt);
                        this.set("totalAmountPropFmtd", kendo.toString(ttlAmt, "##,#.00"));
                    },
                    totalAmountProp: 0,
                    totalAmountPropFmtd: "0.00",
                    paid: 0,
                    discount: 0,
                    discountFmtd: "0.00",
                    tax: 0,
                    taxFmtd: "0.00",
                    grandTotal: 0,
                    grandTotalFmtd: "0.00",
                    bal: "0.00",
                    calculateGrandTotal: function () {
                        var discount = 0;
                        var tax = 0;
                        var totalPaid = this.get("paid");
                        var totalAmount = this.get("totalAmountProp");
                        if (this.get("tax") > 0 && !isNaN(this.get("tax"))) {
                            //tax = (this.get("tax") / 100) * totalAmount
                            tax = this.get("tax") * totalAmount;
                        }
                        if (this.get("discount") > 0 && !isNaN(this.get("discount"))) {
                            //discount = (this.get("discount") / 100) * totalAmount
                            discount = this.get("discount") * totalAmount;
                        }
                        var paid = totalAmount - discount;
                        paid = paid + tax;
                        this.set("paid", paid);
                        this.set("grandTotal", paid);
                        this.set("grandTotalFmtd", kendo.toString(paid, "##,#.00"));
                        this.set("bal", kendo.toString((this.get("grandTotal") - this.get("paid")), "##,#.00"));
                    },
                    pdChngd: function () {
                        this.set("bal", kendo.toString((this.get("grandTotal") - this.get("paid")), "##,#.00"));
                    },
                    getObject: function () {
                        var gridItems = [];
                        var gridRef = TransactionFormLoader.tranx_dtl_grd;
                        var items = gridRef.items();
                        var rowCount = items.length - 1;
                        for (var x = 0; x < items.length; x++) {
                            var item = gridRef.dataItem(items[x]);
                            if (item.Product.ProductId != null && item.Product.ProductId != undefined)
                                gridItems.push({ Entity: { Date: new Date(), ProductId: item.Product.ProductId, Quantity: item.Quantity, UnitName: "Piece", UnitPrice: item.UnitPrice, Amount: item.Amount } });
                        }
                        return { Entities: gridItems, TotalAmount: this.get("grandTotal"), Paid: this.get("paid"), TotalAmountLeft: this.get("grandTotal") - this.get("paid"), Tax: this.get("tax"), Discount: this.get("discount") };
                    },
                    clear: function () {
                        //var x = TransactionFormLoader.tranx_dtl_grd.items().length
                        //for (var y = -1; y <= x; y++ )
                        //    TransactionFormLoader.tranx_dtl_grd.removeRow("tr:eq(" + (y + 1) + ")")
                        TransactionFormLoader.tranx_dtl_grd.dataSource.data([]);
                        setTimeout(function () {
                            TransactionFormLoader.tranx_dtl_grd.addRow();
                        }, 50);
                        this.set("totalAmountProp", "0.00");
                        this.set("totalAmountPropFmtd", "0.00");
                        this.set("paid", "0.00");
                        this.set("discount", "0.00");
                        this.set("tax", "0.00");
                        this.set("grandTotal", 0);
                        this.set("grandTotalFmtd", "0.00");
                        this.set("bal", "0.00");
                    },
                }); //Ends calcObservable
                kendo.bind($("#total-amt-calc"), this.calcObservable);
                TransactionFormLoader.CalcObservable_Static = this.calcObservable;
                this.customerInfoObservable = kendo.observable({
                    orderId: null,
                    locationIdSource: Q.getLookup("Administration.LocationLookup").items,
                    locationId: null,
                    date: new Date(),
                    name: "Fikoli",
                    email: "fik@yahoo.com",
                    phoneNumber: "080",
                    customerInfo: function () {
                        return { orderId: this.get("orderId"), date: this.get("date"), name: this.get("name"), email: this.get("email"), phoneNumber: this.get("phoneNumber"), locationId: this.get("locationId").LocationId };
                    },
                    clear: function () {
                        this.set("date", new Date());
                        this.set("name", "");
                        this.set("email", "");
                        this.set("phoneNumber", "");
                        this.getNextNumber();
                    },
                    getNextNumber: function () {
                        //var val = Q.trimToNull(this.form.TicketIdString.value);
                        var val = null;
                        // we will only get next number when customer ID is empty or 1 character in length
                        if (!val || val.length <= 1) {
                            // if no customer ID yet (new record mode probably) use 'C' as a prefix
                            var prefix = (val || 'ID_').toUpperCase();
                            // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                            BusinessObjects.TransactionService.GetNextNumber({
                                Prefix: prefix,
                                Length: 8 // we want service to search for and return serials of 5 in length
                            }, function (response) {
                                //this.form.TicketIdString.value = response.Serial;
                                TransactionFormLoader.CustomerInfoObservable_Static.set("orderId", response.Serial);
                                // this is to mark numerical part after prefix
                                //(this.form.TicketIdString.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                            });
                        }
                    }
                });
                kendo.bind($("#customer-info"), this.customerInfoObservable);
                TransactionFormLoader.CustomerInfoObservable_Static = this.customerInfoObservable;
                this.TransactionFormLoadersDtSrc = new kendo.data.DataSource({
                    schema: {
                        model: {
                            id: "TransactionId",
                            fields: {
                                TransactionFormLoaderId: { type: "number" },
                                TransactionId: { type: "number" },
                                Date: { type: "number" },
                                ProductName: { type: "string" },
                            }
                        },
                    },
                    pageSize: 20,
                    transport: {
                        create: function (options) {
                            //options.
                        },
                        update: function (options) { }
                    }
                });
            }
            TransactionFormLoader.CalculatorObservable = function () {
                return;
            };
            TransactionFormLoader.CustomerInfoObservable = function () {
                return;
            };
            TransactionFormLoader.DltGrdDataSource = function () {
                var inMem = [];
                var dtSrc = new kendo.data.DataSource({
                    schema: {
                        model: {
                            id: "TransactionDetailId",
                            fields: {
                                Product: { type: "object", defaultValue: {}, editable: true, },
                                Quantity: { type: "number" },
                                UnitPrice: { type: "number" },
                                Amount: { type: "number" }
                            }
                        }
                    },
                    transport: {
                        read: function (options) {
                            options.success(inMem);
                        }
                    }
                }); //Ends dtSrc
                return dtSrc;
            };
            TransactionFormLoader.prototype.Load = function () {
                $("#customer-date").kendoDatePicker();
                this.TranxDtlGrid();
                this.GridContextMenuMthd();
                TransactionFormLoader.CustomerInfoObservable_Static.getNextNumber();
            }; //Ends the Load method
            TransactionFormLoader.prototype.TranxDtlGrid = function () {
                TransactionFormLoader.tranx_dtl_grd = $("#transaction-dtl-grd").kendoGrid({
                    dataSource: TransactionFormLoader.DltGrdDataSource(),
                    columns: [
                        {
                            field: "Product",
                            editor: TransactionFormLoader.ProductDropDownEditor,
                            template: "#:Product.Name#"
                        },
                        { field: "Quantity" },
                        { field: "UnitPrice", title: "Unit price", format: "{0:##,#.00}" },
                        { field: "Amount", format: "{0:##,#.00}", },
                    ],
                    editable: {
                        createAt: "bottom",
                    },
                    navigatable: true,
                    cellClose: function (e) {
                        //alert($(e.container).val())
                        //alert($(e.container).html())
                        TransactionFormLoader.tranx_dtl_grd.tbody.find("tr:eq(" + e.container.parent("tr").index() + ")").find("td:nth-child(4)").text(kendo.toString(TransactionFormLoader.CalcObservable_Static.CalculateRowAmount(e.container.parent("tr").index()), "##,#.00"));
                        TransactionFormLoader.CalcObservable_Static.CalculateTotalAmount(TransactionFormLoader.tranx_dtl_grd);
                        TransactionFormLoader.CalcObservable_Static.calculateGrandTotal();
                        //alert("Cell closed: " + e.container.index() + " Cell index" +  e.sender.cellIndex(e.sender.element[0].innerHTML))
                    },
                    beforeEdit: function (e) {
                    },
                    edit: function (e) {
                        //alert(e.container)
                        //alert(TransactionFormLoader.tranx_dtl_grd.tbody.find("tr:first"))
                        //alert(TransactionFormLoader.tranx_dtl_grd.tbody.find("tr:first").find("td:nth-child(4)").html());
                        //e.preventDefault()
                        //alert("Edit: " + e.container.index()+ " Cell index" + e.sender.element[0].innerHTML)
                    },
                    change: function (e) {
                        alert(Object.getOwnPropertyNames(e));
                    }
                }).data("kendoGrid");
                TransactionFormLoader.tranx_dtl_grd.addRow();
                TransactionFormLoader.tranx_dtl_grd.tbody.on('keydown', function (e) {
                    if (e.keyCode == 13 && $(e.target).closest('tr').find("td:first").is(':first-child')) {
                        var rowIndex = $(e.target).closest('tr').index();
                        var cellIndex = $(e.target).closest('tr > td').index();
                        setTimeout(function () {
                            TransactionFormLoader.tranx_dtl_grd.tbody.find("tr:first td:first").blur();
                            TransactionFormLoader.tranx_dtl_grd.current(TransactionFormLoader.tranx_dtl_grd.tbody.find("tr:eq(" + rowIndex + ") td:eq(" + cellIndex + ")"));
                        }, 50);
                    }
                    else if (e.keyCode == 46) {
                        var rowIndex = $(e.target).closest('tr').index();
                        //alert('Row-Index: ' + rowIndex)
                        TransactionFormLoader.DeleteDtlGridRcrd(rowIndex);
                    }
                    if ($(e.target).closest('td').is(':last-child') && $(e.target).closest('tr').is(':last-child')) {
                        setTimeout(function () {
                            //TransactionFormLoader.tranx_dtl_grd.saveRow();
                            TransactionFormLoader.tranx_dtl_grd.addRow();
                        }, 50);
                    }
                });
            };
            TransactionFormLoader.DeleteDtlGridRcrd = function (rowIndex) {
                var grdRef = TransactionFormLoader.tranx_dtl_grd;
                if (grdRef.items().length > 1) {
                    grdRef.removeRow("tr:eq(" + (rowIndex + 1) + ")");
                    TransactionFormLoader.CalcObservable_Static.CalculateTotalAmount(TransactionFormLoader.tranx_dtl_grd);
                    TransactionFormLoader.CalcObservable_Static.calculateGrandTotal();
                }
            };
            TransactionFormLoader.prototype.GridContextMenuMthd = function () {
                this.gridContextMenu = $("#menu").kendoContextMenu({
                    orientation: "vertical",
                    target: "#transaction-dtl-grd",
                    filter: "table > tbody > tr",
                    animation: {
                        open: { effects: "fadeIn" },
                        duration: 500
                    },
                    select: function (e) {
                        var rowIndex = $(e.target).closest('tr').index();
                        TransactionFormLoader.DeleteDtlGridRcrd(rowIndex);
                    }
                });
            };
            TransactionFormLoader.ProductDropDownEditor = function (container, options) {
                $('<input data-bind="value:' + options.field + '" name="' + options.field + '"/>')
                    .appendTo(container)
                    .kendoComboBox({
                    autoBind: false,
                    dataTextField: "Name",
                    dataValueField: "ProductId",
                    placeholder: "Select a product . . .",
                    dataSource: {
                        schema: {
                            model: {
                                id: "ProductId",
                                fields: {
                                    ProductId: { type: "number" },
                                    Name: { type: "string" }
                                }
                            }
                        },
                        transport: {
                            read: function (options) {
                                options.success(Q.getLookup("Administration.ProductLocationLookup").items);
                            }
                        }
                    },
                    change: function (e) {
                        var widget = e.sender;
                        if (widget.value() && widget.select() === -1) {
                            //custom has been selected
                            widget.value("");
                            //widget.value(""); //reset widget
                        }
                    },
                    select: function (e) {
                        //alert('selected')
                    },
                });
            };
            TransactionFormLoader.Submit = function () {
                //alert(kendo.stringify(TransactionFormLoader.CalcObservable_Static.getObject()))
                //alert(kendo.stringify(TransactionFormLoader.CustomerInfoObservable_Static.customerInfo()))
                var validator = $("#customer-info").kendoValidator().data("kendoValidator");
                if (validator.validate()) {
                    Q.notifyInfo("Processing sales . . .");
                    var custObj = TransactionFormLoader.CustomerInfoObservable_Static.customerInfo();
                    var transDtls = TransactionFormLoader.CalcObservable_Static.getObject();
                    //alert(JSON.stringify({
                    //Transaction: { Entity: { Date: custObj.date, OrderId: custObj.orderId, Subject: "Sales", TotalAmount: transDtls.TotalAmount, TotalAmountPaid: transDtls.Paid, TotalAmountLeft: transDtls.TotalAmountLeft, Tax: transDtls.Tax, Discount: transDtls.Discount, LocationId: custObj.locationId } },
                    //Customer: { Entity: { FullName: custObj.name } },
                    //TransactionDetails: transDtls.Entities
                    //}))
                    //return;
                    Q.serviceRequest("BusinessObjects/Transaction/NewTransaction", {
                        Transaction: { Entity: { Date: custObj.date, OrderId: custObj.orderId, Subject: "Sales", TotalAmount: transDtls.TotalAmount, TotalAmountPaid: transDtls.Paid, TotalAmountLeft: transDtls.TotalAmountLeft, Tax: transDtls.Tax, Discount: transDtls.Discount, LocationId: custObj.locationId } },
                        Customer: { Entity: { FullName: custObj.name } },
                        TransactionDetails: transDtls.Entities
                    }, function (res) {
                        TransactionFormLoader.CustomerInfoObservable_Static.clear();
                        TransactionFormLoader.CalcObservable_Static.clear();
                        Q.notifySuccess("Sales completed");
                    });
                }
                else {
                    Q.notifyWarning("Some fields are required. Please check.");
                }
                //alert(kendo.stringify({
                //    Transaction: {
                //        CustomerInfo: TransactionFormLoader.CustomerInfoObservable_Static.customerInfo(),
                //        TransactionDetails : TransactionFormLoader.CalcObservable_Static.getObject()
                //    }
                //}))
                //$("#transaction-dtl-grd").data("kendoGrid").saveChanges()
            };
            return TransactionFormLoader;
        }());
        BusinessObjects.TransactionFormLoader = TransactionFormLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionGrid = (function (_super) {
            __extends(TransactionGrid, _super);
            function TransactionGrid(container) {
                return _super.call(this, container) || this;
            }
            TransactionGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.Transaction'; };
            TransactionGrid.prototype.getDialogType = function () { return BusinessObjects.TransactionTicketDialog; };
            TransactionGrid.prototype.getIdProperty = function () { return BusinessObjects.TransactionRow.idProperty; };
            TransactionGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionRow.localTextPrefix; };
            TransactionGrid.prototype.getService = function () { return BusinessObjects.TransactionService.baseUrl; };
            TransactionGrid.prototype.getButtons = function () {
                var _this = this;
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'BusinessObjects/Transaction/ListExcel',
                    separator: true
                }));
                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return btns;
            }; //Ends getButtons
            TransactionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionGrid);
            return TransactionGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.TransactionGrid = TransactionGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionListLoader = (function () {
            function TransactionListLoader() {
                this.transactionListDtSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: "Entities",
                        total: "TotalCount",
                        model: {
                            id: "TransactionId",
                            fields: {
                                Date: { type: "date" }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            BusinessObjects.TransactionService.List({ IncludeColumns: ["CustomerName"] }, function (res) {
                                options.success(res);
                            });
                            //options.success({ Entities: [{ TransactionId: 1, Subject: "Subj 1" }, { TransactionId: 2, Subject: "Subj 2" }], TotalCount: 2 })
                        },
                        create: function (options) {
                            // ClassNameService.Create({ Entity: JSON.parse( Q.replaceAll(JSON.stringify(options.data), '"TransactionId":0,', '')) },
                            //      res => {
                            //           options.success(res);
                            //   })
                        }
                    },
                }); //Ends
            }
            TransactionListLoader.prototype.Load = function () {
                $("#transaction-list").kendoGrid({
                    dataSource: this.transactionListDtSrc,
                    columns: [{ selectable: true, width: "50px" },
                        { field: "OrderId" },
                        { field: "Date", format: "{0:MM/dd/yyyy}", width: "100px" },
                        { field: "CustomerName", title: "Customer" },
                        { field: "Subject" },
                        { field: "TotalAmount", title: "Amount", format: "{0:##,#.00}" },
                        { field: "TotalAmountPaid", title: "Paid", format: "{0:##,#.00}" },
                        { field: "TotalAmountLeft", title: "Balance", format: "{0:##,#.00}" }
                    ],
                });
                $("#pager").kendoPager({
                    dataSource: this.transactionListDtSrc,
                });
                $("#pager2").kendoPager({
                    dataSource: this.transactionListDtSrc,
                });
            };
            return TransactionListLoader;
        }());
        BusinessObjects.TransactionListLoader = TransactionListLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionTicketDialog = (function (_super) {
            __extends(TransactionTicketDialog, _super);
            function TransactionTicketDialog() {
                var _this = _super.call(this) || this;
                _this.trxnTicketGrid = new BusinessObjects.TransactionTicketGrid(_this.byId("TransactionTicketGrid"));
                _this.trxnSms = new BusinessObjects.TransactionSmsGrid(_this.byId("TransactionSms"));
                _this.tabs.bind("tabsactivate", function () { return _this.arrange(); });
                return _this;
            } //Ends the constructor
            TransactionTicketDialog.prototype.getFormKey = function () { return BusinessObjects.TransactionForm.formKey; };
            TransactionTicketDialog.prototype.getIdProperty = function () { return BusinessObjects.TransactionRow.idProperty; };
            TransactionTicketDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionRow.localTextPrefix; };
            TransactionTicketDialog.prototype.getNameProperty = function () { return BusinessObjects.TransactionRow.nameProperty; };
            TransactionTicketDialog.prototype.getService = function () { return BusinessObjects.TransactionService.baseUrl; };
            // loadEntity(entity: TransactionRow) {
            //     super.loadEntity(entity);
            TransactionTicketDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNewOrDeleted()) {
                    Serenity.TabsExtensions.setDisabled(this.tabs, "TransactionTicketGrid", true);
                }
                else {
                    Serenity.TabsExtensions.setDisabled(this.tabs, "TransactionTicketGrid", false);
                    //this.toolbar.findButton("send-button").show();
                } //Ends the else block
                if (this.isNewOrDeleted()) {
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", true);
                }
                else {
                    Serenity.TabsExtensions.setDisabled(this.tabs, "Sms", false);
                    //this.toolbar.findButton("send-button").show();
                } //Ends the else block
                this.trxnSms.transactionID = this.entityId;
                BusinessObjects.GlobalScripts.TransactionId = this.entityId;
                this.trxnTicketGrid.transactionID = this.entityId;
            };
            TransactionTicketDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TransactionTicketDialog);
            return TransactionTicketDialog;
        }(BusinessObjects.TransactionDialog));
        BusinessObjects.TransactionTicketDialog = TransactionTicketDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionTicketGrid = (function (_super) {
            __extends(TransactionTicketGrid, _super);
            // protected getIdProperty() { return TicketRow.idProperty; }
            // protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
            // protected getService() { return TicketService.baseUrl; }
            function TransactionTicketGrid(container) {
                return _super.call(this, container) || this;
            }
            // protected getColumnsKey() { return 'BusinessObjects.TransactionTicket'; }
            TransactionTicketGrid.prototype.getDialogType = function () { return BusinessObjects.TicketDialog; };
            TransactionTicketGrid.prototype.addButtonClick = function () {
                this.editItem({ TransactionId: this.transactionID });
            };
            TransactionTicketGrid.prototype.getInitialTitle = function () {
                return null;
            };
            TransactionTicketGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            TransactionTicketGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.transactionID;
            };
            Object.defineProperty(TransactionTicketGrid.prototype, "transactionID", {
                get: function () {
                    return this._transactionId;
                },
                set: function (value) {
                    if (this._transactionId != value) {
                        this._transactionId = value;
                        this.setEquality(BusinessObjects.TransactionDetailRow.Fields.TransactionId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            TransactionTicketGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                //Removes the 'Send SMS' button
                btns.splice(Q.indexOf(btns, function (x) { return x.title == 'Send SMS'; }), 1);
                return btns;
            };
            TransactionTicketGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionTicketGrid);
            return TransactionTicketGrid;
        }(BusinessObjects.TicketGrid));
        BusinessObjects.TransactionTicketGrid = TransactionTicketGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionDetailDialog = (function (_super) {
            __extends(TransactionDetailDialog, _super);
            function TransactionDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BusinessObjects.TransactionDetailForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    //this.form.UnitPrice.value = null;
                    //this.form.Amount.value = null;
                });
                _this.form.Quantity.change(function (e) {
                    _this.calculateAmount();
                });
                _this.form.UnitPrice.change(function (e) {
                    _this.calculateAmount();
                });
                _this.form.Discount.change(function (e) {
                    _this.calculateAmount();
                });
                return _this;
            } //Ends the constructor 
            TransactionDetailDialog.prototype.getFormKey = function () { return BusinessObjects.TransactionDetailForm.formKey; };
            TransactionDetailDialog.prototype.getIdProperty = function () { return BusinessObjects.TransactionDetailRow.idProperty; };
            TransactionDetailDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionDetailRow.localTextPrefix; };
            TransactionDetailDialog.prototype.getService = function () { return BusinessObjects.TransactionDetailService.baseUrl; };
            TransactionDetailDialog.prototype.calculateAmount = function () {
                var uomAndPrice = Q.toId(this.form.UnitPrice);
                var quantity = this.form.Quantity.value;
                var discount = this.form.Discount.value;
                var unitPrice = this.form.UnitPrice.value;
                if (discount != undefined && discount != 0) {
                    var amount1 = (unitPrice * quantity);
                    var amount2 = (unitPrice * quantity) * (discount / 100);
                    this.form.Amount.value = amount1 - amount2;
                }
                else
                    this.form.Amount.value = unitPrice * quantity;
            }; //Ends the calculateAmount
            TransactionDetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TransactionDetailDialog);
            return TransactionDetailDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.TransactionDetailDialog = TransactionDetailDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionDetailEditor = (function (_super) {
            __extends(TransactionDetailEditor, _super);
            function TransactionDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            TransactionDetailEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.TransactionDetail'; };
            TransactionDetailEditor.prototype.getDialogType = function () { return BusinessObjects.TransactionDetailEditorDialog; };
            TransactionDetailEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionDetailRow.localTextPrefix; };
            TransactionDetailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionDetailEditor);
            return TransactionDetailEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.TransactionDetailEditor = TransactionDetailEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionDetailEditorDialog = (function (_super) {
            __extends(TransactionDetailEditorDialog, _super);
            function TransactionDetailEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.TransactionDetailForm(_this.idPrefix);
                return _this;
            }
            TransactionDetailEditorDialog.prototype.getFormKey = function () { return BusinessObjects.TransactionDetailForm.formKey; };
            TransactionDetailEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionDetailRow.localTextPrefix; };
            TransactionDetailEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TransactionDetailEditorDialog);
            return TransactionDetailEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.TransactionDetailEditorDialog = TransactionDetailEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionDetailGrid = (function (_super) {
            __extends(TransactionDetailGrid, _super);
            function TransactionDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            TransactionDetailGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.TransactionDetail'; };
            TransactionDetailGrid.prototype.getDialogType = function () { return BusinessObjects.TransactionDetailDialog; };
            TransactionDetailGrid.prototype.getIdProperty = function () { return BusinessObjects.TransactionDetailRow.idProperty; };
            TransactionDetailGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionDetailRow.localTextPrefix; };
            TransactionDetailGrid.prototype.getService = function () { return BusinessObjects.TransactionDetailService.baseUrl; };
            TransactionDetailGrid.prototype.getButtons = function () {
                var _this = this;
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                btns.push(CustomerSupport.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'BusinessObjects/TransactionDetail/ListExcel',
                    separator: true
                }));
                btns.push(CustomerSupport.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return btns;
            }; //Ends getButtons
            TransactionDetailGrid.prototype.addButtonClick = function () {
                this.editItem({ TransactionId: this.transactionID });
            };
            TransactionDetailGrid.prototype.getInitialTitle = function () {
                return null;
            };
            TransactionDetailGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            TransactionDetailGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.transactionID;
            };
            Object.defineProperty(TransactionDetailGrid.prototype, "transactionID", {
                get: function () {
                    return this._transactionId;
                },
                set: function (value) {
                    if (this._transactionId != value) {
                        this._transactionId = value;
                        this.setEquality(BusinessObjects.TransactionDetailRow.Fields.TransactionId, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            TransactionDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionDetailGrid);
            return TransactionDetailGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.TransactionDetailGrid = TransactionDetailGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../../Scripts/Kendo/typescript/kendo.all.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionDetailList = (function () {
            function TransactionDetailList() {
                this.transDtlDtSrc = new kendo.data.DataSource({
                    schema: {
                        total: "TotalCount",
                        data: "Entities",
                        model: {
                            id: "TransactionDetailId",
                            fields: {
                                ProductId: { type: "string" },
                                Date: { type: "date" },
                                Quantity: { type: "number" },
                                UnitPrice: { type: "number" },
                                Discount: { type: "number" },
                                Amount: { type: "number" }
                            }
                        }
                    },
                    transport: {
                        read: function (res) {
                            BusinessObjects.TransactionDetailService.List({}, function (response) { res.success(response); });
                        },
                        create: function (options) {
                        },
                        update: function (options) {
                            var mdls = options.data.models;
                            var mdsRepositroy = { Entities: [] };
                            for (var x = 0; x < mdls.length; x++) {
                                mdsRepositroy.Entities.push({ Entity: mdls[x] });
                            }
                            BusinessObjects.TransactionDetailService.Update(mdsRepositroy, function (res) {
                                options.success(options.data.models);
                            });
                        },
                    },
                    batch: true,
                });
            }
            TransactionDetailList.prototype.Load = function () {
                $("#transaction-dtl-grid").kendoGrid({
                    dataSource: this.transDtlDtSrc,
                    columns: [
                        { field: "TransactionDetailId" },
                        { field: "Date", format: "{0:yyyy/MM/dd}" },
                        { field: "ProductId", values: JSON.parse(Q.replaceAll(Q.replaceAll(JSON.stringify(Q.getLookup("Administration.ProductLocationLookup").items), "ProductId", "value"), "Name", "text")) },
                        { field: "Quantity" },
                        { field: "UnitName" },
                        { field: "UnitPrice" },
                        { field: "Discount" },
                        { field: "Amount" },
                        { field: "Total", title: "Total", template: "#:(Quantity * UnitPrice)#", },
                        { command: ["destroy"] },
                    ],
                    toolbar: ["create", "save", "cancel"],
                    editable: true,
                    navigatable: true,
                    cellClose: function (e) {
                        $("#transaction-dtl-grid").data("kendoGrid").refresh();
                        //alert()
                    }
                });
            };
            return TransactionDetailList;
        }());
        BusinessObjects.TransactionDetailList = TransactionDetailList;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionSmsDialog = (function (_super) {
            __extends(TransactionSmsDialog, _super);
            function TransactionSmsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.TransactionSmsForm(_this.idPrefix);
                return _this;
            }
            TransactionSmsDialog.prototype.getFormKey = function () { return BusinessObjects.TransactionSmsForm.formKey; };
            TransactionSmsDialog.prototype.getIdProperty = function () { return BusinessObjects.TransactionSmsRow.idProperty; };
            TransactionSmsDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionSmsRow.localTextPrefix; };
            TransactionSmsDialog.prototype.getService = function () { return BusinessObjects.TransactionSmsService.baseUrl; };
            TransactionSmsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TransactionSmsDialog);
            return TransactionSmsDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.TransactionSmsDialog = TransactionSmsDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionSmsEditor = (function (_super) {
            __extends(TransactionSmsEditor, _super);
            function TransactionSmsEditor(container) {
                return _super.call(this, container) || this;
            }
            TransactionSmsEditor.prototype.getColumnsKey = function () { return 'BusinessObjects.TransactionSms'; };
            TransactionSmsEditor.prototype.getDialogType = function () { return BusinessObjects.TransactionSmsEditorDialog; };
            TransactionSmsEditor.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionSmsRow.localTextPrefix; };
            TransactionSmsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionSmsEditor);
            return TransactionSmsEditor;
        }(CustomerSupport.Common.GridEditorBase));
        BusinessObjects.TransactionSmsEditor = TransactionSmsEditor;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionSmsEditorDialog = (function (_super) {
            __extends(TransactionSmsEditorDialog, _super);
            function TransactionSmsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BusinessObjects.TransactionSmsForm(_this.idPrefix);
                return _this;
            }
            TransactionSmsEditorDialog.prototype.getFormKey = function () { return BusinessObjects.TransactionSmsForm.formKey; };
            TransactionSmsEditorDialog.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionSmsRow.localTextPrefix; };
            TransactionSmsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TransactionSmsEditorDialog);
            return TransactionSmsEditorDialog;
        }(CustomerSupport.Common.GridEditorDialog));
        BusinessObjects.TransactionSmsEditorDialog = TransactionSmsEditorDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionSmsGrid = (function (_super) {
            __extends(TransactionSmsGrid, _super);
            function TransactionSmsGrid(container) {
                return _super.call(this, container) || this;
            }
            TransactionSmsGrid.prototype.getColumnsKey = function () { return 'BusinessObjects.TransactionSms'; };
            TransactionSmsGrid.prototype.getDialogType = function () { return BusinessObjects.TransactionSmsDialog; };
            TransactionSmsGrid.prototype.getIdProperty = function () { return BusinessObjects.TransactionSmsRow.idProperty; };
            TransactionSmsGrid.prototype.getLocalTextPrefix = function () { return BusinessObjects.TransactionSmsRow.localTextPrefix; };
            TransactionSmsGrid.prototype.getService = function () { return BusinessObjects.TransactionSmsService.baseUrl; };
            TransactionSmsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            TransactionSmsGrid.prototype.getGridCanLoad = function () {
                //return this._transactionID != null;
                return _super.prototype.getGridCanLoad.call(this) && !!this.transactionID;
            };
            Object.defineProperty(TransactionSmsGrid.prototype, "transactionID", {
                get: function () {
                    return this._transactionID;
                },
                set: function (value) {
                    if (this._transactionID != value) {
                        this._transactionID = value;
                        this.setEquality("TransactionId", value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            TransactionSmsGrid.prototype.getButtons = function () {
                var btns = _super.prototype.getButtons.call(this);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'column-picker-button'; }), 1);
                btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == 'add-button'; }), 1);
                btns.push(this.getSms());
                return btns;
            }; //Ends getButtons
            TransactionSmsGrid.prototype.getSms = function () {
                return {
                    title: 'Send SMS',
                    cssClass: 'send-button',
                    onClick: function () {
                        var sendSms = new BusinessObjects.SendSmsDialog();
                        $("#s-Page > div.s-BusinessObjects-SendSmsDialog > div.ui-dialog-buttonpane > div > button:nth-child(1)")
                            .click(function (evt) {
                            var requestObj = {
                                PhoneNumbers: sendSms.phoneNumbers,
                                Message: sendSms.message,
                                LocationId: sendSms.locationID,
                                TransactionId: BusinessObjects.GlobalScripts.TransactionId
                            };
                            var url = "BusinessObjects/Sms/TransactionsSms";
                            Q.serviceRequest(url, requestObj, function (SmsResponse) {
                                //Q.notifySuccess(response.Reply + "\n\n" + response.LocationId +  "\n\n TransactionID:" +  response.TransactionIds.join(','))
                                $(".refresh-button").click();
                                Q.notifySuccess("Update successful");
                            });
                        });
                        sendSms.dialogOpen();
                    }
                };
            }; //Ends getSms()
            TransactionSmsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionSmsGrid);
            return TransactionSmsGrid;
        }(Serenity.EntityGrid));
        BusinessObjects.TransactionSmsGrid = TransactionSmsGrid;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('CustomerSupport');
    })(ScriptInitialization = CustomerSupport.ScriptInitialization || (CustomerSupport.ScriptInitialization = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var DashboardDialog = (function (_super) {
            __extends(DashboardDialog, _super);
            function DashboardDialog() {
                var _this = _super.call(this) || this;
                _this.form = new DashboardForm(_this.idPrefix);
                _this.element.addClass('flex-layout');
                return _this;
            }
            DashboardDialog.prototype.getFormKey = function () { return DashboardForm.formKey; };
            DashboardDialog.prototype.getToolbarButtons = function () {
                var btns = []; //super.getToolbarButtons();
                btns.push({
                    title: 'Refresh',
                    cssClass: 'refresh-button',
                    onClick: callMe
                });
                return btns;
            };
            DashboardDialog = __decorate([
                Serenity.Decorators.panel()
            ], DashboardDialog);
            return DashboardDialog;
        }(Serenity.EntityDialog));
        BusinessObjects.DashboardDialog = DashboardDialog;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    CustomerSupport.BasicProgressDialog = BasicProgressDialog;
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new CustomerSupport.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = CustomerSupport.DialogUtils || (CustomerSupport.DialogUtils = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = CustomerSupport.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = CustomerSupport.LanguageList || (CustomerSupport.LanguageList = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.propertyItems
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = CustomerSupport.Common || (CustomerSupport.Common = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerMessengerOld = (function () {
            function CustomerMessengerOld(bondClass) {
                CustomerMessengerOld.MessengerClass = this;
                this.bondClass = bondClass;
                this.KendoDataSource();
                //arr.splice($.inArray(responseObj, arr), 1, 
                this.observ = kendo.observable({
                    AddressFld: null,
                    CustomerIdFld: null,
                    DateFld: new Date(),
                    DateOfBirthFld: new Date(),
                    EmailFld: null,
                    FullNameFld: null,
                    LocationIdFld: null,
                    LocationIddtSrc: Q.getLookup('Administration.LocationLookup').items,
                    LocationIdFldChanged: function () { CustomerMessengerOld.MessengerClass.bondClass.OnFieldValueChanged('LocationIdFld', CustomerMessengerOld.MessengerClass, this.get('LocationIdFld')); },
                    PhoneNumberFld: null,
                    SexFld: null,
                    getObject: function () {
                        return {
                            Address: this.get('AddressFld') != null ? this.get('AddressFld') : null,
                            CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                            Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                            DateOfBirth: this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
                            Email: this.get('EmailFld') != null ? this.get('EmailFld') : null,
                            FullName: this.get('FullNameFld') != null ? this.get('FullNameFld') : null,
                            LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                            PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                            Sex: this.get('SexFld') != null ? this.get('SexFld') : null
                        };
                    },
                    setObject: function (obj) {
                        this.set('AddressFld', obj.Entity.Address);
                        this.set('CustomerIdFld', obj.Entity.CustomerId);
                        this.set('DateFld', obj.Entity.Date);
                        this.set('DateOfBirthFld', obj.Entity.DateOfBirth);
                        this.set('EmailFld', obj.Entity.Email);
                        this.set('FullNameFld', obj.Entity.FullName);
                        this.set('LocationIdFld', obj.Entity.LocationId);
                        this.set('PhoneNumberFld', obj.Entity.PhoneNumber);
                        this.set('SexFld', obj.Entity.Sex);
                    },
                    submit: function () {
                        var _this = this;
                        BusinessObjects.CustomerService.Create({ Entity: {
                                Address: this.get('AddressFld') != null ? this.get('AddressFld') : null,
                                CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                                Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                                DateOfBirth: this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
                                Email: this.get('EmailFld') != null ? this.get('EmailFld') : null,
                                FullName: this.get('FullNameFld') != null ? this.get('FullNameFld') : null,
                                LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                                PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                                Sex: this.get('SexFld') != null ? this.get('SexFld') : null
                            } }, function (res) { _this.set('CustomerId', res.EntityId); _this.bondClass.AfterSave('Customer', res.EntityId, _this); });
                    }
                });
            }
            CustomerMessengerOld.prototype.GetObservable = function () {
                return this.observ;
            };
            CustomerMessengerOld.prototype.Read = function (criteria, equalityFilter, includeColumns) {
                var _this = this;
                var requestObj = null;
                if (criteria != undefined) {
                    requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
                }
                else if (equalityFilter != undefined) {
                    requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
                }
                else {
                    requestObj = { IncludeColumns: includeColumns };
                }
                if (this.bondClass.BeforeRead('CustomerMessengerOld', requestObj)) {
                    BusinessObjects.CustomerService.List(requestObj, function (res) {
                        _this.bondClass.AfterRead('CustomerMessengerOld', res);
                    });
                }
            };
            CustomerMessengerOld.prototype.DetailLoad = function (entityId) {
                var _this = this;
                if (this.bondClass.BeforeDetailLoad('CustomerMessengerOld', entityId)) {
                    BusinessObjects.CustomerService.Retrieve({ EntityId: entityId }, function (res) {
                        _this.GetObservable().setObject(res);
                        _this.bondClass.AfterDetailLoad('CustomerMessengerOld', res);
                    }, { blockUI: false, onError: function (response) { _this.bondClass.OnError('CustomerMessengerOld', 'DetailLoad', response); } });
                }
            };
            CustomerMessengerOld.prototype.Create = function () {
                if (this.bondClass.BeforeSave('CustomerMessengerOld', this))
                    this.observ.submit();
            };
            CustomerMessengerOld.prototype.GetPrimaryKeyId = function () { return this.observ.get('CustomerId'); };
            CustomerMessengerOld.prototype.GetObject = function () {
                var obj = this.observ.getObject();
                var obj_1 = ({
                    Address: obj.Address,
                    CustomerId: obj.CustomerId,
                    Date: obj.Date,
                    DateOfBirth: obj.DateOfBirth,
                    Email: obj.Email,
                    FullName: obj.FullName,
                    LocationId: obj.LocationId,
                    PhoneNumber: obj.PhoneNumber,
                    Sex: obj.Sex
                });
                return obj_1;
            };
            CustomerMessengerOld.prototype.KendoDataSource = function () {
                this.kendoDataSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: 'Entities',
                        total: 'TotalCount',
                        model: {
                            id: 'CustomerId',
                            fields: {
                                Address: { type: 'string' },
                                CustomerId: { type: 'string' },
                                Date: { type: 'string' },
                                DateOfBirth: { type: 'string' },
                                Email: { type: 'string' },
                                FullName: { type: 'string' },
                                LocationId: { type: 'string' },
                                LocationLocationName: { type: 'string' },
                                PhoneNumber: { type: 'string' },
                                Sex: { type: 'string' }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.Criteria != undefined) {
                                BusinessObjects.CustomerService.List({ Criteria: options.data.Criteria, IncludeColumns: ['LocationLocationName'] }, function (res) {
                                    options.success(res);
                                    CustomerMessengerOld.MessengerClass.bondClass.AfterRead('Customer-Kendo-Data-Source', res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.CustomerService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: ['LocationLocationName'] }, function (res) {
                                    options.success(res);
                                    CustomerMessengerOld.MessengerClass.bondClass.AfterRead('Customer-Kendo-Data-Source', res);
                                });
                            }
                            else {
                                BusinessObjects.CustomerService.List({ IncludeColumns: ['LocationLocationName'] }, function (res) {
                                    options.success(res);
                                    CustomerMessengerOld.MessengerClass.bondClass.AfterRead('Customer-Kendo-Data-Source', res);
                                });
                            }
                        }
                    },
                }); //Ends
            };
            CustomerMessengerOld.prototype.GetKendoDataSource = function () {
                return this.kendoDataSrc;
            };
            return CustomerMessengerOld;
        }());
        BusinessObjects.CustomerMessengerOld = CustomerMessengerOld;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerFilterMessenger = (function () {
            function CustomerFilterMessenger(bondClass) {
                CustomerFilterMessenger.MessengerClass = this;
                this.bondClass = bondClass;
                this.KendoDataSource();
                this.filterObserv = kendo.observable({
                    DateOfBirthFld: new Date(),
                    LocationIddtSrc: Q.getLookup('Administration.LocationLookup').items,
                    LocationIdFld: null,
                    SexdtSrc: BusinessObjects.GlobalScripts.GetGender(),
                    SexFld: null,
                    getObject: function () {
                        return {
                            DateOfBirth: this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
                            LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld').LocationId : null,
                            Sex: this.get('SexFld') != null ? this.get('SexFld') : null
                        };
                    },
                    getRequestCriteriaObject: function () {
                        var requestQry = [];
                        if (this.get('DateOfBirthFld') != null && this.get('DateOfBirthFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('DateOfBirth'), '=', this.get('DateOfBirthFld')]);
                        }
                        if (this.get('LocationIdFld') != null && this.get('LocationIdFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('LocationId'), '=', this.get('LocationIdFld').LocationId]);
                        }
                        if (this.get('SexFld') != null && this.get('SexFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('Sex'), '=', this.get('SexFld').value]);
                        }
                        return requestQry;
                    },
                    assemble: function (arrRef, obj) {
                        if (arrRef.length == 0) {
                            arrRef.push(obj);
                            return arrRef;
                        }
                        else if (arrRef.length == 1) {
                            arrRef.push('and');
                            arrRef.push(obj);
                            return arrRef;
                        }
                        else {
                            var newArr1 = [];
                            newArr1.push([arrRef[0], arrRef[1], arrRef[2]]);
                            newArr1.push('and');
                            newArr1.push(obj);
                            return newArr1;
                        }
                    },
                    setObject: function (obj) {
                        this.set('DateOfBirthFld', obj.Entity.DateOfBirth);
                        this.set('LocationIdFld', obj.Entity.LocationId);
                        this.set('SexFld', obj.Entity.Sex);
                    },
                });
            }
            CustomerFilterMessenger.prototype.GetFilterObservable = function () {
                return this.filterObserv;
            };
            CustomerFilterMessenger.prototype.GetFilterValues = function () {
                return this.GetFilterObservable().getRequestCriteriaObject();
            };
            CustomerFilterMessenger.prototype.Read = function (criteria, equalityFilter, includeColumns) {
                var _this = this;
                var requestObj = null;
                if (criteria != undefined) {
                    requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
                }
                else if (equalityFilter != undefined) {
                    requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
                }
                else {
                    requestObj = { IncludeColumns: includeColumns };
                }
                if (this.bondClass.BeforeRead('Filter-CustomerFilterMessenger', requestObj)) {
                    BusinessObjects.CustomerService.List(requestObj, function (res) {
                        _this.bondClass.AfterRead('Filter-CustomerFilterMessenger', res);
                    });
                }
            }; //Ends the read method
            CustomerFilterMessenger.prototype.KendoDataSourceRead_1 = function (criteria) {
                if (criteria.length >= 1) {
                    var criteria_1 = (criteria.length == 1) ? criteria[0] : criteria;
                    if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', { Criteria: criteria_1 })) {
                        this.kendoDataSrc.read({ Criteria: criteria_1 });
                    }
                }
                else {
                    if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', null)) {
                        this.kendoDataSrc.read();
                    }
                }
            };
            CustomerFilterMessenger.prototype.KendoDataSourceRead = function () {
                this.KendoDataSourceRead_1(this.GetFilterValues());
            };
            CustomerFilterMessenger.prototype.KendoDataSource = function () {
                this.kendoDataSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: 'Entities',
                        total: 'TotalCount',
                        model: {
                            id: 'CustomerId',
                            fields: {
                                DateOfBirth: { type: 'string' },
                                LocationId: { type: 'string' },
                                Sex: { type: 'string' }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.Criteria != undefined) {
                                BusinessObjects.CustomerService.List({ Criteria: options.data.Criteria, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    CustomerFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Customer-Kendo-Data-Source', res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.CustomerService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    CustomerFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Customer-Kendo-Data-Source', res);
                                });
                            }
                            else {
                                BusinessObjects.CustomerService.List({ IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    CustomerFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Customer-Kendo-Data-Source', res);
                                });
                            }
                        }
                    },
                }); //Ends
            };
            CustomerFilterMessenger.prototype.GetKendoDataSource = function () {
                return this.kendoDataSrc;
            };
            return CustomerFilterMessenger;
        }());
        BusinessObjects.CustomerFilterMessenger = CustomerFilterMessenger;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerHandler = (function () {
            function CustomerHandler() {
                var _this = this;
                this.LocationIdInplaceBtnVar = $('#LocationIdInplaceBtn').kendoButton({
                    icon: 'add',
                    click: function () {
                        BusinessObjects.FEUtilities.OnInplaceButtonClicked(_this.LocationIdInplaceBtnVar, $("#location-dialog"), _this.customerMessenger, _this.locationMessenger, "LocationIdFld");
                        if (_this.LocationIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {
                            $("#UpdateLocationBtn").data("kendoButton").element.hide();
                            $("#NewLocationBtn").data("kendoButton").element.show();
                        }
                        else {
                            $("#NewLocationBtn").data("kendoButton").element.hide();
                            $("#UpdateLocationBtn").data("kendoButton").element.show();
                        }
                    },
                }).data('kendoButton');
            }
            CustomerHandler.prototype.OnFieldValueChanged = function (id, classRef, responseObj) {
                if (id == 'LocationIdFld') {
                    BusinessObjects.FEUtilities.ToggleInplaceButtonIcon(this.LocationIdInplaceBtnVar, responseObj);
                }
                this.responseObj = responseObj;
                this.refMessenger = classRef;
            };
            CustomerHandler.prototype.SetTeamPlayers = function (customerMessenger, locationMessenger) {
                this.customerMessenger = customerMessenger;
                this.locationMessenger = locationMessenger;
            };
            CustomerHandler.prototype.AfterUpdate = function (id, responseObj) {
                if (id == "LocationMessenger") {
                    var arr = this.customerMessenger.GetObservable().get("LocationIddtSrc");
                    var position = 0;
                    $.map(arr, function (obj, index) {
                        if (obj.LocationIdFld == responseObj.LocationIdFld) {
                            position = index;
                        }
                    });
                    arr.splice(position, 1, responseObj);
                    this.customerMessenger.GetObservable().set("LocationIdFld", responseObj);
                    $("#location-dialog").data("kendoDialog").close();
                }
            };
            return CustomerHandler;
        }());
        BusinessObjects.CustomerHandler = CustomerHandler;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var LocationMessenger = (function () {
            function LocationMessenger(bondClass) {
                LocationMessenger.MessengerClass = this;
                this.bondClass = bondClass;
                this.KendoDataSource();
                this.observ = kendo.observable({
                    AccountIdFld: null,
                    AccountIddtSrc: Q.getLookup('Administration.Account').items,
                    AccountIdFldChanged: function () { LocationMessenger.MessengerClass.bondClass.OnFieldValueChanged('AccountIdFld', LocationMessenger.MessengerClass, this.get('AccountIdFld')); },
                    AddressFld: null,
                    DateFld: new Date(),
                    EmailFld: null,
                    IsVisibleFld: null,
                    LocationIdFld: null,
                    LocationNameFld: null,
                    PhoneNumberFld: null,
                    UserIdFld: null,
                    WebsiteFld: null,
                    getObject: function () {
                        return {
                            AccountId: this.get('AccountIdFld') != null ? this.get('AccountIdFld') : null,
                            Address: this.get('AddressFld') != null ? this.get('AddressFld') : null,
                            Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                            Email: this.get('EmailFld') != null ? this.get('EmailFld') : null,
                            IsVisible: this.get('IsVisibleFld') != null ? this.get('IsVisibleFld') : null,
                            LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                            LocationName: this.get('LocationNameFld') != null ? this.get('LocationNameFld') : null,
                            PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                            UserId: this.get('UserIdFld') != null ? this.get('UserIdFld') : null,
                            Website: this.get('WebsiteFld') != null ? this.get('WebsiteFld') : null
                        };
                    },
                    setObject: function (obj) {
                        this.set('AccountIdFld', (obj != null && obj.hasOwnProperty('AccountId')) ? obj.AccountId : null);
                        this.set('AddressFld', (obj != null && obj.hasOwnProperty('Address')) ? obj.Address : null);
                        this.set('DateFld', (obj != null && obj.hasOwnProperty('Date')) ? obj.Date : null);
                        this.set('EmailFld', (obj != null && obj.hasOwnProperty('Email')) ? obj.Email : null);
                        this.set('IsVisibleFld', (obj != null && obj.hasOwnProperty('IsVisible')) ? obj.IsVisible : null);
                        this.set('LocationIdFld', (obj != null && obj.hasOwnProperty('LocationId')) ? obj.LocationId : null);
                        this.set('LocationNameFld', (obj != null && obj.hasOwnProperty('LocationName')) ? obj.LocationName : null);
                        this.set('PhoneNumberFld', (obj != null && obj.hasOwnProperty('PhoneNumber')) ? obj.PhoneNumber : null);
                        this.set('UserIdFld', (obj != null && obj.hasOwnProperty('UserId')) ? obj.UserId : null);
                        this.set('WebsiteFld', (obj != null && obj.hasOwnProperty('Website')) ? obj.Website : null);
                    },
                    submit: function () {
                        var _this = this;
                        CustomerSupport.Administration.LocationService.Create({ Entity: {
                                AccountId: this.get('AccountIdFld') != null ? this.get('AccountIdFld') : null,
                                Address: this.get('AddressFld') != null ? this.get('AddressFld') : null,
                                Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                                Email: this.get('EmailFld') != null ? this.get('EmailFld') : null,
                                IsVisible: this.get('IsVisibleFld') != null ? this.get('IsVisibleFld') : null,
                                LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                                LocationName: this.get('LocationNameFld') != null ? this.get('LocationNameFld') : null,
                                PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                                UserId: this.get('UserIdFld') != null ? this.get('UserIdFld') : null,
                                Website: this.get('WebsiteFld') != null ? this.get('WebsiteFld') : null
                            } }, function (res) { _this.set('LocationIdFld', res.EntityId); LocationMessenger.MessengerClass.bondClass.AfterSave('LocationMessenger', res.EntityId, LocationMessenger.MessengerClass); });
                    }
                });
            }
            LocationMessenger.prototype.GetObservable = function () {
                return this.observ;
            };
            LocationMessenger.prototype.Read = function (criteria, equalityFilter, includeColumns) {
                var _this = this;
                var requestObj = null;
                if (criteria != undefined) {
                    requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
                }
                else if (equalityFilter != undefined) {
                    requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
                }
                else {
                    requestObj = { IncludeColumns: includeColumns };
                }
                if (this.bondClass.BeforeRead('LocationMessenger', requestObj)) {
                    CustomerSupport.Administration.LocationService.List(requestObj, function (res) {
                        _this.bondClass.AfterRead('LocationMessenger', res);
                    });
                }
            };
            LocationMessenger.prototype.DetailLoad = function (entityId) {
                var _this = this;
                if (this.bondClass.BeforeDetailLoad('LocationMessenger', entityId)) {
                    CustomerSupport.Administration.LocationService.Retrieve({ EntityId: entityId }, function (res) {
                        _this.GetObservable().setObject(res);
                        _this.bondClass.AfterDetailLoad('LocationMessenger', res.Entity);
                    }, { blockUI: false, onError: function (response) { _this.bondClass.OnError('LocationMessenger', 'DetailLoad', response); } });
                }
            };
            LocationMessenger.prototype.Create = function () {
                if (this.bondClass.BeforeSave('LocationMessenger', this))
                    this.observ.submit();
            };
            LocationMessenger.prototype.Update = function () {
                var _this = this;
                if (this.bondClass.BeforeUpdate('LocationMessenger', this))
                    CustomerSupport.Administration.LocationService.Update({ Entity: this.GetObject() }, function (res) { _this.bondClass.AfterUpdate('LocationMessenger', _this.GetObject()); });
            };
            LocationMessenger.prototype.GetPrimaryKeyId = function () { return this.observ.get('LocationId'); };
            LocationMessenger.prototype.GetObject = function () {
                var obj = this.observ.getObject();
                var obj_1 = ({
                    AccountId: obj.AccountId,
                    Address: obj.Address,
                    Date: obj.Date,
                    Email: obj.Email,
                    IsVisible: obj.IsVisible,
                    LocationId: obj.LocationId,
                    LocationName: obj.LocationName,
                    PhoneNumber: obj.PhoneNumber,
                    UserId: obj.UserId,
                    Website: obj.Website
                });
                return obj_1;
            };
            LocationMessenger.prototype.KendoDataSource = function () {
                this.kendoDataSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: 'Entities',
                        total: 'TotalCount',
                        model: {
                            id: 'LocationId',
                            fields: {
                                AccountId: { type: 'string' },
                                Address: { type: 'string' },
                                Date: { type: 'string' },
                                Email: { type: 'string' },
                                LocationId: { type: 'string' },
                                LocationName: { type: 'string' },
                                PhoneNumber: { type: 'string' },
                                UserId: { type: 'string' },
                                Website: { type: 'string' }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.Criteria != undefined) {
                                CustomerSupport.Administration.LocationService.List({ Criteria: options.data.Criteria, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    LocationMessenger.MessengerClass.bondClass.AfterRead('Location-Kendo-Data-Source', res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                CustomerSupport.Administration.LocationService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    LocationMessenger.MessengerClass.bondClass.AfterRead('Location-Kendo-Data-Source', res);
                                });
                            }
                            else {
                                CustomerSupport.Administration.LocationService.List({ IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    LocationMessenger.MessengerClass.bondClass.AfterRead('Location-Kendo-Data-Source', res);
                                });
                            }
                        }
                    },
                }); //Ends
            };
            LocationMessenger.prototype.GetKendoDataSource = function () {
                return this.kendoDataSrc;
            };
            return LocationMessenger;
        }());
        BusinessObjects.LocationMessenger = LocationMessenger;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var LocationHandler = (function () {
            function LocationHandler() {
                var _this = this;
                this.AccountIdInplaceBtnVar = $('#AccountIdInplaceBtn').kendoButton({
                    icon: 'add',
                    click: function () { alert(JSON.stringify(_this.locationMessenger.GetObservable().get('AccountIdFld'))); },
                }).data('kendoButton');
            }
            LocationHandler.prototype.BeforeSave = function (className, myClassRef) {
                alert(JSON.stringify(myClassRef.GetObject()));
                return true;
            };
            LocationHandler.prototype.AfterSave = function (className, entityId, myClassRef) {
                alert(JSON.stringify(myClassRef.GetObject()));
            };
            LocationHandler.prototype.OnFieldValueChanged = function (id, classRef, responseObj) {
                if (id == 'AccountIdFld') {
                    if (responseObj != undefined) {
                        this.AccountIdInplaceBtnVar.element.find('span').removeClass('k-i-add');
                        this.AccountIdInplaceBtnVar.element.find('span').addClass('k-i-edit');
                    }
                    else {
                        this.AccountIdInplaceBtnVar.element.find('span').removeClass('k-i-edit');
                        this.AccountIdInplaceBtnVar.element.find('span').addClass('k-i-add');
                    }
                }
                //this.customerMessenger = classRef;
            };
            LocationHandler.prototype.BeforeUpdate = function () { };
            LocationHandler.prototype.AfterUpdate = function (id, resonseObj) { };
            return LocationHandler;
        }());
        BusinessObjects.LocationHandler = LocationHandler;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerMessenger = (function () {
            function CustomerMessenger(bondClass) {
                CustomerMessenger.MessengerClass = this;
                this.bondClass = bondClass;
                this.KendoDataSource();
                this.observ = kendo.observable({
                    AddressFld: null,
                    CustomerIdFld: null,
                    DateFld: new Date(),
                    DateOfBirthFld: new Date(),
                    EmailFld: null,
                    FullNameFld: null,
                    LocationIdFld: null,
                    LocationIddtSrc: Q.getLookup('Administration.LocationLookup').items,
                    LocationIdFldChanged: function () { CustomerMessenger.MessengerClass.bondClass.OnFieldValueChanged('LocationIdFld', CustomerMessenger.MessengerClass, this.get('LocationIdFld')); },
                    PhoneNumberFld: null,
                    SexFld: null,
                    SexdtSrc: BusinessObjects.GlobalScripts.GetGender(),
                    SexFldChanged: function () { CustomerMessenger.MessengerClass.bondClass.OnFieldValueChanged('SexFld', CustomerMessenger.MessengerClass, this.get('SexFld')); },
                    getObject: function () {
                        return {
                            Address: this.get('AddressFld') != null ? this.get('AddressFld') : null,
                            CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                            Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                            DateOfBirth: this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
                            Email: this.get('EmailFld') != null ? this.get('EmailFld') : null,
                            FullName: this.get('FullNameFld') != null ? this.get('FullNameFld') : null,
                            LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld').LocationId : null,
                            PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                            Sex: this.get('SexFld') != null ? this.get('SexFld') : null
                        };
                    },
                    setObject: function (obj) {
                        this.set('AddressFld', (obj != null && obj.hasOwnProperty('Address')) ? obj.Address : null);
                        this.set('CustomerIdFld', (obj != null && obj.hasOwnProperty('CustomerId')) ? obj.CustomerId : null);
                        this.set('DateFld', (obj != null && obj.hasOwnProperty('Date')) ? obj.Date : null);
                        this.set('DateOfBirthFld', (obj != null && obj.hasOwnProperty('DateOfBirth')) ? obj.DateOfBirth : null);
                        this.set('EmailFld', (obj != null && obj.hasOwnProperty('Email')) ? obj.Email : null);
                        this.set('FullNameFld', (obj != null && obj.hasOwnProperty('FullName')) ? obj.FullName : null);
                        this.set('LocationIdFld', (obj != null && obj.hasOwnProperty('LocationId')) ? obj.LocationId : null);
                        this.set('PhoneNumberFld', (obj != null && obj.hasOwnProperty('PhoneNumber')) ? obj.PhoneNumber : null);
                        this.set('SexFld', (obj != null && obj.hasOwnProperty('Sex')) ? obj.Sex : null);
                    },
                    submit: function () {
                        var _this = this;
                        BusinessObjects.CustomerService.Create({ Entity: {
                                Address: this.get('AddressFld') != null ? this.get('AddressFld') : null,
                                CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                                Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                                DateOfBirth: this.get('DateOfBirthFld') != null ? this.get('DateOfBirthFld') : null,
                                Email: this.get('EmailFld') != null ? this.get('EmailFld') : null,
                                FullName: this.get('FullNameFld') != null ? this.get('FullNameFld') : null,
                                LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld').LocationId : null,
                                PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                                Sex: this.get('SexFld') != null ? this.get('SexFld') : null
                            } }, function (res) { _this.set('CustomerIdFld', res.EntityId); CustomerMessenger.MessengerClass.bondClass.AfterSave('CustomerMessenger', res.EntityId, CustomerMessenger.MessengerClass); });
                    }
                });
            }
            CustomerMessenger.prototype.GetObservable = function () {
                return this.observ;
            };
            CustomerMessenger.prototype.Read = function (criteria, equalityFilter, includeColumns) {
                var _this = this;
                var requestObj = null;
                if (criteria != undefined) {
                    requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
                }
                else if (equalityFilter != undefined) {
                    requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
                }
                else {
                    requestObj = { IncludeColumns: includeColumns };
                }
                if (this.bondClass.BeforeRead('CustomerMessenger', requestObj)) {
                    BusinessObjects.CustomerService.List(requestObj, function (res) {
                        _this.bondClass.AfterRead('CustomerMessenger', res);
                    });
                }
            };
            CustomerMessenger.prototype.DetailLoad = function (entityId) {
                var _this = this;
                if (this.bondClass.BeforeDetailLoad('CustomerMessenger', entityId)) {
                    BusinessObjects.CustomerService.Retrieve({ EntityId: entityId }, function (res) {
                        _this.GetObservable().setObject(res);
                        _this.bondClass.AfterDetailLoad('CustomerMessenger', res.Entity);
                    }, { blockUI: false, onError: function (response) { _this.bondClass.OnError('CustomerMessenger', 'DetailLoad', response); } });
                }
            };
            CustomerMessenger.prototype.Create = function () {
                if (this.bondClass.BeforeSave('CustomerMessenger', this))
                    this.observ.submit();
            };
            CustomerMessenger.prototype.Update = function () {
                var _this = this;
                if (this.bondClass.BeforeUpdate('CustomerMessenger', this))
                    BusinessObjects.CustomerService.Update({ Entity: this.GetObject() }, function (res) { alert('Update successful'); _this.bondClass.AfterUpdate('CustomerMessenger', _this.GetObject()); });
            };
            CustomerMessenger.prototype.GetPrimaryKeyId = function () { return this.observ.get('CustomerId'); };
            CustomerMessenger.prototype.GetObject = function () {
                var obj = this.observ.getObject();
                var obj_1 = ({
                    Address: obj.Address,
                    CustomerId: obj.CustomerId,
                    Date: obj.Date,
                    DateOfBirth: obj.DateOfBirth,
                    Email: obj.Email,
                    FullName: obj.FullName,
                    LocationId: obj.LocationId,
                    PhoneNumber: obj.PhoneNumber,
                    Sex: obj.Sex
                });
                return obj_1;
            };
            CustomerMessenger.prototype.KendoDataSource = function () {
                this.kendoDataSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: 'Entities',
                        total: 'TotalCount',
                        model: {
                            id: 'CustomerId',
                            fields: {
                                Address: { type: 'string' },
                                CustomerId: { type: 'string' },
                                Date: { type: 'string' },
                                DateOfBirth: { type: 'string' },
                                Email: { type: 'string' },
                                FullName: { type: 'string' },
                                LocationId: { type: 'string' },
                                LocationLocationName: { type: 'string' },
                                PhoneNumber: { type: 'string' },
                                Sex: { type: 'string' }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.Criteria != undefined) {
                                BusinessObjects.CustomerService.List({ Criteria: options.data.Criteria, IncludeColumns: ['LocationLocationName'] }, function (res) {
                                    options.success(res);
                                    CustomerMessenger.MessengerClass.bondClass.AfterRead('Customer-Kendo-Data-Source', res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.CustomerService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: ['LocationLocationName'] }, function (res) {
                                    options.success(res);
                                    CustomerMessenger.MessengerClass.bondClass.AfterRead('Customer-Kendo-Data-Source', res);
                                });
                            }
                            else {
                                BusinessObjects.CustomerService.List({ IncludeColumns: ['LocationLocationName'] }, function (res) {
                                    options.success(res);
                                    CustomerMessenger.MessengerClass.bondClass.AfterRead('Customer-Kendo-Data-Source', res);
                                });
                            }
                        }
                    },
                }); //Ends
            };
            CustomerMessenger.prototype.GetKendoDataSource = function () {
                return this.kendoDataSrc;
            };
            return CustomerMessenger;
        }());
        BusinessObjects.CustomerMessenger = CustomerMessenger;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerHandlerTest = (function () {
            function CustomerHandlerTest() {
                var _this = this;
                this.LocationIdFldAddBtn = $("#LocationIdFldAddBtn").kendoButton({
                    icon: "add",
                    click: function () { alert(JSON.stringify(_this.customerMessenger.GetObservable().get("LocationIdFld"))); },
                }).data("kendoButton");
            }
            CustomerHandlerTest.prototype.OnFieldValueChanged = function (id, classRef, responseObj) {
                if (id == 'LocationIdFld') {
                    if (responseObj != undefined) {
                        this.LocationIdFldAddBtn.element.find("span").removeClass("k-i-add");
                        this.LocationIdFldAddBtn.element.find("span").addClass("k-i-edit");
                    }
                    else {
                        this.LocationIdFldAddBtn.element.find("span").removeClass("k-i-edit");
                        this.LocationIdFldAddBtn.element.find("span").addClass("k-i-add");
                    }
                }
                this.customerMessenger = classRef;
            };
            return CustomerHandlerTest;
        }());
        BusinessObjects.CustomerHandlerTest = CustomerHandlerTest;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var CustomerMessengerMethodTest = (function () {
            function CustomerMessengerMethodTest() {
            }
            return CustomerMessengerMethodTest;
        }());
        BusinessObjects.CustomerMessengerMethodTest = CustomerMessengerMethodTest;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var FEUtilities = (function () {
            function FEUtilities() {
            }
            FEUtilities.ToggleInplaceButtonIcon = function (inplaceBtnRef, lookupValue) {
                if (lookupValue != undefined) {
                    inplaceBtnRef.element.find('span').removeClass('k-i-add');
                    inplaceBtnRef.element.find('span').addClass('k-i-edit');
                }
                else {
                    inplaceBtnRef.element.find('span').removeClass('k-i-edit');
                    inplaceBtnRef.element.find('span').addClass('k-i-add');
                }
            };
            FEUtilities.OnInplaceButtonClicked = function (inplaceBtnRef, kendoDialogjQuery, masterMessengerObj, lookUpMessengerObj, editorFieldId) {
                if (inplaceBtnRef.element.find('span').hasClass('k-i-add')) {
                    lookUpMessengerObj.GetObservable().setObject(null);
                    kendoDialogjQuery.data("kendoDialog").open();
                }
                else {
                    lookUpMessengerObj.GetObservable().setObject(masterMessengerObj.GetObservable().get(editorFieldId));
                    kendoDialogjQuery.data("kendoDialog").open();
                }
            };
            return FEUtilities;
        }());
        BusinessObjects.FEUtilities = FEUtilities;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductMessenger = (function () {
            function ProductMessenger(bondClass) {
                ProductMessenger.MessengerClass = this;
                this.bondClass = bondClass;
                this.KendoDataSource();
                this.observ = kendo.observable({
                    LocationListFld: null,
                    LocationListdtSrc: Q.getLookup('Administration.LocationLookup').items,
                    LocationListFldChanged: function () { ProductMessenger.MessengerClass.bondClass.OnFieldValueChanged('LocationListFld', ProductMessenger.MessengerClass, this.get('LocationListFld')); },
                    NameFld: null,
                    PriceFld: null,
                    ProductIdFld: null,
                    getObject: function () {
                        return {
                            LocationList: this.get('LocationListFld') != null ? this.get('LocationListFld').LocationId : null,
                            Name: this.get('NameFld') != null ? this.get('NameFld') : null,
                            Price: this.get('PriceFld') != null ? this.get('PriceFld') : null,
                            ProductId: this.get('ProductIdFld') != null ? this.get('ProductIdFld') : null
                        };
                    },
                    setObject: function (obj) {
                        this.set('LocationListFld', (obj != null && obj.hasOwnProperty('LocationList')) ? obj.LocationList : null);
                        this.set('NameFld', (obj != null && obj.hasOwnProperty('Name')) ? obj.Name : null);
                        this.set('PriceFld', (obj != null && obj.hasOwnProperty('Price')) ? obj.Price : null);
                        this.set('ProductIdFld', (obj != null && obj.hasOwnProperty('ProductId')) ? obj.ProductId : null);
                    },
                    submit: function () {
                        var _this = this;
                        BusinessObjects.ProductService.Create({ Entity: {
                                LocationList: this.get('LocationListFld') != null ? this.get('LocationListFld').LocationId : null,
                                Name: this.get('NameFld') != null ? this.get('NameFld') : null,
                                Price: this.get('PriceFld') != null ? this.get('PriceFld') : null,
                                ProductId: this.get('ProductIdFld') != null ? this.get('ProductIdFld') : null
                            } }, function (res) { _this.set('ProductIdFld', res.EntityId); ProductMessenger.MessengerClass.bondClass.AfterSave('ProductMessenger', res.EntityId, ProductMessenger.MessengerClass); });
                    }
                });
            }
            ProductMessenger.prototype.GetObservable = function () {
                return this.observ;
            };
            ProductMessenger.prototype.Read = function (criteria, equalityFilter, includeColumns) {
                var _this = this;
                var requestObj = null;
                if (criteria != undefined) {
                    requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
                }
                else if (equalityFilter != undefined) {
                    requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
                }
                else {
                    requestObj = { IncludeColumns: includeColumns };
                }
                if (this.bondClass.BeforeRead('ProductMessenger', requestObj)) {
                    BusinessObjects.ProductService.List(requestObj, function (res) {
                        _this.bondClass.AfterRead('ProductMessenger', res);
                    });
                }
            };
            ProductMessenger.prototype.DetailLoad = function (entityId) {
                var _this = this;
                if (this.bondClass.BeforeDetailLoad('ProductMessenger', entityId)) {
                    BusinessObjects.ProductService.Retrieve({ EntityId: entityId }, function (res) {
                        _this.GetObservable().setObject(res);
                        _this.bondClass.AfterDetailLoad('ProductMessenger', res.Entity);
                    }, { blockUI: false, onError: function (response) { _this.bondClass.OnError('ProductMessenger', 'DetailLoad', response); } });
                }
            };
            ProductMessenger.prototype.Create = function () {
                if (this.bondClass.BeforeSave('ProductMessenger', this))
                    this.observ.submit();
            };
            ProductMessenger.prototype.Update = function () {
                var _this = this;
                if (this.bondClass.BeforeUpdate('ProductMessenger', this))
                    BusinessObjects.ProductService.Update({ Entity: this.GetObject() }, function (res) { alert('Update successful'); _this.bondClass.AfterUpdate('ProductMessenger', _this.GetObject()); });
            };
            ProductMessenger.prototype.GetPrimaryKeyId = function () { return this.observ.get('ProductId'); };
            ProductMessenger.prototype.GetObject = function () {
                var obj = this.observ.getObject();
                var obj_1 = ({
                    LocationList: obj.LocationList,
                    Name: obj.Name,
                    Price: obj.Price,
                    ProductId: obj.ProductId
                });
                return obj_1;
            };
            ProductMessenger.prototype.KendoDataSource = function () {
                this.kendoDataSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: 'Entities',
                        total: 'TotalCount',
                        model: {
                            id: 'ProductId',
                            fields: {
                                LocationList: { type: 'string' },
                                Name: { type: 'string' },
                                Price: { type: 'string' },
                                ProductId: { type: 'string' }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.Criteria != undefined) {
                                BusinessObjects.ProductService.List({ Criteria: options.data.Criteria, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    ProductMessenger.MessengerClass.bondClass.AfterRead('Product-Kendo-Data-Source', res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.ProductService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    ProductMessenger.MessengerClass.bondClass.AfterRead('Product-Kendo-Data-Source', res);
                                });
                            }
                            else {
                                BusinessObjects.ProductService.List({ IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    ProductMessenger.MessengerClass.bondClass.AfterRead('Product-Kendo-Data-Source', res);
                                });
                            }
                        }
                    },
                }); //Ends
            };
            ProductMessenger.prototype.GetKendoDataSource = function () {
                return this.kendoDataSrc;
            };
            return ProductMessenger;
        }());
        BusinessObjects.ProductMessenger = ProductMessenger;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductBond = (function () {
            function ProductBond() {
            }
            ProductBond.prototype.SetTeamPlayers = function (customerMessenger, locationMessenger, productHandler, locationHandler) {
                this.customerMessenger = customerMessenger;
                this.locationMessenger = locationMessenger;
                this.productHandler = productHandler;
                this.locationHandler = locationHandler;
            };
            ProductBond.prototype.BeforeRead = function (className, requestObject) { return true; };
            ProductBond.prototype.AfterRead = function (className, responseObj) { /*alert('After Read is called'); */ alert(JSON.stringify(responseObj)); };
            ProductBond.prototype.BeforeSave = function (className, myClassRef) {
                if (className == "LocationMessenger") {
                    alert(true);
                    return true;
                }
                else if (className == "ProductMessenger")
                    return true;
                alert('No handler was implemented for [' + className + ']');
                return false;
            };
            ProductBond.prototype.AfterSave = function (className, entityId, myClassRef) {
                if (className == "LocationMessenger") {
                    alert(JSON.stringify(myClassRef.GetObject()));
                    //this.locationMessenger.AfterSave(className, entityId, myClassRef);
                    this.customerMessenger.GetObservable().get("LocationIddtSrc").push(myClassRef.GetObject());
                    this.customerMessenger.GetObservable().set("LocationIdFld", myClassRef.GetObject());
                    this.OnFieldValueChanged('LocationIdFld', BusinessObjects.ProductMessenger.MessengerClass, myClassRef.GetObject());
                }
                else {
                    alert(JSON.stringify(myClassRef.GetObject()));
                }
            };
            ProductBond.prototype.BeforeDetailLoad = function (className, entityId) { alert('Before detail load call'); return true; };
            ProductBond.prototype.AfterDetailLoad = function (className, responseObj) { alert('After detail load call'); alert(JSON.stringify(responseObj)); };
            ProductBond.prototype.OnError = function (className, requestType, errorMessage) { alert('Error detail load call'); };
            ProductBond.prototype.BeforeUpdate = function (className, classObj) { return true; };
            ProductBond.prototype.AfterUpdate = function (className, responseObj) {
                this.productHandler.AfterUpdate(className, responseObj);
            };
            ProductBond.prototype.OnFieldValueChanged = function (id, classRef, responseObj) {
                if (id == "LocationListFld") {
                    this.productHandler.OnFieldValueChanged(id, classRef, responseObj);
                }
                else
                    alert('No handler was implemented for [' + id + '](BondClass)');
            };
            return ProductBond;
        }());
        BusinessObjects.ProductBond = ProductBond;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductFilterMessenger = (function () {
            function ProductFilterMessenger(bondClass) {
                ProductFilterMessenger.MessengerClass = this;
                this.bondClass = bondClass;
                this.KendoDataSource();
                this.filterObserv = kendo.observable({
                    LocationListdtSrc: Q.getLookup('Administration.LocationLookup').items,
                    LocationListFld: null,
                    NameFld: null,
                    getObject: function () {
                        return {
                            LocationList: this.get('LocationListFld') != null ? this.get('LocationListFld') : null,
                            Name: this.get('NameFld') != null ? this.get('NameFld') : null
                        };
                    },
                    getRequestCriteriaObject: function () {
                        var requestQry = [];
                        if (this.get('LocationListFld') != null && this.get('LocationListFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('LocationList'), '=', this.get('LocationListFld')]);
                        }
                        if (this.get('NameFld') != null && this.get('NameFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('Name'), '=', this.get('NameFld')]);
                        }
                        return requestQry;
                    },
                    assemble: function (arrRef, obj) {
                        if (arrRef.length == 0) {
                            arrRef.push(obj);
                            return arrRef;
                        }
                        else if (arrRef.length == 1) {
                            arrRef.push('and');
                            arrRef.push(obj);
                            return arrRef;
                        }
                        else {
                            var newArr1 = [];
                            newArr1.push([arrRef[0], arrRef[1], arrRef[2]]);
                            newArr1.push('and');
                            newArr1.push(obj);
                            return newArr1;
                        }
                    },
                    setObject: function (obj) {
                        this.set('LocationListFld', obj.Entity.LocationList);
                        this.set('NameFld', obj.Entity.Name);
                    },
                });
            }
            ProductFilterMessenger.prototype.GetFilterObservable = function () {
                return this.filterObserv;
            };
            ProductFilterMessenger.prototype.GetFilterValues = function () {
                return this.GetFilterObservable().getRequestCriteriaObject();
            };
            ProductFilterMessenger.prototype.Read = function (criteria, equalityFilter, includeColumns) {
                var _this = this;
                var requestObj = null;
                if (criteria != undefined) {
                    requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
                }
                else if (equalityFilter != undefined) {
                    requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
                }
                else {
                    requestObj = { IncludeColumns: includeColumns };
                }
                if (this.bondClass.BeforeRead('Filter-ProductFilterMessenger', requestObj)) {
                    BusinessObjects.ProductService.List(requestObj, function (res) {
                        _this.bondClass.AfterRead('Filter-ProductFilterMessenger', res);
                    });
                }
            }; //Ends the read method
            ProductFilterMessenger.prototype.KendoDataSourceRead_1 = function (criteria) {
                if (criteria.length >= 1) {
                    var criteria_1 = (criteria.length == 1) ? criteria[0] : criteria;
                    if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', { Criteria: criteria_1 })) {
                        this.kendoDataSrc.read({ Criteria: criteria_1 });
                    }
                }
                else {
                    if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', null)) {
                        this.kendoDataSrc.read();
                    }
                }
            };
            ProductFilterMessenger.prototype.KendoDataSourceRead = function () {
                this.KendoDataSourceRead_1(this.GetFilterValues());
            };
            ProductFilterMessenger.prototype.KendoDataSource = function () {
                this.kendoDataSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: 'Entities',
                        total: 'TotalCount',
                        model: {
                            id: 'ProductId',
                            fields: {
                                LocationList: { type: 'string' },
                                Name: { type: 'string' }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.Criteria != undefined) {
                                BusinessObjects.ProductService.List({ Criteria: options.data.Criteria, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    ProductFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Product-Kendo-Data-Source', res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.ProductService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    ProductFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Product-Kendo-Data-Source', res);
                                });
                            }
                            else {
                                BusinessObjects.ProductService.List({ IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    ProductFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Product-Kendo-Data-Source', res);
                                });
                            }
                        }
                    },
                }); //Ends
            };
            ProductFilterMessenger.prototype.GetKendoDataSource = function () {
                return this.kendoDataSrc;
            };
            return ProductFilterMessenger;
        }());
        BusinessObjects.ProductFilterMessenger = ProductFilterMessenger;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var ProductHandler = (function () {
            function ProductHandler() {
                var _this = this;
                this.LocationListInplaceBtnVar = $('#LocationListInplaceBtn').kendoButton({
                    icon: 'add',
                    click: function () {
                        BusinessObjects.FEUtilities.OnInplaceButtonClicked(_this.LocationListInplaceBtnVar, $("#location-dialog"), _this.productMessenger, _this.locationMessenger, "LocationListFld");
                        if (_this.LocationListInplaceBtnVar.element.find('span').hasClass('k-i-add')) {
                        }
                        else {
                        }
                    },
                }).data('kendoButton');
            }
            ProductHandler.prototype.BeforeSave = function (className, myClassRef) {
                alert(JSON.stringify(myClassRef.GetObject()));
                return true;
            };
            ProductHandler.prototype.AfterSave = function (className, entityId, myClassRef) {
                alert(JSON.stringify(myClassRef.GetObject()));
            };
            ProductHandler.prototype.SetTeamPlayers = function (productMessenger, locationMessenger) {
                this.productMessenger = productMessenger;
                this.locationMessenger = locationMessenger;
            };
            ProductHandler.prototype.OnFieldValueChanged = function (id, classRef, responseObj) {
                if (id == 'LocationListFld') {
                    BusinessObjects.FEUtilities.ToggleInplaceButtonIcon(this.LocationListInplaceBtnVar, responseObj);
                    if (responseObj != undefined) {
                    }
                    else {
                    }
                }
                this.responseObj = responseObj;
                this.refMessenger = classRef;
            };
            return ProductHandler;
        }());
        BusinessObjects.ProductHandler = ProductHandler;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketMessenger = (function () {
            function TicketMessenger(bondClass) {
                TicketMessenger.MessengerClass = this;
                this.bondClass = bondClass;
                this.KendoDataSource();
                this.observ = kendo.observable({
                    CreatorIdFld: null,
                    CustomerIdFld: null,
                    CustomerIddtSrc: Q.getLookup('Administration.CustomerLocationLookup').items,
                    CustomerIdFldChanged: function () { TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('CustomerIdFld', TicketMessenger.MessengerClass, this.get('CustomerIdFld')); },
                    DateFld: new Date(),
                    FollowUpActionFld: null,
                    GroupIdFld: null,
                    GroupIddtSrc: Q.getLookup('Administration.RoleLocationLookup').items,
                    GroupIdFldChanged: function () { TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('GroupIdFld', TicketMessenger.MessengerClass, this.get('GroupIdFld')); },
                    LocationIdFld: null,
                    LocationIddtSrc: Q.getLookup('Administration.LocationLookup').items,
                    LocationIdFldChanged: function () { TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('LocationIdFld', TicketMessenger.MessengerClass, this.get('LocationIdFld')); },
                    MeFld: null,
                    NextFollowUpDateFld: new Date(),
                    NoteListFld: null,
                    PhoneNumberFld: null,
                    PriorityFld: null,
                    ProductIdFld: null,
                    ProductIddtSrc: Q.getLookup('Administration.ProductLocationLookup').items,
                    ProductIdFldChanged: function () { TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('ProductIdFld', TicketMessenger.MessengerClass, this.get('ProductIdFld')); },
                    StatusFld: null,
                    SubjectFld: null,
                    TicketIdStringFld: null,
                    TransactionIdFld: null,
                    TransactionIddtSrc: Q.getLookup('BusinessObjects.Transaction').items,
                    TransactionIdFldChanged: function () { TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('TransactionIdFld', TicketMessenger.MessengerClass, this.get('TransactionIdFld')); },
                    TypeFld: null,
                    UserIdFld: null,
                    UserIddtSrc: Q.getLookup('Administration.UserRoleLookup').items,
                    UserIdFldChanged: function () { TicketMessenger.MessengerClass.bondClass.OnFieldValueChanged('UserIdFld', TicketMessenger.MessengerClass, this.get('UserIdFld')); },
                    UserUsernameFld: null,
                    getObject: function () {
                        return {
                            CreatorId: this.get('CreatorIdFld') != null ? this.get('CreatorIdFld') : null,
                            CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                            Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                            FollowUpAction: this.get('FollowUpActionFld') != null ? this.get('FollowUpActionFld') : null,
                            GroupId: this.get('GroupIdFld') != null ? this.get('GroupIdFld') : null,
                            LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                            Me: this.get('MeFld') != null ? this.get('MeFld') : null,
                            NextFollowUpDate: this.get('NextFollowUpDateFld') != null ? this.get('NextFollowUpDateFld') : null,
                            NoteList: this.get('NoteListFld') != null ? this.get('NoteListFld') : null,
                            PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                            Priority: this.get('PriorityFld') != null ? this.get('PriorityFld') : null,
                            ProductId: this.get('ProductIdFld') != null ? this.get('ProductIdFld') : null,
                            Status: this.get('StatusFld') != null ? this.get('StatusFld') : null,
                            Subject: this.get('SubjectFld') != null ? this.get('SubjectFld') : null,
                            TicketIdString: this.get('TicketIdStringFld') != null ? this.get('TicketIdStringFld') : null,
                            TransactionId: this.get('TransactionIdFld') != null ? this.get('TransactionIdFld') : null,
                            Type: this.get('TypeFld') != null ? this.get('TypeFld') : null,
                            UserId: this.get('UserIdFld') != null ? this.get('UserIdFld') : null,
                            UserUsername: this.get('UserUsernameFld') != null ? this.get('UserUsernameFld') : null
                        };
                    },
                    setObject: function (obj) {
                        this.set('CreatorIdFld', (obj != null && obj.hasOwnProperty('CreatorId')) ? obj.CreatorId : null);
                        this.set('CustomerIdFld', (obj != null && obj.hasOwnProperty('CustomerId')) ? obj.CustomerId : null);
                        this.set('DateFld', (obj != null && obj.hasOwnProperty('Date')) ? obj.Date : null);
                        this.set('FollowUpActionFld', (obj != null && obj.hasOwnProperty('FollowUpAction')) ? obj.FollowUpAction : null);
                        this.set('GroupIdFld', (obj != null && obj.hasOwnProperty('GroupId')) ? obj.GroupId : null);
                        this.set('LocationIdFld', (obj != null && obj.hasOwnProperty('LocationId')) ? obj.LocationId : null);
                        this.set('MeFld', (obj != null && obj.hasOwnProperty('Me')) ? obj.Me : null);
                        this.set('NextFollowUpDateFld', (obj != null && obj.hasOwnProperty('NextFollowUpDate')) ? obj.NextFollowUpDate : null);
                        this.set('NoteListFld', (obj != null && obj.hasOwnProperty('NoteList')) ? obj.NoteList : null);
                        this.set('PhoneNumberFld', (obj != null && obj.hasOwnProperty('PhoneNumber')) ? obj.PhoneNumber : null);
                        this.set('PriorityFld', (obj != null && obj.hasOwnProperty('Priority')) ? obj.Priority : null);
                        this.set('ProductIdFld', (obj != null && obj.hasOwnProperty('ProductId')) ? obj.ProductId : null);
                        this.set('StatusFld', (obj != null && obj.hasOwnProperty('Status')) ? obj.Status : null);
                        this.set('SubjectFld', (obj != null && obj.hasOwnProperty('Subject')) ? obj.Subject : null);
                        this.set('TicketIdStringFld', (obj != null && obj.hasOwnProperty('TicketIdString')) ? obj.TicketIdString : null);
                        this.set('TransactionIdFld', (obj != null && obj.hasOwnProperty('TransactionId')) ? obj.TransactionId : null);
                        this.set('TypeFld', (obj != null && obj.hasOwnProperty('Type')) ? obj.Type : null);
                        this.set('UserIdFld', (obj != null && obj.hasOwnProperty('UserId')) ? obj.UserId : null);
                        this.set('UserUsernameFld', (obj != null && obj.hasOwnProperty('UserUsername')) ? obj.UserUsername : null);
                    },
                    submit: function () {
                        var _this = this;
                        BusinessObjects.TicketService.Create({ Entity: {
                                CreatorId: this.get('CreatorIdFld') != null ? this.get('CreatorIdFld') : null,
                                CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                                Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                                FollowUpAction: this.get('FollowUpActionFld') != null ? this.get('FollowUpActionFld') : null,
                                GroupId: this.get('GroupIdFld') != null ? this.get('GroupIdFld') : null,
                                LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                                Me: this.get('MeFld') != null ? this.get('MeFld') : null,
                                NextFollowUpDate: this.get('NextFollowUpDateFld') != null ? this.get('NextFollowUpDateFld') : null,
                                NoteList: this.get('NoteListFld') != null ? this.get('NoteListFld') : null,
                                PhoneNumber: this.get('PhoneNumberFld') != null ? this.get('PhoneNumberFld') : null,
                                Priority: this.get('PriorityFld') != null ? this.get('PriorityFld') : null,
                                ProductId: this.get('ProductIdFld') != null ? this.get('ProductIdFld') : null,
                                Status: this.get('StatusFld') != null ? this.get('StatusFld') : null,
                                Subject: this.get('SubjectFld') != null ? this.get('SubjectFld') : null,
                                TicketIdString: this.get('TicketIdStringFld') != null ? this.get('TicketIdStringFld') : null,
                                TransactionId: this.get('TransactionIdFld') != null ? this.get('TransactionIdFld') : null,
                                Type: this.get('TypeFld') != null ? this.get('TypeFld') : null,
                                UserId: this.get('UserIdFld') != null ? this.get('UserIdFld') : null,
                                UserUsername: this.get('UserUsernameFld') != null ? this.get('UserUsernameFld') : null
                            } }, function (res) { _this.set('Fld', res.EntityId); TicketMessenger.MessengerClass.bondClass.AfterSave('TicketMessenger', res.EntityId, TicketMessenger.MessengerClass); });
                    }
                });
            }
            TicketMessenger.prototype.GetObservable = function () {
                return this.observ;
            };
            TicketMessenger.prototype.Read = function (criteria, equalityFilter, includeColumns) {
                var _this = this;
                var requestObj = null;
                if (criteria != undefined) {
                    requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
                }
                else if (equalityFilter != undefined) {
                    requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
                }
                else {
                    requestObj = { IncludeColumns: includeColumns };
                }
                if (this.bondClass.BeforeRead('TicketMessenger', requestObj)) {
                    BusinessObjects.TicketService.List(requestObj, function (res) {
                        _this.bondClass.AfterRead('TicketMessenger', res);
                    });
                }
            };
            TicketMessenger.prototype.DetailLoad = function (entityId) {
                var _this = this;
                if (this.bondClass.BeforeDetailLoad('TicketMessenger', entityId)) {
                    BusinessObjects.TicketService.Retrieve({ EntityId: entityId }, function (res) {
                        _this.GetObservable().setObject(res);
                        _this.bondClass.AfterDetailLoad('TicketMessenger', res.Entity);
                    }, { blockUI: false, onError: function (response) { _this.bondClass.OnError('TicketMessenger', 'DetailLoad', response); } });
                }
            };
            TicketMessenger.prototype.Create = function () {
                if (this.bondClass.BeforeSave('TicketMessenger', this))
                    this.observ.submit();
            };
            TicketMessenger.prototype.Update = function () {
                var _this = this;
                if (this.bondClass.BeforeUpdate('TicketMessenger', this))
                    BusinessObjects.TicketService.Update({ Entity: this.GetObject() }, function (res) { alert('Update successful'); _this.bondClass.AfterUpdate('TicketMessenger', _this.GetObject()); });
            };
            TicketMessenger.prototype.GetPrimaryKeyId = function () { return this.observ.get(''); };
            TicketMessenger.prototype.GetObject = function () {
                var obj = this.observ.getObject();
                var obj_1 = ({
                    CreatorId: obj.CreatorId,
                    CustomerId: obj.CustomerId,
                    Date: obj.Date,
                    FollowUpAction: obj.FollowUpAction,
                    GroupId: obj.GroupId,
                    LocationId: obj.LocationId,
                    Me: obj.Me,
                    NextFollowUpDate: obj.NextFollowUpDate,
                    NoteList: obj.NoteList,
                    PhoneNumber: obj.PhoneNumber,
                    Priority: obj.Priority,
                    ProductId: obj.ProductId,
                    Status: obj.Status,
                    Subject: obj.Subject,
                    TicketIdString: obj.TicketIdString,
                    TransactionId: obj.TransactionId,
                    Type: obj.Type,
                    UserId: obj.UserId,
                    UserUsername: obj.UserUsername
                });
                return obj_1;
            };
            TicketMessenger.prototype.KendoDataSource = function () {
                this.kendoDataSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: 'Entities',
                        total: 'TotalCount',
                        model: {
                            id: 'TicketId',
                            fields: {
                                CreatorId: { type: 'string' },
                                CustomerId: { type: 'string' },
                                CustomerName: { type: 'string' },
                                Date: { type: 'string' },
                                FollowUpAction: { type: 'string' },
                                GroupRoleName: { type: 'string' },
                                LocationId: { type: 'string' },
                                Me: { type: 'string' },
                                NextFollowUpDate: { type: 'string' },
                                PhoneNumber: { type: 'string' },
                                Priority: { type: 'string' },
                                ProductName: { type: 'string' },
                                Status: { type: 'string' },
                                Subject: { type: 'string' },
                                TicketId: { type: 'string' },
                                TicketIdString: { type: 'string' },
                                TransactionId: { type: 'string' },
                                Type: { type: 'string' },
                                UserUsername: { type: 'string' }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.Criteria != undefined) {
                                BusinessObjects.TicketService.List({ Criteria: options.data.Criteria, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TicketMessenger.MessengerClass.bondClass.AfterRead('Ticket-Kendo-Data-Source', res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.TicketService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TicketMessenger.MessengerClass.bondClass.AfterRead('Ticket-Kendo-Data-Source', res);
                                });
                            }
                            else {
                                BusinessObjects.TicketService.List({ IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TicketMessenger.MessengerClass.bondClass.AfterRead('Ticket-Kendo-Data-Source', res);
                                });
                            }
                        }
                    },
                }); //Ends
            };
            TicketMessenger.prototype.GetKendoDataSource = function () {
                return this.kendoDataSrc;
            };
            return TicketMessenger;
        }());
        BusinessObjects.TicketMessenger = TicketMessenger;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketFilterMessenger = (function () {
            function TicketFilterMessenger(bondClass) {
                TicketFilterMessenger.MessengerClass = this;
                this.bondClass = bondClass;
                this.KendoDataSource();
                this.filterObserv = kendo.observable({
                    CallDirectionFld: null,
                    GroupIddtSrc: Q.getLookup('Administration.RoleLocationLookup').items,
                    GroupIdFld: null,
                    LocationIdFld: null,
                    PriorityFld: null,
                    ProductIddtSrc: Q.getLookup('Administration.ProductLocationLookup').items,
                    ProductIdFld: null,
                    ProductNameFld: null,
                    StatusFld: null,
                    TypeFld: null,
                    UserIddtSrc: Q.getLookup('Administration.UserRoleLookup').items,
                    UserIdFld: null,
                    getObject: function () {
                        return {
                            CallDirection: this.get('CallDirectionFld') != null ? this.get('CallDirectionFld') : null,
                            GroupId: this.get('GroupIdFld') != null ? this.get('GroupIdFld') : null,
                            LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                            Priority: this.get('PriorityFld') != null ? this.get('PriorityFld') : null,
                            ProductId: this.get('ProductIdFld') != null ? this.get('ProductIdFld') : null,
                            ProductName: this.get('ProductNameFld') != null ? this.get('ProductNameFld') : null,
                            Status: this.get('StatusFld') != null ? this.get('StatusFld') : null,
                            Type: this.get('TypeFld') != null ? this.get('TypeFld') : null,
                            UserId: this.get('UserIdFld') != null ? this.get('UserIdFld') : null
                        };
                    },
                    getRequestCriteriaObject: function () {
                        var requestQry = [];
                        if (this.get('CallDirectionFld') != null && this.get('CallDirectionFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('CallDirection'), '=', this.get('CallDirectionFld')]);
                        }
                        if (this.get('GroupIdFld') != null && this.get('GroupIdFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('GroupId'), '=', this.get('GroupIdFld')]);
                        }
                        if (this.get('LocationIdFld') != null && this.get('LocationIdFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('LocationId'), '=', this.get('LocationIdFld')]);
                        }
                        if (this.get('PriorityFld') != null && this.get('PriorityFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('Priority'), '=', this.get('PriorityFld')]);
                        }
                        if (this.get('ProductIdFld') != null && this.get('ProductIdFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('ProductId'), '=', this.get('ProductIdFld')]);
                        }
                        if (this.get('ProductNameFld') != null && this.get('ProductNameFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('ProductName'), '=', this.get('ProductNameFld')]);
                        }
                        if (this.get('StatusFld') != null && this.get('StatusFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('Status'), '=', this.get('StatusFld')]);
                        }
                        if (this.get('TypeFld') != null && this.get('TypeFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('Type'), '=', this.get('TypeFld')]);
                        }
                        if (this.get('UserIdFld') != null && this.get('UserIdFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('UserId'), '=', this.get('UserIdFld')]);
                        }
                        return requestQry;
                    },
                    assemble: function (arrRef, obj) {
                        if (arrRef.length == 0) {
                            arrRef.push(obj);
                            return arrRef;
                        }
                        else if (arrRef.length == 1) {
                            arrRef.push('and');
                            arrRef.push(obj);
                            return arrRef;
                        }
                        else {
                            var newArr1 = [];
                            newArr1.push([arrRef[0], arrRef[1], arrRef[2]]);
                            newArr1.push('and');
                            newArr1.push(obj);
                            return newArr1;
                        }
                    },
                    setObject: function (obj) {
                        this.set('CallDirectionFld', obj.Entity.CallDirection);
                        this.set('GroupIdFld', obj.Entity.GroupId);
                        this.set('LocationIdFld', obj.Entity.LocationId);
                        this.set('PriorityFld', obj.Entity.Priority);
                        this.set('ProductIdFld', obj.Entity.ProductId);
                        this.set('ProductNameFld', obj.Entity.ProductName);
                        this.set('StatusFld', obj.Entity.Status);
                        this.set('TypeFld', obj.Entity.Type);
                        this.set('UserIdFld', obj.Entity.UserId);
                    },
                });
            }
            TicketFilterMessenger.prototype.GetFilterObservable = function () {
                return this.filterObserv;
            };
            TicketFilterMessenger.prototype.GetFilterValues = function () {
                return this.GetFilterObservable().getRequestCriteriaObject();
            };
            TicketFilterMessenger.prototype.Read = function (criteria, equalityFilter, includeColumns) {
                var _this = this;
                var requestObj = null;
                if (criteria != undefined) {
                    requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
                }
                else if (equalityFilter != undefined) {
                    requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
                }
                else {
                    requestObj = { IncludeColumns: includeColumns };
                }
                if (this.bondClass.BeforeRead('Filter-TicketFilterMessenger', requestObj)) {
                    BusinessObjects.TicketService.List(requestObj, function (res) {
                        _this.bondClass.AfterRead('Filter-TicketFilterMessenger', res);
                    });
                }
            }; //Ends the read method
            TicketFilterMessenger.prototype.KendoDataSourceRead_1 = function (criteria) {
                if (criteria.length >= 1) {
                    var criteria_1 = (criteria.length == 1) ? criteria[0] : criteria;
                    if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', { Criteria: criteria_1 })) {
                        this.kendoDataSrc.read({ Criteria: criteria_1 });
                    }
                }
                else {
                    if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', null)) {
                        this.kendoDataSrc.read();
                    }
                }
            };
            TicketFilterMessenger.prototype.KendoDataSourceRead = function () {
                this.KendoDataSourceRead_1(this.GetFilterValues());
            };
            TicketFilterMessenger.prototype.KendoDataSource = function () {
                this.kendoDataSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: 'Entities',
                        total: 'TotalCount',
                        model: {
                            id: 'TicketId',
                            fields: {
                                CallDirection: { type: 'string' },
                                GroupId: { type: 'string' },
                                LocationId: { type: 'string' },
                                Priority: { type: 'string' },
                                ProductId: { type: 'string' },
                                ProductName: { type: 'string' },
                                Status: { type: 'string' },
                                Type: { type: 'string' },
                                UserId: { type: 'string' }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.Criteria != undefined) {
                                BusinessObjects.TicketService.List({ Criteria: options.data.Criteria, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TicketFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Ticket-Kendo-Data-Source', res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.TicketService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TicketFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Ticket-Kendo-Data-Source', res);
                                });
                            }
                            else {
                                BusinessObjects.TicketService.List({ IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TicketFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Ticket-Kendo-Data-Source', res);
                                });
                            }
                        }
                    },
                }); //Ends
            };
            TicketFilterMessenger.prototype.GetKendoDataSource = function () {
                return this.kendoDataSrc;
            };
            return TicketFilterMessenger;
        }());
        BusinessObjects.TicketFilterMessenger = TicketFilterMessenger;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TicketHandler = (function () {
            function TicketHandler() {
                var _this = this;
                this.CustomerIdInplaceBtnVar = $('#CustomerIdInplaceBtn').kendoButton({
                    icon: 'add',
                    click: function () {
                        if (_this.CustomerIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {
                        }
                        else {
                        }
                    },
                }).data('kendoButton');
                this.GroupIdInplaceBtnVar = $('#GroupIdInplaceBtn').kendoButton({
                    icon: 'add',
                    click: function () {
                        if (_this.GroupIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {
                        }
                        else {
                        }
                    },
                }).data('kendoButton');
                this.LocationIdInplaceBtnVar = $('#LocationIdInplaceBtn').kendoButton({
                    icon: 'add',
                    click: function () {
                        if (_this.LocationIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {
                        }
                        else {
                        }
                    },
                }).data('kendoButton');
                this.ProductIdInplaceBtnVar = $('#ProductIdInplaceBtn').kendoButton({
                    icon: 'add',
                    click: function () {
                        if (_this.ProductIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {
                        }
                        else {
                        }
                    },
                }).data('kendoButton');
                this.TransactionIdInplaceBtnVar = $('#TransactionIdInplaceBtn').kendoButton({
                    icon: 'add',
                    click: function () {
                        if (_this.TransactionIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {
                        }
                        else {
                        }
                    },
                }).data('kendoButton');
                this.UserIdInplaceBtnVar = $('#UserIdInplaceBtn').kendoButton({
                    icon: 'add',
                    click: function () {
                        if (_this.UserIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {
                        }
                        else {
                        }
                    },
                }).data('kendoButton');
            }
            TicketHandler.prototype.BeforeSave = function (className, myClassRef) {
                alert(JSON.stringify(myClassRef.GetObject()));
                return true;
            };
            TicketHandler.prototype.AfterSave = function (className, entityId, myClassRef) {
                alert(JSON.stringify(myClassRef.GetObject()));
            };
            TicketHandler.prototype.SetTeamPlayers = function (ticketMessenger) {
                this.ticketMessenger = ticketMessenger;
            };
            TicketHandler.prototype.OnFieldValueChanged = function (id, classRef, responseObj) {
                if (id == 'CustomerIdFld') {
                    if (responseObj != undefined) {
                        BusinessObjects.FEUtilities.ToggleInplaceButtonIcon(this.CustomerIdInplaceBtnVar, responseObj);
                    }
                }
                else if (id == 'GroupIdFld') {
                    if (responseObj != undefined) {
                        BusinessObjects.FEUtilities.ToggleInplaceButtonIcon(this.GroupIdInplaceBtnVar, responseObj);
                    }
                }
                else if (id == 'LocationIdFld') {
                    if (responseObj != undefined) {
                        BusinessObjects.FEUtilities.ToggleInplaceButtonIcon(this.LocationIdInplaceBtnVar, responseObj);
                    }
                }
                else if (id == 'ProductIdFld') {
                    if (responseObj != undefined) {
                        BusinessObjects.FEUtilities.ToggleInplaceButtonIcon(this.ProductIdInplaceBtnVar, responseObj);
                    }
                }
                else if (id == 'TransactionIdFld') {
                    if (responseObj != undefined) {
                        BusinessObjects.FEUtilities.ToggleInplaceButtonIcon(this.TransactionIdInplaceBtnVar, responseObj);
                    }
                }
                else if (id == 'UserIdFld') {
                    if (responseObj != undefined) {
                        BusinessObjects.FEUtilities.ToggleInplaceButtonIcon(this.UserIdInplaceBtnVar, responseObj);
                    }
                }
                this.responseObj = responseObj;
                this.refMessenger = classRef;
            };
            return TicketHandler;
        }());
        BusinessObjects.TicketHandler = TicketHandler;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionMessenger = (function () {
            function TransactionMessenger(bondClass) {
                TransactionMessenger.MessengerClass = this;
                this.bondClass = bondClass;
                this.KendoDataSource();
                this.observ = kendo.observable({
                    CustomerIdFld: null,
                    CustomerIddtSrc: Q.getLookup('Administration.CustomerLocationLookup').items,
                    CustomerIdFldChanged: function () { TransactionMessenger.MessengerClass.bondClass.OnFieldValueChanged('CustomerIdFld', TransactionMessenger.MessengerClass, this.get('CustomerIdFld')); },
                    DateFld: new Date(),
                    DiscountFld: null,
                    HasTransactionsDetailsFld: null,
                    IsAdvancedFld: null,
                    IsFullyPaidFld: null,
                    IsFullyReceivedFld: null,
                    IsInProgressFld: null,
                    IsIntegerTrailingOrderIdWithPrefixPoFld: null,
                    IsOpenFld: null,
                    LocationIdFld: null,
                    LocationIddtSrc: Q.getLookup('Administration.LocationLookup').items,
                    LocationIdFldChanged: function () { TransactionMessenger.MessengerClass.bondClass.OnFieldValueChanged('LocationIdFld', TransactionMessenger.MessengerClass, this.get('LocationIdFld')); },
                    OrderIdFld: null,
                    StatusFld: null,
                    SubjectFld: null,
                    TaxFld: null,
                    TicketIdFld: null,
                    TotalAmountFld: null,
                    TotalAmountLeftFld: null,
                    TotalAmountPaidFld: null,
                    TransactionIdFld: null,
                    getObject: function () {
                        return {
                            CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                            Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                            Discount: this.get('DiscountFld') != null ? this.get('DiscountFld') : null,
                            HasTransactionsDetails: this.get('HasTransactionsDetailsFld') != null ? this.get('HasTransactionsDetailsFld') : null,
                            IsAdvanced: this.get('IsAdvancedFld') != null ? this.get('IsAdvancedFld') : null,
                            IsFullyPaid: this.get('IsFullyPaidFld') != null ? this.get('IsFullyPaidFld') : null,
                            IsFullyReceived: this.get('IsFullyReceivedFld') != null ? this.get('IsFullyReceivedFld') : null,
                            IsInProgress: this.get('IsInProgressFld') != null ? this.get('IsInProgressFld') : null,
                            IsIntegerTrailingOrderIdWithPrefixPo: this.get('IsIntegerTrailingOrderIdWithPrefixPoFld') != null ? this.get('IsIntegerTrailingOrderIdWithPrefixPoFld') : null,
                            IsOpen: this.get('IsOpenFld') != null ? this.get('IsOpenFld') : null,
                            LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                            OrderId: this.get('OrderIdFld') != null ? this.get('OrderIdFld') : null,
                            Status: this.get('StatusFld') != null ? this.get('StatusFld') : null,
                            Subject: this.get('SubjectFld') != null ? this.get('SubjectFld') : null,
                            Tax: this.get('TaxFld') != null ? this.get('TaxFld') : null,
                            TicketId: this.get('TicketIdFld') != null ? this.get('TicketIdFld') : null,
                            TotalAmount: this.get('TotalAmountFld') != null ? this.get('TotalAmountFld') : null,
                            TotalAmountLeft: this.get('TotalAmountLeftFld') != null ? this.get('TotalAmountLeftFld') : null,
                            TotalAmountPaid: this.get('TotalAmountPaidFld') != null ? this.get('TotalAmountPaidFld') : null,
                            TransactionId: this.get('TransactionIdFld') != null ? this.get('TransactionIdFld') : null
                        };
                    },
                    setObject: function (obj) {
                        this.set('CustomerIdFld', (obj != null && obj.hasOwnProperty('CustomerId')) ? obj.CustomerId : null);
                        this.set('DateFld', (obj != null && obj.hasOwnProperty('Date')) ? obj.Date : null);
                        this.set('DiscountFld', (obj != null && obj.hasOwnProperty('Discount')) ? obj.Discount : null);
                        this.set('HasTransactionsDetailsFld', (obj != null && obj.hasOwnProperty('HasTransactionsDetails')) ? obj.HasTransactionsDetails : null);
                        this.set('IsAdvancedFld', (obj != null && obj.hasOwnProperty('IsAdvanced')) ? obj.IsAdvanced : null);
                        this.set('IsFullyPaidFld', (obj != null && obj.hasOwnProperty('IsFullyPaid')) ? obj.IsFullyPaid : null);
                        this.set('IsFullyReceivedFld', (obj != null && obj.hasOwnProperty('IsFullyReceived')) ? obj.IsFullyReceived : null);
                        this.set('IsInProgressFld', (obj != null && obj.hasOwnProperty('IsInProgress')) ? obj.IsInProgress : null);
                        this.set('IsIntegerTrailingOrderIdWithPrefixPoFld', (obj != null && obj.hasOwnProperty('IsIntegerTrailingOrderIdWithPrefixPo')) ? obj.IsIntegerTrailingOrderIdWithPrefixPo : null);
                        this.set('IsOpenFld', (obj != null && obj.hasOwnProperty('IsOpen')) ? obj.IsOpen : null);
                        this.set('LocationIdFld', (obj != null && obj.hasOwnProperty('LocationId')) ? obj.LocationId : null);
                        this.set('OrderIdFld', (obj != null && obj.hasOwnProperty('OrderId')) ? obj.OrderId : null);
                        this.set('StatusFld', (obj != null && obj.hasOwnProperty('Status')) ? obj.Status : null);
                        this.set('SubjectFld', (obj != null && obj.hasOwnProperty('Subject')) ? obj.Subject : null);
                        this.set('TaxFld', (obj != null && obj.hasOwnProperty('Tax')) ? obj.Tax : null);
                        this.set('TicketIdFld', (obj != null && obj.hasOwnProperty('TicketId')) ? obj.TicketId : null);
                        this.set('TotalAmountFld', (obj != null && obj.hasOwnProperty('TotalAmount')) ? obj.TotalAmount : null);
                        this.set('TotalAmountLeftFld', (obj != null && obj.hasOwnProperty('TotalAmountLeft')) ? obj.TotalAmountLeft : null);
                        this.set('TotalAmountPaidFld', (obj != null && obj.hasOwnProperty('TotalAmountPaid')) ? obj.TotalAmountPaid : null);
                        this.set('TransactionIdFld', (obj != null && obj.hasOwnProperty('TransactionId')) ? obj.TransactionId : null);
                    },
                    submit: function () {
                        var _this = this;
                        BusinessObjects.TransactionService.Create({ Entity: {
                                CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                                Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                                Discount: this.get('DiscountFld') != null ? this.get('DiscountFld') : null,
                                HasTransactionsDetails: this.get('HasTransactionsDetailsFld') != null ? this.get('HasTransactionsDetailsFld') : null,
                                IsAdvanced: this.get('IsAdvancedFld') != null ? this.get('IsAdvancedFld') : null,
                                IsFullyPaid: this.get('IsFullyPaidFld') != null ? this.get('IsFullyPaidFld') : null,
                                IsFullyReceived: this.get('IsFullyReceivedFld') != null ? this.get('IsFullyReceivedFld') : null,
                                IsInProgress: this.get('IsInProgressFld') != null ? this.get('IsInProgressFld') : null,
                                IsIntegerTrailingOrderIdWithPrefixPo: this.get('IsIntegerTrailingOrderIdWithPrefixPoFld') != null ? this.get('IsIntegerTrailingOrderIdWithPrefixPoFld') : null,
                                IsOpen: this.get('IsOpenFld') != null ? this.get('IsOpenFld') : null,
                                LocationId: this.get('LocationIdFld') != null ? this.get('LocationIdFld') : null,
                                OrderId: this.get('OrderIdFld') != null ? this.get('OrderIdFld') : null,
                                Status: this.get('StatusFld') != null ? this.get('StatusFld') : null,
                                Subject: this.get('SubjectFld') != null ? this.get('SubjectFld') : null,
                                Tax: this.get('TaxFld') != null ? this.get('TaxFld') : null,
                                TicketId: this.get('TicketIdFld') != null ? this.get('TicketIdFld') : null,
                                TotalAmount: this.get('TotalAmountFld') != null ? this.get('TotalAmountFld') : null,
                                TotalAmountLeft: this.get('TotalAmountLeftFld') != null ? this.get('TotalAmountLeftFld') : null,
                                TotalAmountPaid: this.get('TotalAmountPaidFld') != null ? this.get('TotalAmountPaidFld') : null,
                                TransactionId: this.get('TransactionIdFld') != null ? this.get('TransactionIdFld') : null
                            } }, function (res) { _this.set('TransactionIdFld', res.EntityId); TransactionMessenger.MessengerClass.bondClass.AfterSave('TransactionMessenger', res.EntityId, TransactionMessenger.MessengerClass); });
                    }
                });
            }
            TransactionMessenger.prototype.GetObservable = function () {
                return this.observ;
            };
            TransactionMessenger.prototype.Read = function (criteria, equalityFilter, includeColumns) {
                var _this = this;
                var requestObj = null;
                if (criteria != undefined) {
                    requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
                }
                else if (equalityFilter != undefined) {
                    requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
                }
                else {
                    requestObj = { IncludeColumns: includeColumns };
                }
                if (this.bondClass.BeforeRead('TransactionMessenger', requestObj)) {
                    BusinessObjects.TransactionService.List(requestObj, function (res) {
                        _this.bondClass.AfterRead('TransactionMessenger', res);
                    });
                }
            };
            TransactionMessenger.prototype.DetailLoad = function (entityId) {
                var _this = this;
                if (this.bondClass.BeforeDetailLoad('TransactionMessenger', entityId)) {
                    BusinessObjects.TransactionService.Retrieve({ EntityId: entityId }, function (res) {
                        _this.GetObservable().setObject(res);
                        _this.bondClass.AfterDetailLoad('TransactionMessenger', res.Entity);
                    }, { blockUI: false, onError: function (response) { _this.bondClass.OnError('TransactionMessenger', 'DetailLoad', response); } });
                }
            };
            TransactionMessenger.prototype.Create = function () {
                if (this.bondClass.BeforeSave('TransactionMessenger', this))
                    this.observ.submit();
            };
            TransactionMessenger.prototype.Update = function () {
                var _this = this;
                if (this.bondClass.BeforeUpdate('TransactionMessenger', this))
                    BusinessObjects.TransactionService.Update({ Entity: this.GetObject() }, function (res) { alert('Update successful'); _this.bondClass.AfterUpdate('TransactionMessenger', _this.GetObject()); });
            };
            TransactionMessenger.prototype.GetPrimaryKeyId = function () { return this.observ.get('TransactionId'); };
            TransactionMessenger.prototype.GetObject = function () {
                var obj = this.observ.getObject();
                var obj_1 = ({
                    CustomerId: obj.CustomerId,
                    Date: obj.Date,
                    Discount: obj.Discount,
                    HasTransactionsDetails: obj.HasTransactionsDetails,
                    IsAdvanced: obj.IsAdvanced,
                    IsFullyPaid: obj.IsFullyPaid,
                    IsFullyReceived: obj.IsFullyReceived,
                    IsInProgress: obj.IsInProgress,
                    IsIntegerTrailingOrderIdWithPrefixPo: obj.IsIntegerTrailingOrderIdWithPrefixPo,
                    IsOpen: obj.IsOpen,
                    LocationId: obj.LocationId,
                    OrderId: obj.OrderId,
                    Status: obj.Status,
                    Subject: obj.Subject,
                    Tax: obj.Tax,
                    TicketId: obj.TicketId,
                    TotalAmount: obj.TotalAmount,
                    TotalAmountLeft: obj.TotalAmountLeft,
                    TotalAmountPaid: obj.TotalAmountPaid,
                    TransactionId: obj.TransactionId
                });
                return obj_1;
            };
            TransactionMessenger.prototype.KendoDataSource = function () {
                this.kendoDataSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: 'Entities',
                        total: 'TotalCount',
                        model: {
                            id: 'TransactionId',
                            fields: {
                                CustomerId: { type: 'string' },
                                CustomerName: { type: 'string' },
                                Date: { type: 'string' },
                                HasTransactionsDetails: { type: 'string' },
                                IsAdvanced: { type: 'string' },
                                IsFullyPaid: { type: 'string' },
                                IsFullyReceived: { type: 'string' },
                                IsInProgress: { type: 'string' },
                                IsIntegerTrailingOrderIdWithPrefixPo: { type: 'string' },
                                IsOpen: { type: 'string' },
                                LocationId: { type: 'string' },
                                OrderId: { type: 'string' },
                                Status: { type: 'string' },
                                Subject: { type: 'string' },
                                TicketId: { type: 'string' },
                                TotalAmount: { type: 'string' },
                                TotalAmountLeft: { type: 'string' },
                                TotalAmountPaid: { type: 'string' },
                                TransactionId: { type: 'string' }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.Criteria != undefined) {
                                BusinessObjects.TransactionService.List({ Criteria: options.data.Criteria, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TransactionMessenger.MessengerClass.bondClass.AfterRead('Transaction-Kendo-Data-Source', res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.TransactionService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TransactionMessenger.MessengerClass.bondClass.AfterRead('Transaction-Kendo-Data-Source', res);
                                });
                            }
                            else {
                                BusinessObjects.TransactionService.List({ IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TransactionMessenger.MessengerClass.bondClass.AfterRead('Transaction-Kendo-Data-Source', res);
                                });
                            }
                        }
                    },
                }); //Ends
            };
            TransactionMessenger.prototype.GetKendoDataSource = function () {
                return this.kendoDataSrc;
            };
            return TransactionMessenger;
        }());
        BusinessObjects.TransactionMessenger = TransactionMessenger;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionFilterMessenger = (function () {
            function TransactionFilterMessenger(bondClass) {
                TransactionFilterMessenger.MessengerClass = this;
                this.bondClass = bondClass;
                this.KendoDataSource();
                this.filterObserv = kendo.observable({
                    CustomerIdFld: null,
                    DateFld: new Date(),
                    TotalAmountFld: null,
                    TotalAmountLeftFld: null,
                    TotalAmountPaidFld: null,
                    getObject: function () {
                        return {
                            CustomerId: this.get('CustomerIdFld') != null ? this.get('CustomerIdFld') : null,
                            Date: this.get('DateFld') != null ? this.get('DateFld') : null,
                            TotalAmount: this.get('TotalAmountFld') != null ? this.get('TotalAmountFld') : null,
                            TotalAmountLeft: this.get('TotalAmountLeftFld') != null ? this.get('TotalAmountLeftFld') : null,
                            TotalAmountPaid: this.get('TotalAmountPaidFld') != null ? this.get('TotalAmountPaidFld') : null
                        };
                    },
                    getRequestCriteriaObject: function () {
                        var requestQry = [];
                        if (this.get('CustomerIdFld') != null && this.get('CustomerIdFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('CustomerId'), '=', this.get('CustomerIdFld')]);
                        }
                        if (this.get('DateFld') != null && this.get('DateFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('Date'), '=', this.get('DateFld')]);
                        }
                        if (this.get('TotalAmountFld') != null && this.get('TotalAmountFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('TotalAmount'), '=', this.get('TotalAmountFld')]);
                        }
                        if (this.get('TotalAmountLeftFld') != null && this.get('TotalAmountLeftFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('TotalAmountLeft'), '=', this.get('TotalAmountLeftFld')]);
                        }
                        if (this.get('TotalAmountPaidFld') != null && this.get('TotalAmountPaidFld') != undefined) {
                            requestQry = this.assemble(requestQry, [Serenity.Criteria('TotalAmountPaid'), '=', this.get('TotalAmountPaidFld')]);
                        }
                        return requestQry;
                    },
                    assemble: function (arrRef, obj) {
                        if (arrRef.length == 0) {
                            arrRef.push(obj);
                            return arrRef;
                        }
                        else if (arrRef.length == 1) {
                            arrRef.push('and');
                            arrRef.push(obj);
                            return arrRef;
                        }
                        else {
                            var newArr1 = [];
                            newArr1.push([arrRef[0], arrRef[1], arrRef[2]]);
                            newArr1.push('and');
                            newArr1.push(obj);
                            return newArr1;
                        }
                    },
                    setObject: function (obj) {
                        this.set('CustomerIdFld', obj.Entity.CustomerId);
                        this.set('DateFld', obj.Entity.Date);
                        this.set('TotalAmountFld', obj.Entity.TotalAmount);
                        this.set('TotalAmountLeftFld', obj.Entity.TotalAmountLeft);
                        this.set('TotalAmountPaidFld', obj.Entity.TotalAmountPaid);
                    },
                });
            }
            TransactionFilterMessenger.prototype.GetFilterObservable = function () {
                return this.filterObserv;
            };
            TransactionFilterMessenger.prototype.GetFilterValues = function () {
                return this.GetFilterObservable().getRequestCriteriaObject();
            };
            TransactionFilterMessenger.prototype.Read = function (criteria, equalityFilter, includeColumns) {
                var _this = this;
                var requestObj = null;
                if (criteria != undefined) {
                    requestObj = { Criteria: criteria, IncludeColumns: includeColumns };
                }
                else if (equalityFilter != undefined) {
                    requestObj = { EqualityFilter: equalityFilter, IncludeColumns: includeColumns };
                }
                else {
                    requestObj = { IncludeColumns: includeColumns };
                }
                if (this.bondClass.BeforeRead('Filter-TransactionFilterMessenger', requestObj)) {
                    BusinessObjects.TransactionService.List(requestObj, function (res) {
                        _this.bondClass.AfterRead('Filter-TransactionFilterMessenger', res);
                    });
                }
            }; //Ends the read method
            TransactionFilterMessenger.prototype.KendoDataSourceRead_1 = function (criteria) {
                if (criteria.length >= 1) {
                    var criteria_1 = (criteria.length == 1) ? criteria[0] : criteria;
                    if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', { Criteria: criteria_1 })) {
                        this.kendoDataSrc.read({ Criteria: criteria_1 });
                    }
                }
                else {
                    if (this.bondClass.BeforeRead('Filter-Customer-Kendo-Data-Source', null)) {
                        this.kendoDataSrc.read();
                    }
                }
            };
            TransactionFilterMessenger.prototype.KendoDataSourceRead = function () {
                this.KendoDataSourceRead_1(this.GetFilterValues());
            };
            TransactionFilterMessenger.prototype.KendoDataSource = function () {
                this.kendoDataSrc = new kendo.data.DataSource({
                    schema: {
                        //data: function (response) { alert(JSON.stringify(response)); return response.Entities; },
                        data: 'Entities',
                        total: 'TotalCount',
                        model: {
                            id: 'TransactionId',
                            fields: {
                                CustomerId: { type: 'string' },
                                Date: { type: 'string' },
                                TotalAmount: { type: 'string' },
                                TotalAmountLeft: { type: 'string' },
                                TotalAmountPaid: { type: 'string' }
                            },
                        }
                    },
                    batch: false,
                    pageSize: 5,
                    transport: {
                        read: function (options) {
                            if (options.data.Criteria != undefined) {
                                BusinessObjects.TransactionService.List({ Criteria: options.data.Criteria, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TransactionFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Transaction-Kendo-Data-Source', res);
                                });
                            }
                            else if (options.data.EqualityFilter != undefined) {
                                BusinessObjects.TransactionService.List({ EqualityFilter: options.data.EqualityFilter, IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TransactionFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Transaction-Kendo-Data-Source', res);
                                });
                            }
                            else {
                                BusinessObjects.TransactionService.List({ IncludeColumns: null }, function (res) {
                                    options.success(res);
                                    TransactionFilterMessenger.MessengerClass.bondClass.AfterRead('Filter-Transaction-Kendo-Data-Source', res);
                                });
                            }
                        }
                    },
                }); //Ends
            };
            TransactionFilterMessenger.prototype.GetKendoDataSource = function () {
                return this.kendoDataSrc;
            };
            return TransactionFilterMessenger;
        }());
        BusinessObjects.TransactionFilterMessenger = TransactionFilterMessenger;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path='../../../Content/js/Kendo/typescript/kendo.all.d.ts' />
/// <reference path='../../../Content/js/Kendo/typescript/jquery.d.ts' />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionHandler = (function () {
            function TransactionHandler() {
                var _this = this;
                this.CustomerIdInplaceBtnVar = $('#CustomerIdInplaceBtn').kendoButton({
                    icon: 'add',
                    click: function () {
                        if (_this.CustomerIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {
                        }
                        else {
                        }
                    },
                }).data('kendoButton');
                this.LocationIdInplaceBtnVar = $('#LocationIdInplaceBtn').kendoButton({
                    icon: 'add',
                    click: function () {
                        if (_this.LocationIdInplaceBtnVar.element.find('span').hasClass('k-i-add')) {
                        }
                        else {
                        }
                    },
                }).data('kendoButton');
            }
            TransactionHandler.prototype.BeforeSave = function (className, myClassRef) {
                alert(JSON.stringify(myClassRef.GetObject()));
                return true;
            };
            TransactionHandler.prototype.AfterSave = function (className, entityId, myClassRef) {
                alert(JSON.stringify(myClassRef.GetObject()));
            };
            TransactionHandler.prototype.SetTeamPlayers = function (transactionMessenger) {
                this.transactionMessenger = transactionMessenger;
            };
            TransactionHandler.prototype.OnFieldValueChanged = function (id, classRef, responseObj) {
                if (id == 'CustomerIdFld') {
                    BusinessObjects.FEUtilities.ToggleInplaceButtonIcon(this.CustomerIdInplaceBtnVar, responseObj);
                    if (responseObj != undefined) {
                    }
                    else { }
                }
                else if (id == 'LocationIdFld') {
                    BusinessObjects.FEUtilities.ToggleInplaceButtonIcon(this.LocationIdInplaceBtnVar, responseObj);
                    if (responseObj != undefined) {
                    }
                    else { }
                }
                this.responseObj = responseObj;
                this.refMessenger = classRef;
            };
            return TransactionHandler;
        }());
        BusinessObjects.TransactionHandler = TransactionHandler;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                _this.form = new Membership.LoginForm(_this.idPrefix);
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = CustomerSupport.Membership || (CustomerSupport.Membership = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = CustomerSupport.Membership || (CustomerSupport.Membership = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = CustomerSupport.Membership || (CustomerSupport.Membership = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = CustomerSupport.Membership || (CustomerSupport.Membership = {}));
})(CustomerSupport || (CustomerSupport = {}));
var CustomerSupport;
(function (CustomerSupport) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = CustomerSupport.Membership || (CustomerSupport.Membership = {}));
})(CustomerSupport || (CustomerSupport = {}));
/// <reference path="../../Kendo/typescript/kendo.all.d.ts" />
var CustomerSupport;
(function (CustomerSupport) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var TransactionDetailLoader = (function () {
            function TransactionDetailLoader() {
                this.calcObservable = kendo.observable({
                    CalculateAmount: function (dataItem) {
                        return dataItem.Quantity * dataItem.UnitPrice;
                    },
                    CalculateTotalAmount: function (gridRef) {
                        alert('in calc');
                        var items = gridRef.items();
                        var rowCount = items.length - 1;
                        var ttlAmt = 0;
                        for (var x = 0; x < items.length; x++) {
                            ttlAmt += this.CalculateAmount(gridRef.dataItem(items[x]));
                        }
                        this.set("totalAmountProp", ttlAmt);
                        alert(ttlAmt);
                        alert(this.get("totalAmountProp"));
                    },
                    totalAmountProp: 0,
                    paid: 0,
                    discount: 0,
                    tax: 0,
                    grandTotal: 0,
                    calculateGrandTotal: function () {
                        var discount = 0;
                        var tax = 0;
                        var totalPaid = this.get("paid");
                        var totalAmount = this.get("totalAmountProp");
                        if (this.get("tax") > 0 && isNaN(this.get("tax"))) {
                            tax = (this.get("tax") / 100) * totalAmount;
                        }
                        if (this.get("discount") > 0 && isNaN(this.get("discount"))) {
                            tax = (this.get("discount") / 100) * totalAmount;
                        }
                        var paid = totalAmount - discount;
                        paid = paid + tax;
                        this.set("paid", paid);
                        this.set("grandTotal", paid);
                    }
                }); //Ends calcObservable
                kendo.bind($("#total-amt-calc"), this.calcObservable);
                TransactionDetailLoader.CalcObservable_Static = this.calcObservable;
                this.customerInfoObservable = kendo.observable({
                    date: null,
                    name: "Fikoli",
                    email: "fik@yahoo.com",
                    phoneNumber: "080",
                    customerInfo: function () {
                        return { date: this.get("date"), name: this.get("name"), email: this.get("email"), phoneNumber: this.get("phoneNumber") };
                    }
                });
                kendo.bind($("#customer-info"), this.customerInfoObservable);
                TransactionDetailLoader.CustomerInfoObservable_Static = this.customerInfoObservable;
                this.transactionDetailsDtSrc = new kendo.data.DataSource({
                    schema: {
                        model: {
                            id: "TransactionDetailId",
                            fields: {
                                TransactionDetailId: { type: "number" },
                                TransactionId: { type: "number" },
                                Date: { type: "number" },
                                ProductName: { type: "string" },
                            }
                        },
                    },
                    pageSize: 20,
                    transport: {
                        create: function (options) {
                            //options.
                        },
                        update: function (options) { }
                    }
                });
            }
            TransactionDetailLoader.CalculatorObservable = function () {
                return;
            };
            TransactionDetailLoader.CustomerInfoObservable = function () {
                return;
            };
            TransactionDetailLoader.DltGrdDataSource = function () {
                var inMem = [{ Product: "Samsung", Quantity: "1", UnitPrice: "105000", Amount: "105000" }];
                var dtSrc = new kendo.data.DataSource({
                    schema: {
                        model: {
                            id: "",
                            fields: {
                                Product: { type: "string" },
                                Quantity: { type: "number" },
                                UnitPrice: { type: "number" },
                                Amount: { type: "number" }
                            }
                        }
                    },
                    transport: {
                        read: function (options) {
                            options.success(inMem);
                        }
                    }
                }); //Ends dtSrc
                return dtSrc;
            };
            TransactionDetailLoader.prototype.Load = function () {
                $("#customer-date").kendoDatePicker();
                var trax_dtl_grd = $("#transaction-dtl-grd").kendoGrid({
                    dataSource: TransactionDetailLoader.DltGrdDataSource(),
                    columns: [
                        { field: "Product" },
                        { field: "Quantity" },
                        { field: "UnitPrice", title: "Unit price" },
                        { field: "Amount" },
                    ],
                    editable: {
                        createAt: "bottom"
                    },
                    navigatable: true,
                    cellClose: function (e) {
                    }
                }).data("kendoGrid");
                trax_dtl_grd.addRow();
                trax_dtl_grd.tbody.on('keydown', function (e) {
                    if ($(e.target).closest('td').is(':last-child') && $(e.target).closest('tr').is(':last-child')) {
                        trax_dtl_grd.addRow();
                        TransactionDetailLoader.CalcObservable_Static.CalculateTotalAmount(trax_dtl_grd);
                        TransactionDetailLoader.CalcObservable_Static.calculateGrandTotal();
                    }
                });
                $("#customer-list-ddl").kendoAutoComplete({
                    dataSource: ["Data 1", "Data 2"],
                    placeholder: "Select customer"
                });
            }; //Ends the Load method
            TransactionDetailLoader.Submit = function () {
                alert(kendo.stringify(TransactionDetailLoader.CustomerInfoObservable_Static.customerInfo()));
                $("#transaction-dtl-grd").data("kendoGrid").saveChanges();
            };
            return TransactionDetailLoader;
        }());
        BusinessObjects.TransactionDetailLoader = TransactionDetailLoader;
    })(BusinessObjects = CustomerSupport.BusinessObjects || (CustomerSupport.BusinessObjects = {}));
})(CustomerSupport || (CustomerSupport = {}));
//# sourceMappingURL=CustomerSupport.Web.js.map