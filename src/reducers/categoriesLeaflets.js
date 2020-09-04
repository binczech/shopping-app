import * as categoriesActions from '../actions/categoriesLeaflets'
const initialState = {
  loading: false,
  data: [],
  error: ''
}

export default function categoriesLeaflets(state = initialState, action) {
  switch (action.type) {
    case categoriesActions.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true
      }
  
    case categoriesActions.FETCH_CATEGORIES_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: ''
      }

    case categoriesActions.FETCH_CATEGORIES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload.error
      }
      
    default:
      return state;
  }
}
