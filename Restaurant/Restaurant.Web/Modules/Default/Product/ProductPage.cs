using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Restaurant.Default.Pages;

[PageAuthorize(typeof(ProductRow))]
public class ProductPage : Controller
{
    [Route("Default/Product")]
    public ActionResult Index()
    {
        return this.GridPage("@/Default/Product/ProductPage",
            ProductRow.Fields.PageTitle());
    }
}