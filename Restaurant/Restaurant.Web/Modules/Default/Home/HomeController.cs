using Restaurant.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Restaurant.Modules.Default.Home;
public class HomeController : Controller
{
    [Route("Home/[action]")]
    public IActionResult IndexHome(int id)
    {

        locantaContext db = new locantaContext();
        var brands = db.Brands.ToList();
        var catMeals = db.CategoryMeals.Include(x=>x.Meals).ToList();

        var item = db.Items.Include(x => x.Meals).ToList();
        var product = db.Products
             .Include(brn => brn.Category)
             .ToList();
        var categories = db.Categories.ToList();
        ViewBag.Brands = brands;
        var meals = db.Meals.Include(x => x.Items).ToList();
        ViewBag.Meals = meals;
        ViewBag.CategoryMeals = catMeals;
        ViewBag.Items = item;
        return View(MVC.Views.Default.Home.IndexHome ,product);
    }
}
