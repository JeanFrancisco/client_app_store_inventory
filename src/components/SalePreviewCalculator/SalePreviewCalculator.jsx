import React from 'react';
import { useSelector } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox
} from "@material-ui/core";

const SalePreviewTable = () => {
    const products_shopping_list = useSelector( state => state.preSales.products_in_shopping_list );

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
                                    <TableCell padding="checkbox"><Checkbox checked={ true }/></TableCell>
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