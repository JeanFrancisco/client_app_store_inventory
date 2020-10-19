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
        default:
            return state;
    }
}