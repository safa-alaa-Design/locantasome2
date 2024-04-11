using Serenity.ComponentModel;

namespace Restaurant.Default.Forms;

[FormScript("Default.Product")]
[BasedOnRow(typeof(ProductRow), CheckNames = true)]
public class ProductForm
{
    [Required]
    public string ProductName { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public string Currency { get; set; }
    public decimal PriceBefor { get; set; }
    [Required]
    public string Photo { get; set; }
    [Required]
    public int CategoryId { get; set; }
}