import React from 'react';
import { MoviesListContent, MoviesListItem } from '../modules';

const moviesList = ({ movies, relativeUrl }) => {
  let rendered = null;
  if (movies && movies.length > 0) {
    movies.splice(0, 2);
    rendered = movies.map(movie => (
      <MoviesListItem
        key={movie.id}
        id={movie.id}
        href={{ pathname: `${relativeUrl}/${movie.id}` }}
        rating={movie.vote_average}
        title={`${movie.title} ${movie.release_date}`}
        img={movie.backdrop_path}
        subtitle={[`${movie.original_language}`]}
        durasi={movie.runtime}
        quality="HD"
      />
    ));
  }

  return <MoviesListContent>{rendered}</MoviesListContent>;
};
export default moviesList;
