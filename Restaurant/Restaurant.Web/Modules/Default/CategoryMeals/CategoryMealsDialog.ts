
import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { CategoryMealsForm } from '../../ServerTypes/Default/CategoryMealsForm';
import { CategoryMealsRow } from '../../ServerTypes/Default/CategoryMealsRow';
import { CategoryMealsService } from '../../ServerTypes/Default/CategoryMealsService';

@Decorators.registerClass('Restaurant.Default.CategoryMealsDialog')
export class CategoryMealsDialog extends EntityDialog<CategoryMealsRow, any> {
    protected getFormKey() { return CategoryMealsForm.formKey; }
    protected getRowDefinition() { return CategoryMealsRow; }
    protected getService() { return CategoryMealsService.baseUrl; }

    protected form = new CategoryMealsForm(this.idPrefix);
}