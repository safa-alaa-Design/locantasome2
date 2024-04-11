using System;
using System.Collections.Generic;

namespace Restaurant.Models
{
    public partial class Meal
    {
        public Meal()
        {
            Items = new HashSet<Item>();
        }

        public int Id { get; set; }
        public string MealsName { get; set; }
        public string Photo { get; set; }
        public string Description { get; set; }
        public decimal? Price { get; set; }
        public decimal? PriceBefor { get; set; }
        public string Currency { get; set; }
        public int? CategoryMealsId { get; set; }

        public virtual CategoryMeal CategoryMeals { get; set; }
        public virtual ICollection<Item> Items { get; set; }
    }
}
