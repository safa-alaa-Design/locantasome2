import { StringEditor, ImageUploadEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface CategoryForm {
    CategoryName: StringEditor;
    Photo: ImageUploadEditor;
    Description: StringEditor;
}

export class CategoryForm extends PrefixedContext {
    static readonly formKey = 'Default.Category';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CategoryForm.init)  {
            CategoryForm.init = true;

            var w0 = StringEditor;
            var w1 = ImageUploadEditor;

            initFormType(CategoryForm, [
                'CategoryName', w0,
                'Photo', w1,
                'Description', w0
            ]);
        }
    }
}