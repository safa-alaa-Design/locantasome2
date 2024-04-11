using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Restaurant.Default.ItemRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Restaurant.Default.ItemRow;

namespace Restaurant.Default;

public interface IItemSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class ItemSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IItemSaveHandler
{
    public ItemSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}