import React from 'react';
import {
    Checkbox,
    FormControl,
    Input,
    InputLabel,
    ListItemText,
    MenuItem,
    Select,
} from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

// TODO: Change to dynamic options data
const options = ['Tornillo', 'Rondanas', 'Tuerca', 'Opresor'];

const MultiSelectChecks = (params) => {

    const handleChange = () => ( null );

    return (
        <FormControl>

            <InputLabel>
                { params.heading }
            </InputLabel>

            <Select
                multiple
                value={ ['Tornillo', 'Rondanas', 'Tuerca', 'Opresor'] }
                onChange={ handleChange }
                input={ <Input /> }
                renderValue={ (selected) => selected.join(', ') }
                MenuProps={{
                    PaperProps: {
                        style: {
                            marginTop: 180,
                            maxHeight: ITEM_HEIGHT * 15.5 + ITEM_PADDING_TOP,
                            minWidth: 240,
                            width: 240,
                        }
                    }
                }}
                autoWidth={ true }
                >
                {
                    options.map( name => (
                        <MenuItem key={ name } value={ name }>
                            <Checkbox />
                            <ListItemText primary={ name }/>
                        </MenuItem>
                    ))
                }
            </Select>

        </FormControl>
    );
}

export default MultiSelectChecks;