import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import { fetchLeaflet } from '../actions/leafletActionCreator'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import LeafletPage from '../components/leafletPage'

function Leaflet({leafletData, fetchLeaflet}) {
  let { slug } = useParams()
  useEffect(() => {
    fetchLeaflet(slug)
  }, [fetchLeaflet, slug])
  return leafletData.loading ? (
    <Container>Loading</Container>
  ) : (
    <Layout>
      <Container>
        { leafletData && leafletData.data.name &&
          <Container className="category-title">
            {leafletData.data.name}
          </Container>}
        {leafletData && leafletData.data && leafletData.data.pages &&
          leafletData.data.pages.map(
          page => <LeafletPage page={page} />)}
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  leafletData: state.leaflet
})

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchLeaflet: () => dispatch(fetchLeaflet(props.match.params.slug))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaflet)
