import React, { Component } from 'react';
import './App.css';
import Content from './Content.js'
import NavBar from './NavBar.js'
import DATA from './Data.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderView: true,
      view: {
        DATA
      }
    }
    this.update = this.update.bind(this)
    this.backHome = this.backHome.bind(this)
  }
  update(key) {
    console.log("key ", key)
    this.setState({
      folderView: false,
      view: DATA.folders[0].assets
    })
  }
  backHome() {
    this.setState({
      folderView: true,
      view: DATA
    })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Content
          update={this.update} state={this.state}
          backHome={this.backHome} state={this.state}
        />
      </div>
    );
  }
}

export default App;
