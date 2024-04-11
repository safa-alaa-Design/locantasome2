using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Restaurant.Default.Pages;

[PageAuthorize(typeof(CategoryMealsRow))]
public class CategoryMealsPage : Controller
{
    [Route("Default/CategoryMeals")]
    public ActionResult Index()
    {
        return this.GridPage("@/Default/CategoryMeals/CategoryMealsPage",
            CategoryMealsRow.Fields.PageTitle());
    }
}