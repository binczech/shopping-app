import React from 'react';
import '../styles.scss';
import Header from './header';
import Footer from './footer';
import ShoppingList from './shoppingList';
import { Container, Row, Col } from 'react-bootstrap';

const propTypes = {
    
}

function Layout(props) {
  return (
    <Container className="body-layout">
      <Header />
      <Row>
        <Col>
          {props.children}
        </Col>
        <Col sm="12" md="4">
          <ShoppingList />
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}

Layout.propTypes = propTypes

export default Layout
