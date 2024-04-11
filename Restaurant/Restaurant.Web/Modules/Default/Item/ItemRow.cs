using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Restaurant.Default;

[ConnectionKey("Default"), Module("Default"), TableName("Item")]
[DisplayName("Item"), InstanceName("Item")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class ItemRow : Row<ItemRow.RowFields>, IIdRow, INameRow
{
    const string jMeals = nameof(jMeals);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Item Name"), Size(200), QuickSearch, NameProperty]
    public string ItemName { get => fields.ItemName[this]; set => fields.ItemName[this] = value; }

    [DisplayName("Photo")]
    [ImageUploadEditor]
    public string Photo { get => fields.Photo[this]; set => fields.Photo[this] = value; }

    [DisplayName("Description")]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    [DisplayName("Meals"), ForeignKey(typeof(MealsRow)), LeftJoin(jMeals), TextualField(nameof(MealsName))]
    [ServiceLookupEditor(typeof(MealsRow))]
    public int? MealsId { get => fields.MealsId[this]; set => fields.MealsId[this] = value; }

    [DisplayName("Meals Name"), Origin(jMeals, nameof(MealsRow.MealsName))]
    public string MealsName { get => fields.MealsName[this]; set => fields.MealsName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField ItemName;
        public StringField Photo;
        public StringField Description;
        public Int32Field MealsId;

        public StringField MealsName;
    }
}