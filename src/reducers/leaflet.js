import * as actions from '../actions/leaflet'
const initialState = {
  loading: false,
  data: [],
  error: ''
}

export default function leaflet(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_LEAFLET_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actions.FETCH_LEAFLET_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: ''
      }

    case actions.FETCH_LEAFLET_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload.error
      }
  
    default:
      return state
  }
}
