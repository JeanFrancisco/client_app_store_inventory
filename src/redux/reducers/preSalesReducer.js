import {
    ADD_TO_PRE_SALE,
    REMOVE_FROM_PRE_SALE,
    ADD_TO_SHOPPING_LIST,
    REMOVE_FROM_SHOPPING_LIST,
} from '../constants';

const initialState = {
    products_in_shopping_list: [
        { item: '1', name: 'tornillo', thread: 'nc', width: '3/8', large: '2 + 1/2', price: 25.89, quantity: 4 },
        { item: '2', name: 'tornillo', thread: 'mm', width: '8', large: '45', price: 25.89, quantity: 5 },
        { item: '3', name: 'tuerca grado 5', thread: 'nf', width: '3/8', large: '', price: 5.89, quantity: 3 },
        { item: '4', name: 'abrazadera', thread: 'nf', width: '3/4', large: '23 in', price: 123.00, quantity: 1 },
    ],
    products_ready_to_pay: [],
    quantity_items: 0,
    total_amount: 0.0,
}

export default function (state = initialState, action) {
    switch( action.type ) {
        case ADD_TO_SHOPPING_LIST:
            let new_copy_shopping_list = [ ...state.products_in_shopping_list ];
 
            let found_item = findInArray(action.payload.product, new_copy_shopping_list);

            if( found_item !== undefined )
                found_item.quantity = action.payload.quantity;
            else
                new_copy_shopping_list.push({ ...action.payload.product, quantity: action.payload.quantity });

            return {
                ...state,
                products_in_shopping_list: new_copy_shopping_list
            }
        case ADD_TO_PRE_SALE:
            let new_products_ready_to_pay = [ ...state.products_ready_to_pay ];

            let found_element = findInArrayByItem(new_products_ready_to_pay, action.payload);

            if( found_element !== undefined ) {
                let same_element_in_shopping_list = findInArrayByItem(state.products_in_shopping_list, found_element.item);

                found_element.quantity = same_element_in_shopping_list.quantity;

                return {
                    ...state,
                    products_ready_to_pay: new_products_ready_to_pay
                };
            }
            return {
                ...state,
                products_ready_to_pay: [
                    ...state.products_ready_to_pay,
                    findInArrayByItem(state.products_in_shopping_list, action.payload),
                ],
            }
        case REMOVE_FROM_PRE_SALE:
            return {
                ...state,
                products_ready_to_pay: state.products_ready_to_pay.filter( product => (product.item !== action.payload) ),
            }
        case REMOVE_FROM_SHOPPING_LIST:
            return {
                ...state,
                products_in_shopping_list: state.products_in_shopping_list.filter( product => (product.item !== action.payload) ),
            }
        default:
            return state;
    }
}

function findInArray(prod, array) {
    return array.find( element => ( element.item === prod.item ));
}

function findInArrayByItem(array, item) {
    return array.find(element => ( element.item === item )); 
}