import { initFullHeightGridPage } from '@serenity-is/corelib';
import { CategoryGrid } from './CategoryGrid';

export default function pageInit() {
    initFullHeightGridPage(new CategoryGrid($('#GridDiv')).element);
}