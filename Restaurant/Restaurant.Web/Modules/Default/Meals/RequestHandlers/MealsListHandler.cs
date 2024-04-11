using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Restaurant.Default.MealsRow>;
using MyRow = Restaurant.Default.MealsRow;

namespace Restaurant.Default;

public interface IMealsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class MealsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMealsListHandler
{
    public MealsListHandler(IRequestContext context)
            : base(context)
    {
    }
}