import { CategortFormatter } from "@/Default/Product/CategryFormatter";
import { ImageViewerFormatter } from "@/Default/Product/ImageViewerFormatter";
import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ProductRow } from "./ProductRow";

export interface ProductColumns {
    Id: Column<ProductRow>;
    ProductName: Column<ProductRow>;
    Description: Column<ProductRow>;
    Price: Column<ProductRow>;
    Currency: Column<ProductRow>;
    PriceBefor: Column<ProductRow>;
    Photo: Column<ProductRow>;
    CategoryId: Column<ProductRow>;
}

export class ProductColumns extends ColumnsBase<ProductRow> {
    static readonly columnsKey = 'Default.Product';
    static readonly Fields = fieldsProxy<ProductColumns>();
}

[ImageViewerFormatter, CategortFormatter]; // referenced types