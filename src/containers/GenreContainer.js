import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDiscover } from '../actions';
import { Main, Container, MainContent } from '../modules';
import MoviesType from '../components/MoviesType';

class GenreContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log('THIS', id);
    this.props.__construct(id);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.__construct(nextProps.match.params.id);
    }
  }
  render() {
    const { pathname } = this.props.location;

    const split = pathname.split('/');
    return (
      <Main>
        <Container style={{ paddingTop: '20px', minHeight: '70vh' }}>
          <MainContent>
            <MoviesType
              movies={this.props.movies}
              relativeUrl={pathname}
              title={split[2].toUpperCase()}
            />
          </MainContent>
        </Container>
      </Main>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    __construct: (id, page = 1) => {
      dispatch(getDiscover(`with_genres=${id}`, page));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreContainer);
