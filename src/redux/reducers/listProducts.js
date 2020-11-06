import {
    THREAD_FILTER_OPTION_CHOSEN,
    KIND_OF_PRODUCT_FILTER_OPTION_CHOSEN,
    FEATURE_FILTER_DIALOG_OPENED,
    FEATURE_FILTER_DIALOG_CLOSED,
} from '../constants/listProducts';

const initialState = {
    selected_values_thread_filter: ['NC', 'MMF', '1.0'],
    disabled_options_thread_filter: ['1.0', '1.5'],
    selected_values_kind_products_filter: ['Abrazadera', 'Tornillo'],
    is_open_features_filter_dialog: false,
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
        default:
            return {
                ...state
            }
    }
}