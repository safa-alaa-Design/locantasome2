import { BrandForm, BrandRow, BrandService } from '@/ServerTypes/Default';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Restaurant.Default.BrandDialog')
export class BrandDialog extends EntityDialog<BrandRow, any> {
    protected getFormKey() { return BrandForm.formKey; }
    protected getRowDefinition() { return BrandRow; }
    protected getService() { return BrandService.baseUrl; }

    protected form = new BrandForm(this.idPrefix);
}