import {
    ADD_TO_PRE_SALE,
    REMOVE_FROM_PRE_SALE,
    ADD_TO_SHOPPING_LIST,
    REMOVE_FROM_SHOPPING_LIST,
} from '../constants';

const initialState = {
    products_in_shopping_list: {
        /** These elements will be grouped by ocurrence number,
         *  starting the count with zero. */
        '0': { id: 1, name: 'tornillo', thread: 'nc', width: '3/8', large: '2 + 1/2', price: 25.89, quantity: 4 },
        '1': { id: 2, name: 'tornillo', thread: 'mm', width: '8', large: '45', price: 25.89, quantity: 5 },
        '2': { id: 3, name: 'tuerca grado 5', thread: 'nf', width: '3/8', large: '', price: 5.89, quantity: 3 },
        '3': { id: 4, name: 'abrazadera', thread: 'nf', width: '3/4', large: '23 in', price: 123.00, quantity: 1 },
    },
    products_ready_to_pay: [
        /** Here will be the the shopping list indices that were
         *  selected as ready to pay or ready to sell.
         */
    ],
    quantity_items: 0,
    total_amount: 0.0,
}

export default function (state = initialState, action) {
    let new_copy_shopping_list = { ...state.products_in_shopping_list };
    let found_index;

    switch( action.type ) {
        case ADD_TO_SHOPPING_LIST:
            found_index = findIndexInCollectionByItemId(new_copy_shopping_list, action.payload.product.id);

            new_copy_shopping_list[found_index].quantity = action.payload.quantity;

            return {
                ...state,
                products_in_shopping_list: new_copy_shopping_list,
            }

        case ADD_TO_PRE_SALE:
            found_index = findIndexInCollectionByItemId(state.products_in_shopping_list, action.payload);

            if( state.products_ready_to_pay.includes(found_index) )
                return {
                    ...state
                }
            else
                return {
                    ...state,
                    products_ready_to_pay: [ ...state.products_ready_to_pay, found_index ],
                }

        case REMOVE_FROM_PRE_SALE:
            found_index = findIndexInCollectionByItemId(state.products_in_shopping_list, action.payload);

            return {
                ...state,
                products_ready_to_pay: state.products_ready_to_pay.filter( array_index => (array_index !== found_index) ),
            }

        case REMOVE_FROM_SHOPPING_LIST:
            let item_index = findIndexInCollectionByItemId(new_copy_shopping_list, action.payload);

            delete( new_copy_shopping_list[item_index] );

            return {
                ...state,
                products_in_shopping_list: new_copy_shopping_list,
            }
        default:
            return state;
    }
}

function findIndexInCollectionByItemId(indexed_collection, id_value) {
    for (const item_index in indexed_collection) {
        if (indexed_collection[item_index].id === id_value) {
            return item_index;
        }
    }
}
