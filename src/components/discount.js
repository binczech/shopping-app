import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button } from 'react-bootstrap'
import DiscountShop from '../containers/discountShop'
import { itemAdded } from '../actions/actionCreator'
import { useDispatch } from 'react-redux';

const propTypes = {
  item: PropTypes.object
}

function Discount(props) {
  const dispatch = useDispatch();
  return (
    <Container className="discount-item">
      <Container className="title">
        {props.item.name}
        <Button
          className="primary"
          onClick={() => dispatch(itemAdded(props.item.name))}>Přidat
        </Button>
      </Container>
      {props.item.discounts.map(
        discount => <DiscountShop shop={discount} />
      )}
    </Container>
  )
}

Discount.propTypes = propTypes

export default Discount
