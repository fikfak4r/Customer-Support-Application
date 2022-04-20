
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
    using System.Collections.Generic;

    [ConnectionKey("Default"), DisplayName("ActionsLogs"), InstanceName("ActionsLogs"), TwoLevelCached]
    [ReadPermission(PermissionKeys.ActionLog.Read)]
    [InsertPermission(PermissionKeys.ActionLog.Insert)]
    [UpdatePermission(PermissionKeys.ActionLog.Update)]
    [DeletePermission(PermissionKeys.ActionLog.Delete)]
    [LookupScript("BusinessObjects.ActionLog")]
    public sealed class ActionLogRow : Row, IIdRow, INameRow
    {        
            #region Action Log Id
            [DisplayName("Action Log Id"), Identity]
            public Int32? ActionLogId { get { return Fields.ActionLogId[this]; } set { Fields.ActionLogId[this] = value; } }
            public partial class RowFields { public Int32Field ActionLogId; }
            #endregion ActionLogId
                
            #region Ticket
            [DisplayName("Ticket"), ForeignKey("[dbo].[Tickets]", "TicketID"), LeftJoin("jTicket"), TextualField("TicketSubject")]
            [LookupEditor(typeof(BusinessObjects.Entities.TicketRow), InplaceAdd = true)]
            public Int32? TicketId { get { return Fields.TicketId[this]; } set { Fields.TicketId[this] = value; } }
            public partial class RowFields { public Int32Field TicketId; }
            #endregion TicketId
                
            #region Action
            [DisplayName("Action"), Size(50), QuickSearch]
            public String Action { get { return Fields.Action[this]; } set { Fields.Action[this] = value; } }
            public partial class RowFields { public StringField Action; }
            #endregion Action
                
            #region Date
            [DisplayName("Date")]
            [DateFormatter(DisplayFormat = "dd/MM/yyyy HH:mm.ss")]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region User
            [DisplayName("User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
            [LookupEditor(typeof(Administration.Entities.UserRow), InplaceAdd = true)]
            public Int32? UserId { get { return Fields.UserId[this]; } set { Fields.UserId[this] = value; } }
            public partial class RowFields { public Int32Field UserId; }
            #endregion UserId


        

    #region Foreign Fields
            
                [DisplayName("Ticket Location Id"), Expression("jTicket.[LocationID]")]
                public Int32? TicketLocationId { get { return Fields.TicketLocationId[this]; } set { Fields.TicketLocationId[this] = value; } }
                public partial class RowFields { public Int32Field TicketLocationId; }

                        
                [DisplayName("Ticket Date"), Expression("jTicket.[Date]")]
                public DateTime? TicketDate { get { return Fields.TicketDate[this]; } set { Fields.TicketDate[this] = value; } }
                public partial class RowFields { public DateTimeField TicketDate; }

                        
                [DisplayName("Ticket Customer Id"), Expression("jTicket.[CustomerID]")]
                public Int32? TicketCustomerId { get { return Fields.TicketCustomerId[this]; } set { Fields.TicketCustomerId[this] = value; } }
                public partial class RowFields { public Int32Field TicketCustomerId; }

                        
                [DisplayName("Ticket Call Direction"), Expression("jTicket.[CallDirection]")]
                public Int16? TicketCallDirection { get { return Fields.TicketCallDirection[this]; } set { Fields.TicketCallDirection[this] = value; } }
                public partial class RowFields { public Int16Field TicketCallDirection; }

                        
                [DisplayName("Ticket Type"), Expression("jTicket.[Type]")]
                public Int16? TicketType { get { return Fields.TicketType[this]; } set { Fields.TicketType[this] = value; } }
                public partial class RowFields { public Int16Field TicketType; }

                        
                [DisplayName("Ticket Priority"), Expression("jTicket.[Priority]")]
                public Int16? TicketPriority { get { return Fields.TicketPriority[this]; } set { Fields.TicketPriority[this] = value; } }
                public partial class RowFields { public Int16Field TicketPriority; }

                        
                [DisplayName("Ticket Status"), Expression("jTicket.[Status]")]
                public Int16? TicketStatus { get { return Fields.TicketStatus[this]; } set { Fields.TicketStatus[this] = value; } }
                public partial class RowFields { public Int16Field TicketStatus; }

                        
                [DisplayName("Ticket Group Id"), Expression("jTicket.[GroupID]")]
                public Int32? TicketGroupId { get { return Fields.TicketGroupId[this]; } set { Fields.TicketGroupId[this] = value; } }
                public partial class RowFields { public Int32Field TicketGroupId; }

                        
                [DisplayName("Ticket User Id"), Expression("jTicket.[UserID]")]
                public Int32? TicketUserId { get { return Fields.TicketUserId[this]; } set { Fields.TicketUserId[this] = value; } }
                public partial class RowFields { public Int32Field TicketUserId; }

                        
                [DisplayName("Ticket Subject"), Expression("jTicket.[Subject]")]
                public String TicketSubject { get { return Fields.TicketSubject[this]; } set { Fields.TicketSubject[this] = value; } }
                public partial class RowFields { public StringField TicketSubject; }

                        
                [DisplayName("Ticket Description"), Expression("jTicket.[Description]")]
                public String TicketDescription { get { return Fields.TicketDescription[this]; } set { Fields.TicketDescription[this] = value; } }
                public partial class RowFields { public StringField TicketDescription; }

                        
                [DisplayName("Ticket Creator Id"), Expression("jTicket.[CreatorID]")]
                public Int32? TicketCreatorId { get { return Fields.TicketCreatorId[this]; } set { Fields.TicketCreatorId[this] = value; } }
                public partial class RowFields { public Int32Field TicketCreatorId; }

                        
                [DisplayName("Ticket Me"), Expression("jTicket.[Me]")]
                public Boolean? TicketMe { get { return Fields.TicketMe[this]; } set { Fields.TicketMe[this] = value; } }
                public partial class RowFields { public BooleanField TicketMe; }

                        
                [DisplayName("Ticket Phone Number"), Expression("jTicket.[PhoneNumber]")]
                public String TicketPhoneNumber { get { return Fields.TicketPhoneNumber[this]; } set { Fields.TicketPhoneNumber[this] = value; } }
                public partial class RowFields { public StringField TicketPhoneNumber; }

                        
                [DisplayName("Ticket Next Follow Update"), Expression("jTicket.[NextFollowUpdate]")]
                public DateTime? TicketNextFollowUpdate { get { return Fields.TicketNextFollowUpdate[this]; } set { Fields.TicketNextFollowUpdate[this] = value; } }
                public partial class RowFields { public DateTimeField TicketNextFollowUpdate; }

                        
                [DisplayName("Ticket Follow Up Action"), Expression("jTicket.[FollowUpAction]")]
                public String TicketFollowUpAction { get { return Fields.TicketFollowUpAction[this]; } set { Fields.TicketFollowUpAction[this] = value; } }
                public partial class RowFields { public StringField TicketFollowUpAction; }

                        
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

                        
                [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
                public DateTime? UserLastDirectoryUpdate { get { return Fields.UserLastDirectoryUpdate[this]; } set { Fields.UserLastDirectoryUpdate[this] = value; } }
                public partial class RowFields { public DateTimeField UserLastDirectoryUpdate; }

                        
                [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
                public String UserUserImage { get { return Fields.UserUserImage[this]; } set { Fields.UserUserImage[this] = value; } }
                public partial class RowFields { public StringField UserUserImage; }

                        
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

                        
                [DisplayName("User Account Id"), Expression("jUser.[AccountID]")]
                public Int32? UserAccountId { get { return Fields.UserAccountId[this]; } set { Fields.UserAccountId[this] = value; } }
                public partial class RowFields { public Int32Field UserAccountId; }

                        
                [DisplayName("User Customer Id"), Expression("jUser.[CustomerID]")]
                public Int32? UserCustomerId { get { return Fields.UserCustomerId[this]; } set { Fields.UserCustomerId[this] = value; } }
                public partial class RowFields { public Int32Field UserCustomerId; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.ActionLogId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Action; }
            }
            #endregion Id and Name fields

    #region Constructor
    public ActionLogRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[ActionsLogs]")
    {
    LocalTextPrefix = "BusinessObjects.ActionLog";
    }
    }
    #endregion RowFields
    }
    }
