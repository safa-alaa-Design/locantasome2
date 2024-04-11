using Serenity.ComponentModel;
using System.ComponentModel;

namespace Restaurant.Default.Columns;

[ColumnsScript("Default.CategoryMeals")]
[BasedOnRow(typeof(CategoryMealsRow), CheckNames = true)]
public class CategoryMealsColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string CategoryMealsName { get; set; }
    [ImageViewerFormatter]
    public string Photo { get; set; }
    public string Description { get; set; }
}