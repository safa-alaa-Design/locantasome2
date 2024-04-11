import { initFullHeightGridPage } from '@serenity-is/corelib';
import { MealsGrid } from './MealsGrid';

export default function pageInit() {
    initFullHeightGridPage(new MealsGrid($('#GridDiv')).element);
}