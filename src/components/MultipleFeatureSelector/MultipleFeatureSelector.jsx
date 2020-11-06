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

const MultipleFeatureSelector = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const is_open = useSelector( state => state.listProducts.is_open_features_filter_dialog );

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
                <DialogTitle>Features</DialogTitle>

                <DialogContent dividers className={ classes.root }>
                    <FeatureOptionsGroup />
                    <FeatureOptionsGroup />
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