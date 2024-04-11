import { ImageViewerFormatter } from "@/Default/Product/ImageViewerFormatter";
import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ItemRow } from "./ItemRow";

export interface ItemColumns {
    Id: Column<ItemRow>;
    ItemName: Column<ItemRow>;
    Photo: Column<ItemRow>;
    Description: Column<ItemRow>;
    MealsName: Column<ItemRow>;
}

export class ItemColumns extends ColumnsBase<ItemRow> {
    static readonly columnsKey = 'Default.Item';
    static readonly Fields = fieldsProxy<ItemColumns>();
}

[ImageViewerFormatter]; // referenced types