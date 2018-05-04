import PropTypes from 'prop-types';
import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  static propTypes = {
    onTermChange: PropTypes.func.isRequired
  };
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
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default SearchBar;
