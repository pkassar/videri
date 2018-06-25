import React, { Component } from 'react';
import './NavBar.css'
class NavBar extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="topHalf">
            <img alt="" src="/assets/Icon.png" />
            <h1 className="title">Videri</h1>
          </div>
          <div className="bottomHalf">
            <ul>
              <li> <button href="#">Canvases</button></li>
              <li> <button id="content" href="#">Content</button></li>
              <li> <button href="#">Playlist</button></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}




export default NavBar;
