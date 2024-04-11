using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Restaurant.Default.CategoryMealsRow>;
using MyRow = Restaurant.Default.CategoryMealsRow;

namespace Restaurant.Default;

public interface ICategoryMealsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class CategoryMealsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoryMealsRetrieveHandler
{
    public CategoryMealsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}