import { initFullHeightGridPage } from '@serenity-is/corelib';
import { ItemGrid } from './ItemGrid';

export default function pageInit() {
    initFullHeightGridPage(new ItemGrid($('#GridDiv')).element);
}