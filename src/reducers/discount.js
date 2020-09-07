import * as actions from '../actions/discount'
const initialState = {
  loading: false,
  data: [],
  error: ''
}

export default function discount(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_DISOUNT_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actions.FETCH_DISOUNT_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: ''
      }

    case actions.FETCH_DISOUNT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload.error
      }
  
    default:
      return state
  }
}