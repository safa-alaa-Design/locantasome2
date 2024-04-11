using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Restaurant.Default.CategoryRow>;
using MyRow = Restaurant.Default.CategoryRow;

namespace Restaurant.Default;

public interface ICategoryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class CategoryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoryRetrieveHandler
{
    public CategoryRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}