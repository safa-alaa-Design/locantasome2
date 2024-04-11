import { fieldsProxy } from "@serenity-is/corelib";

export interface ItemRow {
    Id?: number;
    ItemName?: string;
    Photo?: string;
    Description?: string;
    MealsId?: number;
    MealsName?: string;
}

export abstract class ItemRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'ItemName';
    static readonly localTextPrefix = 'Default.Item';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ItemRow>();
}