import React, { Component } from 'react';
import './assets/File.css'
import ModalImage from 'react-modal-image'

class File extends Component {
  render() {
    return (
      <div className="file">
        <div className="descriptionWrapper">
        </div>
        <ModalImage
          small={this.props.coverPicUrl}
          large={this.props.coverPicUrl}
        />
        <div className="descriptionWrapper">
          <b class="title">{this.props.title}</b>
          <p class="created">Created</p>
         <p class="dateCreated"> {this.props.created}</p>
        </div>
      </div>
    );
  }
}

export default File;