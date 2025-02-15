﻿
namespace MVC;

public static class Views
{
    public static class Common
    {
        public static class Dashboard
        {
            public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
        }

    }

    public static class Default
    {
        public static class CategoryMealsView
        {
            public const string IndexCategoryMeals = "~/Modules/Default/CategoryMealsView/IndexCategoryMeals.cshtml";
        }

        public static class CategoryView
        {
            public const string CategoryIndex = "~/Modules/Default/CategoryView/CategoryIndex.cshtml";
        }

        public static class Home
        {
            public const string IndexHome = "~/Modules/Default/Home/IndexHome.cshtml";
        }

        public static class MealsView
        {
            public const string Meals = "~/Modules/Default/MealsView/Meals.cshtml";
        }

        public static class OurMenus
        {
            public const string IndexMenus = "~/Modules/Default/OurMenus/IndexMenus.cshtml";
        }

        public static class ProductView
        {
            public const string ProductIndex = "~/Modules/Default/ProductView/ProductIndex.cshtml";
        }
    }

    public static class Errors
    {
        public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
        public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
    }

    public static class Membership
    {
        public static class Account
        {
            public static class Login
            {
                public const string LoginPage = "~/Modules/Membership/Account/Login/LoginPage.cshtml";
            }

            public static class SignUp
            {
                public const string ActivateEmail = "~/Modules/Membership/Account/SignUp/ActivateEmail.cshtml";
                public const string SignUpPage = "~/Modules/Membership/Account/SignUp/SignUpPage.cshtml";
            }
        }
    }

    public static class Shared
    {
        public const string _Layout = "~/Views/Shared/_Layout.cshtml";
        public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
        public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
        public const string _MyNewLayout = "~/Views/Shared/_MyNewLayout.cshtml";
        public const string _Sidebar = "~/Views/Shared/_Sidebar.cshtml";
        public const string Error = "~/Views/Shared/Error.cshtml";
    }
}