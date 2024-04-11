import { StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface BrandForm {
    BrandName: StringEditor;
    Photo: StringEditor;
    PhoneNember: StringEditor;
    WhtasApp: StringEditor;
    FaceBook: StringEditor;
    Twitter: StringEditor;
    Instagram: StringEditor;
    Tiktok: StringEditor;
    Telegram: StringEditor;
    Description: StringEditor;
}

export class BrandForm extends PrefixedContext {
    static readonly formKey = 'Default.Brand';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BrandForm.init)  {
            BrandForm.init = true;

            var w0 = StringEditor;

            initFormType(BrandForm, [
                'BrandName', w0,
                'Photo', w0,
                'PhoneNember', w0,
                'WhtasApp', w0,
                'FaceBook', w0,
                'Twitter', w0,
                'Instagram', w0,
                'Tiktok', w0,
                'Telegram', w0,
                'Description', w0
            ]);
        }
    }
}