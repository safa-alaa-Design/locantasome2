using Serenity.ComponentModel;
using System.ComponentModel;

namespace Restaurant.Default.Columns;

[ColumnsScript("Default.Meals")]
[BasedOnRow(typeof(MealsRow), CheckNames = true)]
public class MealsColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId")]
    public int Id { get; set; }
    [EditLink]
    public string MealsName { get; set; }
    [ImageViewerFormatter]
    public string Photo { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public decimal PriceBefor { get; set; }
    public string Currency { get; set; }
}