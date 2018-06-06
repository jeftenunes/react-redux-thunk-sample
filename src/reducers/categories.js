export function categoriesHasErrored(state = false, action) {
    switch(action.type) {
        case 'CATEGORIES_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function categoriesAreLoading(state = false, action) {
    switch(action.type) {
        case 'CATEGORIES_ARE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function categories(state = [], action) {
    switch(action.type) {
        case 'CATEGORIES_FETCH_DATA_SUCCESS':
            return action.categories;
        default:
            return state;
    }
}