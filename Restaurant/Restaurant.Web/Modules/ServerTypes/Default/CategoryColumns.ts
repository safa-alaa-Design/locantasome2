import { ImageViewerFormatter } from "@/Default/Product/ImageViewerFormatter";
import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CategoryRow } from "./CategoryRow";

export interface CategoryColumns {
    Id: Column<CategoryRow>;
    CategoryName: Column<CategoryRow>;
    Photo: Column<CategoryRow>;
}

export class CategoryColumns extends ColumnsBase<CategoryRow> {
    static readonly columnsKey = 'Default.Category';
    static readonly Fields = fieldsProxy<CategoryColumns>();
}

[ImageViewerFormatter]; // referenced types