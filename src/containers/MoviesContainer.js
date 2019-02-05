import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { Main, Container, MainContent } from '../modules';
import ReactPaginate from 'react-paginate';
import MoviesType from '../components/MoviesType';

class MoviesContainer extends Component {
  componentDidMount() {
    this.props.__construct();
  }

  render() {
    const { movies, location } = this.props;

    let total_pages = 0;
    if (!movies.isLoading && movies.response) {
      total_pages = movies.response.total_pages;
    }
    const split = location.pathname.split('/');
    let title = split[2] === 'movie' ? split[1] : split[2];

    return (
      <Main>
        <Container style={{ paddingTop: '20px', minHeight: '70vh' }}>
          <MainContent>
            <MoviesType
              movies={movies}
              relativeUrl={location.pathname}
              title={title.toUpperCase()}
            />
            <div id="pagination">
              <nav>
                <ReactPaginate
                  containerClassName={'pagination'}
                  pageCount={total_pages}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={5}
                  onPageChange={e => this.props.__construct(e.selected + 1)}
                  activeClassName={'active'}
                />
              </nav>
            </div>
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
const mapDispatchToProps = (dispatch, ownProps) => {
  const { pathname } = ownProps.location;
  return {
    __construct: page => {
      dispatch(getMovies(pathname, page));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
