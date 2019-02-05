import config from '../config.json';

const MOVIE_DB_API_KEY = config.MOVIE_DB_API_KEY;
const MOVIE_DB_BASE_URL = config.MOVIE_DB_BASE_URL;

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams).forEach(
      paramName => (baseUrl += `&${paramName}=${queryParams[paramName]}`)
    );
  }
  return baseUrl;
};

export const movies = async ({ page, relativeUrl }) => {
  const fullUrl = createMovieDbUrl(relativeUrl, {
    page
  });
  return fetch(fullUrl);
};
export const srcDiscover = async ({ query, page }) => {
  const fullUrl = `${MOVIE_DB_BASE_URL}/discover/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&${query}&include_adult=false&include_video=false&page=${page}`;
  return fetch(fullUrl);
};
export const genres = async () => {
  const fullUrl = `${MOVIE_DB_BASE_URL}/genre/movie/list?api_key=${MOVIE_DB_API_KEY}`;
  return fetch(fullUrl);
};

export const srcMovies = async ({ page, query }) => {
  const fullUrl = createMovieDbUrl('/search/movie', {
    page,
    query
  });
  return fetch(fullUrl);
};

export const movieDetails = async ({ movieId }) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
  return fetch(fullUrl);
};
export const actorDetails = async ({ movieId }) => {
  const fullUrl = `${MOVIE_DB_BASE_URL}/movie/${movieId}/casts?api_key=${MOVIE_DB_API_KEY}`;
  return fetch(fullUrl);
};
