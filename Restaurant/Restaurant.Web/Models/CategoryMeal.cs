using System;
using System.Collections.Generic;

namespace Restaurant.Models
{
    public partial class CategoryMeal
    {
        public CategoryMeal()
        {
            Meals = new HashSet<Meal>();
        }

        public int Id { get; set; }
        public string CategoryMealsName { get; set; }
        public string Photo { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Meal> Meals { get; set; }
    }
}
