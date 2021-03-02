import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
} from "@material-ui/core";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import DialogFeaturesSelector from '../DialogFeaturesSelector/DialogFeaturesSelector';
import MultiMeasurementsDialog from '../MultiMeasurementsDialog/MultiMeasurementsDialog';
import FloatingMessageBox from '../misc/FloatingMessageBox';
import KindProductsPopup from '../misc/KindProductsPopup';
import ThreadsPopup from '../misc/ThreadsPopup';
import {
    addToPreSale,
    removeFromPreSale,
    redoShoppingListWith,
    redoShoppingListWithout
} from '../../redux/actions/preSalesActions';
import {
    openFeaturesFilterDialog,
    openMeasurementsFilterDialog,
    closeMeasurementsFilterDialog,
    successLoadingProducts,
    failedLoadingProducts,
    loadingProductRecords,
} from '../../redux/actions/listProducts';
import { sendInquiryToGetProducts } from '../../connections/products';

const ListProducts = () => {
    const is_open_measurements_dialog = useSelector( state => state.listProducts.is_open_measurement_dialog );
    const error_message = useSelector( state => state.listProducts.error );
    const rows = useSelector( state => state.listProducts.filtered_products );

    const dispatch = useDispatch();

    useEffect(() => {

        const getProductsRecords = async () => {

            dispatch( loadingProductRecords(true) );

            try {
                const { products } = ( await sendInquiryToGetProducts() ).data;
                dispatch( successLoadingProducts(products) );

            } catch (error) {

                if(error.response)
                    dispatch( failedLoadingProducts(error.response.data.msg) );
                else
                    dispatch( failedLoadingProducts('Hubo un error durante la solicitud. Revise su conexión e intente nuevamente') );

            } finally {
                dispatch( loadingProductRecords(false) );
            }
        }

        getProductsRecords();
    }, []);

    const handleStatusUpdateQntyField = (e) => {
        let quanty = e.target.value;
        let identifier = Number(e.target.name.substring(11));

        if( isNaN(quanty) ) {
            // TODO: Show an error message or, for example set the background color to red.
            return ;
        }

        quanty = Number(quanty);

        if( quanty === 0 ) {
            dispatch( removeFromPreSale(identifier) );
            dispatch( redoShoppingListWithout(identifier) );
        }
        else if( quanty > 0 ) {
            let product_obj = rows.find( row => row.id === identifier );

            dispatch( redoShoppingListWith(product_obj, quanty) );
            dispatch( addToPreSale(identifier) );
        }
    }

    const handleFeatureFilterDialogLauncher = (e) => {
        dispatch( openFeaturesFilterDialog() );
    }

    const handleLauchMeasurementsFilterDialog = (e) => {
        dispatch( openMeasurementsFilterDialog() );
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
                            <KindProductsPopup />
                        </TableCell>
                        <TableCell>
                            <Button
                                onClick={ handleFeatureFilterDialogLauncher }
                                endIcon={ <ArrowDropDown /> }
                                >
                                Caracteristicas
                            </Button>
                        </TableCell>
                        <TableCell>
                            <ThreadsPopup />
                        </TableCell>
                        <TableCell>
                            <Button
                                onClick={ handleLauchMeasurementsFilterDialog }
                                endIcon={ <ArrowDropDown /> }
                                >
                                Medida
                            </Button>
                        </TableCell>
                        <TableCell>Largo</TableCell>
                        <TableCell padding="none">Ubicacion</TableCell>
                        <TableCell>(Clave + Usos)</TableCell>
                        <TableCell align="right">Precio</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    { 
                        rows.map( (product) => {

                            return (
                                <TableRow key={ `prod_${product.id}` }>
                                    <TableCell align="center" padding="none">{ product.stock }</TableCell>
                                    <TableCell align="center" padding="checkbox">
                                        <TextField
                                            type="numeric"
                                            name={ `qnty_field_${product.id}` }
                                            color="secondary" onBlur={ handleStatusUpdateQntyField } />
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

        <DialogFeaturesSelector />
        <MultiMeasurementsDialog
            isOpen={ is_open_measurements_dialog }
            actionOnClose={ closeMeasurementsFilterDialog }
            />

        { error_message && <FloatingMessageBox open={ true } severity='error' message={ error_message } onClose={ () => dispatch( failedLoadingProducts('') )}/> }
    </Fragment>
    );
};

export default ListProducts;