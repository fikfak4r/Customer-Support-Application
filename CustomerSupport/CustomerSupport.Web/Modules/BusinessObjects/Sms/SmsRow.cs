
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

    [ConnectionKey("Default"), DisplayName("Sms"), InstanceName("Sms"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Sms.Read)]
    [InsertPermission(PermissionKeys.Sms.Insert)]
    [UpdatePermission(PermissionKeys.Sms.Update)]
    [DeletePermission(PermissionKeys.Sms.Delete)]
    [LookupScript("BusinessObjects.Sms")]
    public sealed class SmsRow : Row, IIdRow, INameRow
    {        
            #region Sms Id
            [DisplayName("Sms Id"), Identity]
            public Int32? SmsId { get { return Fields.SmsId[this]; } set { Fields.SmsId[this] = value; } }
            public partial class RowFields { public Int32Field SmsId; }
            #endregion SmsId
                
            #region Date
            [DisplayName("Date")]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Message
            [DisplayName("Message"), Size(500), QuickSearch, Required]
            public String Message { get { return Fields.Message[this]; } set { Fields.Message[this] = value; } }
            public partial class RowFields { public StringField Message; }
            #endregion Message
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.SmsId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Message; }
            }
            #endregion Id and Name fields

    #region Constructor
    public SmsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Sms]")
    {
    LocalTextPrefix = "BusinessObjects.Sms";
    }
    }
    #endregion RowFields
    }
    }
