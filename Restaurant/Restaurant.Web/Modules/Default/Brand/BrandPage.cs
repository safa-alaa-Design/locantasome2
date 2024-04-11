using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Restaurant.Default.Pages;

[PageAuthorize(typeof(BrandRow))]
public class BrandPage : Controller
{
    [Route("Default/Brand")]
    public ActionResult Index()
    {
        return this.GridPage("@/Default/Brand/BrandPage",
            BrandRow.Fields.PageTitle());
    }
}