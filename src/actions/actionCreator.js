import * as actions from './shoppingList'
import * as categoriesActions from './categoriesLeaflets'
import axios from 'axios'

export function itemAdded(description) {
    return {
        type: actions.ITEM_ADDED,
        payload: {
            description: description
        }
    }
}

export function itemRemoved(id) {
    return {
        type: actions.ITEM_REMOVED,
        payload: {
            id: id
        }
    }
}

export function fetchCategoriesRequest() {
  return {
    type: categoriesActions.FETCH_CATEGORIES_REQUEST
  }
}

export function fetchCategoriesSuccess(data) {
  return {
    type: categoriesActions.FETCH_CATEGORIES_SUCCESS,
    payload: {
      data: data
    }
  }
}

export function fetchCategoriesFailure(error) {
  return {
    type: categoriesActions.FETCH_CATEGORIES_FAILURE,
    payload: {
      error: error
    }
  }
}

export function fetchCategories() {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest())
    axios.get('http://localhost:3001/hp')
      .then(response => {
        const data = response.data
        dispatch(fetchCategoriesSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchCategoriesFailure(errorMsg))
      })
  }
}