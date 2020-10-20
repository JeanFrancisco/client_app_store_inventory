import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox
} from "@material-ui/core";
import { ADD_TO_PRE_SALE, REMOVE_FROM_PRE_SALE } from '../../redux/constants';

const SalePreviewTable = () => {
    const products_shopping_list = useSelector( state => state.preSales.products_in_shopping_list );

    const dispatch = useDispatch();

    const redoPreSaleWith = ( service_or_product ) => {
        dispatch({ type: ADD_TO_PRE_SALE, payload: service_or_product });
    }

    const redoPreSaleWithout = ( service_or_product ) => {
        dispatch({ type: REMOVE_FROM_PRE_SALE, payload: service_or_product });
    }

    const handleStatusUpdateCheckbox = (e) => {
        let identifier = e.target.name;

        if(e.target.checked)
            redoPreSaleWith(identifier);
        else
            redoPreSaleWithout(identifier);
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox />
                        </TableCell>
                        <TableCell align="center">Cantidad</TableCell>
                        <TableCell>Producto</TableCell>
                        <TableCell align="right">Precio</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    { products_shopping_list.map( (product) => {
                            let description = (product.name + product.thread + product.width) + ( product.large ? (' * ' + product.large) : '' );

                            return (
                                <TableRow key={ product.item }>
                                    <TableCell padding="checkbox"><Checkbox name={ product.item } onChange={ handleStatusUpdateCheckbox } /></TableCell>
                                    <TableCell align="center">{ product.quantity }</TableCell>
                                    <TableCell component="th" scope="row">{ description }</TableCell>
                                    <TableCell align="right">{ product.price }</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SalePreviewTable;