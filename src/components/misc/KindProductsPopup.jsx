import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiSelectChecks from './MultiSelectChecks';
import { updateKindProductsFilterState } from '../../redux/actions/listProducts';

const kinds_products = [
    'Abrazadera', 'Birlo', 'Cono', 'Grasera', 'Perno', 'Pija', 'Terminal', 'Tornillo', 'Tuerca', 'Rondana', 'Varilla'
];

const KindProductsPopup = () => {
    const dispatch = useDispatch();

    const selected_products = useSelector( state => state.listProducts.selected_values_kind_products_filter );

    const handleStatusUpdateKindProductsFilter = (e) => {
        dispatch( updateKindProductsFilterState(e.target.value) );
    }

    return (
        <MultiSelectChecks
            value={ selected_products }
            options={ kinds_products }
            heading='Categoria'
            handlerChangeEvent={ handleStatusUpdateKindProductsFilter }
            />
    )
}

export default KindProductsPopup;