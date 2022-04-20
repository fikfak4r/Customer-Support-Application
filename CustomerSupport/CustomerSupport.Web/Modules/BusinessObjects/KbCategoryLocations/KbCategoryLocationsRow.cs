
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

    [ConnectionKey("Default"), DisplayName("KBCategoryLocations"), InstanceName("KBCategoryLocations"), TwoLevelCached]
    [ReadPermission(PermissionKeys.KbCategoryLocation.Read)]
    [InsertPermission(PermissionKeys.KbCategoryLocation.Insert)]
    [UpdatePermission(PermissionKeys.KbCategoryLocation.Update)]
    [DeletePermission(PermissionKeys.KbCategoryLocation.Delete)]
    [LookupScript("BusinessObjects.KbCategoryLocationsRow")]
    public sealed class KbCategoryLocationsRow : Row, IIdRow
    {        
            #region Kb Category Location Id
            [DisplayName("Kb Category Location Id"), Column("KBCategoryLocationID"), Identity]
            public Int32? KbCategoryLocationId { get { return Fields.KbCategoryLocationId[this]; } set { Fields.KbCategoryLocationId[this] = value; } }
            public partial class RowFields { public Int32Field KbCategoryLocationId; }
            #endregion KbCategoryLocationId
                
            #region Kb Category Id
            [DisplayName("Kb Category Id"), Column("KBCategoryID")]
            public Int32? KbCategoryId { get { return Fields.KbCategoryId[this]; } set { Fields.KbCategoryId[this] = value; } }
            public partial class RowFields { public Int32Field KbCategoryId; }
            #endregion KbCategoryId
                
            #region Location Id
            [Required]
            [DisplayName("Location Id"), Column("LocationID")]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.KbCategoryLocationId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public KbCategoryLocationsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[KBCategoryLocations]")
    {
    LocalTextPrefix = "BusinessObjects.KbCategoryLocations";
    }
    }
    #endregion RowFields
    }
    }
