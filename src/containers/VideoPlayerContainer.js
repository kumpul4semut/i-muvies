import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getMovieDetails, getActorDetails, getVideoTrailer } from '../actions';
import { Main, Container } from '../modules';
import queryString from 'query-string';

import VideoPlayer from '../components/VideoPlayer';

class VideoPlayerContainer extends Component {
  state = {
    videoType: ''
  };

  componentDidMount() {
    const { pathname, search } = this.props.location;
    const value = queryString.parse(search);

    switch (pathname) {
      case '/play/trailer':
        this.setState({ ...this.state, videoType: 'trailer' });
        this.props.__trailer(value.id);
        break;
      case '/play/movie':
        this.setState({ ...this.state, videoType: 'movie' });
        this.props.__video(value.id);
        break;
      default:
        return null;
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const { pathname, search } = nextProps.location;
      const value = queryString.parse(search);
      switch (pathname) {
        case '/play/trailer':
          this.setState({ ...this.state, videoType: 'trailer' });
          this.props.__trailer(value.id);
          break;
        case '/play/movie':
          this.setState({ ...this.state, videoType: 'movie' });
          this.props.__video(value.id);
          break;
        default:
          return null;
      }
    }
  }
  render() {
    const { movie, actors, pathname, trailer } = this.props;

    let rendered = <div id="loadinghdo" />;

    switch (this.state.videoType) {
      case 'trailer':
        if (trailer.isLoading === false && trailer.response) {
          const { results } = trailer.response;
          if (results && results.length > 0) {
            rendered = (
              <VideoPlayer
                movie={movie}
                actors={actors}
                relativeUrl={pathname}
                type="trailer"
                src={results[0].key}
              />
            );
          }
        }
        break;
      case 'movie':
        rendered = (
          <VideoPlayer
            movie={movie}
            actors={actors}
            relativeUrl={pathname}
            type="movie"
            src="id"
          />
        );
        break;

      default:
        return null;
    }
    return (
      <Main>
        <Container style={{ paddingTop: '20px', minHeight: '70vh' }}>
          {rendered}
        </Container>
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movieDetails,
    actors: state.actors,
    pathname: ownProps.location.pathname,
    trailer: state.trailer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    __construct: id => {
      dispatch(getMovieDetails(id));
      dispatch(getActorDetails(id));
    },
    __trailer: id => {
      dispatch(getVideoTrailer(id));
    },
    __video: id => console.log('ID VIDEO', id)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayerContainer);
