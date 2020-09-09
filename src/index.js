import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store'
import Root from './components/root'
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const { store, persistor } = configureStore()

ReactDOM.render(<Root store={store} persistor={persistor} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
