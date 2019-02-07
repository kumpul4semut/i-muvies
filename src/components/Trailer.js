import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Trailer extends Component {
  state = {
    player: null
  };

  onReady = event => {
    this.setState({
      player: event.target
    });
  };

  render() {
    return <YouTube videoId={this.props.src} onReady={this.onReady} />;
  }
}
export default Trailer;
