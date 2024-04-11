import { ItemColumns, ItemRow, ItemService } from '@/ServerTypes/Default';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { GridOptions } from '@serenity-is/sleekgrid';
import { ItemDialog } from './ItemDialog';

@Decorators.registerClass('Restaurant.Default.ItemGrid')
export class ItemGrid extends EntityGrid<ItemRow, any> {
    protected getColumnsKey() { return ItemColumns.columnsKey; }
    protected getDialogType() { return ItemDialog; }
    protected getRowDefinition() { return ItemRow; }
    protected getService() { return ItemService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    protected getSlickOptions(): GridOptions {
        let opt = super.getSlickOptions();
        opt.rowHeight = 40;
        return opt
    }
}