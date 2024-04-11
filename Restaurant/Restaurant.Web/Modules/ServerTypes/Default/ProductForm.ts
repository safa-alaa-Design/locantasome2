import { CategoryDialog } from "@/Default/Category/CategoryDialog";
import { StringEditor, DecimalEditor, ImageUploadEditor, ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface ProductForm {
    ProductName: StringEditor;
    Description: StringEditor;
    Price: DecimalEditor;
    Currency: StringEditor;
    PriceBefor: DecimalEditor;
    Photo: ImageUploadEditor;
    CategoryId: ServiceLookupEditor;
}

export class ProductForm extends PrefixedContext {
    static readonly formKey = 'Default.Product';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ProductForm.init)  {
            ProductForm.init = true;

            var w0 = StringEditor;
            var w1 = DecimalEditor;
            var w2 = ImageUploadEditor;
            var w3 = ServiceLookupEditor;

            initFormType(ProductForm, [
                'ProductName', w0,
                'Description', w0,
                'Price', w1,
                'Currency', w0,
                'PriceBefor', w1,
                'Photo', w2,
                'CategoryId', w3
            ]);
        }
    }
}

[CategoryDialog]; // referenced types