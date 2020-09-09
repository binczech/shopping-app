import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../containers/App'
import Leaflet from '../containers/Leaflet'
import DiscountList from '../containers/DiscountList'
import PropTypes from 'prop-types'
import { PersistGate } from 'redux-persist/integration/react'

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Switch>
          <Route path='/letaky/:slug' component={Leaflet}/>
          <Route path='/slevy' component={DiscountList} />
          <Route path='/' component={App}/>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
