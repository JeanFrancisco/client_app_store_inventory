import React from 'react';
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

const FeatureOptionsGroup = (props) => {

    const { active_features_selected, collection_values, title, helper_text } = props;

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{ title }</FormLabel>

            <FormGroup>
                <Grid container>
                {
                    collection_values.map( value => (
                        <Grid item xs={ 6 }>
                            <FormControlLabel
                                key={ value }
                                control={ <Checkbox checked={ ( active_features_selected.indexOf(value) > -1 ) } name={ value } /> }
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

FeatureOptionsGroup.propTypes = {
    active_features_selected: PropTypes.array,
    collection_values: PropTypes.array.isRequired,
    helper_text: PropTypes.string,
    title: PropTypes.string
}

FeatureOptionsGroup.defaultProps = {
    active_features_selected: [],
    helper_text: '',
    title: '',
}

export default FeatureOptionsGroup;