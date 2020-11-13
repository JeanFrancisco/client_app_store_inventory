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
    all_products: [
        { id: 1, name: 'Tornillo', thread:'NC', width: '3/8', large: '2 + 1/2', price: 25.89, quantity: 4, stock: 25, features: ['Allen', 'Galvanizado'], location: '2ER' },
        { id: 2, name: 'Tornillo', thread: 'MM', width: '8', large: '45', price: 25.89, quantity: 5, stock: 44, features: ['Hexagonal'], location: '34B' },
        { id: 3, name: 'Tuerca', thread: 'NF', width: '3/8', large: '', price: 5.89, quantity: 3, stock: 55, features: ['Grado 5', 'Ins. Nylon'], location: '18AE' },
        { id: 4, name: 'Abrazadera', thread: 'NF', width: '3/4', large: '23 in', price: 123.00, quantity: 1, stock: 80, features: ['Cuadrada', 'Carroceria'], location: '35E' },
        { id: 5, name: 'Tornillo', thread:'NC', width: '3/8', large: '2 + 1/2', price: 25.89, quantity: 4, stock: 25, features: ['Allen', 'Galvanizado'], location: '2ER' },
        { id: 6, name: 'Tornillo', thread: 'MM', width: '8', large: '45', price: 25.89, quantity: 5, stock: 44, features: ['Hexagonal'], location: '34B' },
        { id: 7, name: 'Tuerca', thread: 'NF', width: '3/8', large: '', price: 5.89, quantity: 3, stock: 55, features: ['Grado 5', 'Ins. Nylon'], location: '18AE' },
        { id: 8, name: 'Abrazadera', thread: 'NF', width: '3/4', large: '23 in', price: 123.00, quantity: 1, stock: 80, features: ['Cuadrada', 'Carroceria'], location: '35E' },
    ],
    filtered_products: [
        { id: 2, name: 'Tornillo', thread:'NC', width: '3/8', large: '2 + 1/2', price: 25.89, quantity: 4, stock: 25, features: ['Allen', 'Galvanizado'], location: '2ER' },
        { id: 5, name: 'Tornillo', thread: 'MM', width: '8', large: '45', price: 25.89, quantity: 5, stock: 44, features: ['Hexagonal'], location: '34B' },
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
        default:
            return {
                ...state
            }
    }
}

function refreshProductsToShow(current_all, filter_case_condition, action_payload) {
    switch(filter_case_condition) {

        case THREAD_FILTER_OPTION_CHOSEN:
            return current_all.filter( product => action_payload.includes(product.thread) );

        case KIND_OF_PRODUCT_FILTER_OPTION_CHOSEN:
            return current_all.filter( product => action_payload.includes(product.name) );

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
            return current_all.filter( product => action_payload.includes(product.width) );

        case MEASUREMENT_FILTER_OPTION_DESELECTED:
            return current_all.filter( product => product.width !== action_payload );
    }
}