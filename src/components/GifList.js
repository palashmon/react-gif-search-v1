import React from 'react';
import GifItem from './GifItem';

const GifList = props => {
  const gifItems = props.gifs.map(image => <GifItem key={image.id} gif={image} />);
  return <ul className="gif-list">{gifItems}</ul>;
};

export default GifList;
