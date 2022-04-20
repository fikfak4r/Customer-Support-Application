
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

    [ConnectionKey("Default"), DisplayName("KnowledgeBaseLocations"), InstanceName("KnowledgeBaseLocations"), TwoLevelCached]
    [ReadPermission(PermissionKeys.KnowledgeBaseLocation.Read)]
    [InsertPermission(PermissionKeys.KnowledgeBaseLocation.Insert)]
    [UpdatePermission(PermissionKeys.KnowledgeBaseLocation.Update)]
    [DeletePermission(PermissionKeys.KnowledgeBaseLocation.Delete)]
    [LookupScript("BusinessObjects.KnowledgeBaseLocationsRow")]
    public sealed class KnowledgeBaseLocationsRow : Row, IIdRow
    {        
            #region Kb Location Id
            [DisplayName("Kb Location Id"), Column("KBLocationID"), Identity]
            public Int32? KbLocationId { get { return Fields.KbLocationId[this]; } set { Fields.KbLocationId[this] = value; } }
            public partial class RowFields { public Int32Field KbLocationId; }
            #endregion KbLocationId
                
            #region Kbid
            [DisplayName("Kbid"), Column("KBID")]
            public Int32? KbId { get { return Fields.Kbid[this]; } set { Fields.Kbid[this] = value; } }
            public partial class RowFields { public Int32Field Kbid; }
            #endregion Kbid
                
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
    get { return Fields.KbLocationId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public KnowledgeBaseLocationsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[KnowledgeBaseLocations]")
    {
    LocalTextPrefix = "BusinessObjects.KnowledgeBaseLocations";
    }
    }
    #endregion RowFields
    }
    }
