import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
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
    const { location, movies } = this.props;

    let total_pages = 0;
    if (!movies.isLoading && movies.response) {
      total_pages = movies.response.total_pages;
    }
    const split = location.pathname.split('/');
    return (
      <Main>
        <Container style={{ paddingTop: '20px', minHeight: '70vh' }}>
          <MainContent>
            <MoviesType
              movies={movies}
              relativeUrl={location.pathname}
              title={split[2].toUpperCase()}
            />
            <div id="pagination">
              <nav>
                <ReactPaginate
                  containerClassName={'pagination'}
                  pageCount={total_pages}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={5}
                  onPageChange={e =>
                    this.props.__construct(
                      this.props.match.params.id,
                      e.selected + 1
                    )
                  }
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
