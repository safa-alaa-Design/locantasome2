import { CategoryMealsDialog } from "@/Default/CategoryMeals/CategoryMealsDialog";
import { StringEditor, ImageUploadEditor, DecimalEditor, ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface MealsForm {
    MealsName: StringEditor;
    Photo: ImageUploadEditor;
    Description: StringEditor;
    Price: DecimalEditor;
    PriceBefor: DecimalEditor;
    Currency: StringEditor;
    CategoryMealsId: ServiceLookupEditor;
}

export class MealsForm extends PrefixedContext {
    static readonly formKey = 'Default.Meals';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!MealsForm.init)  {
            MealsForm.init = true;

            var w0 = StringEditor;
            var w1 = ImageUploadEditor;
            var w2 = DecimalEditor;
            var w3 = ServiceLookupEditor;

            initFormType(MealsForm, [
                'MealsName', w0,
                'Photo', w1,
                'Description', w0,
                'Price', w2,
                'PriceBefor', w2,
                'Currency', w0,
                'CategoryMealsId', w3
            ]);
        }
    }
}

[CategoryMealsDialog]; // referenced types