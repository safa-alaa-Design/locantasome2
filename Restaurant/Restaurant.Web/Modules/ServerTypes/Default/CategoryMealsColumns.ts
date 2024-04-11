import { ImageViewerFormatter } from "@/Default/Product/ImageViewerFormatter";
import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CategoryMealsRow } from "./CategoryMealsRow";

export interface CategoryMealsColumns {
    Id: Column<CategoryMealsRow>;
    CategoryMealsName: Column<CategoryMealsRow>;
    Photo: Column<CategoryMealsRow>;
    Description: Column<CategoryMealsRow>;
}

export class CategoryMealsColumns extends ColumnsBase<CategoryMealsRow> {
    static readonly columnsKey = 'Default.CategoryMeals';
    static readonly Fields = fieldsProxy<CategoryMealsColumns>();
}

[ImageViewerFormatter]; // referenced types