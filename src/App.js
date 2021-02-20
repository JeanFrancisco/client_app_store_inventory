import React, { useState } from 'react';
import { AppBar, Paper, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  LocalMall,
  BubbleChart,
  TrendingUp,
  ListAlt,
  FlightLand,
  Settings
} from '@material-ui/icons';
import TabPanel from './components/misc/TabPanel';
import RegisterSale from './views/RegisterSale';
import ProductsInventory from './views/ProductsInventory';

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
          <RegisterSale />
        </TabPanel>
        <TabPanel value={ selectedTab } index={ 1 }>
          <ProductsInventory />
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
          <Tab icon={ <LocalMall/> } label="Vender"/>
          <Tab icon={ <BubbleChart/> } label="Productos"/>
          <Tab icon={ <TrendingUp/> } label="Ventas"/>
          <Tab icon={ <ListAlt/> } label="Nuevo Pedido"/>
          <Tab icon={ <FlightLand/> } label="Recibidos"/>
          <Tab icon={ <Settings/> } label="Configuracion"/>
        </Tabs>
      </AppBar>
    </div>
  );
}

export default App;
