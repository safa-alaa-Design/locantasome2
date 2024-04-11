import { BrandColumns, BrandRow, BrandService } from '@/ServerTypes/Default';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { BrandDialog } from './BrandDialog';

@Decorators.registerClass('Restaurant.Default.BrandGrid')
export class BrandGrid extends EntityGrid<BrandRow, any> {
    protected getColumnsKey() { return BrandColumns.columnsKey; }
    protected getDialogType() { return BrandDialog; }
    protected getRowDefinition() { return BrandRow; }
    protected getService() { return BrandService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}