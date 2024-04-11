import { StringEditor, ImageUploadEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface CategoryMealsForm {
    CategoryMealsName: StringEditor;
    Photo: ImageUploadEditor;
    Description: StringEditor;
}

export class CategoryMealsForm extends PrefixedContext {
    static readonly formKey = 'Default.CategoryMeals';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CategoryMealsForm.init)  {
            CategoryMealsForm.init = true;

            var w0 = StringEditor;
            var w1 = ImageUploadEditor;

            initFormType(CategoryMealsForm, [
                'CategoryMealsName', w0,
                'Photo', w1,
                'Description', w0
            ]);
        }
    }
}