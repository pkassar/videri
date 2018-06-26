import React, { Component } from 'react';
import './assets/NavBar.css'
import logoNav from './assets/icon.png'
class NavBar extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="topHalf">
            <img id="logo" alt="" src={logoNav} />
            <h1 className="title">Videri</h1>
          </div>
          <div className="bottomHalf">
            <button href="#">Canvases</button>
            <button id="content" href="#">Content</button>
            <button href="#">Playlist</button>
          </div>
        </header>
      </div>
    );
  }
}


export default NavBar;
