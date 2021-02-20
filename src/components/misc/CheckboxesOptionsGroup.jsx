import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    Grid,
} from '@material-ui/core';

const CheckboxesOptionsGroup = (props) => {

    const { active_selected_checkboxes, collection_values, title, helper_text, action_uncheck_event, action_check_event } = props;

    const dispatch = useDispatch();

    const handlerChange = (e) => {
        const value = e.target.value;

        if(e.target.checked)
            dispatch( action_check_event(value) );
        else
            dispatch( action_uncheck_event(value) );
    }

    const handlerChangeNumeric = (e) => {
        const value = Number(e.target.value);

        if(e.target.checked)
            dispatch( action_check_event(value) );
        else
            dispatch( action_uncheck_event(value) );
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{ title }</FormLabel>

            <FormGroup>
                <Grid container>
                {
                    collection_values.map( value => (
                        <Grid item xs={ 6 } key={ `grid_${value.toString().replace(' ', '')}` }>
                            <FormControlLabel
                                key={ value }
                                control={
                                    <Checkbox
                                        onChange={ (typeof value === 'string') ? handlerChange : handlerChangeNumeric }
                                        checked={ ( active_selected_checkboxes.indexOf(value) > -1 ) }
                                        name={ value.toString() }
                                        value={ value }
                                    />
                                }
                                label={ value }
                            />
                        </Grid>
                    ))
                }
                </Grid>
            </FormGroup>

            <FormHelperText>{ helper_text }</FormHelperText>
        </FormControl>
    )
}

CheckboxesOptionsGroup.propTypes = {
    active_checkboxes_selected: PropTypes.array,
    action_uncheck_event: PropTypes.func.isRequired,
    action_check_event: PropTypes.func.isRequired,
    collection_values: PropTypes.array.isRequired,
    helper_text: PropTypes.string,
    title: PropTypes.string
}

CheckboxesOptionsGroup.defaultProps = {
    active_checkboxes_selected: [],
    helper_text: '',
    title: '',
}

export default CheckboxesOptionsGroup;