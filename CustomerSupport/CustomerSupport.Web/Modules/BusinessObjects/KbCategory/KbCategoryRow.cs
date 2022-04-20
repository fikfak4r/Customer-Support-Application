
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

    [ConnectionKey("Default"), DisplayName("Category"), InstanceName("Category"), TwoLevelCached]
    [ReadPermission(PermissionKeys.KbCategory.Read)]
    [InsertPermission(PermissionKeys.KbCategory.Insert)]
    [UpdatePermission(PermissionKeys.KbCategory.Update)]
    [DeletePermission(PermissionKeys.KbCategory.Delete)]
    [LookupScript("BusinessObjects.KbCategory")]
    public sealed class KbCategoryRow : Row, IIdRow, INameRow
    {
        #region Kb Category Id
        [DisplayName("Kb Category Id"), Column("KB_CategoryID"), Identity, Hidden]
        public Int32? KbCategoryId { get { return Fields.KbCategoryId[this]; } set { Fields.KbCategoryId[this] = value; } }
        public partial class RowFields { public Int32Field KbCategoryId; }
        #endregion KbCategoryId

        #region Category Name
        [DisplayName("Category"), Size(250), NotNull, QuickSearch]
        public String CategoryName { get { return Fields.CategoryName[this]; } set { Fields.CategoryName[this] = value; } }
        public partial class RowFields { public StringField CategoryName; }
        #endregion CategoryName

        #region Location
        //[DisplayName("Location"), Column("LocationID"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
        //[LookupEditor(typeof(Administration.Entities.LocationRow), InplaceAdd = true)]
        //public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
        //public partial class RowFields { public Int32Field LocationId; }
        #endregion LocationId
        [Required]
        [DisplayName("Location"), Column("LocationID"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), Multiple = true)]
        [LinkingSetRelation(typeof(KbCategoryLocationsRow), "KbCategoryId", "LocationId")]
        public List<Int32> LocationList { get { return Fields.LocationList[this]; } set { Fields.LocationList[this] = value; } }

        [MasterDetailRelation(foreignKey: "KbCategoryId"), NotMapped]
        [DisplayName("Knowledge base: ")]
        public List<KnowledgeBaseRow> KnowledgeBase
        {
            get { return Fields.KnowledgeBase[this]; }
            set { Fields.KnowledgeBase[this] = value; }
        }


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


        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.KbCategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryName; }
        }
        #endregion Id and Name fields

        #region Constructor
        public KbCategoryRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[KB_Category]")
            {
                LocalTextPrefix = "BusinessObjects.KbCategory";
            }

            public ListField<Int32> LocationList;

            public RowListField<KnowledgeBaseRow> KnowledgeBase;

        }
        #endregion RowFields
    }
}
