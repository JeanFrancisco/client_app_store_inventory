import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Grid,
    Typography
} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SalePreviewTable from '../components/registerSale/SalePreviewTable';

const RegisterSale = () => (
    <Grid container
    direction="row"
    justify="center"
    alignItems="flex-start"
    alignContent="space-between">
        <Grid item xs={ 12 } sm={ 8 }>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    id="expansion-panel-item-one"
                    expandIcon={ <ExpandMore/> }
                    aria-controls="panel-1-content">
                    <Typography>Mostrar/Ocultar listado para venta en vista previa</Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <SalePreviewTable />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
    </Grid>
);

export default RegisterSale;