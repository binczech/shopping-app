import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/actionCreator'
import { Container } from 'react-bootstrap';
import Category from '../components/category'

function CategoriesLeaflets({ categoriesData, fetchCategories }) {
  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])
  return categoriesData.loading ? (
      <Container>Loading</Container>
    ) : (
      <Container>
        {categoriesData && categoriesData.data && categoriesData.data.map(
          category => <Category category={category} />
        )}
      </Container>
    );
}

const mapStateToProps = state => {
  return {
    categoriesData: state.categoriesLeaflets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesLeaflets);
