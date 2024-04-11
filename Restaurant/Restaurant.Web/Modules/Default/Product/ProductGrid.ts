import { ProductColumns, ProductRow, ProductService } from '@/ServerTypes/Default';
import { Decorators, EntityGrid, notifyError } from '@serenity-is/corelib';
import { GridOptions } from '@serenity-is/sleekgrid';
import { ProductDialog } from './ProductDialog';

@Decorators.registerClass('Restaurant.Default.ProductGrid')
export class ProductGrid extends EntityGrid<ProductRow, any> {
    protected getColumnsKey() { return ProductColumns.columnsKey; }
    protected getDialogType() { return ProductDialog; }
    protected getRowDefinition() { return ProductRow; }
    protected getService() { return ProductService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
    protected getSlickOptions(): GridOptions {
        let opt = super.getSlickOptions();
        opt.rowHeight = 40;
        return opt
    }
   
}