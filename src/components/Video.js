import React from 'react';
import 'video-react/dist/video-react.css';
import PropTypes from 'prop-types';
import {
  Player,
  BigPlayButton,
  LoadingSpinner,
  PosterImage
} from 'video-react';

export default props => {
  return (
    <Player
      src={props.src}
      poster={`https://image.tmdb.org/t/p/w780${props.poster}`}
    >
      <LoadingSpinner />
      <BigPlayButton position="center" />
    </Player>
  );
};
PosterImage.propTypes = {
  // The poster image url
  poster: PropTypes.string
};
