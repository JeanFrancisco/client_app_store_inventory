import React, { useState, Fragment } from 'react';
import { Box, Button, Grid, InputAdornment, Paper, TextField, Toolbar } from '@material-ui/core';
import { ArrowBack, ArrowDropDown } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import MeasurementDialog from '../components/MeasurementDialog/MeasurementDialog';
import MultipleFeatureSelector from '../components/MultipleFeatureSelector/MultipleFeatureSelector';

// TODO: # Add to admin validation.
const CreateProduct = () => {
    const [ width, setWidth ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ features, updateFeatures ] = useState([]);
    const [ productproperties, setProductProperties ] = useState({});
    const [ is_open_measurement_dialog, setOpenMeasurementDialog ] = useState( false );

    const handleToggleLauncherMeasurement = () => {
        setOpenMeasurementDialog( !is_open_measurement_dialog );
    }

    const handleChangeSelectionMeasurement = (newValue) => {
        setWidth(newValue);
        handleToggleLauncherMeasurement();
    }

    const handleCategorySelected = (selectedCategory) => {
        setCategory(selectedCategory);
    }

    const handleUpdateFeaturesCollection = (e) => {
        const value = e.target.value;

        if(e.target.checked)
            updateFeatures([...features, value]);
        else {
            let updated_features = features.filter( feature => (feature !== value) );
            updateFeatures(updated_features);
        }
    }

    const handlePropertyChanges = (e) => {
        const new_property = { [e.target.name ]: e.target.value };

        setProductProperties({ ...productproperties, ...new_property })
    }

    const handleConfirmationAction = () => {
        /* TODO: sendRequestToCreateProduct({ kind: category, features, width, stock, price, location, length, is_high...., etc }); */
    }

    return (
    <Fragment>
        <Paper>
            <Toolbar>
                {/* TODO: Convert it to a new Link (from Router) component */}
                <Button startIcon={ <ArrowBack />} href="/">
                    Ir Atrás
                </Button>
            </Toolbar>
            <Grid container
                spacing={ 1 }
                justify="space-evenly">

                <Grid item xs={ 12 } md={ 3 }>
                    <Box m={ 4 } style={{ height: '248px', width: '248px', backgroundColor: 'lightgrey' }}>

                    </Box>
                </Grid>

                <Grid item xs={ 12 } md={ 7 }>
                    <Autocomplete id="autocomplete-product-name"
                        freeSolo
                        value={ category }
                        onChange={ handleCategorySelected }
                        options={ [] }
                        getOptionLabel={ option => option }
                        renderInput={ params => (
                            <TextField { ...params } label="Categoría del producto"
                                helperText="Ingresa o selecciona un tipo|categoría del producto, aquel(la) que mejor se adapte o describa satisfactoriamente al producto"
                                variant="outlined"
                                InputProps={{ endAdornment: <InputAdornment position="end"><ArrowDropDown/></InputAdornment> }}/>
                        )}
                        />
                </Grid>

                <Grid item md={ 3 } container justify="center" spacing={ 2 }>
                    <Grid item xs={ 10 }>
                        <TextField
                            label="Existencia"
                            onChange={ handlePropertyChanges }
                            value={ productproperties.stock }
                            name='stock'
                            variant="standard" />
                    </Grid>

                    <Grid item xs={ 10 }>
                        <TextField
                            label="Precio"
                            value={ productproperties.price }
                            onChange={ handlePropertyChanges }
                            name='price'
                            variant="standard" />
                    </Grid>

                    <Grid item xs={ 10 }>
                        <TextField
                            label="Ubicación"
                            value={ productproperties.location }
                            onChange={ handlePropertyChanges }
                            name='location'
                            variant="standard"
                            InputLabelProps={{ margin: 'dense' }} />
                    </Grid>

                    <Grid item xs={ 10 }>
                        <TextField
                            label="Largo"
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
                            variant="standard"
                            value={ width }/>
                    </Grid>
                </Grid>

                <Grid item md={ 8 }>
                    <MultipleFeatureSelector
                        onChange={ handleUpdateFeaturesCollection }
                        activeSelectedCheckboxes={ features } />
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
            value={ width }
            />
    </Fragment>
    );
}

export default CreateProduct;