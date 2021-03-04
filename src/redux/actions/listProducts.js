import {
    THREAD_FILTER_OPTION_CHOSEN,
    KIND_OF_PRODUCT_FILTER_OPTION_CHOSEN,
    FEATURE_FILTER_DIALOG_OPENED,
    FEATURE_FILTER_DIALOG_CLOSED,
    FEATURE_FILTER_OPTION_CHOSEN,
    FEATURE_FILTER_OPTION_DESELECTED,
    MEASUREMENT_FILTER_DIALOG_OPENED,
    MEASUREMENT_FILTER_DIALOG_CLOSED,
    MEASUREMENT_FILTER_OPTION_CHOSEN,
    MEASUREMENT_FILTER_OPTION_DESELECTED,
    SUCCESS_LOADING_PRODUCTS,
    FAILED_LOADING_PRODUCTS,
    LOADING_PRODUCT_RECORDS,
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

export function choseOptionFeaturesFilter(option_chosen) {
    return { type: FEATURE_FILTER_OPTION_CHOSEN, payload: option_chosen }
}

export function deselectOptionFeaturesFilter(option_deselected) {
    return { type: FEATURE_FILTER_OPTION_DESELECTED, payload: option_deselected }
}

export function openMeasurementsFilterDialog() {
    return { type: MEASUREMENT_FILTER_DIALOG_OPENED }
}

export function closeMeasurementsFilterDialog() {
    return { type: MEASUREMENT_FILTER_DIALOG_CLOSED }
}

export function choseOptionMeasurementsFilter(option_chosen) {
    return { type: MEASUREMENT_FILTER_OPTION_CHOSEN, payload: option_chosen }
}

export function deselectOptionMeasurementsFilter(option_deselected) {
    return { type: MEASUREMENT_FILTER_OPTION_DESELECTED, payload: option_deselected }
}

export function loadingProductRecords(is_loading) {
    return { type: LOADING_PRODUCT_RECORDS, payload: is_loading }
}

export function successLoadingProducts(products) {
    return { type: SUCCESS_LOADING_PRODUCTS, payload: products }
}

export function failedLoadingProducts(error) {
    return { type: FAILED_LOADING_PRODUCTS, payload: error }
}