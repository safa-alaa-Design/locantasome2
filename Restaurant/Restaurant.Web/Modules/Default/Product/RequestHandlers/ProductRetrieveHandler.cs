using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Restaurant.Default.ProductRow>;
using MyRow = Restaurant.Default.ProductRow;

namespace Restaurant.Default;

public interface IProductRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class ProductRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProductRetrieveHandler
{
    public ProductRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}