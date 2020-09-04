import React from 'react'
import PropTypes from 'prop-types'
import HomepageLeaflet from './homepageLeaflet'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const propTypes = {
  category: PropTypes.object
}

function Category(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col className="category-title">
            {props.category.name}
          </Col>
        </Row>
        <Row>
            {props.category.leaflets.map(leaflet => <Link to={`/letaky/${leaflet.slug}`}><HomepageLeaflet leaflet={leaflet} /></Link>)}
        </Row>
      </Container>
    </div>
  )
}

Category.propTypes = propTypes

export default Category
