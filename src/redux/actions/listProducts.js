import { THREAD_FILTER_OPTION_CHOSEN } from '../constants/listProducts';

export function updateThreadFilterState( option_chosen ) {
    return { type: THREAD_FILTER_OPTION_CHOSEN, payload: option_chosen }
}