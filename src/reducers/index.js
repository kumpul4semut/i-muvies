import { combineReducers } from 'redux';
import { createAsyncReducer } from './helpers';

import {
  OPEN_MOVIE_TAB,
  GET_MOVIES,
  GET_GENRES,
  GET_MOVIE_DETAILS,
  SEARCH_MOVIES,
  GET_ACTOR_DETAILS
} from '../constant/ActionTypes';

const tab = (state = { tabId: '' }, action) => {
  switch (action.type) {
    case OPEN_MOVIE_TAB:
      return { ...state, tabId: action.payload };

    default:
      return state;
  }
};

const moviesSuccessReducer = (state, action) => {
  //const existingMovies = state.response ? state.response.results : [];

  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: action.response.results
    }
  };
};

const rootReducer = combineReducers({
  tab: tab,
  movies: createAsyncReducer(GET_MOVIES, {
    [`${GET_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  genres: createAsyncReducer(GET_GENRES, {
    [`${GET_GENRES}_SUCCESS`]: moviesSuccessReducer
  }),
  actors: createAsyncReducer(GET_ACTOR_DETAILS, {
    [`${GET_ACTOR_DETAILS}_SUCCESS`]: moviesSuccessReducer
  }),
  movieSearch: createAsyncReducer(SEARCH_MOVIES, {
    [`${SEARCH_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  movieDetails: createAsyncReducer(GET_MOVIE_DETAILS)
});

export default rootReducer;
