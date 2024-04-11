using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Restaurant.Default.ItemRow>;
using MyRow = Restaurant.Default.ItemRow;

namespace Restaurant.Default;

public interface IItemListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class ItemListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IItemListHandler
{
    public ItemListHandler(IRequestContext context)
            : base(context)
    {
    }
}