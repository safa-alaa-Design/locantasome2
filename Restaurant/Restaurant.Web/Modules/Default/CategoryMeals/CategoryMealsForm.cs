using Serenity.ComponentModel;

namespace Restaurant.Default.Forms;

[FormScript("Default.CategoryMeals")]
[BasedOnRow(typeof(CategoryMealsRow), CheckNames = true)]
public class CategoryMealsForm
{
    public string CategoryMealsName { get; set; }
    [Required]
    public string Photo { get; set; }
    public string Description { get; set; }
}