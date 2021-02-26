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
import MultipleFeatureSelector from '../MultipleFeatureSelector/MultipleFeatureSelector';
import {
    closeFeaturesFilterDialog,
    choseOptionFeaturesFilter,
    deselectOptionFeaturesFilter,
} from '../../redux/actions/listProducts';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
    }
}));

const DialogFeaturesSelector = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const is_open = useSelector( state => state.listProducts.is_open_features_filter_dialog );

    const active_collection_features = useSelector( state => state.listProducts.active_collection_features );

    const handleCloseDialog = () => {
        dispatch( closeFeaturesFilterDialog() );
    }

    return (
        <Dialog
            fullWidth
            maxWidth="md"
            aria-labelledby=""
            open={ is_open }
            onClose={ handleCloseDialog }
            >
                <DialogTitle>Seleccione las Caracteristicas</DialogTitle>

                <DialogContent dividers className={ classes.root }>
                    <MultipleFeatureSelector
                        actionForCheck={ choseOptionFeaturesFilter }
                        actionForUncheck={ deselectOptionFeaturesFilter }
                        activeSelectedCheckboxes={ active_collection_features } />
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

export default DialogFeaturesSelector;