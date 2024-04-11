using Serenity.ComponentModel;

namespace Restaurant.Default.Forms;

[FormScript("Default.Category")]
[BasedOnRow(typeof(CategoryRow), CheckNames = true)]
public class CategoryForm
{
    [Required]
    public string CategoryName { get; set; }
    [Required]
    public string Photo { get; set; }
    public string Description { get; set; }
}