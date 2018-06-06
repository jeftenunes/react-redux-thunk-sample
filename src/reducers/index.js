import { combineReducers } from 'redux';
import { categories, categoriesHasErrored, categoriesAreLoading } from './categories';

export default combineReducers({
    categories,
    categoriesHasErrored,
    categoriesAreLoading
});