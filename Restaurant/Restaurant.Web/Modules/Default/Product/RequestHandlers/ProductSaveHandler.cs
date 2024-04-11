using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Restaurant.Default.ProductRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Restaurant.Default.ProductRow;

namespace Restaurant.Default;

public interface IProductSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class ProductSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductSaveHandler
{
    public ProductSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}