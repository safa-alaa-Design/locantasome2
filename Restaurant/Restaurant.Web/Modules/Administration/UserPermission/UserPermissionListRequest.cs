﻿namespace Restaurant.Administration;

public class UserPermissionListRequest : ServiceRequest
{
    public int? UserID { get; set; }
}