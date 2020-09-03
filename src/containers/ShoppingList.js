import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { itemRemoved } from '../actions/actionCreator'

export const ShoppingList = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.shoppingList);

    return list.map(
        item => 
        <div>
            {item.description} 
            <button onClick={() => dispatch(itemRemoved(item.id))}>
                Delete
            </button>
        </div>
    )
}