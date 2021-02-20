import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import CreateProduct from './views/CreateProduct';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router>
      <Switch>
        <Route exact path="/crear-nuevo-producto" component={ CreateProduct } />
        <Route path="/:filter?" component={ App } />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root