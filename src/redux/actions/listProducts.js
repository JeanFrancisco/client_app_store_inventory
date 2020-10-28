import { THREAD_FILTER_OPTION_CHOSEN, KIND_OF_PRODUCT_FILTER_OPTION_CHOSEN } from '../constants/listProducts';

export function updateThreadFilterState( option_chosen ) {
    return { type: THREAD_FILTER_OPTION_CHOSEN, payload: option_chosen }
}

export function updateKindProductsFilterState( option_chosen ) {
    return { type: KIND_OF_PRODUCT_FILTER_OPTION_CHOSEN, payload: option_chosen }
}