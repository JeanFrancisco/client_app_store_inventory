import React from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import Search from '@material-ui/icons/Search';

// TODO: Change to dyamic data
const options = [
    { item: 1, name: 'tornillo', thread: 'nc', width: '3/8', large: '2 + 1/2', price: 25.89, quantity: 4 },
    { item: 2, name: 'tornillo', thread: 'mm', width: '8', large: '45', price: 25.89, quantity: 5 },
    { item: 3, name: 'tuerca grado 5', thread: 'nf', width: '3/8', large: '', price: 5.89, quantity: 3 },
    { item: 4, name: 'abrazadera', thread: 'nf', width: '3/4', large: '23 in', price: 123.00, quantity: 1 },
];

const Searchbar = () => {

    const customTextField = (params) => {

        const {InputProps, ...other_params} = params;
        const current_start_adorment = InputProps.startAdornment;

        const adorment = (
            <InputAdornment position="start" key="-1">
                <Search />
            </InputAdornment>
        );

        if(current_start_adorment !== undefined)
            InputProps.startAdornment.unshift(adorment);
        else 
            InputProps.startAdornment = [ adorment ];

        return (
            <TextField
                label="Ingrese las palabras clave para su búsqueda"
                variant="standard"
                placeholder="Ejemplo: Birlo, Tornillo, Grasera, Automotriz, Allen, etc."
                InputProps={ InputProps }
                {... other_params}
            />
        )

    };

    return (
        <Grid container
            direction="row"
            justify="space-around"
            alignContent="stretch"
            alignItems="flex-end"
        >
            <Grid item xs>
                <Autocomplete
                    multiple
                    options={ options }
                    getOptionLabel={ option => option.name }
                    renderInput={ customTextField }
                />
            </Grid>
        </Grid>
    );
}

export default Searchbar;