import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../containers/App'
import Leaflet from '../containers/Leaflet'
import PropTypes from 'prop-types'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/letaky/:slug' component={Leaflet}/>
        <Route path='/' component={App}/>
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
