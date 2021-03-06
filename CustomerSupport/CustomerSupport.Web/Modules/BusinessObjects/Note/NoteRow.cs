
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

    [ConnectionKey("BusinessObjects"), DisplayName("Notes"), InstanceName("Note"), TwoLevelCached]
    [ReadPermission(Administration.PermissionKeys.Administration)]
    [ModifyPermission(Administration.PermissionKeys.Administration)]
    public sealed class NoteRow : Row, IIdRow, INameRow, IInsertLogRow
    {
        [DisplayName("Note Id"), Identity]
        public Int64? NoteId
        {
            get { return Fields.NoteId[this]; }
            set { Fields.NoteId[this] = value; }
        }

        [DisplayName("Entity Type"), Size(100), NotNull, Updatable(false)]
        public String EntityType
        {
            get { return Fields.EntityType[this]; }
            set { Fields.EntityType[this] = value; }
        }

        [DisplayName("Entity Id"), Column("EntityID"), Size(100), NotNull, Updatable(false)]
        public Int64? EntityId
        {
            get { return Fields.EntityId[this]; }
            set { Fields.EntityId[this] = value; }
        }

        [DisplayName("CallDirection"), QuickSearch]
        public String CallDirection
        {
            get { return Fields.CallDirection[this]; }
            set { Fields.CallDirection[this] = value; }
        }

        [DisplayName("Text"), NotNull, QuickSearch]
        public String Text
        {
            get { return Fields.Text[this]; }
            set { Fields.Text[this] = value; }
        }

        [ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser")]
        [DisplayName("Insert User Id"), NotNull, Insertable(false), Updatable(false)]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("UserName"), Expression("jUser.[DisplayName]")]
        public String InsertUserUserName { get { return Fields.InsertUserUserName[this]; } set { Fields.InsertUserUserName[this] = value; } }
        

        [DisplayName("Insert User"), NotMapped]
        public String InsertUserDisplayName
        {
            get { return Fields.InsertUserDisplayName[this]; }
            set { Fields.InsertUserDisplayName[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull, Insertable(false), Updatable(false)]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.NoteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EntityType; }
        }

        public IIdField InsertUserIdField
        {
            get
            {
                return Fields.InsertUserId;
            }
        }

        public DateTimeField InsertDateField
        {
            get
            {
                return Fields.InsertDate;
            }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NoteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field NoteId;
            public StringField EntityType;
            public Int64Field EntityId;
            public StringField Text;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public StringField InsertUserDisplayName;
            public StringField CallDirection;
            public StringField InsertUserUserName;


            public RowFields()
                : base("Notes")
            {
                LocalTextPrefix = "BusinessObjects.Note";
            }
        }
    }
}