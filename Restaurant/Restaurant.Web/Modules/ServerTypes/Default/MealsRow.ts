import { fieldsProxy } from "@serenity-is/corelib";

export interface MealsRow {
    Id?: number;
    MealsName?: string;
    Photo?: string;
    Description?: string;
    Price?: number;
    PriceBefor?: number;
    Currency?: string;
    CategoryMealsId?: number;
    CategoryMealsName?: string;
}

export abstract class MealsRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'MealsName';
    static readonly localTextPrefix = 'Default.Meals';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<MealsRow>();
}