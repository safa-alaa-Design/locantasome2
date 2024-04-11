using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Restaurant.Default.CategoryRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Restaurant.Default.CategoryRow;

namespace Restaurant.Default;

public interface ICategorySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class CategorySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICategorySaveHandler
{
    public CategorySaveHandler(IRequestContext context)
            : base(context)
    {
    }
}