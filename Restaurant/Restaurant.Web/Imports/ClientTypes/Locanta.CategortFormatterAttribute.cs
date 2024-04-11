using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Locanta;

public partial class CategortFormatterAttribute : CustomFormatterAttribute
{
    public const string Key = "Locanta.BrandFormatter";

    public CategortFormatterAttribute()
        : base(Key)
    {
    }
}