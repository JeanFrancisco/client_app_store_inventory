import React from 'react';
import { Box, Grid, Paper, Toolbar, Tooltip, Typography } from "@material-ui/core";
import ProductsTable from '../components/ProductsTable/ProductsTable';
import SearchBar from '../components/SearchBar/SearchBar'
import AddButton from '../components/misc/AddButton';

const ProductsInventory = () => (
    <Grid container
        direction="row"
        justify="center">
        <Grid item xs={ 12 }>
            <Paper>
                <Toolbar>
                    <Grid container
                        direction="row"
                        alignItems="center">
                        <Grid item xs={ 12 }
                            md={ 3 }>
                            <Typography>
                                Productos
                            </Typography>
                        </Grid>

                        <Grid item xs={ 12 }
                            md={ 9 }>
                            <Box my={ 3 } mx={ 5 }>
                                <SearchBar />
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>

                <ProductsTable />
            </Paper>
        </Grid>

        {/* // TODO: Add to admin permission validation */}
        <Box mt={ 2 }>
            <Tooltip title="Crear un Nuevo Producto">
                <AddButton />
            </Tooltip>
        </Box>
    </Grid>
);

export default ProductsInventory;