import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openMovieTab } from '../actions';

import Movies from '../components/Movies';
import { Main, Container, MainContent } from '../modules';

import config from '../config.json';

const { tabs, type, title } = config.movies;
const { streaming, recomen } = config;

class HomeContainer extends Component {
  componentDidMount() {
    this.props.openMovieTab(tabs[0].relativeUrl, tabs[0].type, tabs[0].page);
  }

  render() {
    const { openMovieTab, tabId, movies } = this.props;
    return (
      <Main>
        <Container>
          <MainContent style={{ minHeight: '80vh' }}>
            <Movies
              type={type}
              title={title}
              tabs={tabs}
              openMovieTab={openMovieTab}
              tabId={tabId}
              movies={movies}
            />
            <Movies
              type={streaming.type}
              title={streaming.title}
              tabs={streaming.tabs}
              openMovieTab={() => {}}
              tabId={tabId}
              movies={[]}
            />
            <Movies
              type={recomen.type}
              title={recomen.title}
              tabs={recomen.tabs}
              openMovieTab={() => {}}
              tabId={tabId}
              movies={[]}
            />
          </MainContent>
        </Container>
      </Main>
    );
  }
}
const mapStateToProps = state => {
  return {
    tabId: state.tab.tabId,
    movies: state.movies
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ openMovieTab }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
