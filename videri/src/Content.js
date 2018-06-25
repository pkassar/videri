import React, { Component } from 'react';
import Folder from './Folder.js'
import File from './File.js'
import './Content.css'

class Content extends Component {
  render() {

    let CONTENTS = []
    if (this.props.state.folderView === true) {
      let folders = this.props.state.view.DATA.folders
      for (let i = 0; i < folders.length; i += 1) {
        CONTENTS.push(
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
      let files = this.props.state.view
      for (let i = 0; i < files.length; i += 1) {
        CONTENTS.push(
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
      <div className="content">
        <button id="back" onClick={this.props.backHome}> back<i className="fa">&#xf104;</i></button>
        <button>name</button>
        <button>last update date</button>
        <button>created date</button>
        CONTENTS
      <div id="grid-container">
          {CONTENTS}
          {CONTENTS}
        </div>
      </div>
    );
  }
}

export default Content;