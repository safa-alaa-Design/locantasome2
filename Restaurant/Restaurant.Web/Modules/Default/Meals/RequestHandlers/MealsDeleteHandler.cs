using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Restaurant.Default.MealsRow;

namespace Restaurant.Default;

public interface IMealsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class MealsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMealsDeleteHandler
{
    public MealsDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}