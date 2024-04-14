using Restaurant;
using Serenity.ComponentModel;
using System.ComponentModel;

namespace Restaurant.Default.Columns;

[ColumnsScript("Default.Product")]
[BasedOnRow(typeof(ProductRow), CheckNames = true)]
public class ProductColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId")]
    public int Id { get; set; }
    [EditLink]
    public string ProductName { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public string Currency { get; set; }
    public decimal PriceBefor { get; set; }
    [ImageViewerFormatter]
    public string Photo { get; set; }
    [CategortFormatter]
    public int CategoryId { get; set; }
}