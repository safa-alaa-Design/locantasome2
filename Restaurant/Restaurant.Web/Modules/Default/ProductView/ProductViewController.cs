using Restaurant.Models;
using Restaurant.ModelView;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Math;

namespace Restaurant.Modules.Default.ProductView;
[Route("ProductView/[action]")]

public class ProductViewController : Controller
{
    locantaContext db = new locantaContext();

    public IActionResult Index(int id)
    {
        var brands = db.Brands.ToList();
        var products = db.Products.Where(x => x.Id == id).Select(p => new ModelseView
        {
            ProductId = p.Id,
            ProductName = p.ProductName,
            MainPhoto = p.Photo,
            Price = p.Price,
            PriceBefor = p.PriceBefor,
            Currency = p.Currency,
            Description = p.Description,
            CategoryId = p.CategoryId,



            Category = new CategoryViewModel
            {
                CategoryId = p.Category.Id,
                CategoryName = p.Category.CategoryName,
                Photo = p.Category.Photo,
                Description = p.Category.Description,

            }
        }).ToList();

        ViewBag.Brands = brands;

        return View(MVC.Views.Default.ProductView.ProductIndex, products);
    }
}

