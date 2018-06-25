import React, { Component } from 'react';
import './Folder.css'


class Folder extends Component {
  render() {
    return (
      <div className="folder" key={this.props.key} name={this.props.name} onClick={(key) => { this.props.update(key) }}>
        <img alt="." src={this.props.coverPicUrl} />
        <div className="descriptionWrapper">
          <div>{this.props.name}</div>
          <div>{this.props.assets} assets</div>
          <div><h6>Created</h6>{this.props.createdAt}</div>
        </div>
      </div>
    );
  }
}

export default Folder;