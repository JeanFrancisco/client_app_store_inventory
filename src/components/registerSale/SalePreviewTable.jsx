import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox
} from "@material-ui/core";

// TODO: Change to dynamic data rows
const rows = [
    { item: 1, name: 'tornillo', thread: 'nc', width: '3/8', large: '2 + 1/2', price: 25.89, quantity: 4 },
    { item: 2, name: 'tornillo', thread: 'mm', width: '8', large: '45', price: 25.89, quantity: 5 },
    { item: 3, name: 'tuerca grado 5', thread: 'nf', width: '3/8', large: '', price: 5.89, quantity: 3 },
    { item: 4, name: 'abrazadera', thread: 'nf', width: '3/4', large: '23 in', price: 123.00, quantity: 1 },
];

const SalePreviewTable = () => {
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
                    { rows.map( (product) => {
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