import React from 'react';

const GifItem = image => (
  <li>
    <img src={image.gif.images.downsized.url} alt="" />
  </li>
);

export default GifItem;
