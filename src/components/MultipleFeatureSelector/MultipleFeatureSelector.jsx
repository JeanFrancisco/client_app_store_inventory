import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    makeStyles,
} from '@material-ui/core';
import CheckboxesOptionsGroup from '../misc/CheckboxesOptionsGroup';
import {
    closeFeaturesFilterDialog,
    choseOptionFeaturesFilter,
    deselectOptionFeaturesFilter,
} from '../../redux/actions/listProducts';
import { orderTwoVerticalColumns } from '../../utils/arrays.js';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
    }
}));

const features_groups = {
    heads: ['Allen', 'Castillo', 'C/Coche', 'C/Plana', 'Gota', 'Hexagonal', 'Set'],
    materials: ['Galvanizado', 'Grado 5', 'Liviana'],
    others: ['Gripo', 'H200', 'H180', 'Ins. Nylon', 'Presion', 'Plana', 'Estructural'],
    uses: ['Arado', 'Automotriz', 'Centro Muelle', 'Flecha', 'Golpe', 'Seguridad' ],
}

const MultipleFeatureSelector = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const is_open = useSelector( state => state.listProducts.is_open_features_filter_dialog );

    const active_collection_features = useSelector( state => state.listProducts.active_collection_features );

    const handleCloseDialog = () => {
        dispatch( closeFeaturesFilterDialog() );
    }

    return (
        <Dialog
            fullWidth={ true }
            maxWidth="md"
            aria-labelledby=""
            open={ is_open }
            onClose={ handleCloseDialog }
            >
                <DialogTitle>Seleccione las Caracteristicas</DialogTitle>

                <DialogContent dividers className={ classes.root }>
                    <Grid container spacing={ 3 }>
                        <Grid item xs={ 10 } sm={ 6 }>
                            <CheckboxesOptionsGroup
                                active_selected_checkboxes={ active_collection_features }
                                collection_values={ orderTwoVerticalColumns(features_groups.heads) }
                                action_uncheck_event={ deselectOptionFeaturesFilter }
                                action_check_event={ choseOptionFeaturesFilter }
                                title="Cabeza | Tipo de llave"
                                />
                        </Grid>

                        <Grid item xs={ 10 } sm={ 6 }>
                            <CheckboxesOptionsGroup
                                active_selected_checkboxes={ active_collection_features }
                                collection_values={ orderTwoVerticalColumns(features_groups.others) }
                                action_uncheck_event={ deselectOptionFeaturesFilter }
                                action_check_event={ choseOptionFeaturesFilter }
                                title="Categoria"
                                />
                        </Grid>

                        <Grid item xs={ 10 } sm={ 6 }>
                            <CheckboxesOptionsGroup
                                active_selected_checkboxes={ active_collection_features }
                                collection_values={ orderTwoVerticalColumns(features_groups.materials) }
                                action_uncheck_event={ deselectOptionFeaturesFilter }
                                action_check_event={ choseOptionFeaturesFilter }
                                title="Acabado de material"
                                />
                        </Grid>

                        <Grid item xs={ 10 } sm={ 6 }>
                            <CheckboxesOptionsGroup
                                active_selected_checkboxes={ active_collection_features }
                                collection_values={ orderTwoVerticalColumns(features_groups.uses) }
                                action_uncheck_event={ deselectOptionFeaturesFilter }
                                action_check_event={ choseOptionFeaturesFilter }
                                title="Usos"
                                />
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus color="primary" onClick={ handleCloseDialog }>
                        Cancelar
                    </Button>

                    <Button color="primary">
                        Aceptar
                    </Button>
                </DialogActions>
        </Dialog>
    );
}

export default MultipleFeatureSelector;