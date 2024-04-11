import { Decorators, Formatter, Lookup } from "@serenity-is/corelib";
import { FormatterContext } from "@serenity-is/sleekgrid";
import { CategoryRow } from "../../ServerTypes/Default";


@Decorators.registerFormatter('Restaurant.BrandFormatter')
export class CategortFormatter implements Formatter {

    format(ctx: FormatterContext) {

        let CategoryId = ctx.value;
        if (!CategoryId)
            return `<span class="text-dangere">--------</span>`
        else {
            return CategoryRow.getLookup().items.filter(x => x.Id == CategoryId)[0].CategoryName;
        }
    }
}