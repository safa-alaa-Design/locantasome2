using MyRequest = Restaurant.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<Restaurant.Administration.UserRow>;
using MyRow = Restaurant.Administration.UserRow;

namespace Restaurant.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}