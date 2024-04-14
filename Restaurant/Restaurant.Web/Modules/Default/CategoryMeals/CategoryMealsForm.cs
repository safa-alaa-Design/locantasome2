using Serenity.ComponentModel;

namespace Restaurant.Default.Forms;

[FormScript("Default.CategoryMeals")]
[BasedOnRow(typeof(CategoryMealsRow), CheckNames = true)]
public class CategoryMealsForm
{
    [Required]
    public string CategoryMealsName { get; set; }
 
    public string Photo { get; set; }
    public string Description { get; set; }
}