using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Restaurant;

public partial class ImageViewerFormatterAttribute : CustomFormatterAttribute
{
    public const string Key = "Restaurant,ImageViewerFormatter";

    public ImageViewerFormatterAttribute()
        : base(Key)
    {
    }
}