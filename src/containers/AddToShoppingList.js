import React from 'react';
import { useDispatch } from 'react-redux';
import { itemAdded } from '../actions/actionCreator'
import  { Form, Button, InputGroup } from 'react-bootstrap'


export const AddToShoppingList = () => {
  let input
  const dispatch = useDispatch();

  return (
    <Form
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(itemAdded(input.value))
        input.value = ''
      }}
    >
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Přidejte něco na seznam"
          aria-describedby="basic-addon2"
          ref={node => (input = node)}
        />
        <InputGroup.Append>
          <Button type="submit" variant="primary">Přidat</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
    )
}