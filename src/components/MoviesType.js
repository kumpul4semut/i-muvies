import React from 'react';
import { getMoviesList } from './Helpers';
import { MoviesListWrap, MoviesListTitle } from '../modules';

import MoviesList from './MoviesList';

const moviesType = ({ type, title, movies, relativeUrl }) => {
  const { isLoading, response } = movies;

  let rendered = <div className="loadinghdo" />;

  if (!isLoading) {
    if (response) {
      rendered = (
        <MoviesList
          movies={getMoviesList(response)}
          relativeUrl={relativeUrl}
        />
      );
    }
  }

  return (
    <MoviesListWrap type={type}>
      <MoviesListTitle title={title} rightTitle={false} />
      {rendered}
    </MoviesListWrap>
  );
};
export default moviesType;
