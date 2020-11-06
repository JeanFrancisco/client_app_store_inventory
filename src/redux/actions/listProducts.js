import {
    THREAD_FILTER_OPTION_CHOSEN,
    KIND_OF_PRODUCT_FILTER_OPTION_CHOSEN,
    FEATURE_FILTER_DIALOG_OPENED,
    FEATURE_FILTER_DIALOG_CLOSED,
} from '../constants/listProducts';

export function updateThreadFilterState( option_chosen ) {
    return { type: THREAD_FILTER_OPTION_CHOSEN, payload: option_chosen }
}

export function updateKindProductsFilterState( option_chosen ) {
    return { type: KIND_OF_PRODUCT_FILTER_OPTION_CHOSEN, payload: option_chosen }
}

export function openFeaturesFilterDialog() {
    return { type: FEATURE_FILTER_DIALOG_OPENED }
}

export function closeFeaturesFilterDialog() {
    return { type: FEATURE_FILTER_DIALOG_CLOSED }
}