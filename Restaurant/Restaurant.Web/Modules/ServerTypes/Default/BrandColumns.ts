import { ImageViewerFormatter } from "@/Default/Product/ImageViewerFormatter";
import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { BrandRow } from "./BrandRow";

export interface BrandColumns {
    Id: Column<BrandRow>;
    BrandName: Column<BrandRow>;
    Photo: Column<BrandRow>;
    PhoneNember: Column<BrandRow>;
    WhtasApp: Column<BrandRow>;
    FaceBook: Column<BrandRow>;
    Twitter: Column<BrandRow>;
    Instagram: Column<BrandRow>;
    Tiktok: Column<BrandRow>;
    Telegram: Column<BrandRow>;
    Description: Column<BrandRow>;
}

export class BrandColumns extends ColumnsBase<BrandRow> {
    static readonly columnsKey = 'Default.Brand';
    static readonly Fields = fieldsProxy<BrandColumns>();
}

[ImageViewerFormatter]; // referenced types