import { initFullHeightGridPage } from '@serenity-is/corelib';
import { CategoryMealsGrid } from './CategoryMealsGrid';

export default function pageInit() {
    initFullHeightGridPage(new CategoryMealsGrid($('#GridDiv')).element);
}