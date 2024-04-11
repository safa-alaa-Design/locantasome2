using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Restaurant.Default.BrandRow>;
using MyRow = Restaurant.Default.BrandRow;

namespace Restaurant.Default;

public interface IBrandRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class BrandRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBrandRetrieveHandler
{
    public BrandRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}