import React, { Component } from 'react';
import './assets/File.css'
import ModalImage from 'react-modal-image'

class File extends Component {
  render() {
    return (
      <div className="file">



        <div className="descriptionWrapper">
          <b>{this.props.name}</b>
          <div className="assets">{this.props.assets} assets</div>
          <div><h6>Created</h6>{this.props.createdAt}</div>
        </div>

        <ModalImage
          small={this.props.coverPicUrl}
          large={this.props.coverPicUrl}
        />
        {/* <img alt="." src={this.props.coverPicUrl} /> */}
        <div className="descriptionWrapper">
          <b>{this.props.title}</b>
          <p>Created</p>{this.props.created}
        </div>
      </div>
    );
  }
}

export default File;