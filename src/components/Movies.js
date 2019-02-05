import React from 'react';
import { getMoviesList } from './Helpers';
import {
  MoviesListWrap,
  MoviesListTitle,
  Navtab,
  NavtabItem
} from '../modules';
import MoviesList from './MoviesList';

const movies = ({ type, title, tabId, openMovieTab, movies, tabs }) => {
  const { isLoading, response, request } = movies;
  let relativeUrl = '';
  if (request && request.relativeUrl) {
    relativeUrl = request.relativeUrl;
  }
  let rendered = <div className="loadinghdo" />;
  if (tabs && tabs.length > 0 && !isLoading) {
    rendered = (
      <MoviesListWrap type={type}>
        <MoviesListTitle title={title} href={relativeUrl} rightTitle={true}>
          <Navtab>
            {tabs.map((tab, id) => (
              <NavtabItem
                key={id}
                isActive={tabId === tab.type}
                onActiveTab={() =>
                  openMovieTab(tab.relativeUrl, tab.type, tab.page)
                }
                content={tab.type}
              />
            ))}
          </Navtab>
        </MoviesListTitle>
        <MoviesList
          movies={getMoviesList(response)}
          relativeUrl={relativeUrl}
        />
      </MoviesListWrap>
    );
  }

  return rendered;
};
export default movies;
