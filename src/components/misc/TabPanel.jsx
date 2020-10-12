import React from 'react';
import Box from '@material-ui/core/Box';

const TabPanel = ({ children, value, index, ...other }) => (
    <div
        id={ `simple-tabpanel-${index}` }
        role="tabpanel"
        hidden={ value !== index }
        aria-labelledby={ `simple-tab-${index}` }
        { ...other }
    >
        { value === index && ( <Box p={ 3 }>{ children }</Box> ) }
    </div>
);

export default TabPanel;