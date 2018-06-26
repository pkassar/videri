import React, { Component } from 'react';
import Folder from './Folder.js'
import File from './File.js'
import './assets/Content.css'

class Content extends Component {
  render() {
    let DISPLAYNAV = []
    let Contents = []
    if (this.props.state.folderView === true) {
      DISPLAYNAV.push(<b id="contents">CONTENT FOLDERS</b>)
      let folders = this.props.state.view.DATA.folders
      for (let i = 0; i < folders.length; i += 1) {
        Contents.push(
          <Folder
            key={i}
            update={this.props.update}
            createdAt={folders[i].createdAt}
            name={folders[i].name}
            assets={folders[i].assets.length}
            coverPicUrl={folders[i].coverPic} />
        )
      }
    }
    else {
      DISPLAYNAV.push(
        <div>
          <b><button id="back" onClick={this.props.backHome}> &lt; </button>{this.props.state.currentFolder}</b>
        </div>)
      let files = this.props.state.view
      console.log(this.props.state)
      for (let i = 0; i < files.length; i += 1) {
        Contents.push(
          <File
            key={i}
            title={files[i].title}
            length={files[i].title}
            created={files[i].created}
            coverPicUrl={files[i].fileCover}
          />)
      }
    }
    return (
      <div className="content-nav">
        <div className="content">
          {DISPLAYNAV}
        </div>
        <div className="sort">
          <button>name</button>
          <button>last update date</button>
          <button>created date</button>
        </div>
        <div id="grid-container">
          {Contents}
          {Contents}
        </div>
      </div>
    );
  }
}

export default Content;