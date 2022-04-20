
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

    [ConnectionKey("Default"), DisplayName("TicketsSms"), InstanceName("TicketsSms"), TwoLevelCached]
    [ReadPermission(PermissionKeys.TicketSms.Read)]
    [InsertPermission(PermissionKeys.TicketSms.Insert)]
    [UpdatePermission(PermissionKeys.TicketSms.Update)]
    [DeletePermission(PermissionKeys.TicketSms.Delete)]
    [LookupScript("BusinessObjects.TicketSms")]
    public sealed class TicketSmsRow : Row, IIdRow
    {        
            #region Ticket Sms
            [Hidden]
            [DisplayName("Ticket Sms"), Identity]
            [LookupEditor(typeof(BusinessObjects.Entities.SmsRow), InplaceAdd = true)]
            public Int32? TicketSmsId { get { return Fields.TicketSmsId[this]; } set { Fields.TicketSmsId[this] = value; } }
            public partial class RowFields { public Int32Field TicketSmsId; }
            #endregion TicketSmsId
                
            #region Ticket
            [Hidden]
            [DisplayName("Ticket"), ForeignKey("[dbo].[Tickets]", "TicketId"), LeftJoin("jTicket"), TextualField("TicketSubject")]
            [LookupEditor(typeof(BusinessObjects.Entities.TicketRow), InplaceAdd = true)]
            public Int32? TicketId { get { return Fields.TicketId[this]; } set { Fields.TicketId[this] = value; } }
            public partial class RowFields { public Int32Field TicketId; }
            #endregion TicketId
                
            #region Sms Id
            [Hidden]
            [DisplayName("Sms Id"), ForeignKey("[dbo].[Sms]", "SmsId"), LeftJoin("jTicketSms"), TextualField("TicketSmsMessage")]
            public Int32? SmsId { get { return Fields.SmsId[this]; } set { Fields.SmsId[this] = value; } }
            public partial class RowFields { public Int32Field SmsId; }
            #endregion SmsId
                
            #region Sent
            [DisplayName("Sent")]
            public Boolean? Sent { get { return Fields.Sent[this]; } set { Fields.Sent[this] = value; } }
            public partial class RowFields { public BooleanField Sent; }
            #endregion Sent
                
            #region Delivered
            [DisplayName("Delivered")]
            public Boolean? Delivered { get { return Fields.Delivered[this]; } set { Fields.Delivered[this] = value; } }
            public partial class RowFields { public BooleanField Delivered; }
            #endregion Delivered
                
            #region Un Delivered
            [DisplayName("Un Delivered")]
            public Boolean? UnDelivered { get { return Fields.UnDelivered[this]; } set { Fields.UnDelivered[this] = value; } }
            public partial class RowFields { public BooleanField UnDelivered; }
            #endregion UnDelivered
        

    #region Foreign Fields
            
                [DisplayName("Date"), Expression("jTicketSms.[Date]")]
                public DateTime? TicketSmsDate { get { return Fields.TicketSmsDate[this]; } set { Fields.TicketSmsDate[this] = value; } }
                public partial class RowFields { public DateTimeField TicketSmsDate; }

                        
                [DisplayName("Message"), Expression("jTicketSms.[Message]")]
                public String TicketSmsMessage { get { return Fields.TicketSmsMessage[this]; } set { Fields.TicketSmsMessage[this] = value; } }
                public partial class RowFields { public StringField TicketSmsMessage; }

                        
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

                        
                [DisplayName("Ticket Product Id"), Expression("jTicket.[ProductId]")]
                public Int32? TicketProductId { get { return Fields.TicketProductId[this]; } set { Fields.TicketProductId[this] = value; } }
                public partial class RowFields { public Int32Field TicketProductId; }

                        
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

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.TicketSmsId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public TicketSmsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[TicketsSms]")
    {
    LocalTextPrefix = "BusinessObjects.TicketSms";
    }
    }
    #endregion RowFields
    }
    }
