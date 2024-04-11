using OfficeOpenXml.FormulaParsing.Excel.Functions.Math;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Restaurant.Default;

[ConnectionKey("Default"), Module("Default"), TableName("Product")]
[DisplayName("Product"), InstanceName("Product")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class ProductRow : Row<ProductRow.RowFields>, IIdRow, INameRow
{
    const string jCategory = nameof(jCategory);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Product Name"), QuickSearch, NameProperty]
    public string ProductName { get => fields.ProductName[this]; set => fields.ProductName[this] = value; }

    [DisplayName("Description")]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    [DisplayName("Price"), Size(18)]
    public decimal? Price { get => fields.Price[this]; set => fields.Price[this] = value; }

    [DisplayName("Currency"), Size(50)]
    public string Currency { get => fields.Currency[this]; set => fields.Currency[this] = value; }

    [DisplayName("Price Befor"), Size(18)]
    public decimal? PriceBefor { get => fields.PriceBefor[this]; set => fields.PriceBefor[this] = value; }

    [DisplayName("Photo")]
    [ImageUploadEditor]
    public string Photo { get => fields.Photo[this]; set => fields.Photo[this] = value; }

    [DisplayName("Category"), ForeignKey(typeof(CategoryRow)), LeftJoin(jCategory), TextualField(nameof(CategoryName))]
    [ServiceLookupEditor(typeof(CategoryRow), InplaceAdd = true)]

    public int? CategoryId { get => fields.CategoryId[this]; set => fields.CategoryId[this] = value; }

    [DisplayName("Category Name"), Origin(jCategory, nameof(CategoryRow.CategoryName))]
    [QuickFilter]
    public string CategoryName { get => fields.CategoryName[this]; set => fields.CategoryName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField ProductName;
        public StringField Description;
        public DecimalField Price;
        public StringField Currency;
        public DecimalField PriceBefor;
        public StringField Photo;
        public Int32Field CategoryId;

        public StringField CategoryName;

    }
}