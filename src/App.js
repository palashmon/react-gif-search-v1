import React, { Component } from 'react';
import './App.css';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';

class App extends Component {
  state = {
    gifs: [
      {
        id: 1,
        url: 'https://picsum.photos/300'
      },
      {
        id: 2,
        url: 'https://picsum.photos/300?image=1067'
      },
      {
        id: 3,
        url: 'https://picsum.photos/300?image?image=1051'
      }
    ]
  };

  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>React Gif Search</h1>
            </div>
            <SearchBar onTermChange={this.handleTermChange} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
