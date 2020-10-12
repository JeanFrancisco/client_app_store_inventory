import React, { useState } from 'react';
import { AppBar, Paper, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AttachMoney, Timeline, ListAlt, FlightLand, Settings } from '@material-ui/icons';
import TabPanel from './components/misc/TabPanel';

const useStyles = makeStyles( theme => ({
    appGlobalContainer: {
      paddingBottom: 50
    },
    appNavigationBar: {
      top: 'auto',
      bottom: 0
    }
  })
);

function App() {
  const classes = useStyles();

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelection = (e, new_selected_tab) => {
    setSelectedTab(new_selected_tab);
  }

  return (
    <div className="App">
      <Paper square className={ classes.appGlobalContainer } elevation={ 2 }>
        <TabPanel value={ selectedTab } index={ 0 }>

        </TabPanel>
        <TabPanel value={ selectedTab } index={ 1 }>

        </TabPanel>
      </Paper>
      <AppBar position="fixed" color="default" className={ classes.appNavigationBar }>
        <Tabs
          value={ selectedTab }
          onChange={ handleTabSelection }
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={ <AttachMoney/> } label="Vender"/>
          <Tab icon={ <Timeline/> } label="Ventas"/>
          <Tab icon={ <ListAlt/> } label="Nuevo Pedido"/>
          <Tab icon={ <FlightLand/> } label="Recibidos"/>
          <Tab icon={ <Settings/> } label="Configuracion"/>
        </Tabs>
      </AppBar>
    </div>
  );
}

export default App;
