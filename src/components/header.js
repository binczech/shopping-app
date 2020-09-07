import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const propTypes = {
    
}

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Kupuj!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Letáky</Nav.Link>
          <Nav.Link href="/slevy">Akce</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Co hledáte?" className="mr-sm-2" />
          <Button variant="outline-success">Vyhledat</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = propTypes

export default Header
