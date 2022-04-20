
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

    [ConnectionKey("Default"), DisplayName("Customers"), InstanceName("Customer"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Customer.Read)]
    [InsertPermission(PermissionKeys.Customer.Insert)]
    [UpdatePermission(PermissionKeys.Customer.Update)]
    [DeletePermission(PermissionKeys.Customer.Delete)]
    [LookupScript("BusinessObjects.Customer", Permission = "?")]
    public sealed class CustomerRow : Row, IIdRow, INameRow
    {
        #region Customer Id
        [DisplayName("Customer Id"), Column("CustomerID"), Identity, Hidden, LookupInclude]
        public Int32? CustomerId { get { return Fields.CustomerId[this]; } set { Fields.CustomerId[this] = value; } }
        public partial class RowFields { public Int32Field CustomerId; }
        #endregion CustomerId

        #region Location
        [Required]
        [DisplayName("Location"), Column("LocationID"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
        [QuickFilter]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), FilterField = "LocationId", FilterValue = "LocationName")]

        public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
        public partial class RowFields { public Int32Field LocationId; }
        #endregion LocationId

        #region Date
        [DisplayName("Date")]
        public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
        public partial class RowFields { public DateTimeField Date; }
        #endregion Date

        #region First Name        
        [DisplayName("First Name"), Size(150), QuickSearch]
        public String FirstName { get { return Fields.FirstName[this]; } set { Fields.FirstName[this] = value; } }
        public partial class RowFields { public StringField FirstName; }
        #endregion FirstName

        #region Last Name
        [DisplayName("Last Name"), Size(150)]
        public String LastName { get { return Fields.LastName[this]; } set { Fields.LastName[this] = value; } }
        public partial class RowFields { public StringField LastName; }
        #endregion LastName

        #region Full Name
        [Required]       
        [DisplayName("Full Name"), Size(150)]
        public String FullName { get { return Fields.FullName[this]; } set { Fields.FullName[this] = value; } }
        public partial class RowFields { public StringField FullName; }
        #endregion FullName

        #region Sex
        [DisplayName("Sex")]
        [Required]
        [QuickFilter]
        [AmbientValue("DataSource:GlobalScripts.GetGender()")]
        public Gender? Sex { get { return (Gender)Fields.Sex[this]; } set { Fields.Sex[this] = (Int16)value; } }
        public partial class RowFields { public Int16Field Sex; }
        #endregion Sex

        #region Date Of Birth
        [QuickFilter]
        [DefaultValue("now")]
        [DisplayName("Date Of Birth")]
        public DateTime? DateOfBirth { get { return Fields.DateOfBirth[this]; } set { Fields.DateOfBirth[this] = value; } }
        public partial class RowFields { public DateTimeField DateOfBirth; }
        #endregion DateOfBirth

        #region Phone Number
        [QuickFilter]
        [DisplayName("Phone Number"), Size(50), LookupInclude]
        public String PhoneNumber { get { return Fields.PhoneNumber[this]; } set { Fields.PhoneNumber[this] = value; } }
        public partial class RowFields { public StringField PhoneNumber; }
        #endregion PhoneNumber

        #region Email
        [DisplayName("Email"), Size(50)]
        public String Email { get { return Fields.Email[this]; } set { Fields.Email[this] = value; } }
        public partial class RowFields { public StringField Email; }
        #endregion Email

        #region Address
        [DisplayName("Address")]
        public String Address { get { return Fields.Address[this]; } set { Fields.Address[this] = value; } }
        public partial class RowFields { public StringField Address; }
        #endregion Address


     

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
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }
        #endregion Id and Name fields

        #region Constructor
        public CustomerRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[Customers]")
            {
                LocalTextPrefix = "BusinessObjects.Customer";
            }

          

        }
        #endregion RowFields
    }
}
