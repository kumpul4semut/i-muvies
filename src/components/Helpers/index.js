const TMDB_IMAGE_BASE_URL = (width = 300) =>
  `https://image.tmdb.org/t/p/w${width}`;
const spliter = str => {
  if (str) {
    let newStr = str.split('-');
    return newStr[0];
  }
  return null;
};
const updateMovie = (movieResult, width = 300) => ({
  ...movieResult,
  backdrop_path: `${TMDB_IMAGE_BASE_URL(width)}${movieResult.backdrop_path}`,
  poster_path: `${TMDB_IMAGE_BASE_URL(width)}${movieResult.poster_path}`,
  release_date: spliter(movieResult.release_date)
});
export const getMoviesList = moviesResponse => {
  if (moviesResponse) {
    if (moviesResponse.results && moviesResponse.results.length > 0) {
      return [
        ...moviesResponse.results.map(movieResult => updateMovie(movieResult))
      ];
    }
  }

  return [];
};

export { spliter };
