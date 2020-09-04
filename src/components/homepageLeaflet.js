import React from 'react'
import PropTypes from 'prop-types'
import { Container, Col } from 'react-bootstrap'

const propTypes = {
  leaflet: PropTypes.object
}

function HomepageLeaflet(props) {
  return (
    <Col className="homepage-leaflet">
      <Container>
        <img alt={props.leaflet.name} src={props.leaflet.img}></img>
      </Container>
      <Container className="title">
        {props.leaflet.name}
      </Container>
    </Col>
  )
}

HomepageLeaflet.propTypes = propTypes

export default HomepageLeaflet
