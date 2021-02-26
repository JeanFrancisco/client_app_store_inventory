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

    const {
        activeSelectedCheckboxes: active_selected_checkboxes,
        collectionValues: collection_values,
        title,
        helperText: helper_text,
        actionForUncheck: action_uncheck_event,
        actionForCheck: action_check_event,
        onChange: handlerChangeEvent
    } = props;

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
        <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">{ title }</FormLabel>

            <FormGroup>
                <Grid container justify="space-between">
                {
                    collection_values.map( value => (
                        <Grid item xs={ 5 } key={ `grid_${value.toString().replace(' ', '')}` }>
                            <FormControlLabel
                                key={ value }
                                control={
                                    <Checkbox
                                        onChange={( typeof handlerChangeEvent === 'function' ? handlerChangeEvent : ((typeof value === 'string') ? handlerChange : handlerChangeNumeric) )}
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
    activeSelectedCheckboxes: PropTypes.array,
    collectionValues: PropTypes.array.isRequired,
    actionForUncheck: PropTypes.func,
    actionForCheck: PropTypes.func,
    helperText: PropTypes.string,
    onChange: PropTypes.func,
    title: PropTypes.string
}

CheckboxesOptionsGroup.defaultProps = {
    activeSelectedCheckboxes: [],
    helperText: '',
    title: '',
}

export default CheckboxesOptionsGroup;