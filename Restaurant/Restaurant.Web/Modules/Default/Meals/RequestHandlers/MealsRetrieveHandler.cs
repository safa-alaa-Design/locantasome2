using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Restaurant.Default.MealsRow>;
using MyRow = Restaurant.Default.MealsRow;

namespace Restaurant.Default;

public interface IMealsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class MealsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMealsRetrieveHandler
{
    public MealsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}