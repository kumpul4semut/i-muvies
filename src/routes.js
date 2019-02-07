import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout';

import HomeContainer from './containers/HomeContainer';
import MoviesContainer from './containers/MoviesContainer';
import MoviesDetailContainer from './containers/MoviesDetailContainer';
import GenreContainer from './containers/GenreContainer';
import VidePlayerContainer from './containers/VideoPlayerContainer';

const routes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={HomeContainer} />
      <Route path="/movie/:id" exact component={MoviesContainer} />
      <Route path="/movie/:any/:id" exact component={MoviesDetailContainer} />
      <Route path="/genre/:any/:id" exact component={GenreContainer} />
      <Route
        path="/genre/:any/:any/:id"
        exact
        component={MoviesDetailContainer}
      />
      <Route path="/play/:any/" exact component={VidePlayerContainer} />
    </Switch>
  </Layout>
);

export default routes;
