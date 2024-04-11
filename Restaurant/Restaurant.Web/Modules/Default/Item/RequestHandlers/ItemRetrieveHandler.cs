using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Restaurant.Default.ItemRow>;
using MyRow = Restaurant.Default.ItemRow;

namespace Restaurant.Default;

public interface IItemRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class ItemRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IItemRetrieveHandler
{
    public ItemRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}