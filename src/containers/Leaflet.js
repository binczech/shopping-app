import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'

function Leaflet(props) {
  return (
    <Layout>
      {props.match.params.slug}
    </Layout>
  );
}

const mapStateToProps = (state, ownProps) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaflet)
