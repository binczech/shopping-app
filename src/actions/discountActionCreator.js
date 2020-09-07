import * as actions from './discount'
import axios from 'axios'

export function fetchDiscountRequest() {
  return {
    type: actions.FETCH_DISOUNT_REQUEST
  }
}

export function fetchDiscountSuccess(data) {
  return {
    type: actions.FETCH_DISOUNT_SUCCESS,
    payload: {
      data: data
    }
  }
}

export function fetchDiscountFailure(error) {
  return {
    type: actions.FETCH_DISOUNT_FAILURE,
    payload: {
      error: error
    }
  }
}

export function fetchDiscounts() {
  return (dispatch) => {
    dispatch(fetchDiscountRequest())
    axios.get('http://localhost:3001/discouts')
      .then(response => {
        const data = response.data
        dispatch(fetchDiscountSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchDiscountFailure(errorMsg))
      })
  }
}