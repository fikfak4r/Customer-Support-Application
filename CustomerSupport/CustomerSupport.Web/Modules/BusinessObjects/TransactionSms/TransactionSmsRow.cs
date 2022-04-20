
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

    [ConnectionKey("Default"), DisplayName("TransactionsSms"), InstanceName("TransactionsSms"), TwoLevelCached]
    [ReadPermission(PermissionKeys.TransactionSms.Read)]
    [InsertPermission(PermissionKeys.TransactionSms.Insert)]
    [UpdatePermission(PermissionKeys.TransactionSms.Update)]
    [DeletePermission(PermissionKeys.TransactionSms.Delete)]
    [LookupScript("BusinessObjects.TransactionSms")]
    public sealed class TransactionSmsRow : Row, IIdRow
    {        
            #region Transaction Sms
            [Hidden]
            [DisplayName("Transaction Sms"), Identity, ForeignKey("[dbo].[Sms]", "SmsId"), LeftJoin("jTransactionSms"), TextualField("TransactionSmsMessage")]
            [LookupEditor(typeof(BusinessObjects.Entities.SmsRow), InplaceAdd = true)]
            public Int32? TransactionSmsId { get { return Fields.TransactionSmsId[this]; } set { Fields.TransactionSmsId[this] = value; } }
            public partial class RowFields { public Int32Field TransactionSmsId; }
            #endregion TransactionSmsId
                
            #region 
            [Hidden]
            [DisplayName("Transaction"), ForeignKey("[dbo].[Transactions]", "TransactionID"), LeftJoin("jTransaction"), TextualField("TransactionSubject")]
            [LookupEditor(typeof(BusinessObjects.Entities.TransactionRow), InplaceAdd = true)]
            public Int32? TransactionId { get { return Fields.TransactionId[this]; } set { Fields.TransactionId[this] = value; } }
            public partial class RowFields { public Int32Field TransactionId; }
            #endregion TransactionId
                
            #region Sms Id
            [Hidden]
            [DisplayName("Sms Id")]
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
            
                [DisplayName("Transaction Sms Date"), Expression("jTransactionSms.[Date]")]
                public DateTime? TransactionSmsDate { get { return Fields.TransactionSmsDate[this]; } set { Fields.TransactionSmsDate[this] = value; } }
                public partial class RowFields { public DateTimeField TransactionSmsDate; }

                        
                [DisplayName("Transaction Sms Message"), Expression("jTransactionSms.[Message]")]
                public String TransactionSmsMessage { get { return Fields.TransactionSmsMessage[this]; } set { Fields.TransactionSmsMessage[this] = value; } }
                public partial class RowFields { public StringField TransactionSmsMessage; }

                        
             

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.TransactionSmsId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public TransactionSmsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[TransactionsSms]")
    {
    LocalTextPrefix = "BusinessObjects.TransactionSms";
    }
    }
    #endregion RowFields
    }
    }
