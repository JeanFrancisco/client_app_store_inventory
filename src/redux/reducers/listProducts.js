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
} from '../constants/listProducts';

const initialState = {
    selected_values_thread_filter: ['NC', 'MMF', '1.0'],
    disabled_options_thread_filter: ['1.0', '1.5'],
    selected_values_kind_products_filter: ['Abrazadera', 'Tornillo'],
    is_open_features_filter_dialog: false,
    active_collection_features: ['Allen', 'Grado 5'],
    is_open_measurement_dialog: false,
    disabled_options_measurements_filter: ['1/8', '1/4'],
    active_selected_measurements_filter: ['3/8', '7/16', 4],
}

export default function (state = initialState, action) {
    switch(action.type) {
        case THREAD_FILTER_OPTION_CHOSEN:
            return {
                ...state,
                selected_values_thread_filter: [ ...action.payload ],
            }
        case KIND_OF_PRODUCT_FILTER_OPTION_CHOSEN:
            return {
                ...state,
                selected_values_kind_products_filter: [ ...action.payload ],
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
            }
        case FEATURE_FILTER_OPTION_DESELECTED:
            return {
                ...state,
                active_collection_features: state.active_collection_features.filter(element => element !== action.payload),
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
            }
        case MEASUREMENT_FILTER_OPTION_DESELECTED:
            return {
                ...state,
                active_selected_measurements_filter: state.active_selected_measurements_filter.filter(element => element !== action.payload),
            }
        default:
            return {
                ...state
            }
    }
}