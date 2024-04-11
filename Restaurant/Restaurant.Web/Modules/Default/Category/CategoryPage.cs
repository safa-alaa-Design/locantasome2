using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Restaurant.Default.Pages;

[PageAuthorize(typeof(CategoryRow))]
public class CategoryPage : Controller
{
    [Route("Default/Category")]
    public ActionResult Index()
    {
        return this.GridPage("@/Default/Category/CategoryPage",
            CategoryRow.Fields.PageTitle());
    }
}