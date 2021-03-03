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

const initialState = {
    error: null,
    loading: false,
    selected_values_thread_filter: [],
    disabled_options_thread_filter: ['1.0', '1.5'],
    selected_values_kind_products_filter: [],
    is_open_features_filter_dialog: false,
    active_collection_features: [],
    is_open_measurement_dialog: false,
    disabled_options_measurements_filter: ['1/8', '1/4'],
    active_selected_measurements_filter: [],
    all_products: [
    ],
    filtered_products: [
    ]
}

export default function (state = initialState, action) {
    switch(action.type) {
        case THREAD_FILTER_OPTION_CHOSEN:
            return {
                ...state,
                selected_values_thread_filter: [ ...action.payload ],
                filtered_products: refreshProductsToShow(state.all_products, action.type, action.payload),
            }
        case KIND_OF_PRODUCT_FILTER_OPTION_CHOSEN:
            return {
                ...state,
                selected_values_kind_products_filter: [ ...action.payload ],
                filtered_products: refreshProductsToShow(state.all_products, action.type, action.payload),
            }
        case FEATURE_FILTER_DIALOG_OPENED:
            return {
                ...state,
                is_open_features_filter_dialog: true,
            }
        case FEATURE_FILTER_DIALOG_CLOSED:
            return {
                ...state,
                is_open_features_filter_dialog: false,
            }
        case FEATURE_FILTER_OPTION_CHOSEN:
            return {
                ...state,
                active_collection_features: [...state.active_collection_features, action.payload ],
                filtered_products: refreshProductsToShow(state.all_products, action.type, action.payload),
            }
        case FEATURE_FILTER_OPTION_DESELECTED:
            return {
                ...state,
                active_collection_features: state.active_collection_features.filter(element => element !== action.payload),
                filtered_products: refreshProductsToShow(state.all_products, action.type, state.active_collection_features),
            }
        case MEASUREMENT_FILTER_DIALOG_OPENED:
            return {
                ...state,
                is_open_measurement_dialog: true,
            }
        case MEASUREMENT_FILTER_DIALOG_CLOSED:
            return {
                ...state,
                is_open_measurement_dialog: false,
            }
        case MEASUREMENT_FILTER_OPTION_CHOSEN:
            return {
                ...state,
                active_selected_measurements_filter: [ ...state.active_selected_measurements_filter, action.payload ],
                filtered_products: refreshProductsToShow(state.all_products, action.type, state.active_selected_measurements_filter),
            }
        case MEASUREMENT_FILTER_OPTION_DESELECTED:
            return {
                ...state,
                active_selected_measurements_filter: state.active_selected_measurements_filter.filter(element => element !== action.payload),
                filtered_products: refreshProductsToShow(state.all_products, action.type, action.payload),
            }
        case LOADING_PRODUCT_RECORDS:
            return {
                ...state,
                loading: action.payload,
            }
        case SUCCESS_LOADING_PRODUCTS:
            return {
                ...state,
                all_products: action.payload,
                filtered_products: action.payload
            }
        case FAILED_LOADING_PRODUCTS:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return {
                ...state
            }
    }
}

function refreshProductsToShow(current_all, filter_case_condition, action_payload) {
    switch(filter_case_condition) {

        case THREAD_FILTER_OPTION_CHOSEN:
            return current_all.filter( product => action_payload.includes(product.thread?.kind) );

        case KIND_OF_PRODUCT_FILTER_OPTION_CHOSEN:
            return current_all.filter( product => action_payload.includes(product.type) );

        case FEATURE_FILTER_OPTION_CHOSEN:
            return current_all.filter( product => product.features.includes(action_payload) );

        case FEATURE_FILTER_OPTION_DESELECTED:
            return current_all.filter( product => {
                action_payload.forEach(feature => {
                    if( product.features.includes(feature) )
                        return true;
                });
                return false;
            } );

        case MEASUREMENT_FILTER_OPTION_CHOSEN:
            return current_all.filter( product => action_payload.includes(product.measurement) );

        case MEASUREMENT_FILTER_OPTION_DESELECTED:
            return current_all.filter( product => product.measurement !== action_payload );
    }
}