
namespace CustomerSupport.BusinessObjects.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Calls"), InstanceName("Call"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Call.Read)]
    [InsertPermission(PermissionKeys.Call.Insert)]
    [UpdatePermission(PermissionKeys.Call.Update)]
    [DeletePermission(PermissionKeys.Call.Delete)]
    [LookupScript("BusinessObjects.Call")]
    public sealed class CallRow : Row, IIdRow, INameRow
    {        
            #region Call Id
            [DisplayName("Call Id"), Column("CallID"), Identity]
            public Int32? CallId { get { return Fields.CallId[this]; } set { Fields.CallId[this] = value; } }
            public partial class RowFields { public Int32Field CallId; }
            #endregion CallId
                
            #region Customer
            [DisplayName("Customer"), Column("CustomerID"), NotNull, ForeignKey("[dbo].[Customers]", "CustomerID"), LeftJoin("jCustomer"), TextualField("CustomerName")]
            [LookupEditor(typeof(BusinessObjects.Entities.CustomerRow), InplaceAdd = true)]
            public Int32? CustomerId { get { return Fields.CustomerId[this]; } set { Fields.CustomerId[this] = value; } }
            public partial class RowFields { public Int32Field CustomerId; }
            #endregion CustomerId
                
            #region Group
            [DisplayName("Group"), Column("GroupID"), ForeignKey("[dbo].[Roles]", "RoleId"), LeftJoin("jGroup"), TextualField("GroupRoleName")]
            [LookupEditor(typeof(Administration.Entities.RoleRow), InplaceAdd = true)]
            public Int32? GroupId { get { return Fields.GroupId[this]; } set { Fields.GroupId[this] = value; } }
            public partial class RowFields { public Int32Field GroupId; }
            #endregion GroupId
                
            #region User
            [DisplayName("User"), Column("UserID"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
            [LookupEditor(typeof(Administration.Entities.UserRow), InplaceAdd = true)]
            public Int32? UserId { get { return Fields.UserId[this]; } set { Fields.UserId[this] = value; } }
            public partial class RowFields { public Int32Field UserId; }
            #endregion UserId
                
            #region Date
            [DisplayName("Date"), NotNull]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Subject
            [DisplayName("Subject"), Size(250), QuickSearch]
            public String Subject { get { return Fields.Subject[this]; } set { Fields.Subject[this] = value; } }
            public partial class RowFields { public StringField Subject; }
            #endregion Subject
                
            #region Description
            [DisplayName("Description"), NotNull]
            public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
            public partial class RowFields { public StringField Description; }
            #endregion Description
                
            #region Call Direction
            [DisplayName("Call Direction"), NotNull]
            public Int16? CallDirection { get { return Fields.CallDirection[this]; } set { Fields.CallDirection[this] = value; } }
            public partial class RowFields { public Int16Field CallDirection; }
            #endregion CallDirection
                
            #region Priority
            [DisplayName("Priority")]
            public Int16? Priority { get { return Fields.Priority[this]; } set { Fields.Priority[this] = value; } }
            public partial class RowFields { public Int16Field Priority; }
            #endregion Priority
                
            #region Status
            [DisplayName("Status")]
            public Int16? Status { get { return Fields.Status[this]; } set { Fields.Status[this] = value; } }
            public partial class RowFields { public Int16Field Status; }
            #endregion Status
                
            #region Next Follow Up Date
            [DisplayName("Next Follow Up Date")]
            public DateTime? NextFollowUpDate { get { return Fields.NextFollowUpDate[this]; } set { Fields.NextFollowUpDate[this] = value; } }
            public partial class RowFields { public DateTimeField NextFollowUpDate; }
            #endregion NextFollowUpDate
                
            #region Creator Id
            [DisplayName("Creator Id"), Column("CreatorID")]
            public Int32? CreatorId { get { return Fields.CreatorId[this]; } set { Fields.CreatorId[this] = value; } }
            public partial class RowFields { public Int32Field CreatorId; }
            #endregion CreatorId
                
            #region Me
            [DisplayName("Me")]
            public Boolean? Me { get { return Fields.Me[this]; } set { Fields.Me[this] = value; } }
            public partial class RowFields { public BooleanField Me; }
            #endregion Me
                
            #region Location
            [DisplayName("Location"), Column("LocationID"), NotNull, ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
            [LookupEditor(typeof(Administration.Entities.LocationRow), InplaceAdd = true)]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
                
            #region Follow Up Action
            [DisplayName("Follow Up Action")]
            public String FollowUpAction { get { return Fields.FollowUpAction[this]; } set { Fields.FollowUpAction[this] = value; } }
            public partial class RowFields { public StringField FollowUpAction; }
            #endregion FollowUpAction
        

    #region Foreign Fields
            
                [DisplayName("Customer Location Id"), Expression("jCustomer.[LocationID]")]
                public Int32? CustomerLocationId { get { return Fields.CustomerLocationId[this]; } set { Fields.CustomerLocationId[this] = value; } }
                public partial class RowFields { public Int32Field CustomerLocationId; }

                        
                [DisplayName("Customer Date"), Expression("jCustomer.[Date]")]
                public DateTime? CustomerDate { get { return Fields.CustomerDate[this]; } set { Fields.CustomerDate[this] = value; } }
                public partial class RowFields { public DateTimeField CustomerDate; }

                        
                [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
                public String CustomerName { get { return Fields.CustomerName[this]; } set { Fields.CustomerName[this] = value; } }
                public partial class RowFields { public StringField CustomerName; }

                        
                [DisplayName("Customer Sex"), Expression("jCustomer.[Sex]")]
                public Int16? CustomerSex { get { return Fields.CustomerSex[this]; } set { Fields.CustomerSex[this] = value; } }
                public partial class RowFields { public Int16Field CustomerSex; }

                        
                [DisplayName("Customer Date Of Birth"), Expression("jCustomer.[DateOfBirth]")]
                public DateTime? CustomerDateOfBirth { get { return Fields.CustomerDateOfBirth[this]; } set { Fields.CustomerDateOfBirth[this] = value; } }
                public partial class RowFields { public DateTimeField CustomerDateOfBirth; }

                        
                [DisplayName("Customer Phone Number"), Expression("jCustomer.[PhoneNumber]")]
                public String CustomerPhoneNumber { get { return Fields.CustomerPhoneNumber[this]; } set { Fields.CustomerPhoneNumber[this] = value; } }
                public partial class RowFields { public StringField CustomerPhoneNumber; }

                        
                [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
                public String CustomerEmail { get { return Fields.CustomerEmail[this]; } set { Fields.CustomerEmail[this] = value; } }
                public partial class RowFields { public StringField CustomerEmail; }

                        
                [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
                public String CustomerAddress { get { return Fields.CustomerAddress[this]; } set { Fields.CustomerAddress[this] = value; } }
                public partial class RowFields { public StringField CustomerAddress; }

                        
                [DisplayName("Group Role Name"), Expression("jGroup.[RoleName]")]
                public String GroupRoleName { get { return Fields.GroupRoleName[this]; } set { Fields.GroupRoleName[this] = value; } }
                public partial class RowFields { public StringField GroupRoleName; }

                        
                [DisplayName("Group Account Id"), Expression("jGroup.[AccountID]")]
                public Int32? GroupAccountId { get { return Fields.GroupAccountId[this]; } set { Fields.GroupAccountId[this] = value; } }
                public partial class RowFields { public Int32Field GroupAccountId; }

                        
                [DisplayName("User Username"), Expression("jUser.[Username]")]
                public String UserUsername { get { return Fields.UserUsername[this]; } set { Fields.UserUsername[this] = value; } }
                public partial class RowFields { public StringField UserUsername; }

                        
                [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
                public String UserDisplayName { get { return Fields.UserDisplayName[this]; } set { Fields.UserDisplayName[this] = value; } }
                public partial class RowFields { public StringField UserDisplayName; }

                        
                [DisplayName("User Email"), Expression("jUser.[Email]")]
                public String UserEmail { get { return Fields.UserEmail[this]; } set { Fields.UserEmail[this] = value; } }
                public partial class RowFields { public StringField UserEmail; }

                        
                [DisplayName("User Source"), Expression("jUser.[Source]")]
                public String UserSource { get { return Fields.UserSource[this]; } set { Fields.UserSource[this] = value; } }
                public partial class RowFields { public StringField UserSource; }

                        
                [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]")]
                public String UserPasswordHash { get { return Fields.UserPasswordHash[this]; } set { Fields.UserPasswordHash[this] = value; } }
                public partial class RowFields { public StringField UserPasswordHash; }

                        
                [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]")]
                public String UserPasswordSalt { get { return Fields.UserPasswordSalt[this]; } set { Fields.UserPasswordSalt[this] = value; } }
                public partial class RowFields { public StringField UserPasswordSalt; }

                        
                [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]")]
                public DateTime? UserInsertDate { get { return Fields.UserInsertDate[this]; } set { Fields.UserInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField UserInsertDate; }

                        
                [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]")]
                public Int32? UserInsertUserId { get { return Fields.UserInsertUserId[this]; } set { Fields.UserInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field UserInsertUserId; }

                        
                [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]")]
                public DateTime? UserUpdateDate { get { return Fields.UserUpdateDate[this]; } set { Fields.UserUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField UserUpdateDate; }

                        
                [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]")]
                public Int32? UserUpdateUserId { get { return Fields.UserUpdateUserId[this]; } set { Fields.UserUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field UserUpdateUserId; }

                        
                [DisplayName("User Is Active"), Expression("jUser.[IsActive]")]
                public Int16? UserIsActive { get { return Fields.UserIsActive[this]; } set { Fields.UserIsActive[this] = value; } }
                public partial class RowFields { public Int16Field UserIsActive; }

                        
                [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
                public DateTime? UserLastDirectoryUpdate { get { return Fields.UserLastDirectoryUpdate[this]; } set { Fields.UserLastDirectoryUpdate[this] = value; } }
                public partial class RowFields { public DateTimeField UserLastDirectoryUpdate; }

                        
                [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
                public String UserUserImage { get { return Fields.UserUserImage[this]; } set { Fields.UserUserImage[this] = value; } }
                public partial class RowFields { public StringField UserUserImage; }

                        
                [DisplayName("User Account Id"), Expression("jUser.[AccountID]")]
                public Int32? UserAccountId { get { return Fields.UserAccountId[this]; } set { Fields.UserAccountId[this] = value; } }
                public partial class RowFields { public Int32Field UserAccountId; }

                        
                [DisplayName("User Location Id"), Expression("jUser.[LocationId]")]
                public Int32? UserLocationId { get { return Fields.UserLocationId[this]; } set { Fields.UserLocationId[this] = value; } }
                public partial class RowFields { public Int32Field UserLocationId; }

                        
                [DisplayName("Location Account Id"), Expression("jLocation.[AccountID]")]
                public Int32? LocationAccountId { get { return Fields.LocationAccountId[this]; } set { Fields.LocationAccountId[this] = value; } }
                public partial class RowFields { public Int32Field LocationAccountId; }

                        
                [DisplayName("Location Date"), Expression("jLocation.[Date]")]
                public DateTime? LocationDate { get { return Fields.LocationDate[this]; } set { Fields.LocationDate[this] = value; } }
                public partial class RowFields { public DateTimeField LocationDate; }

                        
                [DisplayName("Location Phone Number"), Expression("jLocation.[PhoneNumber]")]
                public String LocationPhoneNumber { get { return Fields.LocationPhoneNumber[this]; } set { Fields.LocationPhoneNumber[this] = value; } }
                public partial class RowFields { public StringField LocationPhoneNumber; }

                        
                [DisplayName("Location Email"), Expression("jLocation.[Email]")]
                public String LocationEmail { get { return Fields.LocationEmail[this]; } set { Fields.LocationEmail[this] = value; } }
                public partial class RowFields { public StringField LocationEmail; }

                        
                [DisplayName("Location Website"), Expression("jLocation.[Website]")]
                public String LocationWebsite { get { return Fields.LocationWebsite[this]; } set { Fields.LocationWebsite[this] = value; } }
                public partial class RowFields { public StringField LocationWebsite; }

                        
                [DisplayName("Location Location Name"), Expression("jLocation.[LocationName]")]
                public String LocationLocationName { get { return Fields.LocationLocationName[this]; } set { Fields.LocationLocationName[this] = value; } }
                public partial class RowFields { public StringField LocationLocationName; }

                        
                [DisplayName("Location Address"), Expression("jLocation.[Address]")]
                public String LocationAddress { get { return Fields.LocationAddress[this]; } set { Fields.LocationAddress[this] = value; } }
                public partial class RowFields { public StringField LocationAddress; }

                        
                [DisplayName("Location User Id"), Expression("jLocation.[UserID]")]
                public Int32? LocationUserId { get { return Fields.LocationUserId[this]; } set { Fields.LocationUserId[this] = value; } }
                public partial class RowFields { public Int32Field LocationUserId; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.CallId; }
    }
        
            StringField INameRow.NameField
            {
                get { return Fields.Subject; }
            }
            #endregion Id and Name fields

    #region Constructor
    public CallRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Calls]")
    {
    LocalTextPrefix = "BusinessObjects.Call";
    }
    }
    #endregion RowFields
    }
    }
