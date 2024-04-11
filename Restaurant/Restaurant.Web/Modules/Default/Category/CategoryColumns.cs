using Serenity.ComponentModel;
using System.ComponentModel;

namespace Restaurant.Default.Columns;

[ColumnsScript("Default.Category")]
[BasedOnRow(typeof(CategoryRow), CheckNames = true)]
public class CategoryColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    
    public string CategoryName { get; set; }
    [ImageViewerFormatter]
    public string Photo { get; set; }
}