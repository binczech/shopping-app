import { combineReducers } from 'redux'
import shoppingList from './shoppingList'
import categoriesLeaflets from './categoriesLeaflets'
import leaflet from './leaflet'

export default combineReducers({
    shoppingList,
    categoriesLeaflets,
    leaflet
})