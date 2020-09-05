import * as actions from './leaflet'
import axios from 'axios'

export function fetchLeafletRequest() {
  return {
    type: actions.FETCH_LEAFLET_REQUEST
  }
}

export function fetchLeafletSuccess(data) {
  return {
    type: actions.FETCH_LEAFLET_SUCCESS,
    payload: {
      data: data
    }
  }
}

export function fetchLeafletFailure(error) {
  return {
    type: actions.FETCH_LEAFLET_FAILURE,
    payload: {
      error: error
    }
  }
}

export function fetchLeaflet(leafletName) {
  return (dispatch) => {
    dispatch(fetchLeafletRequest())
    axios.get(`http://localhost:3001/leaflet/${leafletName}`)
      .then(response => {
        const data = response.data
        dispatch(fetchLeafletSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchLeafletFailure(errorMsg))
      })
  }
}