
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

    [ConnectionKey("Default"), DisplayName("CustomersSms"), InstanceName("CustomersSms"), TwoLevelCached]
    [ReadPermission(PermissionKeys.CustomerSms.Read)]
    [InsertPermission(PermissionKeys.CustomerSms.Insert)]
    [UpdatePermission(PermissionKeys.CustomerSms.Update)]
    [DeletePermission(PermissionKeys.CustomerSms.Delete)]
    [LookupScript("BusinessObjects.CustomerSms")]
    public sealed class CustomerSmsRow : Row, IIdRow
    {        
            #region Customer Sms Id
            [Hidden]
            [DisplayName("Customer Sms Id"), Identity]
            public Int32? CustomerSmsId { get { return Fields.CustomerSmsId[this]; } set { Fields.CustomerSmsId[this] = value; } }
            public partial class RowFields { public Int32Field CustomerSmsId; }
            #endregion CustomerSmsId
                
            #region Customer
            [Hidden]
            [DisplayName("Customer"), ForeignKey("[dbo].[Customers]", "CustomerID"), LeftJoin("jCustomer"), TextualField("CustomerFirstName")]
            [LookupEditor(typeof(BusinessObjects.Entities.CustomerRow), InplaceAdd = true)]
            public Int32? CustomerId { get { return Fields.CustomerId[this]; } set { Fields.CustomerId[this] = value; } }
            public partial class RowFields { public Int32Field CustomerId; }
            #endregion CustomerId
                
            #region Sms
            [Hidden]
            [DisplayName("Sms"), ForeignKey("[dbo].[Sms]", "SmsId"), LeftJoin("jSms"), TextualField("SmsMessage")]
            [LookupEditor(typeof(BusinessObjects.Entities.SmsRow), InplaceAdd = true)]
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
            
                [DisplayName("Customer Location Id"), Expression("jCustomer.[LocationID]")]
                public Int32? CustomerLocationId { get { return Fields.CustomerLocationId[this]; } set { Fields.CustomerLocationId[this] = value; } }
                public partial class RowFields { public Int32Field CustomerLocationId; }

                        
                [DisplayName("Customer Date"), Expression("jCustomer.[Date]")]
                public DateTime? CustomerDate { get { return Fields.CustomerDate[this]; } set { Fields.CustomerDate[this] = value; } }
                public partial class RowFields { public DateTimeField CustomerDate; }

                        
                [DisplayName("Customer First Name"), Expression("jCustomer.[FirstName]")]
                public String CustomerFirstName { get { return Fields.CustomerFirstName[this]; } set { Fields.CustomerFirstName[this] = value; } }
                public partial class RowFields { public StringField CustomerFirstName; }

                        
                [DisplayName("Customer Last Name"), Expression("jCustomer.[LastName]")]
                public String CustomerLastName { get { return Fields.CustomerLastName[this]; } set { Fields.CustomerLastName[this] = value; } }
                public partial class RowFields { public StringField CustomerLastName; }

                        
                [DisplayName("Customer Full Name"), Expression("jCustomer.[FullName]")]
                public String CustomerFullName { get { return Fields.CustomerFullName[this]; } set { Fields.CustomerFullName[this] = value; } }
                public partial class RowFields { public StringField CustomerFullName; }

                        
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

                        
                [DisplayName("Sms Date"), Expression("jSms.[Date]")]
                public DateTime? SmsDate { get { return Fields.SmsDate[this]; } set { Fields.SmsDate[this] = value; } }
                public partial class RowFields { public DateTimeField SmsDate; }

                        
                [DisplayName("Message"), Expression("jSms.[Message]")]
                public String SmsMessage { get { return Fields.SmsMessage[this]; } set { Fields.SmsMessage[this] = value; } }
                public partial class RowFields { public StringField SmsMessage; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.CustomerSmsId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public CustomerSmsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[CustomersSms]")
    {
    LocalTextPrefix = "BusinessObjects.CustomerSms";
    }
    }
    #endregion RowFields
    }
    }
