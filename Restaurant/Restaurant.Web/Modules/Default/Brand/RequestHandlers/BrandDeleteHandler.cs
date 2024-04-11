using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Restaurant.Default.BrandRow;

namespace Restaurant.Default;

public interface IBrandDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class BrandDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBrandDeleteHandler
{
    public BrandDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}