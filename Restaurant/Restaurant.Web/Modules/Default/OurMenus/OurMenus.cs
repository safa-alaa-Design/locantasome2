using Restaurant.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Restaurant.Modules.Default.OurMenus;
[Route("OurMenus/[action]")]
public class OurMenus : Controller
{
    locantaContext db = new locantaContext();
    public IActionResult Index()
    {

        var meals = db.Meals.Include(x=>x.Items).ToList();
        var item = db.Items.ToList();
        var category = db.Categories.ToList();
        var categoryMeals = db.CategoryMeals.Include(x=>x.Meals).ThenInclude(x=>x.Items).ToList();




        var product = db.Products.Include(x=>x.Category).ToList();

        ViewBag.CategoryMeals=categoryMeals;
        ViewBag.Items = item;
        ViewBag.Categories = category;
        ViewBag.Meals = meals;
        return View(MVC.Views.Default.OurMenus.IndexMenus, product);
    }
}
