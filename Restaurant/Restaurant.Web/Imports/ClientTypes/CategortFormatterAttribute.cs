using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Restaurant;

public partial class CategortFormatterAttribute : CustomFormatterAttribute
{
    public const string Key = "Restaurant.BrandFormatter";

    public CategortFormatterAttribute()
        : base(Key)
    {
    }
}