import React from 'react';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
} from '@material-ui/core';

const FeatureOptionsGroup = (props) => {

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend"> Arbitrary Title </FormLabel>

            <FormGroup>
                <FormControlLabel
                    control={ <Checkbox checked={ true } name="chckbx1" /> }
                    label="Opcion Caracteristica 1"
                />
                <FormControlLabel
                    control={ <Checkbox checked={ false } name="chckbx2" /> }
                    label="Opcion Caracteristica 2"
                />
                <FormControlLabel
                    control={ <Checkbox checked={ false } name="chckbx3" /> }
                    label="Opcion Caracteristica 3"
                />
            </FormGroup>

            <FormHelperText> BE careful. Este es un texto de ayuda o instrucciones </FormHelperText>
        </FormControl>
    )
}

export default FeatureOptionsGroup;