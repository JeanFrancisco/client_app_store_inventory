import React from 'react';
import {
    Table,
    TableRow,
    TableBody,
    TableCell,
    TableContainer,
    TableSortLabel,
    TableHead,
    Checkbox,
    IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const ProductsTable = () => {
  return (
        <TableContainer>
            <Table stickyHeader
            size="medium" >
            <TableHead>
                <TableRow>
                    <TableCell key="a"
                        align="left" >
                        <TableSortLabel active={ false }
                            direction={ 'asc' } >
                            #</TableSortLabel>
                    </TableCell>

                    <TableCell key="b"
                        align="left" >
                        <TableSortLabel active={ true }
                            direction={ 'asc' } >
                            Nombre (Incluye características)</TableSortLabel>
                    </TableCell>

                    <TableCell key="c"
                        align="center" >
                        <TableSortLabel active={ false }
                            direction={ 'desc' } >
                            Medida</TableSortLabel>
                    </TableCell>

                    <TableCell key="d"
                        align="center" >
                        <TableSortLabel active={ false }
                            direction={ 'desc' } >
                            Ultima Modificacion</TableSortLabel>
                    </TableCell>

                    <TableCell key="e"
                        align="center" >
                        <TableSortLabel active={ false }
                            direction={ 'desc' } >
                            Precio</TableSortLabel>
                    </TableCell>

                    <TableCell key="f"
                        align="center" >
                        Acciones</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                <TableRow key="1"
                    hover
                    role="checkbox"
                    selected={ false } >

                    <TableCell key="7"
                        align="left" >
                        1</TableCell>

                    <TableCell key="8"
                        align="left" >
                        Lorem Impsu  novus deleaver</TableCell>

                    <TableCell key="9"
                        align="center" >
                        3/4 * 1+5/8</TableCell>

                    <TableCell key="10"
                        align="center" >
                        07-May-2020 10:14 AM</TableCell>

                    <TableCell key="11"
                        align="center" >
                        $ 89.00</TableCell>

                    <TableCell key="12"
                        padding="checkbox" >
                        <Checkbox checked={ false } />
                    </TableCell>
                </TableRow>

                <TableRow key="2"
                    hover
                    role="checkbox"
                    selected={ true } >

                    <TableCell key="7"
                        align="left" >
                        2</TableCell>

                    <TableCell key="8"
                        align="left" >
                        Lorem Impsu  novus deleaver</TableCell>

                    <TableCell key="9"
                        align="center" >
                        10 * 1.25 * 40</TableCell>

                    <TableCell key="10"
                        align="center" >
                        03-Abr-2020 09:45 AM</TableCell>

                    <TableCell key="11"
                        align="center" >
                        $ 43.00</TableCell>

                    <TableCell key="12"
                        padding="checkbox" >
                        <Checkbox checked={ true } />

                        <IconButton aria-label="delete" color="secondary">
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            </TableBody>
            </Table>
    </TableContainer>
  );  
}

export default ProductsTable;