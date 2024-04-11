import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface CategoryRow {
    Id?: number;
    CategoryName?: string;
    Photo?: string;
    Description?: string;
}

export abstract class CategoryRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'CategoryName';
    static readonly localTextPrefix = 'Default.Category';
    static readonly lookupKey = 'Default.Category';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<CategoryRow>('Default.Category') }
    static async getLookupAsync() { return getLookupAsync<CategoryRow>('Default.Category') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<CategoryRow>();
}