import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'

const propTypes = {
  shop: PropTypes.object
}

function DiscountShop(props) {
  return (
    <Container className="shop">
      <Container className="name">
        {props.shop.shopName}
      </Container>
      <Container className="price">
        cena <span>{props.shop.price}</span> / {props.shop.amount}
      </Container>
      <Container>
        {props.shop.validity}
      </Container>
    </Container>
  )
}

DiscountShop.propTypes = propTypes

export default DiscountShop
