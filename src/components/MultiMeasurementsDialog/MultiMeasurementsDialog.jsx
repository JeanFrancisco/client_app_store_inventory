import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    deselectOptionMeasurementsFilter,
    choseOptionMeasurementsFilter,
} from '../../redux/actions/listProducts';

const english_measurements = ['1/8', '3/16', '1/4', '5/16', '3/8', '7/16', '1/2', '1', '1 1/2', '2', '3', '4'];
const metric_measurements = [4, 5, 6, 7, 8, 10, 12, 14, 18, 20];

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
    }
}));

const MeasurementsPopup = ({ isOpen, actionOnClose }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const disabled_measurements = useSelector( state => state.listProducts.disabled_options_measurements_filter );
    const active_selected_measurements = useSelector( state => state.listProducts.active_selected_measurements_filter );

    const handleCloseDialog = (e) => {
        dispatch( actionOnClose() );
    }

    return (
        <Dialog
            fullWidth
            maxWidth="md"
            aria-labelledby=""
            open={ isOpen }
            onClose={ handleCloseDialog }
            >
                <DialogTitle>Seleccione las Medidas</DialogTitle>

                <DialogContent dividers className={ classes.root }>
                    <Grid container spacing={ 3 }>
                        <Grid item xs={ 10 } sm={ 6 }>
                            <CheckboxesOptionsGroup
                                activeSelectedCheckboxes={ active_selected_measurements }
                                collectionValues={ metric_measurements }
                                actionForUncheck={ deselectOptionMeasurementsFilter }
                                actionForCheck={ choseOptionMeasurementsFilter }
                                title="Milimetrico"
                                />
                        </Grid>

                        <Grid item xs={ 10 } sm={ 6 }>
                            <CheckboxesOptionsGroup
                                activeSelectedCheckboxes={ active_selected_measurements }
                                collectionValues={ english_measurements }
                                actionForUncheck={ deselectOptionMeasurementsFilter }
                                actionForCheck={ choseOptionMeasurementsFilter }
                                title="Inglés"
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
    )
}

export default MeasurementsPopup;