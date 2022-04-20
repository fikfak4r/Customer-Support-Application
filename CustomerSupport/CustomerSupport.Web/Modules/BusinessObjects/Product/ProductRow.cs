
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


    [ConnectionKey("Default"), DisplayName("Products"), InstanceName("Product"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Product.Read)]
    [InsertPermission(PermissionKeys.Product.Insert)]
    [UpdatePermission(PermissionKeys.Product.Update)]
    [DeletePermission(PermissionKeys.Product.Delete)]
    [LookupScript("BusinessObjects.Product", Permission = "?")]
    public sealed class ProductRow : Row, IIdRow, INameRow
    {
        #region Product Id
        [DisplayName("Product Id"), Identity]
        public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
        public partial class RowFields { public Int32Field ProductId; }
        #endregion ProductId

        #region Name
        [DisplayName("Name"), Size(100), QuickSearch, QuickFilter]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
        public partial class RowFields { public StringField Name; }
        #endregion Name


        #region Price
        [DisplayName("Price"), Scale(4)]
        [DisplayFormat("#,##0.00")]
        public Decimal? Price { get { return Fields.Price[this]; } set { Fields.Price[this] = value; } }
        public partial class RowFields { public DecimalField Price; }
        #endregion Price


        [DisplayName("Locations"), NotMapped, QuickFilter, Required]
        [Width(130)]
        [LinkingSetRelation(typeof(ProductLocationRow), "ProductId", "LocationId")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), FilterField = "LocationId", FilterValue = "LocationName", Multiple = true)]
        public List<Int32> LocationList
        {
            get { return Fields.LocationList[this]; }
            set { Fields.LocationList[this] = value; }
        }


        #region Foreign Fields

        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.ProductId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }
        #endregion Id and Name fields

        #region Constructor
        public ProductRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[Products]")
            {
                LocalTextPrefix = "BusinessObjects.Product";
            }

            public ListField<Int32> LocationList;

        }
        #endregion RowFields
    }
}
