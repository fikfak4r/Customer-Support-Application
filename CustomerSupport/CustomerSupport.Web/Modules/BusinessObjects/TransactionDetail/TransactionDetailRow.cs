
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

    [ConnectionKey("Default"), DisplayName("TransactionsDetails"), InstanceName("Transaction"), TwoLevelCached]
    [ReadPermission(PermissionKeys.TransactionDetail.Read)]
    [InsertPermission(PermissionKeys.TransactionDetail.Insert)]
    [UpdatePermission(PermissionKeys.TransactionDetail.Update)]
    [DeletePermission(PermissionKeys.TransactionDetail.Delete)]
    [LookupScript("BusinessObjects.TransactionDetail")]
    public sealed class TransactionDetailRow : Row, IIdRow
    {        
            #region Transaction Detail Id
            [Hidden]
            [DisplayName("Transaction Detail Id"), Identity]
            public Int32? TransactionDetailId { get { return Fields.TransactionDetailId[this]; } set { Fields.TransactionDetailId[this] = value; } }
            public partial class RowFields { public Int32Field TransactionDetailId; }
            #endregion TransactionDetailId
                
            #region Transaction
            [Hidden]
            [DisplayName("Transaction"), ForeignKey("[dbo].[Transactions]", "TransactionId"), LeftJoin("jTransaction"), TextualField("TransactionOrderId")]
            //[LookupEditor(typeof(BusinessObjects.Entities.TransactionRow), InplaceAdd = true)]
            public Int32? TransactionId { get { return Fields.TransactionId[this]; } set { Fields.TransactionId[this] = value; } }
            public partial class RowFields { public Int32Field TransactionId; }
            #endregion TransactionId

            #region Date
            [DisplayName("Date")]
            [DefaultValue("now")]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Product
            [DisplayName("Product/Service"), ForeignKey("[dbo].[Products]", "ProductId"), LeftJoin("jProduct"), TextualField("ProductName")]
            [LookupEditor(typeof(BusinessObjects.Scripts.ProductLocationLookup))]
            public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
            public partial class RowFields { public Int32Field ProductId; }
            #endregion ProductId


            #region Unit Price
            [DisplayName("Rate"), Scale(4)]
            [DisplayFormat("#,##0.00")]
            [Required]
            public Decimal? UnitPrice { get { return Fields.UnitPrice[this]; } set { Fields.UnitPrice[this] = value; } }
            public partial class RowFields { public DecimalField UnitPrice; }
            #endregion UnitPrice


            #region UnitName
            [DisplayName("Unit Name"), Size(50), NotNull]
            public String UnitName { get { return Fields.UnitName[this]; } set { Fields.UnitName[this] = value; } }
            public partial class RowFields { public StringField UnitName; }
            #endregion UnitName

            #region Discount
            [DefaultValue(0)]
            [DisplayName("Discount"), Scale(4)]
            [DisplayFormat("#,##0.00")]
            public Single? Discount { get { return Fields.Discount[this]; } set { Fields.Discount[this] = value; } }
            public partial class RowFields { public SingleField Discount; }
            #endregion Discount


            #region Quantity
            [DisplayName("Quantity"), NotNull]
            public Int32? Quantity { get { return Fields.Quantity[this]; } set { Fields.Quantity[this] = value; } }
            public partial class RowFields { public Int32Field Quantity; }
            #endregion Quantity


            #region Amount
            [DisplayFormat("#,##0.00")]
            [DisplayName("Amount"), Scale(4), NotNull]
            public Decimal? Amount { get { return Fields.Amount[this]; } set { Fields.Amount[this] = value; } }
            public partial class RowFields { public DecimalField Amount; }
            #endregion Amount

            #region Location Id
            [Hidden]
            [DisplayName("Location Id"), Column("LocationID")]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId

            #region Is Received
            [Hidden]
            [DisplayName("Is Received")]
            public Boolean? IsReceived { get { return Fields.IsReceived[this]; } set { Fields.IsReceived[this] = value; } }
            public partial class RowFields { public BooleanField IsReceived; }
            #endregion IsReceived
        

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

                        
                [DisplayName("Product Name"), Expression("jProduct.[Name]")]
                public String ProductName { get { return Fields.ProductName[this]; } set { Fields.ProductName[this] = value; } }
                public partial class RowFields { public StringField ProductName; }

                        
                [DisplayName("Product Unit Name"), Expression("jProduct.[UnitName]")]
                public String ProductUnitName { get { return Fields.ProductUnitName[this]; } set { Fields.ProductUnitName[this] = value; } }
                public partial class RowFields { public StringField ProductUnitName; }

                        
                [DisplayName("Product Price"), Expression("jProduct.[Price]")]
                public Decimal? ProductPrice { get { return Fields.ProductPrice[this]; } set { Fields.ProductPrice[this] = value; } }
                public partial class RowFields { public DecimalField ProductPrice; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.TransactionDetailId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public TransactionDetailRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[TransactionsDetails]")
    {
    LocalTextPrefix = "BusinessObjects.TransactionDetail";
    }
    }
    #endregion RowFields
    }
    }
