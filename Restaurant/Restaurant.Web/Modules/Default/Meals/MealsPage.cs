using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Restaurant.Default.Pages;

[PageAuthorize(typeof(MealsRow))]
public class MealsPage : Controller
{
    [Route("Default/Meals")]
    public ActionResult Index()
    {
        return this.GridPage("@/Default/Meals/MealsPage",
            MealsRow.Fields.PageTitle());
    }
}