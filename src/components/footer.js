import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = props => {
  return (
    <Container className="footer">
      <span>React aplikace využívá balíčky: </span> 
      <a href="https://redux.js.org/introduction/getting-started">Redux</a>,
      <a href="https://reactrouter.com/web/guides/quick-start"> React Router</a>,
      <a href="https://react-bootstrap.github.io/"> React Bootstrap</a>,
      <a href="https://www.npmjs.com/package/react-bootstrap-icons"> React Bootstrap Icons</a>,
      <a href="https://www.npmjs.com/package/node-sass"> Node Sass</a>,
      <a href="https://github.com/axios/axios"> Axios</a>

    </Container>
  );
};

Footer.propTypes = {
  
};

export default Footer;