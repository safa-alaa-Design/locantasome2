using Restaurant.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Restaurant.Modules.Default.CategoryView;
[Route("CategoryView/[action]")]
public class CategoryViewController : Controller
{
    public IActionResult Index(int id)
    {
        locantaContext db = new locantaContext();
        var categories = db.Categories.ToList();

        var products = db.Products
            .Include(x => x.Category)
             .Where(p => p.Category.Id == id)
            .ToList();

        return View(MVC.Views.Default.CategoryView.CategoryIndex, products);
    }

}
