import React from 'react';
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';

const AddButton = () => (
    <Fab color="primary" target="_blank" rel="noopener" href="/crear-nuevo-producto">
        <Add />
    </Fab>
);

export default AddButton;