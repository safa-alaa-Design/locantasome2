using System;
using System.Collections.Generic;

namespace Restaurant.Models
{
    public partial class Item
    {
        public int Id { get; set; }
        public string ItemName { get; set; }
        public string Photo { get; set; }
        public string Description { get; set; }
        public int? MealsId { get; set; }

        public virtual Meal Meals { get; set; }
    }
}
