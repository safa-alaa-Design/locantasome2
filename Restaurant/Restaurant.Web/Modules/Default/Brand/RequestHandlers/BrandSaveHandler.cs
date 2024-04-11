using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Restaurant.Default.BrandRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Restaurant.Default.BrandRow;

namespace Restaurant.Default;

public interface IBrandSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class BrandSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBrandSaveHandler
{
    public BrandSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}