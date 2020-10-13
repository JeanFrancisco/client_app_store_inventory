import React from 'react';
import {
    Box,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Grid,
    Typography
} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SalePreviewTable from '../components/registerSale/SalePreviewTable';
import SearchBar from '../components/registerSale/SearchBar'

const RegisterSale = () => (
    <Grid container
        direction="row"
        justify="center"
        alignItems="flex-start"
        alignContent="space-between"
    >
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

        <Grid item sm={ 7 }>
            <Box my={ 5 }>
                <SearchBar />
            </Box>
        </Grid>
    </Grid>
);

export default RegisterSale;