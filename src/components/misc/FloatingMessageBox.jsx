import React from 'react';
import { Grow, Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const FloatingMessageBox = ({ open, severity, message, onClose }) => (
    <Snackbar
    open={ open }
    onClose={ onClose }
    autoHideDuration={ 8000 }
    TransitionComponent={ (props) => <Grow { ...props }/> }>

        <Alert severity={ severity } onClose={ onClose }>
            <AlertTitle>
                { severity === 'error' && <strong>Oops! Algo salió mal.</strong> }
            </AlertTitle>

            { message }
        </Alert>

    </Snackbar>
);

export default FloatingMessageBox;