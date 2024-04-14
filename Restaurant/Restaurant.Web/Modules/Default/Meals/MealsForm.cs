using Serenity.ComponentModel;

namespace Restaurant.Default.Forms;

[FormScript("Default.Meals")]
[BasedOnRow(typeof(MealsRow), CheckNames = true)]
public class MealsForm
{
    [Required]

    public string MealsName { get; set; }
    [Required]

    public string Photo { get; set; }
    public string Description { get; set; }
    [Required]

    public decimal Price { get; set; }
    public decimal PriceBefor { get; set; }
    [Required]

    public string Currency { get; set; }
    [Required]
    public int CategoryMealsId { get; set; }
}