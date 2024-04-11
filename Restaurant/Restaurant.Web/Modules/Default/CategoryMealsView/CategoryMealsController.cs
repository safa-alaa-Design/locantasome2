using Microsoft.AspNetCore.Mvc;

namespace Restaurant.Modules.Default.CategoryMealsView;
[Route("CategoryMealsView/[action]")]
public class CategoryMealsController : Controller
{
    public IActionResult Index()
    {
        return View(MVC.Views.Default.CategoryMealsView.IndexCategoryMeals);
    }
}
