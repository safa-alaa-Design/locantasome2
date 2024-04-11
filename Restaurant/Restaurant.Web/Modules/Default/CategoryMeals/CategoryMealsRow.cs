using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Restaurant.Default;

[ConnectionKey("Default"), Module("Default"), TableName("CategoryMeals")]
[DisplayName("Category Meals"), InstanceName("Category Meals")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class CategoryMealsRow : Row<CategoryMealsRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Category Meals Name"), Size(200), QuickSearch, NameProperty]
    public string CategoryMealsName { get => fields.CategoryMealsName[this]; set => fields.CategoryMealsName[this] = value; }

    [DisplayName("Photo")]
    [ImageUploadEditor]
    public string Photo { get => fields.Photo[this]; set => fields.Photo[this] = value; }

    [DisplayName("Description")]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField CategoryMealsName;
        public StringField Photo;
        public StringField Description;

    }
}