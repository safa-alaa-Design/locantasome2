using Serenity.ComponentModel;

namespace Restaurant.Default.Forms;

[FormScript("Default.Meals")]
[BasedOnRow(typeof(MealsRow), CheckNames = true)]
public class MealsForm
{
    public string MealsName { get; set; }
    public string Photo { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public decimal PriceBefor { get; set; }
    public string Currency { get; set; }
    [Required]
    public int CategoryMealsId { get; set; }
}