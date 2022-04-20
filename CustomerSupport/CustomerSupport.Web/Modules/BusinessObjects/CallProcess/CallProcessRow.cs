
namespace CustomerSupport.BusinessObjects.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("CallProcess"), InstanceName("CallProcess"), TwoLevelCached]
    [ReadPermission(PermissionKeys.CallProcess.Read)]
    [InsertPermission(PermissionKeys.CallProcess.Insert)]
    [UpdatePermission(PermissionKeys.CallProcess.Update)]
    [DeletePermission(PermissionKeys.CallProcess.Delete)]
    [LookupScript("BusinessObjects.CallProcess")]
    public sealed class CallProcessRow : Row, IIdRow, INameRow
    {        
            #region Call Process Id
            [DisplayName("Call Process Id"), Column("CallProcessID"), Identity]
            public Int32? CallProcessId { get { return Fields.CallProcessId[this]; } set { Fields.CallProcessId[this] = value; } }
            public partial class RowFields { public Int32Field CallProcessId; }
            #endregion CallProcessId
                
            #region Call
            [DisplayName("Call"), Column("CallID"), NotNull, ForeignKey("[dbo].[Calls]", "CallID"), LeftJoin("jCall"), TextualField("CallSubject")]
            [LookupEditor(typeof(BusinessObjects.Entities.CallRow), InplaceAdd = true)]
            public Int32? CallId { get { return Fields.CallId[this]; } set { Fields.CallId[this] = value; } }
            public partial class RowFields { public Int32Field CallId; }
            #endregion CallId
                
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
                
            #region Description
            [DisplayName("Description"), NotNull, QuickSearch]
            public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
            public partial class RowFields { public StringField Description; }
            #endregion Description
                
            #region Reply Comment
            [DisplayName("Reply Comment")]
            public Int16? ReplyComment { get { return Fields.ReplyComment[this]; } set { Fields.ReplyComment[this] = value; } }
            public partial class RowFields { public Int16Field ReplyComment; }
            #endregion ReplyComment
                
            #region Creator Id
            [DisplayName("Creator Id"), Column("CreatorID")]
            public Int32? CreatorId { get { return Fields.CreatorId[this]; } set { Fields.CreatorId[this] = value; } }
            public partial class RowFields { public Int32Field CreatorId; }
            #endregion CreatorId
                
            #region Call Direction
            [DisplayName("Call Direction"), NotNull]
            public Int16? CallDirection { get { return Fields.CallDirection[this]; } set { Fields.CallDirection[this] = value; } }
            public partial class RowFields { public Int16Field CallDirection; }
            #endregion CallDirection
        

    #region Foreign Fields
            
                [DisplayName("Call Customer Id"), Expression("jCall.[CustomerID]")]
                public Int32? CallCustomerId { get { return Fields.CallCustomerId[this]; } set { Fields.CallCustomerId[this] = value; } }
                public partial class RowFields { public Int32Field CallCustomerId; }

                        
                [DisplayName("Call Group Id"), Expression("jCall.[GroupID]")]
                public Int32? CallGroupId { get { return Fields.CallGroupId[this]; } set { Fields.CallGroupId[this] = value; } }
                public partial class RowFields { public Int32Field CallGroupId; }

                        
                [DisplayName("Call User Id"), Expression("jCall.[UserID]")]
                public Int32? CallUserId { get { return Fields.CallUserId[this]; } set { Fields.CallUserId[this] = value; } }
                public partial class RowFields { public Int32Field CallUserId; }

                        
                [DisplayName("Call Date"), Expression("jCall.[Date]")]
                public DateTime? CallDate { get { return Fields.CallDate[this]; } set { Fields.CallDate[this] = value; } }
                public partial class RowFields { public DateTimeField CallDate; }

                        
                [DisplayName("Call Subject"), Expression("jCall.[Subject]")]
                public String CallSubject { get { return Fields.CallSubject[this]; } set { Fields.CallSubject[this] = value; } }
                public partial class RowFields { public StringField CallSubject; }

                        
                [DisplayName("Call Description"), Expression("jCall.[Description]")]
                public String CallDescription { get { return Fields.CallDescription[this]; } set { Fields.CallDescription[this] = value; } }
                public partial class RowFields { public StringField CallDescription; }

                        
                [DisplayName("Call Call Direction"), Expression("jCall.[CallDirection]")]
                public Int16? CallCallDirection { get { return Fields.CallCallDirection[this]; } set { Fields.CallCallDirection[this] = value; } }
                public partial class RowFields { public Int16Field CallCallDirection; }

                        
                [DisplayName("Call Priority"), Expression("jCall.[Priority]")]
                public Int16? CallPriority { get { return Fields.CallPriority[this]; } set { Fields.CallPriority[this] = value; } }
                public partial class RowFields { public Int16Field CallPriority; }

                        
                [DisplayName("Call Status"), Expression("jCall.[Status]")]
                public Int16? CallStatus { get { return Fields.CallStatus[this]; } set { Fields.CallStatus[this] = value; } }
                public partial class RowFields { public Int16Field CallStatus; }

                        
                [DisplayName("Call Next Follow Up Date"), Expression("jCall.[NextFollowUpDate]")]
                public DateTime? CallNextFollowUpDate { get { return Fields.CallNextFollowUpDate[this]; } set { Fields.CallNextFollowUpDate[this] = value; } }
                public partial class RowFields { public DateTimeField CallNextFollowUpDate; }

                        
                [DisplayName("Call Creator Id"), Expression("jCall.[CreatorID]")]
                public Int32? CallCreatorId { get { return Fields.CallCreatorId[this]; } set { Fields.CallCreatorId[this] = value; } }
                public partial class RowFields { public Int32Field CallCreatorId; }

                        
                [DisplayName("Call Me"), Expression("jCall.[Me]")]
                public Boolean? CallMe { get { return Fields.CallMe[this]; } set { Fields.CallMe[this] = value; } }
                public partial class RowFields { public BooleanField CallMe; }

                        
                [DisplayName("Call Location Id"), Expression("jCall.[LocationID]")]
                public Int32? CallLocationId { get { return Fields.CallLocationId[this]; } set { Fields.CallLocationId[this] = value; } }
                public partial class RowFields { public Int32Field CallLocationId; }

                        
                [DisplayName("Call Follow Up Action"), Expression("jCall.[FollowUpAction]")]
                public String CallFollowUpAction { get { return Fields.CallFollowUpAction[this]; } set { Fields.CallFollowUpAction[this] = value; } }
                public partial class RowFields { public StringField CallFollowUpAction; }

                        
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

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.CallProcessId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Description; }
            }
            #endregion Id and Name fields

    #region Constructor
    public CallProcessRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[CallProcess]")
    {
    LocalTextPrefix = "BusinessObjects.CallProcess";
    }
    }
    #endregion RowFields
    }
    }
