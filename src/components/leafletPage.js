import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'

const propTypes = {
  page: PropTypes.string
}

function LeafletPage(props) {
  return (
    <Container className="leaflet-page">
      <img alt="page" src={props.page}></img>
    </Container>
  )
}

LeafletPage.propTypes = propTypes

export default LeafletPage
