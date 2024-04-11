using Serenity.ComponentModel;

namespace Restaurant.Default.Forms;

[FormScript("Default.Item")]
[BasedOnRow(typeof(ItemRow), CheckNames = true)]
public class ItemForm
{
    public string ItemName { get; set; }
    public string Photo { get; set; }
    public string Description { get; set; }
    public int MealsId { get; set; }
}