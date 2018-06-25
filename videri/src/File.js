import React, { Component } from 'react';
import './File.css'


class File extends Component {
  render() {
    return (
      <div className="file"
      // onClick={this.props.openFile}
      >
        <img alt="." src={this.props.coverPicUrl} />
        <div className="descriptionWrapper">
          <h6>{this.props.title}</h6>
          <h6>Created</h6>{this.props.created}
        </div>
      </div>
    );
  }
}

export default File;