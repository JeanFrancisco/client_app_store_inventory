import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@material-ui/core";
import MultiSelectChecks from '../misc/MultiSelectChecks';
import MultipleFeatureSelector from '../MultipleFeatureSelector/MultipleFeatureSelector';
import {
    addToPreSale,
    removeFromPreSale,
    redoShoppingListWith,
    redoShoppingListWithout
} from '../../redux/actions/preSalesActions';

// TODO: Change to dynamic data rows
const rows = [
    { id: 1, name: 'tornillo', thread:'nc', width: '3/8', large: '2 + 1/2', price: 25.89, quantity: 4, stock: 25, features: ['allen', 'galvanizado'], location: '2ER' },
    { id: 2, name: 'tornillo', thread: 'mm 1.0', width: '8', large: '45', price: 25.89, quantity: 5, stock: 44, features: ['hexagonal'], location: '34B' },
    { id: 3, name: 'tuerca', thread: 'nf', width: '3/8', large: '', price: 5.89, quantity: 3, stock: 55, features: ['Grado 5', 'Ins. Nylon'], location: '18AE' },
    { id: 4, name: 'abrazadera', thread: 'nf', width: '3/4', large: '23 in', price: 123.00, quantity: 1, stock: 80, features: ['Cuadrada', 'Carroceria'], location: '35E' },
];

const ListProducts = () => {
    const dispatch = useDispatch();

    const handleStatusUpdateQntyField = (e) => {
        let quanty = e.target.value;
        let identifier = Number(e.target.name.substring(11));

        if(isNaN(quanty)) {
            // TODO: Show an error message or, for example set the background color to red.
            return ;
        }

        quanty = Number(quanty);

        if(quanty === 0) {
            dispatch( removeFromPreSale(identifier) );
            dispatch( redoShoppingListWithout(identifier) );
        }
        else if(quanty > 0) {
            let product_obj = rows.find( row => row.id === identifier );

            dispatch( redoShoppingListWith(product_obj, quanty) );
            dispatch( addToPreSale(identifier) );
        }
    }

    return (
    <Fragment>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" padding="none">Existencia</TableCell>
                        <TableCell align="center" padding="checkbox">Cantidad</TableCell>
                        <TableCell align="center" width="100">
                            <MultiSelectChecks heading="Producto" />
                        </TableCell>
                        <TableCell>Caracteristicas</TableCell>
                        <TableCell>Rosca</TableCell>
                        <TableCell>Medida</TableCell>
                        <TableCell>Largo</TableCell>
                        <TableCell padding="none">Ubicacion</TableCell>
                        <TableCell>(Clave + Usos)</TableCell>
                        <TableCell align="right">Precio</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    { rows.map( (product) => {

                            return (
                                <TableRow key={ `prod_${product.id}` }>
                                    <TableCell align="center" padding="none">{ product.stock }</TableCell>
                                    <TableCell align="center" padding="checkbox">
                                        <TextField type="numeric" name={ `qnty_field_${product.id}` } color="secondary" onBlur={ handleStatusUpdateQntyField } />
                                    </TableCell>
                                    <TableCell align="center" width="100">{ product.name }</TableCell>
                                    <TableCell>{ product.features.join(' ') }</TableCell>
                                    <TableCell>{ product.thread }</TableCell>
                                    <TableCell>{ product.width }</TableCell>
                                    <TableCell>{ product.large }</TableCell>
                                    <TableCell padding="none">{ product.location }</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="right">{ product.price }</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>

        <MultipleFeatureSelector />
    </Fragment>
    );
};

export default ListProducts;