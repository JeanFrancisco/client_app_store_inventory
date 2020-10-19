import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles,
} from '@material-ui/core';
import FeatureOptionsGroup from '../FeatureOptionsGroup/FeatureOptionsGroup';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
    }
}));

const MultipleFeatureSelector = (props) => {
    const classes = useStyles();

    return (
        <Dialog
            fullWidth={ true }
            maxWidth="sm"
            aria-labelledby=""
            open={ false }
            >
                <DialogTitle>Features</DialogTitle>

                <DialogContent dividers className={ classes.root }>
                    <FeatureOptionsGroup />
                    <FeatureOptionsGroup />
                </DialogContent>

                <DialogActions>
                    <Button autoFocus color="primary">
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