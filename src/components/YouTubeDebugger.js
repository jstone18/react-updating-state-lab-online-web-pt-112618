import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleBitrateChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, () => console.log(this.state.settings.bitrate));
  };

  handleResolutionChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }, () => console.log(this.state.settings.video.resolution));
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateChange}>Change bitrate</button>
        <br />
        <button className="resolution" onClick={this.handleResolutionChange}>Change resolution</button>
      </div>
    );
  }

}

export default YouTubeDebugger;
