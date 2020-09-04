import { combineReducers } from 'redux'
import shoppingList from './shoppingList'
import categoriesLeaflets from './categoriesLeaflets'

export default combineReducers({
    shoppingList,
    categoriesLeaflets
})