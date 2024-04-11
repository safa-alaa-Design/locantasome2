import { StringEditor, ImageUploadEditor, ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface ItemForm {
    ItemName: StringEditor;
    Photo: ImageUploadEditor;
    Description: StringEditor;
    MealsId: ServiceLookupEditor;
}

export class ItemForm extends PrefixedContext {
    static readonly formKey = 'Default.Item';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ItemForm.init)  {
            ItemForm.init = true;

            var w0 = StringEditor;
            var w1 = ImageUploadEditor;
            var w2 = ServiceLookupEditor;

            initFormType(ItemForm, [
                'ItemName', w0,
                'Photo', w1,
                'Description', w0,
                'MealsId', w2
            ]);
        }
    }
}