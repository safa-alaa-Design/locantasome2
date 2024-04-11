import { MealsColumns, MealsRow, MealsService } from '@/ServerTypes/Default';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { GridOptions } from '@serenity-is/sleekgrid';
import { MealsDialog } from './MealsDialog';

@Decorators.registerClass('Restaurant.Default.MealsGrid')
export class MealsGrid extends EntityGrid<MealsRow, any> {
    protected getColumnsKey() { return MealsColumns.columnsKey; }
    protected getDialogType() { return MealsDialog; }
    protected getRowDefinition() { return MealsRow; }
    protected getService() { return MealsService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
    protected getSlickOptions(): GridOptions {
        let opt = super.getSlickOptions();
        opt.rowHeight = 40;
        return opt
    }
}