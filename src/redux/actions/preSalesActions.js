import {
    ADD_TO_PRE_SALE,
    REMOVE_FROM_PRE_SALE,
    ADD_TO_SHOPPING_LIST,
    REMOVE_FROM_SHOPPING_LIST
} from '../constants';

export function addToPreSale( product_or_service ) {
    return { type: ADD_TO_PRE_SALE, payload: product_or_service };
}

export function removeFromPreSale( product_or_service ) {
    return { type: REMOVE_FROM_PRE_SALE, payload: product_or_service };
}

export const redoShoppingListWith = ( service_or_product, quantity ) => {
    return { type: ADD_TO_SHOPPING_LIST, payload: { product: service_or_product, quantity: Number(quantity) }};
}

export const redoShoppingListWithout = ( service_or_product ) => {
    return { type: REMOVE_FROM_SHOPPING_LIST, payload: service_or_product };
}
