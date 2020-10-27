import { THREAD_FILTER_OPTION_CHOSEN } from '../constants/listProducts';

const initialState = {
    selected_values_thread_filter: ['NC', 'MMF', '1.0'],
    disabled_options_thread_filter: ['1.0', '1.5']
}

export default function (state = initialState, action) {
    switch(action.type) {
        case THREAD_FILTER_OPTION_CHOSEN:
            return {
                ...state,
                selected_values_thread_filter: [ ...action.payload ],
            }
        default:
            return {
                ...state
            }
    }
}