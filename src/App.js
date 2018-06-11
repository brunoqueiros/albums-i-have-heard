import React, { Component } from 'react';
import albums from './albums';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="section-title">Albums I've heard in 2018</h1>

        <div className="albums">
          {albums.map(album => {
            return (
              <a href={album.spotify_link} target="_blank" className="album">
                <span className="album-artwork" style={{ backgroundImage: `url(${album.artwork})` }} />
                <span className="album-title">{album.title}</span>
                <span className="album-artist">{album.artist}</span>
                <span className="album-date">{album.date}</span>
                <div className="rating">
                  {Array(5).fill(null).map((i, idx) => {
                    return (
                      <span key={`star-${i}`} className={`${idx + 1 <= album.rating ? 'active': ''}`}>
                        &#9734;
                      </span>
                    );
                  })}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
