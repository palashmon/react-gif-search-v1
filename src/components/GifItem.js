import React, { Component } from 'react';

// const GifItem = image => (
//   <li className="gif-wrap">
//     <img src={image.gif.images.downsized.url} alt="" />
//   </li>
// );

class GifItem extends Component {
  constructor(props) {
    super(props);
    this.imageNode = null;
  }

  componentDidMount() {
    const loaderImg = new Image();
    loaderImg.src = this.props.gif.images.downsized.url;
    loaderImg.onload = () => {
      //console.log('Image loaded at ' + new Date().toString());
      this.imageNode.src = `${this.props.gif.images.downsized.url}`;
      this.imageNode.classList.add('image-fade-in');
    };
  }

  render() {
    return (
      <li className="gif-wrap">
        <img className="image-loaded" ref={node => (this.imageNode = node)} />
      </li>
    );
  }
}

export default GifItem;
