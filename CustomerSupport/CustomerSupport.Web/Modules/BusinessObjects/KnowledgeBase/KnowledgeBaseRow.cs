
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
    using System.Collections.Generic;

    [ConnectionKey("Default"), DisplayName("Knowledge base"), InstanceName("knowledge base"), TwoLevelCached]
    [ReadPermission(PermissionKeys.KnowledgeBase.Read)]
    [InsertPermission(PermissionKeys.KnowledgeBase.Insert)]
    [UpdatePermission(PermissionKeys.KnowledgeBase.Update)]
    [DeletePermission(PermissionKeys.KnowledgeBase.Delete)]
    [LookupScript("BusinessObjects.KnowledgeBase")]
    public sealed class KnowledgeBaseRow : Row, IIdRow, INameRow
    {
        #region Kb Id
        [DisplayName("Kb Id"), Column("KB_ID"), Identity, Hidden]
        public Int32? KbId { get { return Fields.KbId[this]; } set { Fields.KbId[this] = value; } }
        public partial class RowFields { public Int32Field KbId; }
        #endregion KbId

        #region Kb Category
        [DisplayName("Category"), Column("KB_CategoryID"), NotNull, ForeignKey("[dbo].[KB_Category]", "KB_CategoryID"), LeftJoin("jKbCategory"), TextualField("KbCategoryCategoryName")]
        //[LookupEditor(typeof(BusinessObjects.Scripts.KBCategoryLookup), InplaceAdd = true, DialogType = "BusinessObjects.KbCategoryThread")]
        [LookupEditor(typeof(BusinessObjects.Scripts.KBCategoryLookup))]
        public Int32? KbCategoryId { get { return Fields.KbCategoryId[this]; } set { Fields.KbCategoryId[this] = value; } }
        public partial class RowFields { public Int32Field KbCategoryId; }
        #endregion KbCategoryId

        #region Title
        [DisplayName("Title"), Size(250), NotNull, QuickSearch]
        public String Title { get { return Fields.Title[this]; } set { Fields.Title[this] = value; } }
        public partial class RowFields { public StringField Title; }
        #endregion Title

        #region Kb Content
        [DisplayName("Content"), Column("KB_Content"), NotNull]
        public String KbContent { get { return Fields.KbContent[this]; } set { Fields.KbContent[this] = value; } }
        public partial class RowFields { public StringField KbContent; }
        #endregion KbContent

        [Required]
        [DisplayName("Locations"), Column("LocationID"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), Multiple = true)]
        [LinkingSetRelation(typeof(KnowledgeBaseLocationsRow), "KbId", "LocationId")]
        public List<Int32> LocationList { get { return Fields.LocationList[this]; } set { Fields.LocationList[this] = value; } }


        #region Foreign Fields

        [DisplayName("Category"), Expression("jKbCategory.[CategoryName]")]
        public String KbCategoryCategoryName { get { return Fields.KbCategoryCategoryName[this]; } set { Fields.KbCategoryCategoryName[this] = value; } }
        public partial class RowFields { public StringField KbCategoryCategoryName; }


        [DisplayName("Kb Category Location Id"), Expression("jKbCategory.[LocationID]")]
        public Int32? KbCategoryLocationId { get { return Fields.KbCategoryLocationId[this]; } set { Fields.KbCategoryLocationId[this] = value; } }
        public partial class RowFields { public Int32Field KbCategoryLocationId; }


        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.KbId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }
        #endregion Id and Name fields

        #region Constructor
        public KnowledgeBaseRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[KnowledgeBase]")
            {
                LocalTextPrefix = "BusinessObjects.KnowledgeBase";
            }
            public ListField<Int32> LocationList;
        }
        #endregion RowFields
    }
}
