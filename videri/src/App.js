import React, { Component } from 'react';
import './assets/App.css';
import Content from './Content.js'
import NavBar from './NavBar.js'
import DATA from './assets/Data'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFolder: null,
      folderView: true,
      view: {
        DATA
      }
    }
    this.update = this.update.bind(this)
    this.backHome = this.backHome.bind(this)
  }
  update(name) {
    let indexNeeded = 0
    for (let i = 0; i < DATA.folders.length; i += 1) {
      if (DATA.folders[i].name === name) {
        indexNeeded = i
      }
    }
    this.setState({
      currentFolder: name,
      folderView: false,
      view: DATA.folders[indexNeeded].assets
    })
  }

  backHome() {
    this.setState({
      currentFolder: null,
      folderView: true,
      view: { DATA }
    })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Content
          update={this.update}
          state={this.state}
          backHome={this.backHome}
        />
      </div>
    );
  }
}

export default App;
