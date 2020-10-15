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
import ListProducts from '../components/ListProducts/ListProducts';
import SalePreviewCalculator from '../components/SalePreviewCalculator/SalePreviewCalculator';
import SearchBar from '../components/SearchBar/SearchBar'

const RegisterSale = () => (
    <Grid container
        direction="row"
        justify="center"
        alignItems="flex-start"
        alignContent="space-between"
    >
        <Grid item xs={ 10 } lg={ 7 }>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    id="expansion-panel-item-one"
                    expandIcon={ <ExpandMore/> }
                    aria-controls="panel-1-content">

                    <Typography>Mostrar/Ocultar listado para venta en vista previa</Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <SalePreviewCalculator />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>

        <Grid item xs={ 9 } lg={ 4 }>
            <Box mx={ 5 } mt={ 3 }>
                <SearchBar />
            </Box>
        </Grid>

        <Grid item sm={ 12 }>
            <Box mt={ 4 }>
                <ListProducts />
            </Box>
        </Grid>
    </Grid>
);

export default RegisterSale;