﻿namespace Restaurant.Administration;

public class UserPermissionUpdateRequest : ServiceRequest
{
    public int? UserID { get; set; }
    public List<UserPermissionRow> Permissions { get; set; }
}