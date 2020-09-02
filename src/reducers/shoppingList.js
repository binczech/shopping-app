import * as actions from '../actions/shoppingList'

const initialState = [];
let lastId = 0;

export default function shoppingList(state = initialState, action) {
  switch (action.type) {
    case actions.ITEM_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description
        }
      ]

    case actions.ITEM_REMOVED:
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
}