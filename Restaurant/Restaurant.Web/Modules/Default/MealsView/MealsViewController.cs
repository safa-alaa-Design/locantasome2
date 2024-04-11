using Restaurant.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Restaurant.Modules.Default.MealsView;
[Route("MealsView/[action]")]
public class MealsViewController : Controller
{
    public IActionResult Index(int id)
    {
        locantaContext db = new locantaContext();
        var categories = db.Categories.ToList();
        var meals=db.Meals.Where(p => p.Id == id).ToList();
        var brand=db.Brands.ToList();
        var MealsItem = db.Items
            .Include(x => x.Meals)
             .Where(p => p.Meals.Id == id)
            .ToList();

        ViewBag.Brands = brand;
        ViewBag.Meals = meals;
        return View(MVC.Views.Default.MealsView.Meals, MealsItem);
    }
}
