import { initFullHeightGridPage } from '@serenity-is/corelib';
import { BrandGrid } from './BrandGrid';

export default function pageInit() {
    initFullHeightGridPage(new BrandGrid($('#GridDiv')).element);
}