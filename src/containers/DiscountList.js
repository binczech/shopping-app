import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchDiscounts } from '../actions/discountActionCreator'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'
import Discount from '../components/discount'

function DiscountList({discountListData, fetchDiscounts}) {
  useEffect(() => {
    fetchDiscounts()
  }, [fetchDiscounts])
  return discountListData.loading ? (
    <Layout>
      <Container>
        Loading
      </Container>
    </Layout>
  ) : (
    <Layout>
      <Container>
        {discountListData && discountListData.data && discountListData.data.map(
          item => <Discount item={item} />
        )}
      </Container>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    discountListData: state.discount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDiscounts: () => dispatch(fetchDiscounts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscountList)
