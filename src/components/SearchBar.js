import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange(term) {
    this.setState({ term });
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        <input
          onChange={event => this.onInputChange(event.target.value)}
          className="form-control"
          placeholder="Enter some text here"
        />
      </div>
    );
  }
}

export default SearchBar;
