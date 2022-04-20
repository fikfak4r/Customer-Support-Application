
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

    [ConnectionKey("Default"), DisplayName("SmsLocations"), InstanceName("SmsLocations"), TwoLevelCached]
    [ReadPermission(PermissionKeys.SmsLocation.Read)]
    [InsertPermission(PermissionKeys.SmsLocation.Insert)]
    [UpdatePermission(PermissionKeys.SmsLocation.Update)]
    [DeletePermission(PermissionKeys.SmsLocation.Delete)]
    [LookupScript("BusinessObjects.SmsLocation")]
    public sealed class SmsLocationRow : Row, IIdRow
    {        
            #region Sms Location Id
            [DisplayName("Sms Location Id"), Identity]
            public Int32? SmsLocationId { get { return Fields.SmsLocationId[this]; } set { Fields.SmsLocationId[this] = value; } }
            public partial class RowFields { public Int32Field SmsLocationId; }
            #endregion SmsLocationId
                
            #region Sms
            [DisplayName("Sms"), ForeignKey("[dbo].[Sms]", "SmsId"), LeftJoin("jSms"), TextualField("SmsMessage")]
            [LookupEditor(typeof(BusinessObjects.Entities.SmsRow), InplaceAdd = true)]
            public Int32? SmsId { get { return Fields.SmsId[this]; } set { Fields.SmsId[this] = value; } }
            public partial class RowFields { public Int32Field SmsId; }
            #endregion SmsId
                
            #region Location
            [DisplayName("Location"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
            //[LookupEditor(typeof(BusinessObjects.Entities.LocationRow), InplaceAdd = true)]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
        

    #region Foreign Fields
            
                [DisplayName("Sms Date"), Expression("jSms.[Date]")]
                public DateTime? SmsDate { get { return Fields.SmsDate[this]; } set { Fields.SmsDate[this] = value; } }
                public partial class RowFields { public DateTimeField SmsDate; }

                        
                [DisplayName("Sms Message"), Expression("jSms.[Message]")]
                public String SmsMessage { get { return Fields.SmsMessage[this]; } set { Fields.SmsMessage[this] = value; } }
                public partial class RowFields { public StringField SmsMessage; }

                        
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

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.SmsLocationId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public SmsLocationRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[SmsLocations]")
    {
    LocalTextPrefix = "BusinessObjects.SmsLocation";
    }
    }
    #endregion RowFields
    }
    }
