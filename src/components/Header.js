import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import { connect } from 'react-redux';
import { searchMovies, getGenres } from '../actions';
import {
  Header,
  Container,
  Logo,
  Menu,
  MenuItem,
  Search,
  SearchSuggest,
  SubMenuItem,
  SubMenuLink
} from '../modules';

class Headers extends Component {
  state = {
    str: '',
    mobile: false,
    search: false
  };
  componentDidMount() {
    this.props.getGenres();
  }
  mobileClickHandler = () => {
    this.setState({ ...this.state, mobile: !this.state.mobile });
  };
  mobileSearchHandler = () => {
    this.setState({ ...this.state, search: !this.state.search });
  };
  strChangeHandler = event => {
    if (event.target.value.length > 3) {
      this.props.searchMovie(event.target.value);
    }
    this.setState({ ...this.state, str: event.target.value });
  };

  submitHandler = () => {};
  render() {
    let src = <SearchSuggest isActive={false} />;
    if (this.state.str.length > 3) {
      const { response } = this.props.movieSearch;
      if (response && response.results.length > 0) {
        src = <SearchSuggest isActive={true} results={response.results} />;
      }
    }
    const { response, isLoading } = this.props.genres;
    let renderGenres = null;
    if (isLoading === false && response) {
      if (response.genres && response.genres.length > 0) {
        renderGenres = response.genres.map(genre => (
          <SubMenuLink
            key={genre.id}
            href={`/genre/${genre.name.toLowerCase().replace(' ', '-')}/${
              genre.id
            }`}
          >
            {genre.name}
          </SubMenuLink>
        ));
      }
    }

    return (
      <Header>
        <Container>
          <Logo image={logo} />
          <div
            className={`mobile-menu active ${
              this.state.mobile ? 'active' : ''
            }`}
          >
            <i className="fa fa-reorder" onClick={this.mobileClickHandler} />
          </div>
          <div className="mobile-search">
            <i className="fa fa-search" onClick={this.mobileSearchHandler} />
          </div>
          <Menu active={this.state.mobile}>
            <MenuItem href="/" title="MOVIE" />
            <MenuItem href="#!" title="GENRE" category="genre">
              <SubMenuItem>{renderGenres}</SubMenuItem>
            </MenuItem>
          </Menu>
          <Search
            active={this.state.search}
            searchSubmit={this.submitHandler}
            handleChange={e => this.strChangeHandler(e)}
            movieSearch={this.props.movieSearch}
          >
            {src}
          </Search>
        </Container>
      </Header>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieSearch: state.movieSearch,
    genres: state.genres
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchMovie: query => {
      dispatch(searchMovies(query, 1));
    },

    getGenres: () => {
      dispatch(getGenres());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Headers);
