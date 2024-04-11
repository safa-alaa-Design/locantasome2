using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Restaurant.Default.ProductRow>;
using MyRow = Restaurant.Default.ProductRow;

namespace Restaurant.Default;

public interface IProductListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class ProductListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProductListHandler
{
    public ProductListHandler(IRequestContext context)
            : base(context)
    {
    }
}