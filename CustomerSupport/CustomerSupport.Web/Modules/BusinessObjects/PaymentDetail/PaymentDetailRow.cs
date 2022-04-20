
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

    [ConnectionKey("Default"), DisplayName("PaymentsDetails"), InstanceName("Payment"), TwoLevelCached]
    [ReadPermission(PermissionKeys.PaymentDetail.Read)]
    [InsertPermission(PermissionKeys.PaymentDetail.Insert)]
    [UpdatePermission(PermissionKeys.PaymentDetail.Update)]
    [DeletePermission(PermissionKeys.PaymentDetail.Delete)]
    [LookupScript("BusinessObjects.PaymentDetail")]
    public sealed class PaymentDetailRow : Row, IIdRow
    {        
            #region Payment Detail Id
        [Hidden]
            [DisplayName("Payment Detail Id"), Identity]
            public Int32? PaymentDetailId { get { return Fields.PaymentDetailId[this]; } set { Fields.PaymentDetailId[this] = value; } }
            public partial class RowFields { public Int32Field PaymentDetailId; }
            #endregion PaymentDetailId
                
            #region Transaction
        [Hidden]
            [DisplayName("Transaction"), ForeignKey("[dbo].[Transactions]", "TransactionId"), LeftJoin("jTransaction"), TextualField("TransactionOrderId")]
            //[LookupEditor(typeof(BusinessObjects.Entities.TransactionRow), InplaceAdd = true)]
            public Int32? TransactionId { get { return Fields.TransactionId[this]; } set { Fields.TransactionId[this] = value; } }
            public partial class RowFields { public Int32Field TransactionId; }
            #endregion TransactionId

            #region Date
            [DefaultValue("now")]
            [DisplayName("Date")]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Total Amount
        [Hidden]
            [DisplayName("Total Amount"), Size(19), Scale(4)]
            public Decimal? TotalAmount { get { return Fields.TotalAmount[this]; } set { Fields.TotalAmount[this] = value; } }
            public partial class RowFields { public DecimalField TotalAmount; }
            #endregion TotalAmount

            #region Amount Paid
            [DisplayName("Amount Paid"), DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            public Decimal? AmountPaid { get { return Fields.AmountPaid[this]; } set { Fields.AmountPaid[this] = value; } }
            public partial class RowFields { public DecimalField AmountPaid; }
            #endregion AmountPaid
                
            #region Amount Left
        [Hidden]
            [DisplayName("Amount Left"), Size(19), Scale(4)]
            public Decimal? AmountLeft { get { return Fields.AmountLeft[this]; } set { Fields.AmountLeft[this] = value; } }
            public partial class RowFields { public DecimalField AmountLeft; }
            #endregion AmountLeft
                
            #region Is Total Amount Row
        [Hidden]
            [DisplayName("Is Total Amount Row"), NotNull]
            public Boolean? IsTotalAmountRow { get { return Fields.IsTotalAmountRow[this]; } set { Fields.IsTotalAmountRow[this] = value; } }
            public partial class RowFields { public BooleanField IsTotalAmountRow; }
            #endregion IsTotalAmountRow
                
            #region Location Id
        [Hidden]
            [DisplayName("Location Id"), Column("LocationID")]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
        

    #region Foreign Fields
            
                [DisplayName("Transaction Order Id"), Expression("jTransaction.[OrderID]")]
                public String TransactionOrderId { get { return Fields.TransactionOrderId[this]; } set { Fields.TransactionOrderId[this] = value; } }
                public partial class RowFields { public StringField TransactionOrderId; }

                        
                [DisplayName("Transaction Date"), Expression("jTransaction.[Date]")]
                public DateTime? TransactionDate { get { return Fields.TransactionDate[this]; } set { Fields.TransactionDate[this] = value; } }
                public partial class RowFields { public DateTimeField TransactionDate; }

                        
                [DisplayName("Transaction Total Amount"), Expression("jTransaction.[TotalAmount]")]
                public Decimal? TransactionTotalAmount { get { return Fields.TransactionTotalAmount[this]; } set { Fields.TransactionTotalAmount[this] = value; } }
                public partial class RowFields { public DecimalField TransactionTotalAmount; }

                        
                [DisplayName("Transaction Total Amount Paid"), Expression("jTransaction.[TotalAmountPaid]")]
                public Decimal? TransactionTotalAmountPaid { get { return Fields.TransactionTotalAmountPaid[this]; } set { Fields.TransactionTotalAmountPaid[this] = value; } }
                public partial class RowFields { public DecimalField TransactionTotalAmountPaid; }

                        
                [DisplayName("Transaction Total Amount Left"), Expression("jTransaction.[TotalAmountLeft]")]
                public Decimal? TransactionTotalAmountLeft { get { return Fields.TransactionTotalAmountLeft[this]; } set { Fields.TransactionTotalAmountLeft[this] = value; } }
                public partial class RowFields { public DecimalField TransactionTotalAmountLeft; }

                        
                [DisplayName("Transaction Has Transactions Details"), Expression("jTransaction.[HasTransactionsDetails]")]
                public Boolean? TransactionHasTransactionsDetails { get { return Fields.TransactionHasTransactionsDetails[this]; } set { Fields.TransactionHasTransactionsDetails[this] = value; } }
                public partial class RowFields { public BooleanField TransactionHasTransactionsDetails; }

                        
                [DisplayName("Transaction Location Id"), Expression("jTransaction.[LocationID]")]
                public Int32? TransactionLocationId { get { return Fields.TransactionLocationId[this]; } set { Fields.TransactionLocationId[this] = value; } }
                public partial class RowFields { public Int32Field TransactionLocationId; }

                        
                [DisplayName("Transaction Is Integer Trailing Order Id With Prefix Po"), Expression("jTransaction.[IsIntegerTrailingOrderIDWithPrefixPO]")]
                public Boolean? TransactionIsIntegerTrailingOrderIdWithPrefixPo { get { return Fields.TransactionIsIntegerTrailingOrderIdWithPrefixPo[this]; } set { Fields.TransactionIsIntegerTrailingOrderIdWithPrefixPo[this] = value; } }
                public partial class RowFields { public BooleanField TransactionIsIntegerTrailingOrderIdWithPrefixPo; }

                        
                [DisplayName("Transaction Status"), Expression("jTransaction.[Status]")]
                public String TransactionStatus { get { return Fields.TransactionStatus[this]; } set { Fields.TransactionStatus[this] = value; } }
                public partial class RowFields { public StringField TransactionStatus; }

                        
                [DisplayName("Transaction Is Open"), Expression("jTransaction.[IsOpen]")]
                public Boolean? TransactionIsOpen { get { return Fields.TransactionIsOpen[this]; } set { Fields.TransactionIsOpen[this] = value; } }
                public partial class RowFields { public BooleanField TransactionIsOpen; }

                        
                [DisplayName("Transaction Is In Progress"), Expression("jTransaction.[IsInProgress]")]
                public Boolean? TransactionIsInProgress { get { return Fields.TransactionIsInProgress[this]; } set { Fields.TransactionIsInProgress[this] = value; } }
                public partial class RowFields { public BooleanField TransactionIsInProgress; }

                        
                [DisplayName("Transaction Is Fully Received"), Expression("jTransaction.[IsFullyReceived]")]
                public Boolean? TransactionIsFullyReceived { get { return Fields.TransactionIsFullyReceived[this]; } set { Fields.TransactionIsFullyReceived[this] = value; } }
                public partial class RowFields { public BooleanField TransactionIsFullyReceived; }

                        
                [DisplayName("Transaction Is Fully Paid"), Expression("jTransaction.[IsFullyPaid]")]
                public Boolean? TransactionIsFullyPaid { get { return Fields.TransactionIsFullyPaid[this]; } set { Fields.TransactionIsFullyPaid[this] = value; } }
                public partial class RowFields { public BooleanField TransactionIsFullyPaid; }

                        
                [DisplayName("Transaction Is Advanced"), Expression("jTransaction.[IsAdvanced]")]
                public Boolean? TransactionIsAdvanced { get { return Fields.TransactionIsAdvanced[this]; } set { Fields.TransactionIsAdvanced[this] = value; } }
                public partial class RowFields { public BooleanField TransactionIsAdvanced; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.PaymentDetailId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public PaymentDetailRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[PaymentsDetails]")
    {
    LocalTextPrefix = "BusinessObjects.PaymentDetail";
    }
    }
    #endregion RowFields
    }
    }
