import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout';

import HomeContainer from './containers/HomeContainer';
import MoviesContainer from './containers/MoviesContainer';
import MoviesDetailContainer from './containers/MoviesDetailContainer';
import GenreContainer from './containers/GenreContainer';

const routes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={HomeContainer} />
      <Route path="/movie/:id" exact component={MoviesContainer} />
      <Route path="/movie/:id/:id" exact component={MoviesDetailContainer} />
      <Route path="/discover/:id" exact component={MoviesContainer} />
      <Route path="/discover/:id/:id" exact component={MoviesDetailContainer} />
      <Route path="/genre/:id/:id" exact component={GenreContainer} />
      <Route
        path="/genre/:id/:id/:id"
        exact
        component={MoviesDetailContainer}
      />
    </Switch>
  </Layout>
);

export default routes;
