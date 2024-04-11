using System;
using System.Collections.Generic;

namespace Restaurant.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public decimal? Price { get; set; }
        public string Currency { get; set; }
  
        public decimal? PriceBefor { get; set; }
        public string Photo { get; set; }
        public int? CategoryId { get; set; }

        public virtual Category Category { get; set; }
    }
}
