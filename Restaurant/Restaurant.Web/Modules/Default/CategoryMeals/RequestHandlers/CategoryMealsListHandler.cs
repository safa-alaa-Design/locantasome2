using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Restaurant.Default.CategoryMealsRow>;
using MyRow = Restaurant.Default.CategoryMealsRow;

namespace Restaurant.Default;

public interface ICategoryMealsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class CategoryMealsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICategoryMealsListHandler
{
    public CategoryMealsListHandler(IRequestContext context)
            : base(context)
    {
    }
}