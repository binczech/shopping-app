import { combineReducers } from 'redux'
import shoppingList from './shoppingList'
import categoriesLeaflets from './categoriesLeaflets'
import leaflet from './leaflet'
import discount from './discount'

export default combineReducers({
    shoppingList,
    categoriesLeaflets,
    leaflet,
    discount
})