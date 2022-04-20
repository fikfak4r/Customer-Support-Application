using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Account
            {
                public const string AccountIndex = "~/Modules/Administration/Account/AccountIndex.cshtml";
            }

            public static class GetCode
            {
                public const string GetCodeIndex = "~/Modules/Administration/GetCode/GetCodeIndex.cshtml";
            }

            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Location
            {
                public const string LocationIndex = "~/Modules/Administration/Location/LocationIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class RoleLocation
            {
                public const string RoleLocationIndex = "~/Modules/Administration/RoleLocation/RoleLocationIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

            public static class UserLocation
            {
                public const string UserLocationIndex = "~/Modules/Administration/UserLocation/UserLocationIndex.cshtml";
            }

        }

        public static class BusinessObjects
        {
            public static class ActionLog
            {
                public const string ActionLogIndex = "~/Modules/BusinessObjects/ActionLog/ActionLogIndex.cshtml";
            }

            public static class Call
            {
                public const string CallIndex = "~/Modules/BusinessObjects/Call/CallIndex.cshtml";
            }

            public static class CallProcess
            {
                public const string CallProcessIndex = "~/Modules/BusinessObjects/CallProcess/CallProcessIndex.cshtml";
            }

            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/BusinessObjects/Customer/CustomerIndex.cshtml";
                public const string Profile = "~/Modules/BusinessObjects/Customer/Profile.cshtml";
            }

            public static class CustomerSms
            {
                public const string CustomerSmsIndex = "~/Modules/BusinessObjects/CustomerSms/CustomerSmsIndex.cshtml";
            }

            public static class KbCategory
            {
                public const string KbCategoryIndex = "~/Modules/BusinessObjects/KbCategory/KbCategoryIndex.cshtml";
            }

            public static class KbCategoryLocations
            {
                public const string KbCategoryLocationsIndex = "~/Modules/BusinessObjects/KbCategoryLocations/KbCategoryLocationsIndex.cshtml";
            }

            public static class KnowledgeBase
            {
                public const string KnowledgeBaseIndex = "~/Modules/BusinessObjects/KnowledgeBase/KnowledgeBaseIndex.cshtml";
            }

            public static class KnowledgeBaseLocations
            {
                public const string KnowledgeBaseLocationsIndex = "~/Modules/BusinessObjects/KnowledgeBaseLocations/KnowledgeBaseLocationsIndex.cshtml";
            }

            public static class PaymentDetail
            {
                public const string PaymentDetailIndex = "~/Modules/BusinessObjects/PaymentDetail/PaymentDetailIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/BusinessObjects/Product/ProductIndex.cshtml";
            }

            public static class ProductLocation
            {
                public const string ProductLocationIndex = "~/Modules/BusinessObjects/ProductLocation/ProductLocationIndex.cshtml";
            }

            public static class Sms
            {
                public const string SmsAccountOverview = "~/Modules/BusinessObjects/Sms/SmsAccountOverview.cshtml";
                public const string SmsIndex = "~/Modules/BusinessObjects/Sms/SmsIndex.cshtml";
            }

            public static class SmsLocation
            {
                public const string SmsLocationIndex = "~/Modules/BusinessObjects/SmsLocation/SmsLocationIndex.cshtml";
            }

            public static class Ticket
            {
                public const string TicketIndex = "~/Modules/BusinessObjects/Ticket/TicketIndex.cshtml";
            }

            public static class TicketProcess
            {
                public const string TicketProcessIndex = "~/Modules/BusinessObjects/TicketProcess/TicketProcessIndex.cshtml";
            }

            public static class TicketSms
            {
                public const string TicketSmsIndex = "~/Modules/BusinessObjects/TicketSms/TicketSmsIndex.cshtml";
            }

            public static class Transaction
            {
                public const string TransactionIndex = "~/Modules/BusinessObjects/Transaction/TransactionIndex.cshtml";
            }

            public static class TransactionDetail
            {
                public const string TransactionDetailIndex = "~/Modules/BusinessObjects/TransactionDetail/TransactionDetailIndex.cshtml";
            }

            public static class TransactionSms
            {
                public const string TransactionSmsIndex = "~/Modules/BusinessObjects/TransactionSms/TransactionSmsIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_Deprc = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword_Deprc.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_ClientOfClient = "~/Modules/Membership/Account/SignUp/AccountSignUp_ClientOfClient.cshtml";
                    public const string AccountSignUpDeprc = "~/Modules/Membership/Account/SignUp/AccountSignUpDeprc.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutNoNavigationNew = "~/Views/Shared/_LayoutNoNavigationNew.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class Ticket
        {
            public const string TicketTemplate = "~/Views/Ticket/TicketTemplate.cshtml";
        }
    }
}

