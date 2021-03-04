import React, { useState, Fragment } from 'react';
import {
    Box,
    Button,
    Grid,
    Grow,
    InputAdornment,
    Paper,
    Snackbar,
    TextField,
    Toolbar
} from '@material-ui/core';
import { ArrowBack, ArrowDropDown } from '@material-ui/icons';
import { Alert, AlertTitle, Autocomplete, createFilterOptions } from '@material-ui/lab';
import ProductOptions from '../constants/types';
import MeasurementDialog from '../components/MeasurementDialog/MeasurementDialog';
import MultipleFeatureSelector from '../components/MultipleFeatureSelector/MultipleFeatureSelector';
import { submitRequestToCreateProduct } from '../connections/products';

const filter = createFilterOptions();

// TODO: # Add to admin validation.
const CreateProduct = () => {

    const [ measurement, setMeasurement ] = useState('');
    const [ category, setCategory ] = useState(null);
    const [ features, updateFeatures ] = useState([]);
    const [ productproperties, setProductProperties ] = useState({});
    const [ is_open_measurement_dialog, setOpenMeasurementDialog ] = useState( false );
    const [ snackbar_opts, setSnackbarOpts ] = useState({ open: false, severity: '', message: '' });
    const [ field_with_error, setFieldWithError ] = useState('');

    function clearFieldErrorIfEqualTo(recently_name)
    {
        if(field_with_error === recently_name)
            setFieldWithError('');
    }

    const handleToggleLauncherMeasurement = () => {
        setOpenMeasurementDialog( !is_open_measurement_dialog );
    }

    const handleChangeSelectionMeasurement = (newValue) => {
        clearFieldErrorIfEqualTo('measurement');

        setMeasurement(newValue);
        handleToggleLauncherMeasurement();
    }

    const handleCategorySelected = (event, selectedCategory) => {
        clearFieldErrorIfEqualTo('category');

        setCategory(selectedCategory);
    }

    const handleUpdateFeaturesCollection = (e) => {
        clearFieldErrorIfEqualTo(e.target.name);

        const value = e.target.value;

        if(e.target.checked)
            updateFeatures([...features, value]);
        else {
            let updated_features = features.filter( feature => (feature !== value) );
            updateFeatures(updated_features);
        }
    }

    const handlePropertyChanges = (e) => {
        let property_name = e.target.name;

        clearFieldErrorIfEqualTo(property_name);

        const new_property = { [property_name]: e.target.value };
        setProductProperties({ ...productproperties, ...new_property })
    }

    const handleConfirmationAction = async () => {
        await
            submitRequestToCreateProduct({ category, features, measurement, ...productproperties })
            .then( response => {

                setSnackbarOpts({ open: true, severity: 'success', message: 'El Producto se guardó con éxito' });

            })
            .catch(error => {
                if( error.response && error.response.status == 400 ) {

                    let first_error = error.response.data.shift();
                    let field_has_error = first_error.param === 'type' ? 'category' : first_error.param; 

                    setSnackbarOpts({ open: true, severity: 'error', message: first_error.msg });

                    setFieldWithError(field_has_error);

                } else if( error.request )

                    setSnackbarOpts({
                        open: true,
                        severity: 'error',
                        message: 'Revise la conexíón de red. El servidor ha tenido un error, o ha tardado demasiado en responder.'
                    });
            });
    }

    const handleCloseSnackbar = (e) => {
        setSnackbarOpts({ open: false, severity: '', message: '' });
    }

    return (
    <Fragment>
        <Paper>
            <Toolbar>
                {/* TODO: Convert it to a new Link (from Router) component */}
                <Button startIcon={ <ArrowBack />} href="/">
                    Ir Atrás
                </Button>

                <Snackbar
                    open={ snackbar_opts.open }
                    onClose={ handleCloseSnackbar }
                    autoHideDuration={ 8000 }
                    TransitionComponent={ (props) => <Grow { ...props }/> }
                    >

                    <Alert severity={ snackbar_opts.severity } onClose={ handleCloseSnackbar }>

                        { snackbar_opts.severity === 'error' ?
                            <AlertTitle>
                                <strong>Oops! Algo salió mal.</strong>
                            </AlertTitle>
                            : null
                        }

                        { snackbar_opts.message }
                    </Alert>

                </Snackbar>
            </Toolbar>

            <Grid container
                spacing={ 1 }
                justify="space-evenly">

                <Grid item xs={ 12 } md={ 3 }>
                    <Box m={ 4 } style={{
                            height: '248px', width: '248px', backgroundColor: 'lightgrey'
                        }}>

                    </Box>
                </Grid>

                <Grid item xs={ 12 } md={ 7 }>
                    <Autocomplete id="autocomplete-product-name"
                        freeSolo
                        clearOnBlur
                        forcePopupIcon
                        value={ category }
                        onChange={ handleCategorySelected }
                        name='type'
                        options={ ProductOptions }
                        filterOptions={ (options, params) => {
                            const filtered = filter(options, params);

                            if(params.inputValue !== '')
                                filtered.push( `Añadir ${ params.inputValue.toUpperCase() }` );

                            return filtered;
                        }}
                        renderInput={ params => (
                            <TextField { ...params }
                                error={ field_with_error === 'type' }
                                label="Categoría del producto"
                                helperText={`Ingresa o selecciona un tipo|categoría del producto, aquel(la) que mejor se adapte
                                            o describa satisfactoriamente al producto`}
                                variant="outlined"
                                />
                        )}
                        />
                </Grid>

                <Grid item md={ 3 }
                    container
                    justify="center"
                    spacing={ 2 }
                    >

                    <Grid item xs={ 10 }>
                        <TextField
                            label="Existencia"
                            error={ field_with_error === 'stock' }
                            onChange={ handlePropertyChanges }
                            value={ productproperties.stock }
                            name='stock'
                            variant="standard" />
                    </Grid>

                    <Grid item xs={ 10 }>
                        <TextField
                            label="Precio"
                            error={ field_with_error === 'price' }
                            value={ productproperties.price }
                            onChange={ handlePropertyChanges }
                            name='price'
                            variant="standard" />
                    </Grid>

                    <Grid item xs={ 10 }>
                        <TextField
                            label="Ubicación"
                            error={ field_with_error === 'location' }
                            value={ productproperties.location }
                            onChange={ handlePropertyChanges }
                            name='location'
                            variant="standard"
                            InputLabelProps={{ margin: 'dense' }} />
                    </Grid>

                    <Grid item xs={ 10 }>
                        <TextField
                            label="Largo"
                            error={ field_with_error === 'length' }
                            value={ productproperties.length }
                            onChange={ handlePropertyChanges }
                            name='length'
                            variant="standard"
                            InputLabelProps={{ margin: 'dense' }} />
                    </Grid>

                    <Grid item xs={ 10 }>
                        <TextField
                            label="Medida"
                            onClick={ handleToggleLauncherMeasurement }
                            style={{ width: '20ch' }}
                            InputProps={{
                                readOnly: true,
                                endAdornment: <InputAdornment position="end"><ArrowDropDown/></InputAdornment>
                            }}
                            InputLabelProps={
                                is_open_measurement_dialog ? { shrink: true } : { margin: 'dense' }
                            }
                            error={ field_with_error === 'measurement' }
                            variant="standard"
                            value={ measurement }/>
                    </Grid>

                </Grid>

                <Grid item md={ 8 }>

                    <MultipleFeatureSelector
                        onChange={ handleUpdateFeaturesCollection }
                        activeSelectedCheckboxes={ features }
                        />

                </Grid>

                <Grid item xs={ 10 } container justify="flex-end">
                    <Button color="secondary" href='/'>
                        Cancelar
                    </Button>

                    <Button color="primary" onClick={ handleConfirmationAction }>
                        Aceptar
                    </Button>
                </Grid>

            </Grid>
        </Paper>

        <MeasurementDialog
            isOpen={ is_open_measurement_dialog }
            onClose={ handleToggleLauncherMeasurement }
            onChangeValue={ handleChangeSelectionMeasurement }
            value={ measurement }
            />
    </Fragment>
    );
}

export default CreateProduct;