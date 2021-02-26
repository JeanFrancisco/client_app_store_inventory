import React from 'react';
import PropTypes from 'prop-types';
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

const MultiSelectChecks = (props) => {

    const { value, options, heading: title, disabled_options, handlerChangeEvent: handleChange } = props;

    return (
        <FormControl>

            <InputLabel>
                { title }
            </InputLabel>

            <Select
                multiple
                value={ value }
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
                autoWidth
                >
                {
                    options.map( name => (
                        <MenuItem key={ name } value={ name } disabled={ disabled_options.indexOf(name) > -1 }>
                            <Checkbox checked={ value.indexOf(name) > -1 }/>
                            <ListItemText primary={ name }/>
                        </MenuItem>
                    ))
                }
            </Select>

        </FormControl>
    );
}

MultiSelectChecks.propTypes = {
    value: PropTypes.array,
    options: PropTypes.array.isRequired,
    heading: PropTypes.string,
    disabled_options: PropTypes.array,
    handlerChangeEvent: PropTypes.func,
}

MultiSelectChecks.defaultProps = {
    disabled_options: [],
    heading: 'Sin Titulo'
}

export default MultiSelectChecks;