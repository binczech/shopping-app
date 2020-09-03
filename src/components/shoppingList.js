import React from 'react'
import { AddToShoppingList } from '../containers/AddToShoppingList'
import { ShowShoppingList } from '../containers/ShowShoppingList'
import { Container } from 'react-bootstrap'
import { CardList } from 'react-bootstrap-icons'


const propTypes = {
  
}

function ShoppingList(props) {
  return (
    <Container className="shopping-list">
      <Container className="title">Nákupní seznam <CardList /></Container>
      <Container>
        <ShowShoppingList />
      </Container>
      <Container className="add-to-shopping-list">
        <AddToShoppingList />
      </Container>
    </Container>
  )
}

ShoppingList.propTypes = propTypes

export default ShoppingList
