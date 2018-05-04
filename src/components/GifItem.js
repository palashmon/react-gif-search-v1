import React from 'react';

const GifItem = image => (
  <li className="gif-wrap">
    <img src={image.gif.images.downsized.url} alt="" />
  </li>
);

export default GifItem;
