using MyRequest = Serenity.Services.SaveRequest<Restaurant.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Restaurant.Administration.LanguageRow;


namespace Restaurant.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}