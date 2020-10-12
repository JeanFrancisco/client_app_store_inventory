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
                        <TableCell>
                            <Checkbox />
                        </TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell>Producto</TableCell>
                        <TableCell>Precio</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { rows.map( (product) => {
                            let description = (product.name + product.thread + product.width) + ( product.large ? (' * ' + product.large) : '' );

                            return (
                                <TableRow key={ product.item }>
                                    <TableCell><Checkbox checked={ true }/></TableCell>
                                    <TableCell align="right">{ product.quantity }</TableCell>
                                    <TableCell component="th" scope="2">{ description }</TableCell>
                                    <TableCell component="th">{ product.price }</TableCell>
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