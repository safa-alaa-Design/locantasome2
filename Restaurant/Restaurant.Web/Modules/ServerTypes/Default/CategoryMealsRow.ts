import { fieldsProxy } from "@serenity-is/corelib";

export interface CategoryMealsRow {
    Id?: number;
    CategoryMealsName?: string;
    Photo?: string;
    Description?: string;
}

export abstract class CategoryMealsRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'CategoryMealsName';
    static readonly localTextPrefix = 'Default.CategoryMeals';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<CategoryMealsRow>();
}