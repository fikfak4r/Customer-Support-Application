
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

    [ConnectionKey("Default"), DisplayName("ProductsLocations"), InstanceName("ProductsLocations"), TwoLevelCached]
    [ReadPermission(PermissionKeys.ProductLocation.Read)]
    [InsertPermission(PermissionKeys.ProductLocation.Insert)]
    [UpdatePermission(PermissionKeys.ProductLocation.Update)]
    [DeletePermission(PermissionKeys.ProductLocation.Delete)]
    [LookupScript("BusinessObjects.ProductLocation")]
    public sealed class ProductLocationRow : Row, IIdRow
    {        
            #region Product Location Id
            [DisplayName("Product Location Id"), Identity]
            public Int32? ProductLocationId { get { return Fields.ProductLocationId[this]; } set { Fields.ProductLocationId[this] = value; } }
            public partial class RowFields { public Int32Field ProductLocationId; }
            #endregion ProductLocationId
                
            #region Product
            [DisplayName("Product"), ForeignKey("[dbo].[Products]", "ProductId"), LeftJoin("jProduct"), TextualField("ProductName")]
            [LookupEditor(typeof(BusinessObjects.Entities.ProductRow), InplaceAdd = true)]
            public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
            public partial class RowFields { public Int32Field ProductId; }
            #endregion ProductId
                
            #region Location
            [DisplayName("Location"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
            [LookupEditor(typeof(Administration.Entities.LocationRow), InplaceAdd = true)]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
        

    #region Foreign Fields
            
                [DisplayName("Product Name"), Expression("jProduct.[Name]")]
                public String ProductName { get { return Fields.ProductName[this]; } set { Fields.ProductName[this] = value; } }
                public partial class RowFields { public StringField ProductName; }

                        
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
    get { return Fields.ProductLocationId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public ProductLocationRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[ProductsLocations]")
    {
    LocalTextPrefix = "BusinessObjects.ProductLocation";
    }
    }
    #endregion RowFields
    }
    }
