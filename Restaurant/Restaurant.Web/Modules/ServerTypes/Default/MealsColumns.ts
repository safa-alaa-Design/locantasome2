import { ImageViewerFormatter } from "@/Default/Product/ImageViewerFormatter";
import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { MealsRow } from "./MealsRow";

export interface MealsColumns {
    Id: Column<MealsRow>;
    MealsName: Column<MealsRow>;
    Photo: Column<MealsRow>;
    Description: Column<MealsRow>;
    Price: Column<MealsRow>;
    PriceBefor: Column<MealsRow>;
    Currency: Column<MealsRow>;
}

export class MealsColumns extends ColumnsBase<MealsRow> {
    static readonly columnsKey = 'Default.Meals';
    static readonly Fields = fieldsProxy<MealsColumns>();
}

[ImageViewerFormatter]; // referenced types