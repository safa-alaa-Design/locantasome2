import { fieldsProxy } from "@serenity-is/corelib";

export interface ProductRow {
    Id?: number;
    ProductName?: string;
    Description?: string;
    Price?: number;
    Currency?: string;
    PriceBefor?: number;
    Photo?: string;
    CategoryId?: number;
    CategoryName?: string;
}

export abstract class ProductRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'ProductName';
    static readonly localTextPrefix = 'Default.Product';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ProductRow>();
}