using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Restaurant.Default;

[ConnectionKey("Default"), Module("Default"), TableName("Meals")]
[DisplayName("Meals"), InstanceName("Meals")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class MealsRow : Row<MealsRow.RowFields>, IIdRow, INameRow
{
    const string jCategoryMeals = nameof(jCategoryMeals);
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Meals Name"), Size(200), QuickSearch, NameProperty]
    public string MealsName { get => fields.MealsName[this]; set => fields.MealsName[this] = value; }
    [ImageUploadEditor]
    [DisplayName("Photo")]
    public string Photo { get => fields.Photo[this]; set => fields.Photo[this] = value; }

    [DisplayName("Description")]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    [DisplayName("Price"), Size(18)]
    public decimal? Price { get => fields.Price[this]; set => fields.Price[this] = value; }

    [DisplayName("Price Befor"), Size(18)]
    public decimal? PriceBefor { get => fields.PriceBefor[this]; set => fields.PriceBefor[this] = value; }

    [DisplayName("Currency"), Size(50)]
    public string Currency { get => fields.Currency[this]; set => fields.Currency[this] = value; }

    [DisplayName("CategoryMeals"), ForeignKey(typeof(CategoryMealsRow)), LeftJoin(jCategoryMeals), TextualField(nameof(CategoryMealsName))]
    [ServiceLookupEditor(typeof(CategoryMealsRow), InplaceAdd = true)]

    public int? CategoryMealsId { get => fields.CategoryMealsId[this]; set => fields.CategoryMealsId[this] = value; }

    [DisplayName("Category Name"), Origin(jCategoryMeals, nameof(CategoryMealsRow.CategoryMealsName))]
    [QuickFilter]
    public string CategoryMealsName { get => fields.CategoryMealsName[this]; set => fields.CategoryMealsName[this] = value; }
    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField MealsName;
        public StringField Photo;
        public StringField Description;
        public DecimalField Price;
        public DecimalField PriceBefor;
        public StringField Currency;
        public Int32Field CategoryMealsId;

        public StringField CategoryMealsName;

    }
}