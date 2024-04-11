using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Restaurant.Default.MealsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Restaurant.Default.MealsRow;

namespace Restaurant.Default;

public interface IMealsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class MealsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMealsSaveHandler
{
    public MealsSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}