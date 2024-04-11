using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Restaurant.Default.Pages;

[PageAuthorize(typeof(ItemRow))]
public class ItemPage : Controller
{
    [Route("Default/Item")]
    public ActionResult Index()
    {
        return this.GridPage("@/Default/Item/ItemPage",
            ItemRow.Fields.PageTitle());
    }
}