import {
  OPEN_MOVIE_TAB,
  SEARCH_MOVIES,
  GET_MOVIES,
  GET_VIDEO_TRAILER,
  GET_GENRES,
  GET_MOVIE_DETAILS,
  GET_ACTOR_DETAILS
} from '../constant/ActionTypes';
import { createAsyncActionCreator } from './helpers';
import * as ACTION from './actions';

export const getMovies = (relativeUrl, page) =>
  createAsyncActionCreator(GET_MOVIES, ACTION.movies, { page, relativeUrl });

export const getGenres = () =>
  createAsyncActionCreator(GET_GENRES, ACTION.genres, '/genre/movie/list');

export const searchMovies = (query, page) =>
  createAsyncActionCreator(SEARCH_MOVIES, ACTION.srcMovies, { query, page });

export const getMovieDetails = movieId =>
  createAsyncActionCreator(GET_MOVIE_DETAILS, ACTION.movieDetails, { movieId });

export const getActorDetails = movieId =>
  createAsyncActionCreator(GET_ACTOR_DETAILS, ACTION.actorDetails, { movieId });

export const openMovieTab = (relativeUrl, actionType, page = 1) => {
  return dispatch => {
    dispatch({ type: OPEN_MOVIE_TAB, payload: actionType });
    dispatch(getMovies(relativeUrl, page));
  };
};

export const getDiscover = (query, page = 1) =>
  createAsyncActionCreator(GET_MOVIES, ACTION.srcDiscover, { query, page });
export const getVideoTrailer = id =>
  createAsyncActionCreator(GET_VIDEO_TRAILER, ACTION.srcVideoTrailer, id);
