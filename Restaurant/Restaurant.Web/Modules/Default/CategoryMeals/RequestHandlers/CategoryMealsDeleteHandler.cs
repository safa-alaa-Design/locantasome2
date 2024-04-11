using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Restaurant.Default.CategoryMealsRow;

namespace Restaurant.Default;

public interface ICategoryMealsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class CategoryMealsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICategoryMealsDeleteHandler
{
    public CategoryMealsDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}