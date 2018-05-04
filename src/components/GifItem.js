import React from 'react';

const GifItem = image => (
  <li>
    <img src={image.gif.url} />
  </li>
);

export default GifItem;
