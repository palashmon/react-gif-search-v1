import PropTypes from 'prop-types';
import React from 'react';

const WAIT_INTERVAL = 1000;

class SearchBar extends React.Component {
  state = { term: '' };
  static propTypes = {
    onTermChange: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.timer = null;
  }

  onInputChange(term) {
    clearTimeout(this.timer);
    this.setState({ term });
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }

  triggerChange = () => {
    const { term } = this.state;
    this.props.onTermChange(term);
  };

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
