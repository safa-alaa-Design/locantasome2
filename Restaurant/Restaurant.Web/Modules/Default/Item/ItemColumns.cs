using Serenity.ComponentModel;
using System.ComponentModel;

namespace Restaurant.Default.Columns;

[ColumnsScript("Default.Item")]
[BasedOnRow(typeof(ItemRow), CheckNames = true)]
public class ItemColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId")]
    public int Id { get; set; }
    [EditLink]
    public string ItemName { get; set; }
    [ImageViewerFormatter]
    public string Photo { get; set; }
    public string Description { get; set; }
    public string MealsName { get; set; }
}