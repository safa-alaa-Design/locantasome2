using Serenity.ComponentModel;

namespace Restaurant.Default.Forms;

[FormScript("Default.Product")]
[BasedOnRow(typeof(ProductRow), CheckNames = true)]
public class ProductForm
{
    [Required]
    public string ProductName { get; set; }
    public string Description { get; set; }
    [DisplayFormat("00.0")]
    [Required]
    public decimal Price { get; set; }
    [Required]
    public string Currency { get; set; }
    [DisplayFormat("00.0")]
    public decimal PriceBefor { get; set; }
    [Required]
    public string Photo { get; set; }
    [Required]
    public int CategoryId { get; set; }
}