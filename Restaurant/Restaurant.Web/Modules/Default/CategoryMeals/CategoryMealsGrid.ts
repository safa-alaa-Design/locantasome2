/*import { CategoryMealsColumns, CategoryMealsRow, CategoryMealsService } from '@/ServerTypes/Default';*/
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { GridOptions } from '@serenity-is/sleekgrid';
import { CategoryMealsColumns } from '../../ServerTypes/Default/CategoryMealsColumns';
import { CategoryMealsRow } from '../../ServerTypes/Default/CategoryMealsRow';
import { CategoryMealsService } from '../../ServerTypes/Default/CategoryMealsService';
import { CategoryMealsDialog } from './CategoryMealsDialog';

@Decorators.registerClass('Restaurant.Default.CategoryMealsGrid')
export class CategoryMealsGrid extends EntityGrid<CategoryMealsRow, any> {
    protected getColumnsKey() { return CategoryMealsColumns.columnsKey; }
    protected getDialogType() { return CategoryMealsDialog; }
    protected getRowDefinition() { return CategoryMealsRow; }
    protected getService() { return CategoryMealsService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    protected getSlickOptions(): GridOptions {
        let opt = super.getSlickOptions();
        opt.rowHeight = 40;
        return opt
    }
}