import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import { connect } from 'react-redux';
import { searchMovies, getMovieDetails, getActorDetails } from '../actions';
import {
  Header,
  Container,
  Logo,
  Menu,
  MenuItem,
  Search,
  SearchSuggest
} from '../modules';

class Headers extends Component {
  state = {
    str: '',
    mobile: false
  };
  mobileClickHandler = () => {
    this.setState({ ...this.state, mobile: !this.state.mobile });
  };
  strChangeHandler = event => {
    if (event.target.value.length > 3) {
      this.props.searchMovie(event.target.value);
    }
    this.setState({ ...this.state, str: event.target.value });
  };
  submitHandler = () => {};
  render() {
    console.log();
    const { response } = this.props.movieSearch;
    let src = <SearchSuggest isActive={false} />;
    if (this.state.str.length > 3) {
      if (response && response.results.length > 0) {
        src = (
          <SearchSuggest
            isActive={true}
            results={response.results}
            __construct={this.props.__construct}
          />
        );
      }
    }

    return (
      <Header>
        <Container>
          <Logo image={logo} />
          <div className="mobile-menu">
            <i className="fa fa-reorder" onClick={this.mobileClickHandler} />
          </div>
          <div className="mobile-search">
            <i className="fa fa-seacrh" />
          </div>
          <Menu>
            <MenuItem href="/" title="MOVIE" />
            <MenuItem href="/genre" title="GENRE" />
          </Menu>
          <Search
            active={this.state.mobile}
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
    movieSearch: state.movieSearch
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchMovie: query => {
      dispatch(searchMovies(query, 1));
    },
    __construct: id => {
      dispatch(getMovieDetails(id));
      dispatch(getActorDetails(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Headers);
