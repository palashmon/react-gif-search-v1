import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
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
        <div className="row">
          <div className="col-md-12">Gif List Here</div>
        </div>
      </div>
    );
  }
}

export default App;
