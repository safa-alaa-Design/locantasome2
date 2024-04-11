import { fieldsProxy } from "@serenity-is/corelib";

export interface BrandRow {
    Id?: number;
    BrandName?: string;
    Photo?: string;
    PhoneNember?: string;
    WhtasApp?: string;
    FaceBook?: string;
    Twitter?: string;
    Instagram?: string;
    Tiktok?: string;
    Telegram?: string;
    Description?: string;
}

export abstract class BrandRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'BrandName';
    static readonly localTextPrefix = 'Default.Brand';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<BrandRow>();
}