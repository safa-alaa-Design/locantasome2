import { Decorators, Formatter, Lookup, resolveUrl } from "@serenity-is/corelib";
import { FormatterContext } from "@serenity-is/sleekgrid";


@Decorators.registerFormatter('Restaurant,ImageViewerFormatter')

export class ImageViewerFormatter implements Formatter {
    format(ctx: FormatterContext) {
        let imagepath = ctx.value;
        let src = resolveUrl("~/upload/" + imagepath)
        if (!imagepath)
            return `<span class ="text-danger"><i class="fa af-thums-down"></i></span>`

        return `<a class="inline-image" target = '_blank' href= "${src}"><img src="${src}" width= "40" height ="40"></a>`;

    }
}