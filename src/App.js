import createDOMPurify from 'dompurify';
import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
const DOMPurify = createDOMPurify(window);

class App extends Component {
  state = {
    gifs: [],
    loading: false
  };

  handleTermChange = term => {
    this.setState({ loading: true });
    term = term.replace(/\s/g, '+');
    const cleanTerm = DOMPurify.sanitize(term);
    // console.log(cleanTerm);

    const url = `http://api.giphy.com/v1/gifs/search?q=${cleanTerm}&limit=15&api_key=dc6zaTOxFJmzC`;
    request.get(url, (err, res) => {
      //console.log(res.body.data);
      this.setState({ gifs: res.body.data, loading: false });
    });
  };

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">React Gif Search</h1>
            <SearchBar onTermChange={this.handleTermChange} />
          </div>
        </div>
        <div className="main-content">
          {this.state.loading ? <p>Loading...</p> : <GifList gifs={this.state.gifs} />}
        </div>
      </div>
    );
  }
}

export default App;
