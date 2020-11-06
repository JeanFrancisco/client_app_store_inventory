import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles,
} from '@material-ui/core';
import FeatureOptionsGroup from '../FeatureOptionsGroup/FeatureOptionsGroup';
import { closeFeaturesFilterDialog } from '../../redux/actions/listProducts';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
    }
}));

const feature_group = [
    'Allen', 'Automotriz', 'C/Coche', 'C/Muelle', 'C/Plana', 'Galvanizado',
    'Grado 5', 'Gripo', 'H180', 'H200', 'Hexagonal', 'Ins. Nylon',
    'Liviana', 'Seguridad', 'Set'
];

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
            maxWidth="sm"
            aria-labelledby=""
            open={ is_open }
            onClose={ handleCloseDialog }
            >
                <DialogTitle>Seleccione las Caracteristicas</DialogTitle>

                <DialogContent dividers className={ classes.root }>
                    <FeatureOptionsGroup
                        active_features_selected={ active_collection_features }
                        collection_values={ feature_group }
                        title="Caracteristicas"
                        />
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