import React from 'react';
import { Grid } from '@material-ui/core';
import CheckboxesOptionsGroup from '../misc/CheckboxesOptionsGroup';
import { orderTwoVerticalColumns } from '../../utils/arrays.js';

const features_groups = {
    heads: ['Allen', 'Castillo', 'C/Coche', 'C/Plana', 'Gota', 'Hexagonal', 'Set'],
    materials: ['Galvanizado', 'Grado 5', 'Liviana'],
    others: ['Gripo', 'H200', 'H180', 'Ins. Nylon', 'Presion', 'Plana', 'Estructural'],
    uses: ['Arado', 'Automotriz', 'Centro Muelle', 'Flecha', 'Golpe', 'Seguridad' ],
}

const MultipleFeatureSelector = (props) => {
    const { actionForCheck, actionForUncheck, activeSelectedCheckboxes, onChange } = props;
    const inheritedProperties = { actionForCheck, actionForUncheck, activeSelectedCheckboxes, onChange };

    return (
        <Grid container spacing={ 2 }>
            <Grid item xs={ 10 } sm={ 5 }>
                <CheckboxesOptionsGroup
                    { ...inheritedProperties }
                    collectionValues={ orderTwoVerticalColumns(features_groups.heads) }
                    title="Cabeza | Tipo de llave"
                    />
            </Grid>

            <Grid item xs={ 10 } sm={ 5 }>
                <CheckboxesOptionsGroup
                    { ...inheritedProperties }
                    collectionValues={ orderTwoVerticalColumns(features_groups.others) }
                    title="Categoria"
                    />
            </Grid>

            <Grid item xs={ 10 } sm={ 5 }>
                <CheckboxesOptionsGroup
                    { ...inheritedProperties }
                    collectionValues={ orderTwoVerticalColumns(features_groups.materials) }
                    title="Acabado de material"
                    />
            </Grid>

            <Grid item xs={ 10 } sm={ 5 }>
                <CheckboxesOptionsGroup
                    { ...inheritedProperties }
                    collectionValues={ orderTwoVerticalColumns(features_groups.uses) }
                    title="Usos"
                    />
            </Grid>
        </Grid>
    );
}

export default MultipleFeatureSelector;