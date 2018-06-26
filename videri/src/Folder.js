import React, { Component } from 'react';
import './assets/Folder.css'
import folderLogo from './assets/folder.ico'

class Folder extends Component {
  render() {
    return (
      <div className="folder" name={this.props.name}
        onDoubleClick={() => { this.props.update(this.props.name) }}>
        <div className="imageWrapper">
          <img className="folderLogo" alt="." src={folderLogo} />
          <img className="cover" alt="." src={this.props.coverPicUrl} /></div>
        <div className="descriptionWrapper">
          <b>{this.props.name}</b>
          <div className="assets">{this.props.assets} assets</div>
          <div><h6>Created</h6>{this.props.createdAt}</div>
        </div>
      </div>
    );
  }
}

export default Folder;