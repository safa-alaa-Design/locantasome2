import { MealsForm, MealsRow, MealsService } from '@/ServerTypes/Default';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Restaurant.Default.MealsDialog')
export class MealsDialog extends EntityDialog<MealsRow, any> {
    protected getFormKey() { return MealsForm.formKey; }
    protected getRowDefinition() { return MealsRow; }
    protected getService() { return MealsService.baseUrl; }

    protected form = new MealsForm(this.idPrefix);
}