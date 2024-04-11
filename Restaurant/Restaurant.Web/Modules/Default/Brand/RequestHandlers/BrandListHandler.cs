using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Restaurant.Default.BrandRow>;
using MyRow = Restaurant.Default.BrandRow;

namespace Restaurant.Default;

public interface IBrandListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class BrandListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBrandListHandler
{
    public BrandListHandler(IRequestContext context)
            : base(context)
    {
    }
}