import createDOMPurify from 'dompurify';
import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';

const DOMPurify = createDOMPurify(window);

class App extends Component {
  state = {
    gifs: []
  };

  handleTermChange = term => {
    term = term.replace(/\s/g, '+');
    const cleanTerm = DOMPurify.sanitize(term);
    // console.log(cleanTerm);

    const url = `http://api.giphy.com/v1/gifs/search?q=${cleanTerm}&limit=15&api_key=dc6zaTOxFJmzC`;
    request.get(url, (err, res) => {
      // console.log(res.body.data[0]);
      this.setState({ gifs: res.body.data });
    });
  };

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
