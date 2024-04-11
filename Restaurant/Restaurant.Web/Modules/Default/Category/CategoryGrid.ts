import { CategoryColumns, CategoryRow, CategoryService } from '@/ServerTypes/Default';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { GridOptions } from '@serenity-is/sleekgrid';
import { CategoryDialog } from './CategoryDialog';

@Decorators.registerClass('Restaurant.Default.CategoryGrid')
export class CategoryGrid extends EntityGrid<CategoryRow, any> {
    protected getColumnsKey() { return CategoryColumns.columnsKey; }
    protected getDialogType() { return CategoryDialog; }
    protected getRowDefinition() { return CategoryRow; }
    protected getService() { return CategoryService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
    protected getSlickOptions(): GridOptions {
        let opt = super.getSlickOptions();
        opt.rowHeight = 40;
        return opt
    }
}