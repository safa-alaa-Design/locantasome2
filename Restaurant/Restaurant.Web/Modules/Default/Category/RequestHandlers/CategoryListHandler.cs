using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Restaurant.Default.CategoryRow>;
using MyRow = Restaurant.Default.CategoryRow;

namespace Restaurant.Default;

public interface ICategoryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class CategoryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICategoryListHandler
{
    public CategoryListHandler(IRequestContext context)
            : base(context)
    {
    }
}