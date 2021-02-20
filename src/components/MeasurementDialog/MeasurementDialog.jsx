import React, { useState } from 'react';
import {
    Grid,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography
} from '@material-ui/core';
import ListSelector from '../misc/ListSelector';

const MeasurementDialog = ({ value, onChangeValue, isOpen, onClose }) => {
    return (
        <Dialog
            onClose={ onClose }
            maxWidth="md"
            fullWidth={ true }
            open={ isOpen }>
                <DialogTitle>
                    Selecciona una medida
                </DialogTitle>

                <DialogContent>
                    <Grid container
                        spacing={ 2 }
                        direction="row"
                        alignItems="flex-start"
                        justify="space-around">

                        <Grid item
                            container
                            spacing={ 2 }>

                            <Grid item xs>
                                <Typography>Milimétrico</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography>Inglés</Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs
                            container
                            spacing={ 1 }
                            direction="row">

                            <Grid item xs>
                                <ListSelector
                                    items={ [{ display: '3', value: '3 mm' }, { display: '4', value: '4 mm'}] }
                                    handleSelect={ onChangeValue }
                                    selected={ value } />
                            </Grid>
                            <Grid item xs>
                                <ListSelector
                                    items={ [{ display: '5', value: '5 mm' }] }
                                    handleSelect={ onChangeValue }
                                    selected={ value } />
                            </Grid>
                        </Grid>

                        <Grid item xs
                            container
                            spacing={ 1 }>

                            <Grid item xs>
                                <ListSelector
                                    items={ [{ display: '2+1/2', value:'2+1/2 in' }] }
                                    handleSelect={ onChangeValue }
                                    selected={ value } />
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>

                {/* TODO: Add one action to cancel the update chain */}
                <DialogActions>
                    <Button
                        onClick={ onClose }
                        color="primary">
                        Cancelar</Button>
                </DialogActions>
        </Dialog>
    );
}

export default MeasurementDialog;