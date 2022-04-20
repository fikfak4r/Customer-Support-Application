
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

    [ConnectionKey("Default"), DisplayName("TicketProcess"), InstanceName("Ticket Process"), TwoLevelCached]
    [ReadPermission(PermissionKeys.TicketProcess.Read)]
    [InsertPermission(PermissionKeys.TicketProcess.Insert)]
    [UpdatePermission(PermissionKeys.TicketProcess.Update)]
    [DeletePermission(PermissionKeys.TicketProcess.Delete)]
    [LookupScript("BusinessObjects.TicketProcessRow")]
    public sealed class TicketProcessRow : Row, IIdRow, INameRow
    {
        #region Ticket Process Id
        [DisplayName("Ticket Process Id"), Column("TicketProcessID"), Identity]
        [Hidden]
        public Int32? TicketProcessId { get { return Fields.TicketProcessId[this]; } set { Fields.TicketProcessId[this] = value; } }
        public partial class RowFields { public Int32Field TicketProcessId; }
        #endregion TicketProcessId

        #region Ticket
        [Hidden]
        [DisplayName("Ticket"), Column("TicketID"), ForeignKey("[dbo].[Tickets]", "TicketID"), LeftJoin("jTicket"), TextualField("TicketSubject")]
        [LookupEditor(typeof(BusinessObjects.Entities.TicketRow))]
        public Int32? TicketId { get { return Fields.TicketId[this]; } set { Fields.TicketId[this] = value; } }
        public partial class RowFields { public Int32Field TicketId; }
        #endregion TicketId

        #region Date
        [DisplayName("Date")]
        public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
        public partial class RowFields { public DateTimeField Date; }
        #endregion Date

        #region User
        [DisplayName("User"), Column("UserID"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [LookupEditor(typeof(Administration.Entities.UserRow), InplaceAdd = true)]
        public Int32? UserId { get { return Fields.UserId[this]; } set { Fields.UserId[this] = value; } }
        public partial class RowFields { public Int32Field UserId; }
        #endregion UserId

        #region Description
        [DisplayName("Description"), QuickSearch, Size(5000)]
        public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
        public partial class RowFields { public StringField Description; }
        #endregion Description

        #region Reply Comment
        [DisplayName("Reply/Internal note"), NotNull]
        public ReplyComment? ReplyComment { get { return (ReplyComment)Fields.ReplyComment[this]; } set { Fields.ReplyComment[this] = (Int16)value; } }
        #endregion ReplyComment

        #region Creator Id
        [Hidden]
        [DisplayName("Creator Id"), Column("CreatorID")]
        public Int32? CreatorId { get { return Fields.CreatorId[this]; } set { Fields.CreatorId[this] = value; } }
        public partial class RowFields { public Int32Field CreatorId; }
        #endregion CreatorId


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


        [DisplayName("User"), Expression("jUser.[Username]")]
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
            get { return Fields.TicketProcessId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }
        #endregion Id and Name fields

        #region Constructor
        public TicketProcessRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[TicketProcess]")
            {
                LocalTextPrefix = "BusinessObjects.TicketProcess";
            }

            public Int16Field ReplyComment;




        }
        #endregion RowFields
    }
}
