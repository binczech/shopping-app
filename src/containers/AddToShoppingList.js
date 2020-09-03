import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemAdded } from '../actions/actionCreator'


export const AddToShoppingList = () => {
  let input
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
            return
        }
        dispatch(itemAdded(input.value))
        input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Item</button>
      </form>
    </div>
    )
}