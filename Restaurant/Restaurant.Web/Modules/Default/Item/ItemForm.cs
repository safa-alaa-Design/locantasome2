using Serenity.ComponentModel;

namespace Restaurant.Default.Forms;

[FormScript("Default.Item")]
[BasedOnRow(typeof(ItemRow), CheckNames = true)]
public class ItemForm
{
    [Required]
    public string ItemName { get; set; }
    [Required]

    public string Photo { get; set; }
    public string Description { get; set; }
    [Required]

    public int MealsId { get; set; }
}