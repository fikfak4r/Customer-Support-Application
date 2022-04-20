
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

    [ConnectionKey("Default"), DisplayName("Transactions"), InstanceName("Transaction"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Transaction.Read)]
    [InsertPermission(PermissionKeys.Transaction.Insert)]
    [UpdatePermission(PermissionKeys.Transaction.Update)]
    [DeletePermission(PermissionKeys.Transaction.Delete)]
    [LookupScript("BusinessObjects.Transaction")]
    public sealed class TransactionRow : Row, IIdRow, INameRow
    {        
            #region Transaction Id
            [Hidden]
            [DisplayName("Transaction Id"), Identity]
            public Int32? TransactionId { get { return Fields.TransactionId[this]; } set { Fields.TransactionId[this] = value; } }
            public partial class RowFields { public Int32Field TransactionId; }
            #endregion TransactionId
                
            #region Order Id
            [DisplayName("Order Id"), Column("OrderID"), Size(50), NotNull, QuickSearch]
            public String OrderId { get { return Fields.OrderId[this]; } set { Fields.OrderId[this] = value; } }
            public partial class RowFields { public StringField OrderId; }
            #endregion OrderId

            #region Date
            [DisplayName("Date"), NotNull, DefaultValue("now")]
            [QuickFilter]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date

            #region Customer
            
            [DisplayName("Customer"), Column("CustomerId"), ForeignKey("[dbo].[Customers]", "CustomerID"), LeftJoin("jCustomer"), TextualField("CustomerName")]
            [QuickFilter]
            public Int32? CustomerId { get { return Fields.CustomerId[this]; } set { Fields.CustomerId[this] = value; } }
            public partial class RowFields { public Int32Field CustomerId; }
            #endregion CustomerId    


            #region Ticket
            [Hidden]
            [DisplayName("Ticket"), Column("TicketID"), ForeignKey("[dbo].[Tickets]", "TicketID"), LeftJoin("jTicket"), TextualField("TicketName")]
            //[LookupEditor(typeof(BusinessObjects.Entities.TicketRow), InplaceAdd = true, DialogType = "BusinessObjects.Ticket")]
            public Int32? TicketId { get { return Fields.TicketId[this]; } set { Fields.TicketId[this] = value; } }
            public partial class RowFields { public Int32Field TicketId; }
            #endregion TicketId    


            #region Subject
            [DisplayName("Subject"), Size(250), NotNull]
            public String Subject { get { return Fields.Subject[this]; } set { Fields.Subject[this] = value; } }
            public partial class RowFields { public StringField Subject; }
            #endregion Subject

        [QuickFilter]
            #region Total Amount
            [DefaultValue(0)]
            [DisplayName("Amount"), Size(19), Scale(4), NotNull]
            [DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            public Decimal? TotalAmount { get { return Fields.TotalAmount[this]; } set { Fields.TotalAmount[this] = value; } }
            public partial class RowFields { public DecimalField TotalAmount; }
            #endregion TotalAmount
        [QuickFilter]
            #region Total Amount Paid
            [DefaultValue(0)]
            [DisplayName("Paid")]
            [DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            public Decimal? TotalAmountPaid { get { return Fields.TotalAmountPaid[this]; } set { Fields.TotalAmountPaid[this] = value; } }
            public partial class RowFields { public DecimalField TotalAmountPaid; }
            #endregion TotalAmountPaid
        [QuickFilter]
            #region Total Amount Left
            [DefaultValue(0)]
            [DisplayName("Balance"), Size(19), Scale(4)]
            [DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            public Decimal? TotalAmountLeft { get { return Fields.TotalAmountLeft[this]; } set { Fields.TotalAmountLeft[this] = value; } }
            public partial class RowFields { public DecimalField TotalAmountLeft; }
            #endregion TotalAmountLeft

            #region Has Transactions Details
            [DefaultValue(false)]
            [Hidden]
            [DisplayName("Has Transactions Details"), NotNull]
            public Boolean? HasTransactionsDetails { get { return Fields.HasTransactionsDetails[this]; } set { Fields.HasTransactionsDetails[this] = value; } }
            public partial class RowFields { public BooleanField HasTransactionsDetails; }
            #endregion HasTransactionsDetails
                
            #region Location
            [DisplayName("Location"), Column("LocationID"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
            [LookupEditor(typeof(Administration.Scripts.LocationLookup))]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId

            #region Is Integer Trailing Order Id With Prefix Po
            [Hidden]
            [DisplayName("Is Integer Trailing Order Id With Prefix Po"), Column("IsIntegerTrailingOrderIDWithPrefixPO")]
            public Boolean? IsIntegerTrailingOrderIdWithPrefixPo { get { return Fields.IsIntegerTrailingOrderIdWithPrefixPo[this]; } set { Fields.IsIntegerTrailingOrderIdWithPrefixPo[this] = value; } }
            public partial class RowFields { public BooleanField IsIntegerTrailingOrderIdWithPrefixPo; }
            #endregion IsIntegerTrailingOrderIdWithPrefixPo


            #region Status
            [DefaultValue("Open")]
            [DisplayName("Status"), Size(20), NotNull]
            public String Status { get { return Fields.Status[this]; } set { Fields.Status[this] = value; } }
            public partial class RowFields { public StringField Status; }
            #endregion Status

            #region Is Open
            [DefaultValue(true)]
            [Hidden]
            [DisplayName("Is Open"), NotNull]
            public Boolean? IsOpen { get { return Fields.IsOpen[this]; } set { Fields.IsOpen[this] = value; } }
            public partial class RowFields { public BooleanField IsOpen; }
            #endregion IsOpen

            #region Is In Progress
            [Hidden]
            [DefaultValue(false)]
            [DisplayName("Is In Progress"), NotNull]
            public Boolean? IsInProgress { get { return Fields.IsInProgress[this]; } set { Fields.IsInProgress[this] = value; } }
            public partial class RowFields { public BooleanField IsInProgress; }
            #endregion IsInProgress

            #region Is Fully Received
            [Hidden]
            [DefaultValue(false)]
            [DisplayName("Is Fully Received"), NotNull]
            public Boolean? IsFullyReceived { get { return Fields.IsFullyReceived[this]; } set { Fields.IsFullyReceived[this] = value; } }
            public partial class RowFields { public BooleanField IsFullyReceived; }
            #endregion IsFullyReceived

            #region Is Fully Paid
            [Hidden]
            [DefaultValue(false)]
            [DisplayName("Is Fully Paid"), NotNull]
            public Boolean? IsFullyPaid { get { return Fields.IsFullyPaid[this]; } set { Fields.IsFullyPaid[this] = value; } }
            public partial class RowFields { public BooleanField IsFullyPaid; }
            #endregion IsFullyPaid

            #region Is Advanced
            [DefaultValue(0)]
            [Hidden]
            [DisplayName("Is Advanced")]
            public Boolean? IsAdvanced { get { return Fields.IsAdvanced[this]; } set { Fields.IsAdvanced[this] = value; } }
            public partial class RowFields { public BooleanField IsAdvanced; }
        #endregion IsAdvanced

        #region Tax
        [DefaultValue(0)]
        [DisplayName("Tax"), Size(19), Scale(4), NotNull]
        [DisplayFormat("#,##0.00")]
        [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
        public Decimal? Tax { get { return Fields.Tax[this]; } set { Fields.Tax[this] = value; } }
        public partial class RowFields { public DecimalField Tax; }
        #endregion Tax


        #region Discount
        [DefaultValue(0)]
        [DisplayName("Discount"), Size(19), Scale(4), NotNull]
        [DisplayFormat("#,##0.00")]
        [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
        public Decimal? Discount { get { return Fields.Discount[this]; } set { Fields.Discount[this] = value; } }
        public partial class RowFields { public DecimalField Discount; }
        #endregion Discount



        #region Foreign Fields

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

                        
                [DisplayName("Location Is Visible"), Expression("jLocation.[IsVisible]")]
                public Boolean? LocationIsVisible { get { return Fields.LocationIsVisible[this]; } set { Fields.LocationIsVisible[this] = value; } }
                public partial class RowFields { public BooleanField LocationIsVisible; }

                [DisplayName("Customer"), Expression("jCustomer.[FullName]")]
                public String CustomerName { get { return Fields.CustomerName[this]; } set { Fields.CustomerName[this] = value; } }
                public partial class RowFields { public StringField CustomerName; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.TransactionId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.OrderId; }
            }
            #endregion Id and Name fields

    #region Constructor
    public TransactionRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Transactions]")
    {
    LocalTextPrefix = "BusinessObjects.Transaction";
    }
    }
    #endregion RowFields
    }
    }
