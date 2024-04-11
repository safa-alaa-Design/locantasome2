using Restaurant.Models;

namespace Restaurant.ModelView;

public class ModelView
{

}

public class ModelseView
{
    public int ProductId { get; set; }
    public decimal? Price { get; set; }
    public decimal? PriceBefor { get; set; }
    public string Currency { get; set; }
    public string ProductName { get; set; }
    public string Description { get; set; }
    public string MainPhoto { get; set; }
    public DateTime? InsertionDate { get; set; }
    public int? CategoryId { get; set; }
    public CategoryViewModel Category { get; set; }
    public List<Product> Products { get; set; }

}
public class CategoryViewModel
{
    public int CategoryId { get; set; }
    public string CategoryName { get; set; }
    public string Photo { get; set; }
    public string Description { get; set; }


}


