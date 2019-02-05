import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getMovieDetails, getActorDetails } from '../actions';
import { Main, Container } from '../modules';
import MovieDetails from '../components/MovieDetails';

class MoviesDetailContainer extends Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    if (movieId) {
      this.props.__construct(movieId);
    }
  }

  render() {
    const { movie, actors, pathname } = this.props;
    return (
      <Main>
        <Container style={{ paddingTop: '20px', minHeight: '70vh' }}>
          <MovieDetails movie={movie} actors={actors} relativeUrl={pathname} />
        </Container>
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movieDetails,
    actors: state.actors,
    pathname: ownProps.location.pathname
  };
};
const mapDispatchToProps = dispatch => {
  return {
    __construct: id => {
      dispatch(getMovieDetails(id));
      dispatch(getActorDetails(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesDetailContainer);
