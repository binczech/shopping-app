import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemRemoved } from '../actions/actionCreator';
import { Row, Col, Container } from 'react-bootstrap';
import { XCircleFill } from 'react-bootstrap-icons';

export const ShowShoppingList = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.shoppingList);

  return list.map(
    item => 
    <Row>
      <Col>
        <Container className="shopping-list-item">
          {item.description}
          <XCircleFill className="cross pull-right" size={15} onClick={() => dispatch(itemRemoved(item.id))}>
            Odstranit
          </XCircleFill>
        </Container>
      </Col>
    </Row>
  )
}