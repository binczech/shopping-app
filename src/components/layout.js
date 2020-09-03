import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../styles.scss';
import Header from './header';
import Footer from './footer';

const propTypes = {
    
}

function Layout(props) {
  return (
    <Container className="body-layout">
      <Header />
      <Row>
        {props.children}
      </Row>
      <Footer />
    </Container>
  )
}

Layout.propTypes = propTypes

export default Layout
