import {
  OPEN_MOVIE_TAB,
  SEARCH_MOVIES,
  GET_MOVIES,
  GET_MOVIE_DETAILS,
  GET_ACTOR_DETAILS
} from '../constant/ActionTypes';

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

const movies = async ({ page, relativeUrl }) => {
  const fullUrl = createMovieDbUrl(relativeUrl, {
    page
  });
  return fetch(fullUrl);
};

const srcMovies = async ({ page, query }) => {
  const fullUrl = createMovieDbUrl('/search/movie', {
    page,
    query
  });
  return fetch(fullUrl);
};

const movieDetails = async ({ movieId }) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
  return fetch(fullUrl);
};
const actorDetails = async ({ movieId }) => {
  const fullUrl = `${MOVIE_DB_BASE_URL}/movie/${movieId}/casts?api_key=${MOVIE_DB_API_KEY}`;
  return fetch(fullUrl);
};
const createAction = (type, actionProps) => {
  return {
    type,
    ...actionProps
  };
};

const createAsyncActionCreator = (
  actionType,
  asyncRequestFn,
  requestParams
) => {
  return dispatch => {
    dispatch(createAction(`${actionType}_START`, { request: requestParams }));

    return asyncRequestFn(requestParams).then(response => {
      response
        .json()
        .then(json =>
          dispatch(createAction(`${actionType}_SUCCESS`, { response: json }))
        )
        .catch(error =>
          dispatch(createAction(`${actionType}_ERROR`, { error }))
        );
    });
  };
};

const getMovies = (relativeUrl, page) =>
  createAsyncActionCreator(
    //aactionTYpe
    GET_MOVIES,
    // requestFn
    movies,
    // requestParams
    { page, relativeUrl }
  );

export const searchMovies = (query, page) =>
  createAsyncActionCreator(SEARCH_MOVIES, srcMovies, { query, page });
export const getMovieDetails = movieId =>
  createAsyncActionCreator(GET_MOVIE_DETAILS, movieDetails, { movieId });
export const getActorDetails = movieId =>
  createAsyncActionCreator(GET_ACTOR_DETAILS, actorDetails, { movieId });
export const openMovieTab = (relativeUrl, actionType, page = 1) => {
  return dispatch => {
    dispatch({ type: OPEN_MOVIE_TAB, payload: actionType });
    dispatch(getMovies(relativeUrl, page));
  };
};

export { getMovies };
