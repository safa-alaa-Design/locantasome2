using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Restaurant.Default;
[LookupScript]
[ConnectionKey("Default"), Module("Default"), TableName("Category")]
[DisplayName("Category"), InstanceName("Category")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class CategoryRow : Row<CategoryRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Category Name"), Size(200), QuickSearch, NameProperty]
    public string CategoryName { get => fields.CategoryName[this]; set => fields.CategoryName[this] = value; }

    [DisplayName("Photo")]
    [ImageUploadEditor]
    public string Photo { get => fields.Photo[this]; set => fields.Photo[this] = value; }
    [DisplayName("Description")]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }
    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField CategoryName;
        public StringField Photo;
        public StringField Description;

    }
}