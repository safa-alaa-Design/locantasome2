using Serenity.Navigation;
using MyPages = Restaurant.Default.Pages;

[assembly: NavigationLink(1000, "Web Site", url: "~/Home/IndexHome", permission: "", icon: "fa-solid fa-globe")]
[assembly: NavigationLink(int.MaxValue, "Add Items/Category", typeof(MyPages.CategoryPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Add Items/Product", typeof(MyPages.ProductPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Add Items/Brand", typeof(MyPages.BrandPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Add Items/Item", typeof(MyPages.ItemPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Add Items/Meals", typeof(MyPages.MealsPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Add Items/Category Meals", typeof(MyPages.CategoryMealsPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Add Items/Category Meals", typeof(MyPages.CategoryMealsPage), icon: null)]