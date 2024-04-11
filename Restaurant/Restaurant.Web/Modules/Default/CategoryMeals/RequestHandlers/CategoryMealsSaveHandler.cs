using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Restaurant.Default.CategoryMealsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Restaurant.Default.CategoryMealsRow;

namespace Restaurant.Default;

public interface ICategoryMealsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class CategoryMealsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoryMealsSaveHandler
{
    public CategoryMealsSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}